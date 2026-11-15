from typing import Optional
from sqlmodel import SQLModel, Field

class Component(SQLModel, table=True):
    __tablename__ = "components"

    id: str = Field(primary_key=True)
    nombre: str = Field(index=True)
    categoria: str = Field(index=True)  # Proteina, Carbohidrato, Vegetal, Grasa
    tags: str = Field(default="[]")     # JSON string de tags
    unidad_por_defecto: str = Field(default="gramos")
    es_personalizado: bool = Field(default=False)

class CatalogPlate(SQLModel, table=True):
    __tablename__ = "catalog_plates"

    id: str = Field(primary_key=True)
    cuadrante: str = Field(default="superior_izq")
    nombre: str = Field(index=True)
    modo: str = Field(index=True, default="caliente")  # caliente | frio
    proteina_id: Optional[str] = Field(default=None, index=True)
    carbo_id: Optional[str] = Field(default=None, index=True)
    vegetal_id: Optional[str] = Field(default=None, index=True)
    vegetal_secundario_id: Optional[str] = Field(default=None, index=True)
    grasa_id: Optional[str] = Field(default=None, index=True)
    tiempo_min: int = Field(default=15)
    descripcion: str = Field(default="")
    prompt_cuadrante: str = Field(default="")
    tags: str = Field(default="[]")  # JSON string
    imagen_url: str = Field(default="")
    lote_id: str = Field(default="", index=True)
    lote_tema: str = Field(default="")

class UserPlate(SQLModel, table=True):
    __tablename__ = "user_plates"

    id: str = Field(primary_key=True)
    nombre: str = Field(index=True)
    fecha_creacion: str = Field(index=True)
    modo: str = Field(default="caliente")
    proteina_ids: str = Field(default="[]")  # JSON string
    carbo_ids: str = Field(default="[]")     # JSON string
    vegetal_ids: str = Field(default="[]")   # JSON string
    grasa_ids: str = Field(default="[]")     # JSON string
    catalog_plate_id: Optional[str] = Field(default=None)
    imagen_url: Optional[str] = Field(default=None)
    pasos: str = Field(default="[]")         # JSON string
    es_favorito: bool = Field(default=False, index=True)

class WeeklyPlanner(SQLModel, table=True):
    __tablename__ = "weekly_planner"

    id: Optional[int] = Field(default=None, primary_key=True)
    dia_semana: str = Field(index=True)  # lunes..domingo
    turno: str = Field(index=True)       # almuerzo | cena
    user_plate_id: Optional[str] = Field(default=None)
    catalog_plate_id: Optional[str] = Field(default=None)
