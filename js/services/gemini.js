import { storage } from './storage.js';

/**
 * Servicio minimalista para interactuar con Google Gemini API.
 * Enfocado en cocina rápida, práctica y sin rodeos.
 */
class GeminiService {
  constructor() {
    this._activeModel = localStorage.getItem('mpb_verified_gemini_model') || null;
  }

  /**
   * Consulta dinámicamente los modelos autorizados para la clave actual y prioriza los más rápidos.
   */
  async _getAvailableModels(apiKey) {
    if (this._activeModel && !this._activeModel.includes('2.5')) return [this._activeModel];

    const DEFAULT_MODELS = ['gemini-3.5-flash', 'gemini-3.8-flash', 'gemini-3.5-flash-lite'];

    try {
      const listResp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`, {
        headers: { 'x-goog-api-key': apiKey }
      });

      if (listResp.ok) {
        const data = await listResp.json();
        // Filtrar estrictamente modelos de texto puros (excluir imagen, tts, audio, embed, omni, preview y obsoletos)
        const available = (data.models || [])
          .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent'))
          .map(m => m.name.replace('models/', ''))
          .filter(m => !m.includes('image') && !m.includes('tts') && !m.includes('audio') && !m.includes('embed') && !m.includes('omni') && !m.includes('preview') && !m.includes('2.5'));

        const preferred = [];
        for (const m of ['gemini-3.5-flash', 'gemini-3.8-flash', 'gemini-3.5-flash-lite', 'gemini-3.6-flash', 'gemini-2.0-flash']) {
          if (available.includes(m)) preferred.push(m);
        }

        if (preferred.length === 0) {
          const anyFlash = available.filter(m => m.includes('flash')).slice(0, 3);
          preferred.push(...anyFlash);
        }

        if (preferred.length > 0) {
          return preferred.slice(0, 3);
        }
      }
    } catch (e) {
      console.warn('Error al listar modelos disponibles en Gemini:', e);
    }

    return DEFAULT_MODELS;
  }

  /**
   * Ejecuta la llamada a Gemini con modelo óptimo y sin reintentos masivos.
   */
  async _callGemini(promptText, systemInstruction = '') {
    const apiKey = await storage.getApiKey();
    if (!apiKey || apiKey.trim().length < 5) {
      throw new Error('API_KEY_MISSING');
    }

    const trimmedKey = apiKey.trim();
    const candidateModels = await this._getAvailableModels(trimmedKey);

    let lastError = null;

    for (const model of candidateModels) {
      let resp;
      try {
        const fullPrompt = systemInstruction ? `${systemInstruction}\n\n${promptText}` : promptText;
        const bodyPayload = {
          contents: [{ parts: [{ text: fullPrompt }] }],
          generationConfig: {
            temperature: 0.2
          }
        };

        resp = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${trimmedKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyPayload)
          }
        );
      } catch (networkErr) {
        lastError = networkErr;
        continue;
      }

      if (!resp.ok) {
        const errData = await resp.json().catch(() => ({}));
        const status = resp.status;
        const errMsg = errData.error?.message || `HTTP ${status}`;
        lastError = new Error(errMsg);

        // Si es 429 (límite de cuota) o 401/403 (autenticación), frenar de inmediato
        if (status === 429 || status === 401 || status === 403) {
          throw lastError;
        }

        if (this._activeModel === model) {
          this._activeModel = null;
          try { localStorage.removeItem('mpb_verified_gemini_model'); } catch (_) {}
        }
        continue;
      }

      // Respuesta HTTP 200 OK: parsear datos y no intentar ningún otro modelo
      const data = await resp.json();
      const parts = data.candidates?.[0]?.content?.parts || [];
      const rawText = parts.map(p => p.text || '').join('').trim();
      if (!rawText) {
        throw new Error('Respuesta vacía de la IA');
      }

      const parsed = this._extractJSON(rawText);
      console.log('🤖 [Gemini AI Response]:', parsed);
      this._activeModel = model;
      try {
        localStorage.setItem('mpb_verified_gemini_model', model);
      } catch (_) {}
      return parsed;
    }

    throw lastError || new Error('No se pudo conectar con Gemini');
  }

  _extractJSON(text) {
    if (!text) throw new Error('Texto vacío');
    const clean = text.replace(/```(?:json)?/gi, '').replace(/```/g, '').trim();
    try {
      return JSON.parse(clean);
    } catch {
      const match = clean.match(/\{[\s\S]*\}/);
      if (match) {
        return JSON.parse(match[0]);
      }
      throw new Error('No se pudo interpretar el formato JSON de la respuesta');
    }
  }

  /**
   * Ensambla un plato minimalista a partir de lo que el usuario tiene disponible.
   * Selecciona 1 id de cada bloque de la biblioteca y genera 3 pasos rápidos.
   */
  async assembleFromText(queryText, allComponents, currentContext = null) {
    const componentsSummary = allComponents.map(c => ({
      id: c.id,
      nombre: c.nombre,
      categoria: c.categoria
    }));

    let contextSnippet = '';
    if (currentContext && (currentContext.proteina || currentContext.vegetal || currentContext.carbohidrato || currentContext.grasa)) {
      contextSnippet = `\nPlato actualmente armado en la pantalla:
- Proteína: ${currentContext.proteina || 'Sin selección'}
- Vegetal: ${currentContext.vegetal || 'Sin selección'}
- Carbohidrato: ${currentContext.carbohidrato || 'Sin selección'}
- Grasa: ${currentContext.grasa || 'Sin selección'}
- Modo actual: ${currentContext.modo || 'caliente'}
NOTA DE AJUSTE INCREMENTAL: Si el usuario pide modificar algo (ej: "cambiame X por Y", "sumale Z", "hacelo frío"), conserva los demás bloques seleccionados y aplica únicamente el cambio solicitado.`;
    }

    const systemInstruction = `Sos el motor inteligente de "Antirecetario", una aplicación de cocina minimalista, ultra práctica y rápida para el día a día.
Tu objetivo es ayudar a alguien que tiene hambre, poco tiempo y cero ganas de complicarse la vida.

REGLAS ESTRICTAS DE INTERPRETACIÓN:
1. RESOLUCIÓN DE ERRATAS Y JERGA:
   - Tolerá erratas de tipeo en teclados táctiles (ej: "panca", "panta", "palte" = Palta / Aguacate; "pechu", "supre" = Pechuga / Suprema de Pollo; "ceboolla" = Cebolla; "champi" = Hongos / Champiñones).
   - Interpretá frases cotidianas de verdulería o alacena (ej: "bandejitas de la verdulera", "verduras varias" = Wok de Vegetales Mixtos; "fideos" = Fideos / Pasta).
2. DESCARTE DE NEGACIONES Y EXCLUSIONES:
   - Si el usuario dice que tiene algo pero aclara que NO lo va a usar (ej: "tengo leche pero no la voy a usar", "sin cebolla"), descartalo por completo. No lo asignes a ninguna categoría ni lo menciones en los pasos.
3. RESPETO DE INGREDIENTES REALES Y MULTI-SELECCIÓN (ARRAYS):
   - Asigná un array con los IDs correspondientes de la biblioteca para cada una de las 4 categorías: "proteina_ids", "vegetal_ids", "carbo_ids", "grasa_ids".
   - SI EL USUARIO MENCIONA MÚLTIPLES INGREDIENTES DE UNA MISMA CATEGORÍA (ej: "lechuga y tomate", "morrón y cebolla", "pollo y huevo"): INCLUÍ TODOS LOS IDS COINCIDENTES EN EL ARRAY (ej: "vegetal_ids": ["comp_veg_1", "comp_veg_2"]).
   - SI UN INGREDIENTE MENCIONADO NO TIENE NOMBRE IDÉNTICO EN LA BIBLIOTECA (ej: el usuario dice "rabanito", "morrón", "cebollita de verdeo"): vincúlalo al vegetal más cercano y compatible de la lista (ej: "comp_veg_10" Cebolla, "comp_veg_8" Wok/Salteado, o "comp_veg_1" Hojas/Ensalada fresca) e intégralo de forma real en los 3 pasos.
   - SI EL USUARIO REALMENTE NO TIENE NI MENCIONA INGREDIENTES PARA ALGUNA CATEGORÍA (por ejemplo, no nombró ninguna grasa ni aceite): Dejá ese array vacío [] (ej: "grasa_ids": []). NO inventes ingredientes fantasma.
   - Si hay un plato actual y el usuario solo cambia un ingrediente, mantén los otros intactos.
4. SUGERENCIA NUTRICIONAL OPCIONAL:
   - ÚNICAMENTE si el usuario REALMENTE NO MENCIONÓ NINGÚN INGREDIENTE para una categoría (por ejemplo, si no nombró ninguna grasa, o no nombró ninguna proteína), incluí en el campo "sugerencia_opcional" un consejo breve, amable y no invasivo explicando qué podría sumar si lo encuentra en su alacena (ej: "💡 Te faltó una grasa saludable (como un chorrito de aceite de oliva o semillas) para balancear el plato").
   - REGLA CRÍTICA: Si el usuario SÍ MENCIONÓ ingredientes de una categoría (por ejemplo, dijo "cebolla" o "rabanito"), NUNCA digas que le faltaron vegetales. Si el usuario ya aportó vegetales en su frase, devolvé null en sugerencia_opcional.
5. FORMATO DE PASOS:
   - Redactá un array de EXACTAMENTE 3 pasos muy cortos, ejecutivos y al grano, UTILIZANDO ÚNICAMENTE los ingredientes que el usuario realmente tiene disponibles. Si no tiene carbohidrato, no le indiques cocinar arroz ni fideos.
6. MODO Y TÍTULO:
   - "modo": "caliente" o "frio" según los ingredientes y el texto del usuario.
   - "titulo": Nombre simple y directo (ej: "Bife a la plancha con ensalada fresca y frutos secos"). Cero pretensiones gourmet.

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
}`;

    const promptText = `Ingredientes disponibles en la biblioteca:
${JSON.stringify(componentsSummary)}
${contextSnippet}

Lo que el usuario tiene en casa / pide:
"${queryText}"`;

    return await this._callGemini(promptText, systemInstruction);
  }

  /**
   * Refina los 3 pasos de cocina rápida según los 4 componentes elegidos y el modo.
   */
  async refineSteps(selectedComponents, mode = 'caliente') {
    const names = selectedComponents.map(c => `${c.categoria}: ${c.nombre}`).join(', ');

    const systemInstruction = `Sos el asistente minimalista de cocina rápida de "Antirecetario".
Tu misión es generar 3 pasos de cocina ultra simples, directos y telegráficos (máximo 1 o 2 oraciones por paso) para resolver la comida en minutos.
Modo de preparación: ${mode.toUpperCase()}.
FORMATO DE RESPUESTA EN JSON:
{
  "titulo": "Nombre simple y descriptivo del plato",
  "pasos": [
    "Paso 1: Cocinar o preparar la proteína (indicar minutos mínimos de sartén/plancha/olla)",
    "Paso 2: Sumar o saltear vegetales y carbohidratos",
    "Paso 3: Condimentar con la grasa elegida y servir"
  ]
}`;

    const promptText = `Ingredientes elegidos: ${names}. Generá las instrucciones ejecutivas en 3 pasos.`;

    return await this._callGemini(promptText, systemInstruction);
  }
}

export const geminiService = new GeminiService();
