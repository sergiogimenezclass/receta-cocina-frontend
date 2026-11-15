import json
from typing import List
from fastapi import APIRouter, Depends
from sqlmodel import Session, select
from app.db.session import get_session
from app.db.models import Component
from app.schemas.components import ComponentRead, ComponentCreate

router = APIRouter(prefix="/components", tags=["Componentes"])

@router.get("", response_model=List[ComponentRead])
def list_components(session: Session = Depends(get_session)):
    components = session.exec(select(Component)).all()
    results = []
    for c in components:
        tags = []
        try:
            tags = json.loads(c.tags)
        except Exception:
            pass
        results.append(ComponentRead(
            id=c.id,
            nombre=c.nombre,
            categoria=c.categoria,
            tags=tags,
            unidad_por_defecto=c.unidad_por_defecto,
            es_personalizado=c.es_personalizado
        ))
    return results

@router.post("", response_model=ComponentRead)
def create_component(
    comp_in: ComponentCreate,
    session: Session = Depends(get_session)
):
    import uuid
    new_id = f"comp_custom_{uuid.uuid4().hex[:8]}"
    comp = Component(
        id=new_id,
        nombre=comp_in.nombre,
        categoria=comp_in.categoria,
        tags=json.dumps(comp_in.tags or []),
        unidad_por_defecto=comp_in.unidad_por_defecto or "gramos",
        es_personalizado=True
    )
    session.add(comp)
    session.commit()
    session.refresh(comp)

    return ComponentRead(
        id=comp.id,
        nombre=comp.nombre,
        categoria=comp.categoria,
        tags=comp_in.tags or [],
        unidad_por_defecto=comp.unidad_por_defecto,
        es_personalizado=comp.es_personalizado
    )
