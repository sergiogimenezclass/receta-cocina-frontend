import { storage } from './storage.js';

/**
 * Servicio minimalista para interactuar con Google Gemini API.
 * Enfocado en cocina rápida, práctica y sin rodeos.
 */
class GeminiService {
  constructor() {
    this._activeModel = null;
  }

  /**
   * Consulta dinámicamente los modelos autorizados para la clave actual y prioriza los más rápidos.
   */
  async _getAvailableModels(apiKey) {
    if (this._activeModel) return [this._activeModel];

    try {
      const listResp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`, {
        headers: { 'x-goog-api-key': apiKey }
      });

      if (listResp.ok) {
        const data = await listResp.json();
        const available = (data.models || [])
          .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent'))
          .map(m => m.name.replace('models/', ''));

        if (available.length > 0) {
          const sorted = [];
          ['gemini-2.0-flash', 'gemini-1.5-flash-latest', 'gemini-1.5-flash', 'gemini-2.0-flash-exp', 'gemini-2.5-flash'].forEach(m => {
            if (available.includes(m) && !sorted.includes(m)) sorted.push(m);
          });
          const otherFlash = available.filter(m => m.includes('flash') && !sorted.includes(m));
          sorted.push(...otherFlash);
          const others = available.filter(m => !sorted.includes(m));
          sorted.push(...others);

          return sorted;
        }
      }
    } catch (e) {
      console.warn('Error al listar modelos disponibles en Gemini:', e);
    }

    return ['gemini-2.0-flash', 'gemini-1.5-flash-latest', 'gemini-1.5-flash', 'gemini-pro'];
  }

  /**
   * Ejecuta la llamada a Gemini recorriendo los modelos disponibles con parseo JSON seguro.
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
      try {
        const fullPrompt = systemInstruction ? `${systemInstruction}\n\n${promptText}` : promptText;
        const bodyPayload = {
          contents: [{ parts: [{ text: fullPrompt }] }],
          generationConfig: {
            temperature: 0.2
          }
        };

        const resp = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${trimmedKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyPayload)
          }
        );

        if (!resp.ok) {
          const errData = await resp.json().catch(() => ({}));
          throw new Error(errData.error?.message || `HTTP ${resp.status}`);
        }

        const data = await resp.json();
        const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!rawText) {
          throw new Error('Respuesta vacía de la IA');
        }

        const parsed = this._extractJSON(rawText);
        this._activeModel = model; // Cachear el modelo que funcionó
        return parsed;
      } catch (err) {
        lastError = err;
      }
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
  async assembleFromText(queryText, allComponents) {
    const componentsSummary = allComponents.map(c => ({
      id: c.id,
      nombre: c.nombre,
      categoria: c.categoria
    }));

    const systemInstruction = `Sos el motor inteligente de "Antirecetario", una aplicación de cocina minimalista, ultra práctica y rápida para el día a día.
Tu objetivo es ayudar a alguien que tiene hambre, poco tiempo y cero ganas de complicarse la vida.
REGLAS ESTRICTAS:
1. Debes seleccionar EXACTAMENTE 1 componente de cada una de las 4 categorías disponibles en la lista provista: "Proteina", "Vegetal", "Carbohidrato", "Grasa".
2. Si el usuario no menciona alguna categoría, elegí la opción más común y rápida de la lista que mejor combine.
3. El campo "modo" debe ser "caliente" o "frio" según lo que el usuario pida o lo que sea más lógico y rápido.
4. "titulo": Nombre simple y directo (ej: "Salteado rápido de pollo con arroz", "Ensalada express de atún"). Cero pretensiones gourmet.
5. "pasos": Un array de EXACTAMENTE 3 pasos muy cortos, al grano y ejecutivos:
   - Paso 1: Preparar/cocinar la proteína con su tiempo.
   - Paso 2: Integrar vegetales y carbohidratos.
   - Paso 3: Terminar con la grasa y servir.
FORMATO DE RESPUESTA EXCLUSIVO EN JSON:
{
  "proteina_id": "string",
  "vegetal_id": "string",
  "carbo_id": "string",
  "grasa_id": "string",
  "modo": "caliente" | "frio",
  "titulo": "string",
  "pasos": ["paso 1", "paso 2", "paso 3"]
}`;

    const promptText = `Ingredientes disponibles en la biblioteca:
${JSON.stringify(componentsSummary)}

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
