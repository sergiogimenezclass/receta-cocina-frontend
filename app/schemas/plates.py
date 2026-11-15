from typing import List, Optional
from pydantic import BaseModel

class CatalogPlateRead(BaseModel):
    id: str
    cuadrante: str
    nombre: str
    modo: str
    proteina_id: Optional[str] = None
    carbo_id: Optional[str] = None
    vegetal_id: Optional[str] = None
    vegetal_secundario_id: Optional[str] = None
    grasa_id: Optional[str] = None
    tiempo_min: int
    descripcion: str
    prompt_cuadrante: str
    tags: List[str] = []
    imagen_url: str
    lote_id: str
    lote_tema: str

class UserPlateCreate(BaseModel):
    nombre: str
    modo: str = "caliente"
    proteina_ids: List[str] = []
    carbo_ids: List[str] = []
    vegetal_ids: List[str] = []
    grasa_ids: List[str] = []
    catalog_plate_id: Optional[str] = None
    imagen_url: Optional[str] = None
    pasos: List[str] = []
    es_favorito: bool = False

class UserPlateRead(BaseModel):
    id: str
    nombre: str
    fecha_creacion: str
    modo: str
    proteina_ids: List[str] = []
    carbo_ids: List[str] = []
    vegetal_ids: List[str] = []
    grasa_ids: List[str] = []
    catalog_plate_id: Optional[str] = None
    imagen_url: Optional[str] = None
    pasos: List[str] = []
    es_favorito: bool = False

class PlannerSlot(BaseModel):
    dia_semana: str
    turno: str
    plate_id: Optional[str] = None
    plate_nombre: Optional[str] = None
    plate_imagen_url: Optional[str] = None
    is_catalog: bool = False

class WeeklyPlannerPayload(BaseModel):
    slots: List[PlannerSlot]
