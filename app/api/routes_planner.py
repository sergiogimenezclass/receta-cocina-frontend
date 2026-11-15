from typing import List
from fastapi import APIRouter, Depends
from sqlmodel import Session
from app.db.session import get_session
from app.services.plate_service import plate_service
from app.schemas.plates import WeeklyPlannerPayload, PlannerSlot

router = APIRouter(prefix="/planner", tags=["Planificador Semanal"])

@router.get("", response_model=WeeklyPlannerPayload)
def get_planner(session: Session = Depends(get_session)):
    items = plate_service.get_planner(session)
    slots = []
    for item in items:
        slots.append(PlannerSlot(
            dia_semana=item.dia_semana,
            turno=item.turno,
            plate_id=item.catalog_plate_id or item.user_plate_id,
            is_catalog=bool(item.catalog_plate_id)
        ))
    return WeeklyPlannerPayload(slots=slots)

@router.put("")
def update_planner(
    payload: WeeklyPlannerPayload,
    session: Session = Depends(get_session)
):
    plate_service.update_planner_slots(session, payload.slots)
    return {"ok": True, "message": "Planificador actualizado"}
