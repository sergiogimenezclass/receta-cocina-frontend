import json
from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session
from app.db.session import get_session
from app.services.plate_service import plate_service
from app.schemas.plates import UserPlateCreate, UserPlateRead

router = APIRouter(prefix="/user-plates", tags=["Platos del Usuario"])

@router.get("", response_model=List[UserPlateRead])
def list_user_plates(session: Session = Depends(get_session)):
    plates = plate_service.get_user_plates(session)
    results = []
    for p in plates:
        results.append(UserPlateRead(
            id=p.id,
            nombre=p.nombre,
            fecha_creacion=p.fecha_creacion,
            modo=p.modo,
            proteina_ids=json.loads(p.proteina_ids or "[]"),
            carbo_ids=json.loads(p.carbo_ids or "[]"),
            vegetal_ids=json.loads(p.vegetal_ids or "[]"),
            grasa_ids=json.loads(p.grasa_ids or "[]"),
            catalog_plate_id=p.catalog_plate_id,
            imagen_url=p.imagen_url,
            pasos=json.loads(p.pasos or "[]"),
            es_favorito=p.es_favorito
        ))
    return results

@router.post("", response_model=UserPlateRead)
def create_user_plate(
    plate_in: UserPlateCreate,
    session: Session = Depends(get_session)
):
    p = plate_service.create_user_plate(session, plate_in)
    return UserPlateRead(
        id=p.id,
        nombre=p.nombre,
        fecha_creacion=p.fecha_creacion,
        modo=p.modo,
        proteina_ids=plate_in.proteina_ids,
        carbo_ids=plate_in.carbo_ids,
        vegetal_ids=plate_in.vegetal_ids,
        grasa_ids=plate_in.grasa_ids,
        catalog_plate_id=p.catalog_plate_id,
        imagen_url=p.imagen_url,
        pasos=plate_in.pasos,
        es_favorito=p.es_favorito
    )

@router.delete("/{plate_id}")
def delete_user_plate(plate_id: str, session: Session = Depends(get_session)):
    success = plate_service.delete_user_plate(session, plate_id)
    if not success:
        raise HTTPException(status_code=404, detail="Plato no encontrado")
    return {"ok": True, "message": "Plato eliminado"}
