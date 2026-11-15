import json
import os
from sqlmodel import Session, select
from app.db.models import Component, CatalogPlate

def seed_database(session: Session):
    # 1. Poblar Componentes
    existing_component = session.exec(select(Component)).first()
    if not existing_component:
        comp_file = "data/components.json"
        if os.path.exists(comp_file):
            with open(comp_file, "r", encoding="utf-8") as f:
                raw_components = json.load(f)
            
            for c in raw_components:
                comp = Component(
                    id=c["id"],
                    nombre=c["nombre"],
                    categoria=c["categoria"],
                    tags=json.dumps(c.get("tags", [])),
                    unidad_por_defecto=c.get("unidad_por_defecto", "gramos"),
                    es_personalizado=c.get("es_personalizado", False)
                )
                session.add(comp)
            session.commit()
            print(f"✅ Se importaron {len(raw_components)} componentes a la base de datos.")

    # 2. Poblar Catálogo de 308 Platos
    existing_plate = session.exec(select(CatalogPlate)).first()
    if not existing_plate:
        catalog_file = "js/data/plates-catalog.json"
        if os.path.exists(catalog_file):
            with open(catalog_file, "r", encoding="utf-8") as f:
                data = json.load(f)
            
            platos = data.get("platos", [])
            for p in platos:
                plate = CatalogPlate(
                    id=p["id"],
                    cuadrante=p.get("cuadrante", "superior_izq"),
                    nombre=p["nombre"],
                    modo=p.get("modo", "caliente"),
                    proteina_id=p.get("proteina_id"),
                    carbo_id=p.get("carbo_id"),
                    vegetal_id=p.get("vegetal_id"),
                    vegetal_secundario_id=p.get("vegetal_secundario_id"),
                    grasa_id=p.get("grasa_id"),
                    tiempo_min=p.get("tiempo_min", 15),
                    descripcion=p.get("descripcion", ""),
                    prompt_cuadrante=p.get("prompt_cuadrante", ""),
                    tags=json.dumps(p.get("tags", [])),
                    imagen_url=p.get("imagen_url", ""),
                    lote_id=p.get("lote_id", ""),
                    lote_tema=p.get("lote_tema", "")
                )
                session.add(plate)
            session.commit()
            print(f"✅ Se importaron {len(platos)} platos del catálogo a la base de datos.")
