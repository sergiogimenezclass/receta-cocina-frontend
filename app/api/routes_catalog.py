import json
from typing import List, Optional, Dict
from fastapi import APIRouter, Depends, HTTPException, Query
from pydantic import BaseModel
from sqlmodel import Session, select
from app.db.session import get_session
from app.db.models import CatalogPlate
from app.services.matcher_service import matcher_service
from app.schemas.plates import CatalogPlateRead
from app.schemas.gemini import MatchResult, MatchedPlate

router = APIRouter(prefix="/catalog", tags=["Catálogo Maestro"])

@router.get("", response_model=List[CatalogPlateRead])
def list_catalog_plates(
    lote: Optional[str] = Query(None, description="Filtrar por lote (ej: lote_01)"),
    modo: Optional[str] = Query(None, description="Filtrar por modo (caliente | frio)"),
    session: Session = Depends(get_session)
):
    query = select(CatalogPlate)
    if lote:
        query = query.where(CatalogPlate.lote_id == lote)
    if modo:
        query = query.where(CatalogPlate.modo == modo)

    plates = session.exec(query).all()
    results = []
    for p in plates:
        tags = []
        try:
            tags = json.loads(p.tags)
        except Exception:
            pass
        results.append(CatalogPlateRead(
            id=p.id,
            cuadrante=p.cuadrante,
            nombre=p.nombre,
            modo=p.modo,
            proteina_id=p.proteina_id,
            carbo_id=p.carbo_id,
            vegetal_id=p.vegetal_id,
            vegetal_secundario_id=p.vegetal_secundario_id,
            grasa_id=p.grasa_id,
            tiempo_min=p.tiempo_min,
            descripcion=p.descripcion,
            prompt_cuadrante=p.prompt_cuadrante,
            tags=tags,
            imagen_url=p.imagen_url,
            lote_id=p.lote_id,
            lote_tema=p.lote_tema
        ))
    return results

@router.get("/{plate_id}", response_model=CatalogPlateRead)
def get_catalog_plate(plate_id: str, session: Session = Depends(get_session)):
    p = session.get(CatalogPlate, plate_id)
    if not p:
        raise HTTPException(status_code=404, detail="Plato no encontrado")
    tags = []
    try:
        tags = json.loads(p.tags)
    except Exception:
        pass
    return CatalogPlateRead(
        id=p.id,
        cuadrante=p.cuadrante,
        nombre=p.nombre,
        modo=p.modo,
        proteina_id=p.proteina_id,
        carbo_id=p.carbo_id,
        vegetal_id=p.vegetal_id,
        vegetal_secundario_id=p.vegetal_secundario_id,
        grasa_id=p.grasa_id,
        tiempo_min=p.tiempo_min,
        descripcion=p.descripcion,
        prompt_cuadrante=p.prompt_cuadrante,
        tags=tags,
        imagen_url=p.imagen_url,
        lote_id=p.lote_id,
        lote_tema=p.lote_tema
    )

class MatchRequest(BaseModel):
    selection: Dict[str, List[str]]
    modo: str = "caliente"
    threshold: int = 80

@router.post("/match", response_model=MatchResult)
def match_catalog_plate(
    req: MatchRequest,
    session: Session = Depends(get_session)
):
    res = matcher_service.find_best_match(session, req.selection, req.modo, req.threshold)
    matched_plate = None
    if res.get("plate"):
        p = res["plate"]
        matched_plate = MatchedPlate(
            id=p.id,
            nombre=p.nombre,
            imagen_url=p.imagen_url,
            tiempo_min=p.tiempo_min,
            descripcion=p.descripcion
        )
    return MatchResult(
        matched=res["matched"],
        score=res["score"],
        hasImage=res["hasImage"],
        imageUrl=res.get("imageUrl"),
        plate=matched_plate
    )
