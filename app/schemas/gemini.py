from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field

class AssembleRequest(BaseModel):
    text: str = Field(..., min_length=2, description="Texto o transcripción de voz de ingredientes cotidianos")
    custom_components: Optional[List[Dict[str, Any]]] = None

class Quadrants(BaseModel):
    Proteina: List[str] = []
    Carbohidrato: List[str] = []
    Vegetal: List[str] = []
    Grasa: List[str] = []

class RecipeSteps(BaseModel):
    nombre_sugerido: str = ""
    pasos: List[str] = []

class MatchedPlate(BaseModel):
    id: str
    nombre: str
    imagen_url: str
    tiempo_min: int = 15
    descripcion: Optional[str] = ""

class MatchResult(BaseModel):
    matched: bool = False
    score: int = 0
    hasImage: bool = False
    imageUrl: Optional[str] = None
    plate: Optional[MatchedPlate] = None

class AssembleResponse(BaseModel):
    success: bool = True
    quadrants: Quadrants = Field(default_factory=Quadrants)
    modo: str = "caliente"
    recipe: RecipeSteps = Field(default_factory=RecipeSteps)
    match: Optional[MatchResult] = None
    error: Optional[str] = None

class RefineRequest(BaseModel):
    components: List[Dict[str, Any]]
    modo: str = "caliente"

class RefineResponse(BaseModel):
    success: bool = True
    titulo: Optional[str] = "Plato Sugerido"
    pasos: List[str] = []
    error: Optional[str] = None

