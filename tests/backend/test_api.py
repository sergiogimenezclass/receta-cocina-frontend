import pytest
from fastapi.testclient import TestClient
from sqlmodel import Session, select
from app.main import app
from app.db.session import engine, init_db
from app.db.models import CatalogPlate, Component

@pytest.fixture(scope="session", autouse=True)
def setup_db():
    init_db()

@pytest.fixture
def client():
    return TestClient(app)

def test_list_components(client):
    response = client.get("/api/components")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 55
    assert any(c["id"] == "comp_prot_3" for c in data)

def test_list_catalog_plates(client):
    response = client.get("/api/catalog")
    assert response.status_code == 200
    data = response.json()
    assert len(data) == 308
    assert data[0]["id"] == "plate_cat_01"

def test_catalog_matching_endpoint(client):
    # Probar bife con puré y rúcula (plate_cat_01)
    payload = {
        "selection": {
            "Proteina": ["comp_prot_3"],
            "Carbohidrato": ["comp_carb_3"],
            "Vegetal": ["comp_veg_1"],
            "Grasa": ["comp_fat_1"]
        },
        "modo": "caliente",
        "threshold": 80
    }
    response = client.post("/api/catalog/match", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert data["matched"] is True
    assert data["score"] == 100
    assert data["plate"]["id"] == "plate_cat_01"
    assert data["hasImage"] is True

def test_user_plates_crud(client):
    plate_payload = {
        "nombre": "Mi Bife Favorito de Prueba",
        "modo": "caliente",
        "proteina_ids": ["comp_prot_3"],
        "carbo_ids": ["comp_carb_3"],
        "vegetal_ids": ["comp_veg_1"],
        "grasa_ids": ["comp_fat_1"],
        "catalog_plate_id": "plate_cat_01",
        "imagen_url": "img/platos/plate_cat_01.jpg",
        "pasos": ["Paso 1", "Paso 2"],
        "es_favorito": True
    }
    # Create
    create_res = client.post("/api/user-plates", json=plate_payload)
    assert create_res.status_code == 200
    created = create_res.json()
    plate_id = created["id"]
    assert created["nombre"] == "Mi Bife Favorito de Prueba"

    # List
    list_res = client.get("/api/user-plates")
    assert list_res.status_code == 200
    plates = list_res.json()
    assert any(p["id"] == plate_id for p in plates)

    # Delete
    del_res = client.delete(f"/api/user-plates/{plate_id}")
    assert del_res.status_code == 200
    assert del_res.json()["ok"] is True
