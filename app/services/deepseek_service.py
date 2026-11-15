import json
import re
from typing import Dict, Any, List, Optional
import httpx
from app.core.config import settings

class DeepSeekBackendService:
    """
    Servicio de backend para interactuar con DeepSeek API (OpenAI compatible) vía HTTPX asíncrono.
    Utiliza el modelo deepseek-chat con salida JSON estructurada nativa.
    """

    BASE_URL = "https://api.deepseek.com/chat/completions"

    def _parse_json_response(self, text: str) -> Dict[str, Any]:
        if not text:
            raise ValueError("Respuesta vacía de DeepSeek")

        clean = re.sub(r"```(?:json)?", "", text, flags=re.IGNORECASE)
        clean = clean.replace("```", "").strip()

        try:
            return json.loads(clean)
        except Exception:
            match = re.search(r"\{[\s\S]*\}", clean)
            if match:
                return json.loads(match.group(0))
            raise ValueError(f"No se pudo parsear el JSON de DeepSeek: {text[:200]}")

    async def _call_deepseek_api(self, prompt_text: str, system_instruction: str = "") -> Dict[str, Any]:
        api_key = settings.DEEPSEEK_API_KEY
        if not api_key or len(api_key.strip()) < 5:
            raise ValueError("DEEPSEEK_API_KEY_MISSING")

        trimmed_key = api_key.strip()
        messages = []
        if system_instruction:
            messages.append({"role": "system", "content": system_instruction})
        messages.append({"role": "user", "content": prompt_text})

        payload = {
            "model": settings.DEEPSEEK_MODEL,
            "messages": messages,
            "response_format": {"type": "json_object"},
            "temperature": 0.2
        }

        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {trimmed_key}"
        }

        async with httpx.AsyncClient(timeout=30.0) as client:
            resp = await client.post(self.BASE_URL, json=payload, headers=headers)

            if resp.status_code == 200:
                data = resp.json()
                choices = data.get("choices", [])
                if not choices:
                    raise RuntimeError("DeepSeek no devolvió choices")
                content = choices[0].get("message", {}).get("content", "")
                return self._parse_json_response(content)
            else:
                error_detail = resp.text[:200]
                raise RuntimeError(f"DeepSeek API HTTP {resp.status_code}: {error_detail}")

    async def assemble_from_text(
        self,
        query_text: str,
        components_summary: List[Dict[str, Any]],
        current_context: Optional[Dict[str, Any]] = None
    ) -> Dict[str, Any]:
        context_snippet = ""
        if current_context:
            context_snippet = f"""
Plato actualmente armado en la pantalla:
- Proteína: {current_context.get('proteina', 'Sin selección')}
- Vegetal: {current_context.get('vegetal', 'Sin selección')}
- Carbohidrato: {current_context.get('carbohidrato', 'Sin selección')}
- Grasa: {current_context.get('grasa', 'Sin selección')}
- Modo actual: {current_context.get('modo', 'caliente')}
NOTA DE AJUSTE INCREMENTAL: Si el usuario pide modificar algo, conserva los demás bloques y aplica el cambio."""

        system_instruction = """Sos el motor inteligente de "Antirecetario", una aplicación de cocina minimalista, ultra práctica y rápida para el día a día.
Tu objetivo es ayudar a alguien que tiene hambre, poco tiempo y cero ganas de complicarse la vida.

REGLAS ESTRICTAS DE INTERPRETACIÓN:
1. RESOLUCIÓN DE ERRATAS Y JERGA:
   - Tolerá erratas de tipeo en teclados táctiles (ej: "panca", "panta", "palte" = Palta / Aguacate; "pechu", "supre" = Pechuga / Suprema de Pollo; "ceboolla" = Cebolla; "champi" = Hongos / Champiñones).
   - Interpretá frases cotidianas de verdulería o alacena (ej: "bandejitas de la verdulera", "verduras varias" = Wok de Vegetales Mixtos; "fideos" = Fideos / Pasta).
2. DESCARTE DE NEGACIONES Y EXCLUSIONES:
   - Si el usuario dice que tiene algo pero aclara que NO lo va a usar (ej: "tengo leche pero no la voy a usar", "sin cebolla"), descartalo por completo.
3. RESPETO DE INGREDIENTES REALES Y MULTI-SELECCIÓN (ARRAYS):
   - Asigná un array con los IDs correspondientes de la biblioteca para cada una de las 4 categorías: "proteina_ids", "vegetal_ids", "carbo_ids", "grasa_ids".
   - SI EL USUARIO MENCIONA MÚLTIPLES INGREDIENTES DE UNA MISMA CATEGORÍA: INCLUÍ TODOS LOS IDS COINCIDENTES EN EL ARRAY.
   - SI UN INGREDIENTE MENCIONADO NO TIENE NOMBRE IDÉNTICO: vincúlalo al más compatible e intégralo en los 3 pasos.
   - SI EL USUARIO REALMENTE NO TIENE NI MENCIONA INGREDIENTES PARA UNA CATEGORÍA: Dejá ese array vacío [] (ej: "grasa_ids": []). NO inventes ingredientes fantasma.
4. SUGERENCIA NUTRICIONAL OPCIONAL:
   - ÚNICAMENTE si el usuario NO MENCIONÓ NINGÚN INGREDIENTE para una categoría, incluí un consejo breve en "sugerencia_opcional". Si aportó ingredientes para esa categoría, devolvé null.
5. FORMATO DE PASOS:
   - Exactamente 3 pasos muy cortos y al grano con voseo argentino (cortá, mandá, salteá, serví).
6. MODO Y TÍTULO:
   - "modo": "caliente" o "frio".
   - "titulo": Nombre simple y directo.
7. LÉXICO Y TONO COTIDIANO ARGENTINO:
   - Cero tecnicismos: PROHIBIDO "filetear" verduras/palta (usá "cortá en rodajas / láminas" o "pisala"); PROHIBIDO "en cuñas" (decí "en gajos"); PROHIBIDO "en plumas" (decí "en tiritas").

FORMATO DE RESPUESTA EXCLUSIVO EN JSON:
{
  "proteina_ids": ["string"],
  "vegetal_ids": ["string"],
  "carbo_ids": ["string"],
  "grasa_ids": ["string"],
  "modo": "caliente" | "frio",
  "titulo": "string",
  "pasos": ["paso 1", "paso 2", "paso 3"],
  "sugerencia_opcional": "string" | null
}"""

        prompt_text = f"""Ingredientes disponibles en la biblioteca:
{json.dumps(components_summary, ensure_ascii=False)}
{context_snippet}

Lo que el usuario tiene en casa / pide:
"{query_text}"
"""
        return await self._call_deepseek_api(prompt_text, system_instruction)

    async def refine_steps(
        self,
        components_summary: List[Dict[str, Any]],
        mode: str = "caliente"
    ) -> Dict[str, Any]:
        names = ", ".join([f"{c.get('categoria', '')}: {c.get('nombre', '')}" for c in components_summary])

        system_instruction = f"""Sos el asistente minimalista de cocina rápida de "Antirecetario".
Tu misión es generar 3 pasos de cocina ultra simples, directos y telegráficos (máximo 1 o 2 oraciones por paso) para resolver la comida en minutos.
Usá lenguaje cotidiano argentino con voseo (cortá, salteá, dorá, serví). Cero tecnicismos gastronómicos: no uses "filetear" para vegetales/palta (usá rodajas o láminas), ni "en cuñas" (usá gajos) ni "en pluma" (usá tiritas).
Modo de preparación: {mode.upper()}.

FORMATO DE RESPUESTA EXCLUSIVO EN JSON:
{{
  "titulo": "Nombre simple y descriptivo del plato",
  "pasos": [
    "Paso 1: Cocinar o preparar la proteína (indicar minutos mínimos de sartén/plancha/olla)",
    "Paso 2: Sumar o saltear vegetales y carbohidratos",
    "Paso 3: Condimentar con la grasa elegida y servir"
  ]
}}"""
        prompt_text = f"Ingredientes elegidos: {names}. Generá las instrucciones ejecutivas en 3 pasos."
        return await self._call_deepseek_api(prompt_text, system_instruction)

deepseek_backend_service = DeepSeekBackendService()
