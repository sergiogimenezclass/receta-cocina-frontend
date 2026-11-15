from typing import Any, Dict, List
from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from app.db.session import get_session
from app.db.models import Component
from app.services.ai_service import ai_service
from app.services.matcher_service import matcher_service
from app.schemas.gemini import (
    AssembleRequest,
    AssembleResponse,
    Quadrants,
    RecipeSteps,
    MatchResult,
    MatchedPlate,
    RefineRequest,
    RefineResponse
)

router = APIRouter(prefix="/gemini", tags=["Gemini AI / DeepSeek"])

@router.post("/assemble", response_model=AssembleResponse)
async def assemble_plate(
    req: AssembleRequest,
    session: Session = Depends(get_session)
):
    """
    Endpoint unificado: recibe la frase en lenguaje natural, consulta al proveedor de IA
    (DeepSeek / Gemini), extrae los 4 cuadrantes y resuelve la coincidencia fotográfica
    con el catálogo en una única llamada de red.
    """
    # 1. Obtener lista de componentes para el prompt
    components = session.exec(select(Component)).all()
    comp_summary = [
        {"id": c.id, "nombre": c.nombre, "categoria": c.categoria}
        for c in components
    ]

    try:
        # 2. Llamada a AI (DeepSeek / Gemini con fallback)
        ai_res = await ai_service.assemble_from_text(
            query_text=req.text,
            components_summary=comp_summary
        )

    except Exception as err:
        return AssembleResponse(
            success=False,
            error=str(err)
        )

    # 3. Normalizar cuadrantes seleccionados
    def _extract_ids(category_key_plural, category_key_single):
        raw = ai_res.get(category_key_plural)
        if isinstance(raw, list):
            candidates = raw
        else:
            single = ai_res.get(category_key_single)
            candidates = [single] if single else []
        valid_ids = {c.id for c in components}
        return [cid for cid in candidates if cid in valid_ids]

    prots = _extract_ids("proteina_ids", "proteina_id")
    carbs = _extract_ids("carbo_ids", "carbo_id")
    vegs = _extract_ids("vegetal_ids", "vegetal_id")
    fats = _extract_ids("grasa_ids", "grasa_id")

    quadrants = Quadrants(
        Proteina=prots,
        Carbohidrato=carbs,
        Vegetal=vegs,
        Grasa=fats
    )

    modo = ai_res.get("modo", "caliente").lower()
    if modo not in ["caliente", "frio"]:
        modo = "caliente"

    recipe = RecipeSteps(
        nombre_sugerido=ai_res.get("titulo", "Plato Sugerido"),
        pasos=ai_res.get("pasos", [])
    )

    # 4. Matching directo contra el catálogo
    selection_dict = {
        "Proteina": prots,
        "Carbohidrato": carbs,
        "Vegetal": vegs,
        "Grasa": fats
    }

    match_res = matcher_service.find_best_match(session, selection_dict, modo, threshold=80)

    match_schema = None
    if match_res and match_res.get("plate"):
        plate_obj = match_res["plate"]
        matched_plate = MatchedPlate(
            id=plate_obj.id,
            nombre=plate_obj.nombre,
            imagen_url=plate_obj.imagen_url,
            tiempo_min=plate_obj.tiempo_min,
            descripcion=plate_obj.descripcion
        )
        match_schema = MatchResult(
            matched=match_res["matched"],
            score=match_res["score"],
            hasImage=match_res["hasImage"],
            imageUrl=match_res.get("imageUrl"),
            plate=matched_plate
        )
    else:
        match_schema = MatchResult(
            matched=False,
            score=0,
            hasImage=False,
            imageUrl=None,
            plate=None
        )

    return AssembleResponse(
        success=True,
        quadrants=quadrants,
        modo=modo,
        recipe=recipe,
        match=match_schema
    )

@router.post("/refine", response_model=RefineResponse)
async def refine_steps(
    req: RefineRequest,
    session: Session = Depends(get_session)
):
    """
    Endpoint para reoptimizar los 3 pasos de cocinado de un conjunto de ingredientes
    utilizando IA (DeepSeek / Gemini con fallback).
    """
    try:
        res = await ai_service.refine_steps(req.components, req.modo)
        return RefineResponse(
            success=True,
            titulo=res.get("titulo", "Plato Sugerido"),
            pasos=res.get("pasos", [])
        )
    except Exception as err:
        return RefineResponse(
            success=False,
            error=str(err)
        )

