import os
from typing import Dict, List, Any, Optional
from sqlmodel import Session, select
from app.db.models import CatalogPlate

class CatalogMatcherService:
    """
    Servicio de matching contra los 308 platos del catálogo.
    Regla de coincidencia: 5 criterios (Proteína, Vegetal, Carbohidrato, Grasa, Modo) = 20% c/u.
    Coincidencia aprobada: >= 80% (4 de 5 criterios coincidentes).
    """

    def __init__(self):
        self._cached_plates: Optional[List[CatalogPlate]] = None

    def _get_plates(self, session: Session) -> List[CatalogPlate]:
        if self._cached_plates is None:
            self._cached_plates = list(session.exec(select(CatalogPlate)).all())
        return self._cached_plates

    def reload_cache(self, session: Session):
        self._cached_plates = list(session.exec(select(CatalogPlate)).all())

    def find_best_match(
        self,
        session: Session,
        selection: Dict[str, List[str]],
        mode: str = "caliente",
        threshold: int = 80
    ) -> Dict[str, Any]:
        plates = self._get_plates(session)
        if not plates:
            return {
                "matched": False,
                "score": 0,
                "plate": None,
                "hasImage": False,
                "imageUrl": None,
                "matchedCriteria": []
            }

        sel_prots = selection.get("Proteina", [])
        sel_vegs = selection.get("Vegetal", [])
        sel_carbs = selection.get("Carbohidrato", [])
        sel_fats = selection.get("Grasa", [])

        best_match = None
        highest_score = -1

        for plate in plates:
            score = 0
            matched_criteria = []

            # 1. Proteína (20%)
            if plate.proteina_id and plate.proteina_id in sel_prots:
                score += 20
                matched_criteria.append("proteina")

            # 2. Vegetal (20%)
            has_primary_veg = bool(plate.vegetal_id and plate.vegetal_id in sel_vegs)
            has_secondary_veg = bool(plate.vegetal_secundario_id and plate.vegetal_secundario_id in sel_vegs)

            if has_primary_veg or has_secondary_veg:
                score += 20
                matched_criteria.append("vegetal")

            # 3. Carbohidrato (20%)
            if plate.carbo_id:
                if plate.carbo_id in sel_carbs:
                    score += 20
                    matched_criteria.append("carbohidrato")
            else:
                # Plato low-carb sin carbohidrato en el catálogo
                if len(sel_carbs) == 0:
                    score += 20
                    matched_criteria.append("carbohidrato_lowcarb")
                elif has_primary_veg and has_secondary_veg:
                    # Ambos vegetales seleccionados
                    score += 20
                    matched_criteria.append("carbohidrato_doble_veg")

            # 4. Grasa (20%)
            if plate.grasa_id and plate.grasa_id in sel_fats:
                score += 20
                matched_criteria.append("grasa")

            # 5. Modo (20%)
            if plate.modo and plate.modo == mode:
                score += 20
                matched_criteria.append("modo")

            has_image = bool(plate.imagen_url and len(plate.imagen_url.strip()) > 0)
            file_exists = False
            if has_image:
                file_exists = os.path.exists(plate.imagen_url)

            # Priorizar mayor puntaje; ante empate, priorizar el que tenga archivo real
            if (
                score > highest_score or
                (score == highest_score and file_exists and (not best_match or not best_match.get("hasImage")))
            ):
                highest_score = score
                best_match = {
                    "score": score,
                    "plate": plate,
                    "hasImage": file_exists,
                    "imageUrl": plate.imagen_url if file_exists else None,
                    "matchedCriteria": matched_criteria
                }

        if best_match and best_match["score"] >= threshold and best_match["hasImage"]:
            return {
                "matched": True,
                **best_match
            }

        return {
            "matched": False,
            "score": max(0, highest_score),
            "plate": best_match["plate"] if best_match else None,
            "hasImage": best_match["hasImage"] if best_match else False,
            "imageUrl": None,
            "matchedCriteria": best_match["matchedCriteria"] if best_match else []
        }

matcher_service = CatalogMatcherService()
