import json
import uuid
from datetime import datetime, timezone
from typing import List, Optional
from sqlmodel import Session, select
from app.db.models import UserPlate, WeeklyPlanner
from app.schemas.plates import UserPlateCreate, PlannerSlot

class PlateService:
    def get_user_plates(self, session: Session) -> List[UserPlate]:
        return list(session.exec(select(UserPlate).order_by(UserPlate.fecha_creacion.desc())).all())

    def create_user_plate(self, session: Session, plate_in: UserPlateCreate) -> UserPlate:
        plate = UserPlate(
            id=str(uuid.uuid4()),
            nombre=plate_in.nombre,
            fecha_creacion=datetime.now(timezone.utc).isoformat(),
            modo=plate_in.modo,
            proteina_ids=json.dumps(plate_in.proteina_ids),
            carbo_ids=json.dumps(plate_in.carbo_ids),
            vegetal_ids=json.dumps(plate_in.vegetal_ids),
            grasa_ids=json.dumps(plate_in.grasa_ids),
            catalog_plate_id=plate_in.catalog_plate_id,
            imagen_url=plate_in.imagen_url,
            pasos=json.dumps(plate_in.pasos),
            es_favorito=plate_in.es_favorito
        )
        session.add(plate)
        session.commit()
        session.refresh(plate)
        return plate

    def delete_user_plate(self, session: Session, plate_id: str) -> bool:
        plate = session.get(UserPlate, plate_id)
        if not plate:
            return False
        session.delete(plate)
        session.commit()
        return True

    def get_planner(self, session: Session) -> List[WeeklyPlanner]:
        return list(session.exec(select(WeeklyPlanner)).all())

    def update_planner_slots(self, session: Session, slots: List[PlannerSlot]):
        # Limpiar planner existente y reemplazar
        existing = session.exec(select(WeeklyPlanner)).all()
        for item in existing:
            session.delete(item)
        
        for s in slots:
            wp = WeeklyPlanner(
                dia_semana=s.dia_semana,
                turno=s.turno,
                user_plate_id=s.plate_id if not s.is_catalog else None,
                catalog_plate_id=s.plate_id if s.is_catalog else None
            )
            session.add(wp)
        session.commit()

plate_service = PlateService()
