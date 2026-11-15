from fastapi import APIRouter
from .routes_gemini import router as gemini_router
from .routes_components import router as components_router
from .routes_catalog import router as catalog_router
from .routes_user_plates import router as user_plates_router
from .routes_planner import router as planner_router

api_router = APIRouter()

api_router.include_router(gemini_router)
api_router.include_router(components_router)
api_router.include_router(catalog_router)
api_router.include_router(user_plates_router)
api_router.include_router(planner_router)

__all__ = ["api_router"]
