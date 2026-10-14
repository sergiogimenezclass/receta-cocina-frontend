import { storage } from '../services/storage.js';
import { showToast } from '../utils/toast.js';

export class SettingsComponent {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  async init() {
    await this.render();
    this.bindEvents();
  }

  async render() {
    const apiKey = await storage.getApiKey();
    const stabilityApiKey = await storage.getStabilityApiKey();

    this.container.innerHTML = `
      <div style="margin-bottom: 2rem;">
        <h2 style="font-size: 1.4rem; font-weight: 700;">⚙️ Configuración y Ajustes</h2>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">Configura tus API Keys para la inteligencia de recetas y la generación de imágenes reales con IA.</p>
      </div>

      <!-- SECCIÓN 1: GEMINI API KEY -->
      <div class="glass-card" style="padding: 1.75rem; border-radius: var(--radius-lg); margin-bottom: 2rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <h3 style="font-size: 1.15rem; font-weight: 700;">🔑 Clave de API de Google Gemini (Inteligencia & Texto)</h3>
          <div id="apiKeyBadgeContainer">
            <span class="badge" style="font-size: 0.8rem; font-weight: 700; padding: 0.25rem 0.65rem; border-radius: var(--radius-sm); ${apiKey ? 'background: var(--color-veg-bg); color: var(--color-veg); border: 1px solid var(--color-veg-border);' : 'background: var(--color-carb-bg); color: var(--color-carb); border: 1px solid var(--color-carb-border);'}">
              ${apiKey ? '✅ Clave Guardada' : '⚠️ Clave No Configurada'}
            </span>
          </div>
        </div>

        <form id="formApiKey" style="margin-bottom: 1.25rem;">
          <div class="form-group">
            <label>API Key de Google Gemini (Google AI Studio)</label>
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <input type="password" id="inputApiKey" class="form-control" value="${this.escapeHtml(apiKey)}" placeholder="AQ.Ab8... o AIzaSy..." required style="flex: 1; min-width: 260px;">
              <button type="submit" class="btn btn-primary">
                💾 Guardar Clave
              </button>
              <button type="button" id="btnTestApiKey" class="btn btn-secondary">
                🧪 Probar Clave
              </button>
            </div>
            <div id="apiKeyFeedback" style="margin-top: 0.5rem; font-size: 0.85rem;"></div>
          </div>
        </form>

        <div style="background: #f7f9fc; border: 1px dashed var(--border-color); border-radius: var(--radius-md); padding: 1rem; font-size: 0.85rem; color: var(--text-secondary);">
          <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">📖 Instructivo para obtener tu Clave de Gemini:</div>
          <ol style="margin-left: 1.25rem; line-height: 1.6;">
            <li>Ingresa gratis a <a href="https://aistudio.google.com/app/apikey" target="_blank" style="color: var(--color-fat); text-decoration: underline;">Google AI Studio (aistudio.google.com)</a>.</li>
            <li>Haz click en el botón <strong>"Create API Key"</strong>.</li>
            <li>Copia la clave generada (formato <code>AQ...</code> o <code>AIza...</code>) y pégala en el campo superior.</li>
          </ol>
        </div>
      </div>

      <!-- SECCIÓN STABILITY AI -->
      <div class="glass-card" style="padding: 1.75rem; border-radius: var(--radius-lg); margin-bottom: 2rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <h3 style="font-size: 1.15rem; font-weight: 700;">🎨 Clave de API de Stability AI (Generación de Imágenes IA Real)</h3>
          <div id="stabilityBadgeContainer">
            <span class="badge" style="font-size: 0.8rem; font-weight: 700; padding: 0.25rem 0.65rem; border-radius: var(--radius-sm); ${stabilityApiKey ? 'background: var(--color-veg-bg); color: var(--color-veg); border: 1px solid var(--color-veg-border);' : 'background: var(--color-carb-bg); color: var(--color-carb); border: 1px solid var(--color-carb-border);'}">
              ${stabilityApiKey ? '✅ Clave Configurada' : '⚠️ No Configurada'}
            </span>
          </div>
        </div>

        <form id="formStabilityKey" style="margin-bottom: 1.25rem;">
          <div class="form-group">
            <label>API Key de Stability AI (sk-...)</label>
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <input type="password" id="inputStabilityApiKey" class="form-control" value="${this.escapeHtml(stabilityApiKey)}" placeholder="sk-..." required style="flex: 1; min-width: 260px;">
              <button type="submit" class="btn btn-primary">
                💾 Guardar Clave Stability
              </button>
              <button type="button" id="btnTestStabilityKey" class="btn btn-secondary">
                🧪 Probar Stability
              </button>
            </div>
            <div id="stabilityKeyFeedback" style="margin-top: 0.5rem; font-size: 0.85rem;"></div>
          </div>
        </form>

        <div style="background: #f7f9fc; border: 1px dashed var(--border-color); border-radius: var(--radius-md); padding: 1rem; font-size: 0.85rem; color: var(--text-secondary);">
          <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">📖 Instructivo Paso a Paso para obtener tu Clave de Stability AI:</div>
          <ol style="margin-left: 1.25rem; line-height: 1.6;">
            <li>Ingresa a <a href="https://platform.stability.ai" target="_blank" style="color: var(--color-fat); text-decoration: underline;">platform.stability.ai</a> con tu cuenta.</li>
            <li>Haz click en tu <strong>icono de perfil / usuario</strong> en la esquina superior derecha.</li>
            <li>Haz click en la opción <strong>"API Keys"</strong>.</li>
            <li>Haz click en el botón <strong>"+ Create API Key"</strong>.</li>
            <li>Copia la clave generada (comienza con <code>sk-...</code>) y pégala arriba.</li>
          </ol>
        </div>
      </div>

    `;
  }

