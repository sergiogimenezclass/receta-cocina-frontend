import { storage } from '../services/storage.js';

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
    const rules = await storage.getActivityRules();

    this.container.innerHTML = `
      <div style="margin-bottom: 2rem;">
        <h2 style="font-size: 1.4rem; font-weight: 700;">⚙️ Configuración y Ajustes</h2>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">Configura tu API Key para la generación de imágenes con IA y personaliza las porciones sugeridas por bloque.</p>
      </div>

      <!-- SECCIÓN 1: GEMINI API KEY -->
      <div class="glass-card" style="padding: 1.75rem; border-radius: var(--radius-lg); margin-bottom: 2rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <h3 style="font-size: 1.15rem; font-weight: 700;">🔑 Clave de API de Google Gemini</h3>
          <span style="font-size: 0.8rem; font-weight: 700; padding: 0.25rem 0.65rem; border-radius: var(--radius-sm); ${apiKey ? 'background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3);' : 'background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3);'}">
            ${apiKey ? '✅ Clave Configurada' : '⚠️ Clave No Configurada'}
          </span>
        </div>

        <form id="formApiKey" style="margin-bottom: 1.25rem;">
          <div class="form-group">
            <label>API Key de Google Gemini</label>
            <div style="display: flex; gap: 0.75rem;">
              <input type="password" id="inputApiKey" class="form-control" value="${this.escapeHtml(apiKey)}" placeholder="AIzaSy..." required style="flex: 1;">
              <button type="submit" class="btn btn-primary">
                💾 Guardar Clave
              </button>
            </div>
          </div>
        </form>

        <div style="background: rgba(0, 0, 0, 0.25); border: 1px dashed var(--border-color); border-radius: var(--radius-md); padding: 1rem; font-size: 0.85rem; color: var(--text-secondary);">
          <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">📖 Instructivo de 3 Pasos (Obtener Clave Gratis):</div>
          <ol style="margin-left: 1.25rem; line-height: 1.6;">
            <li>Ingresa gratis a <a href="https://aistudio.google.com/app/apikey" target="_blank" style="color: var(--color-fat); text-decoration: underline;">Google AI Studio (aistudio.google.com)</a> iniciando sesión con tu cuenta de Google.</li>
            <li>Haz click en el botón <strong>"Create API Key"</strong>.</li>
            <li>Copia la clave generada (empieza con <code>AIzaSy...</code>) y pégala en el campo de arriba.</li>
          </ol>
          <div style="margin-top: 0.5rem; font-size: 0.78rem; color: var(--text-muted);">
            🔒 Tu clave se almacena de forma 100% privada únicamente en tu navegador (localStorage). No se comparte ni se envía a servidores externos.
          </div>
        </div>
      </div>

      <!-- SECCIÓN 2: MODULADOR DE PORCIONES POR ACTIVIDAD -->
      <div class="glass-card" style="padding: 1.75rem; border-radius: var(--radius-lg);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h3 style="font-size: 1.15rem; font-weight: 700;">🎛️ Personalización de Porciones por Bloque y Actividad</h3>
            <p style="font-size: 0.825rem; color: var(--text-secondary);">Ajusta las cantidades sugeridas para los días Intenso, Moderado y Descanso.</p>
          </div>
          <button id="btnResetRules" class="btn btn-secondary btn-sm">
            🔄 Valores por Defecto
          </button>
        </div>

        <form id="formActivityRules">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.25rem; margin-bottom: 1.5rem;">
            
            <!-- REGION INTENSO -->
            <div style="background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: var(--radius-md); padding: 1.25rem;">
              <h4 style="color: #f87171; font-weight: 700; margin-bottom: 1rem;">🔴 Día Intenso (Entrenamiento)</h4>
              <div class="form-group">
                <label>🥩 Proteína</label>
                <input type="text" class="form-control rule-input" data-level="Intenso" data-category="Proteina" value="${this.escapeHtml(rules.Intenso.Proteina)}">
              </div>
              <div class="form-group">
                <label>🥦 Vegetal</label>
                <input type="text" class="form-control rule-input" data-level="Intenso" data-category="Vegetal" value="${this.escapeHtml(rules.Intenso.Vegetal)}">
              </div>
              <div class="form-group">
                <label>🥔 Carbohidrato (Recarga)</label>
                <input type="text" class="form-control rule-input" data-level="Intenso" data-category="Carbohidrato" value="${this.escapeHtml(rules.Intenso.Carbohidrato)}">
              </div>
              <div class="form-group">
                <label>🥑 Grasa</label>
                <input type="text" class="form-control rule-input" data-level="Intenso" data-category="Grasa" value="${this.escapeHtml(rules.Intenso.Grasa)}">
              </div>
            </div>

            <!-- REGION MODERADO -->
            <div style="background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: var(--radius-md); padding: 1.25rem;">
              <h4 style="color: #fbbf24; font-weight: 700; margin-bottom: 1rem;">🟡 Día Moderado (Habitual)</h4>
              <div class="form-group">
                <label>🥩 Proteína</label>
                <input type="text" class="form-control rule-input" data-level="Moderado" data-category="Proteina" value="${this.escapeHtml(rules.Moderado.Proteina)}">
              </div>
              <div class="form-group">
                <label>🥦 Vegetal</label>
                <input type="text" class="form-control rule-input" data-level="Moderado" data-category="Vegetal" value="${this.escapeHtml(rules.Moderado.Vegetal)}">
              </div>
              <div class="form-group">
                <label>🥔 Carbohidrato</label>
                <input type="text" class="form-control rule-input" data-level="Moderado" data-category="Carbohidrato" value="${this.escapeHtml(rules.Moderado.Carbohidrato)}">
              </div>
              <div class="form-group">
                <label>🥑 Grasa</label>
                <input type="text" class="form-control rule-input" data-level="Moderado" data-category="Grasa" value="${this.escapeHtml(rules.Moderado.Grasa)}">
              </div>
            </div>

            <!-- REGION DESCANSO -->
            <div style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: var(--radius-md); padding: 1.25rem;">
              <h4 style="color: #34d399; font-weight: 700; margin-bottom: 1rem;">🟢 Día de Descanso (Rest)</h4>
              <div class="form-group">
                <label>🥩 Proteína</label>
                <input type="text" class="form-control rule-input" data-level="Descanso" data-category="Proteina" value="${this.escapeHtml(rules.Descanso.Proteina)}">
              </div>
              <div class="form-group">
                <label>🥦 Vegetal (Extra Fibra)</label>
                <input type="text" class="form-control rule-input" data-level="Descanso" data-category="Vegetal" value="${this.escapeHtml(rules.Descanso.Vegetal)}">
              </div>
              <div class="form-group">
                <label>🥔 Carbohidrato (Reducido)</label>
                <input type="text" class="form-control rule-input" data-level="Descanso" data-category="Carbohidrato" value="${this.escapeHtml(rules.Descanso.Carbohidrato)}">
              </div>
              <div class="form-group">
                <label>🥑 Grasa</label>
                <input type="text" class="form-control rule-input" data-level="Descanso" data-category="Grasa" value="${this.escapeHtml(rules.Descanso.Grasa)}">
              </div>
            </div>

          </div>

          <div style="display: flex; justify-content: flex-end;">
            <button type="submit" class="btn btn-primary">
              💾 Guardar Reglas de Porciones
            </button>
          </div>
        </form>
      </div>
    `;
  }

  bindEvents() {
    // Guardar API Key
    const formApiKey = this.container.querySelector('#formApiKey');
    if (formApiKey) {
      formApiKey.addEventListener('submit', async (e) => {
        e.preventDefault();
        const key = document.getElementById('inputApiKey').value;
        await storage.saveApiKey(key);
        alert('¡API Key guardada con éxito!');
        await this.render();
        this.bindEvents();
      });
    }

    // Guardar Reglas de Porciones
    const formRules = this.container.querySelector('#formActivityRules');
    if (formRules) {
      formRules.addEventListener('submit', async (e) => {
        e.preventDefault();
        const currentRules = await storage.getActivityRules();
        
        this.container.querySelectorAll('.rule-input').forEach(input => {
          const level = input.getAttribute('data-level');
          const category = input.getAttribute('data-category');
          if (!currentRules[level]) currentRules[level] = {};
          currentRules[level][category] = input.value;
        });

        await storage.saveActivityRules(currentRules);
        alert('¡Reglas de porciones por actividad actualizadas!');
        await this.render();
        this.bindEvents();
      });
    }

    // Restablecer reglas por defecto
    const btnResetRules = this.container.querySelector('#btnResetRules');
    if (btnResetRules) {
      btnResetRules.addEventListener('click', async () => {
        if (confirm('¿Restablecer las porciones por defecto?')) {
          localStorage.removeItem('mpb_activity_rules_v1');
          await storage.getActivityRules();
          await this.render();
          this.bindEvents();
        }
      });
    }
  }

  escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
}
