from typing import List, Optional
from pydantic import BaseModel

class ComponentRead(BaseModel):
    id: str
    nombre: str
    categoria: str
    tags: List[str] = []
    unidad_por_defecto: str = "gramos"
    es_personalizado: bool = False

class ComponentCreate(BaseModel):
    nombre: str
    categoria: str
    unidad_por_defecto: Optional[str] = "gramos"
    tags: Optional[List[str]] = []