  bindEvents() {
    const inputApiKey = this.container.querySelector('#inputApiKey');
    const apiKeyFeedback = this.container.querySelector('#apiKeyFeedback');
    const apiKeyBadgeContainer = this.container.querySelector('#apiKeyBadgeContainer');

    // Helper para probar conexión con Gemini API con descubrimiento dinámico de modelos
    const testKeyConnection = async (key) => {
      const trimmed = (key || '').trim();
      if (!trimmed || trimmed.length < 5) {
        return { success: false, message: '⚠️ Ingresa una clave de API válida antes de probar.' };
      }

      try {
        // Step 1: Consultar la lista de modelos disponibles para esta API Key
        const listResp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${trimmed}`, {
          headers: { 'x-goog-api-key': trimmed }
        });

        if (!listResp.ok) {
          const errData = await listResp.json().catch(() => ({}));
          const detail = errData.error?.message || `HTTP ${listResp.status}`;
          return { success: false, message: `❌ Error al conectar con Google Gemini (${detail}). Revisa la clave en Google AI Studio.` };
        }

        const data = await listResp.json();
        const availableModels = (data.models || [])
          .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent'))
          .map(m => m.name.replace('models/', ''));

        if (availableModels.length === 0) {
          return { success: false, message: '⚠️ La API Key es válida, pero no tiene modelos asignados para generar contenido.' };
        }

        // Construir lista de candidatos ordenados por preferencia
        const candidates = [];
        if (availableModels.includes('gemini-2.0-flash')) candidates.push('gemini-2.0-flash');
        if (availableModels.includes('gemini-1.5-flash')) candidates.push('gemini-1.5-flash');
        if (availableModels.includes('gemini-3.8-flash')) candidates.push('gemini-3.8-flash');
        
        // Agregar los demás modelos flash disponibles
        const otherFlash = availableModels.filter(m => m.includes('flash') && !candidates.includes(m)).sort((a, b) => b.localeCompare(a));
        candidates.push(...otherFlash);

        // Agregar el resto
        const others = availableModels.filter(m => !candidates.includes(m));
        candidates.push(...others);

        let lastDetail = '';

        // Step 2: Probar petición de generación en la cadena de fallback
        for (const modelName of candidates) {
          try {
            const genResp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${trimmed}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-goog-api-key': trimmed
              },
              body: JSON.stringify({
                contents: [{ parts: [{ text: "Responde únicamente OK" }] }]
              })
            });

            if (genResp.ok) {
              return { success: true, message: `✅ ¡Conexión Exitosa! Tu API Key es válida y está conectada activamente con '${modelName}'.` };
            } else {
              const errData = await genResp.json().catch(() => ({}));
              lastDetail = errData.error?.message || `HTTP ${genResp.status}`;
            }
          } catch (e) {
            lastDetail = e.message;
          }
        }

        return { success: false, message: `❌ Clave válida, pero los modelos están experimentando alta demanda en Google: ${lastDetail}` };
      } catch (err) {
        return { success: false, message: `❌ Error de red al probar la clave: ${err.message}` };
      }
    };

    // Guardar API Key
    const formApiKey = this.container.querySelector('#formApiKey');
    if (formApiKey) {
      formApiKey.addEventListener('submit', async (e) => {
        e.preventDefault();
        const key = inputApiKey.value.trim();

        if (!key || key.length < 5) {
          apiKeyFeedback.innerHTML = `<span style="color: #b83c37; font-weight: 600;">❌ Ingresa una clave válida de Google AI Studio.</span>`;
          return;
        }

        await storage.saveApiKey(key);
        apiKeyFeedback.innerHTML = `<span style="color: var(--color-veg); font-weight: 600;">💾 ¡Clave guardada con éxito en tu navegador!</span>`;
        
        if (apiKeyBadgeContainer) {
          apiKeyBadgeContainer.innerHTML = `
            <span class="badge" style="font-size: 0.8rem; font-weight: 700; padding: 0.25rem 0.65rem; border-radius: var(--radius-sm); background: var(--color-veg-bg); color: var(--color-veg); border: 1px solid var(--color-veg-border);">
              ✅ Clave Guardada
            </span>
          `;
        }
      });
    }

    // Botón Probar Clave Gemini
    const btnTestApiKey = this.container.querySelector('#btnTestApiKey');
    if (btnTestApiKey) {
      btnTestApiKey.addEventListener('click', async () => {
        const key = inputApiKey.value.trim();
        btnTestApiKey.disabled = true;
        btnTestApiKey.textContent = '⌛ Probando...';
        apiKeyFeedback.innerHTML = `<span style="color: var(--text-secondary);">Verificando clave con Google Gemini API...</span>`;

        const res = await testKeyConnection(key);

        btnTestApiKey.disabled = false;
        btnTestApiKey.textContent = '🧪 Probar Clave';

        if (res.success) {
          apiKeyFeedback.innerHTML = `<span style="color: var(--color-veg); font-weight: 600;">${res.message}</span>`;
        } else {
          apiKeyFeedback.innerHTML = `<span style="color: #b83c37; font-weight: 600;">${res.message}</span>`;
        }
      });
    }

    // Guardar y Probar API Key de Stability AI
    const formStabilityKey = this.container.querySelector('#formStabilityKey');
    const inputStabilityApiKey = this.container.querySelector('#inputStabilityApiKey');
    const stabilityKeyFeedback = this.container.querySelector('#stabilityKeyFeedback');
    const stabilityBadgeContainer = this.container.querySelector('#stabilityBadgeContainer');
    const btnTestStabilityKey = this.container.querySelector('#btnTestStabilityKey');

    if (formStabilityKey) {
      formStabilityKey.addEventListener('submit', async (e) => {
        e.preventDefault();
        const key = inputStabilityApiKey.value.trim();
        if (!key || key.length < 5) {
          stabilityKeyFeedback.innerHTML = `<span style="color: #b83c37; font-weight: 600;">❌ Ingresa una API Key válida de Stability AI (sk-...).</span>`;
          return;
        }
        await storage.saveStabilityApiKey(key);
        stabilityKeyFeedback.innerHTML = `<span style="color: var(--color-veg); font-weight: 600;">💾 ¡API Key de Stability AI guardada con éxito!</span>`;
        if (stabilityBadgeContainer) {
          stabilityBadgeContainer.innerHTML = `
            <span class="badge" style="font-size: 0.8rem; font-weight: 700; padding: 0.25rem 0.65rem; border-radius: var(--radius-sm); background: var(--color-veg-bg); color: var(--color-veg); border: 1px solid var(--color-veg-border);">
              ✅ Clave Configurada
            </span>
          `;
        }
      });
    }

    if (btnTestStabilityKey) {
      btnTestStabilityKey.addEventListener('click', async () => {
        const key = inputStabilityApiKey.value.trim();
        if (!key || !key.startsWith('sk-')) {
          stabilityKeyFeedback.innerHTML = `<span style="color: #b83c37; font-weight: 600;">❌ Las claves de Stability AI comienzan con "sk-...".</span>`;
          return;
        }

        btnTestStabilityKey.disabled = true;
        btnTestStabilityKey.textContent = '⌛ Probando...';
        stabilityKeyFeedback.innerHTML = `<span style="color: var(--text-secondary);">Verificando clave con Stability AI API...</span>`;

        try {
          const resp = await fetch('https://api.stability.ai/v1/user/account', {
            headers: { 'Authorization': `Bearer ${key}` }
          });

          btnTestStabilityKey.disabled = false;
          btnTestStabilityKey.textContent = '🧪 Probar Stability';

          if (resp.ok) {
            const data = await resp.json().catch(() => ({}));
            const credits = data.credits !== undefined ? ` (Saldo: ${Math.round(data.credits)} créditos)` : '';
            stabilityKeyFeedback.innerHTML = `<span style="color: var(--color-veg); font-weight: 600;">✅ ¡Conexión Exitosa con Stability AI!${credits}</span>`;
          } else {
            const errData = await resp.json().catch(() => ({}));
            stabilityKeyFeedback.innerHTML = `<span style="color: #b83c37; font-weight: 600;">❌ Error al conectar con Stability AI: ${errData.message || `HTTP ${resp.status}`}</span>`;
          }
        } catch (err) {
          btnTestStabilityKey.disabled = false;
          btnTestStabilityKey.textContent = '🧪 Probar Stability';
          stabilityKeyFeedback.innerHTML = `<span style="color: #b83c37; font-weight: 600;">❌ Error de red: ${err.message}</span>`;
        }
      });
    }


  }

  escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
}
