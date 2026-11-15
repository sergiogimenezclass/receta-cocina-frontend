from typing import Dict, Any, List, Optional
from app.core.config import settings
from app.services.deepseek_service import deepseek_backend_service
from app.services.gemini_service import gemini_backend_service

class UnifiedAIService:
    """
    Orquestador de proveedores de IA.
    Permite alternar transparentemente entre DeepSeek y Gemini,
    con fallback automático si el proveedor principal falla.
    """

    async def assemble_from_text(
        self,
        query_text: str,
        components_summary: List[Dict[str, Any]],
        current_context: Optional[Dict[str, Any]] = None
    ) -> Dict[str, Any]:
        use_deepseek = (
            settings.AI_PROVIDER.lower() == "deepseek" or
            (bool(settings.DEEPSEEK_API_KEY) and not settings.GEMINI_API_KEY)
        )

        if use_deepseek and settings.DEEPSEEK_API_KEY:
            try:
                return await deepseek_backend_service.assemble_from_text(
                    query_text, components_summary, current_context
                )
            except Exception as ds_err:
                # Si DeepSeek falla por timeout o cuota, intentar Gemini si está configurado
                if settings.GEMINI_API_KEY and len(settings.GEMINI_API_KEY) > 5:
                    print(f"⚠️ DeepSeek falló ({ds_err}). Ejecutando fallback a Gemini...")
                    return await gemini_backend_service.assemble_from_text(
                        query_text, components_summary, current_context
                    )
                raise ds_err
        else:
            return await gemini_backend_service.assemble_from_text(
                query_text, components_summary, current_context
            )

ai_service = UnifiedAIService()
