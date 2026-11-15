import pytest
from unittest.mock import patch, AsyncMock
from app.services.gemini_service import gemini_backend_service
from app.services.matcher_service import matcher_service
from app.db.session import engine, init_db, get_session
from sqlmodel import Session

@pytest.fixture(scope="session", autouse=True)
def setup_db():
    init_db()

@pytest.mark.asyncio
async def test_gemini_parse_json():
    # Probar que limpie markdown blocks ```json
    markdown_text = """```json
    {
      "proteina_ids": ["comp_prot_3"],
      "vegetal_ids": ["comp_veg_1"],
      "carbo_ids": ["comp_carb_3"],
      "grasa_ids": ["comp_fat_1"],
      "modo": "caliente",
      "titulo": "Bife con Puré y Rúcula",
      "pasos": ["Paso 1", "Paso 2", "Paso 3"],
      "sugerencia_opcional": null
    }
    ```"""
    parsed = gemini_backend_service._parse_json_response(markdown_text)
    assert parsed["titulo"] == "Bife con Puré y Rúcula"
    assert parsed["proteina_ids"] == ["comp_prot_3"]

@pytest.mark.asyncio
async def test_matcher_service_100_percent():
    with Session(engine) as session:
        selection = {
            "Proteina": ["comp_prot_3"],
            "Carbohidrato": ["comp_carb_3"],
            "Vegetal": ["comp_veg_1"],
            "Grasa": ["comp_fat_1"]
        }
        res = matcher_service.find_best_match(session, selection, "caliente", 80)
        assert res["matched"] is True
        assert res["score"] == 100
        assert res["plate"].id == "plate_cat_01"
        assert res["hasImage"] is True
        assert res["imageUrl"] == "img/platos/plate_cat_01.jpg"

@pytest.mark.asyncio
async def test_matcher_service_low_score_incomplete():
    # Solo proteína y carbo (60%) -> no debe matchear (< 80%)
    with Session(engine) as session:
        selection = {
            "Proteina": ["comp_prot_14"], # milanesa de pollo
            "Carbohidrato": ["comp_carb_3"], # puré
            "Vegetal": [],
            "Grasa": []
        }
        res = matcher_service.find_best_match(session, selection, "caliente", 80)
        assert res["matched"] is False
        assert res["score"] < 80
