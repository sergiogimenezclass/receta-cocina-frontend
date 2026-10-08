import { storage } from '../services/storage.js';

export class PlannerComponent {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.dias = [
      { key: 'lunes', nombre: 'Lunes' },
      { key: 'martes', nombre: 'Martes' },
      { key: 'miercoles', nombre: 'Miércoles' },
      { key: 'jueves', nombre: 'Jueves' },
      { key: 'viernes', nombre: 'Viernes' },
      { key: 'sabado', nombre: 'Sábado' },
      { key: 'domingo', nombre: 'Domingo' }
    ];
  }

  async init() {
    await this.render();
    this.bindEvents();
  }

  async render() {
    const weeklyPlan = await storage.getWeeklyPlan();
    const plates = await storage.getPlates();

    this.container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h2 style="font-size: 1.4rem; font-weight: 700;">📅 Planificador Semanal por Nivel de Actividad</h2>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">Asigna el tipo de entrenamiento y hasta 4 comidas por día en orden cronológico.</p>
        </div>
      </div>

      <!-- Parrilla Semanal -->
      <div class="weekly-grid">
        ${this.dias.map(d => this.renderDayCard(d, weeklyPlan[d.key] || {}, plates)).join('')}
      </div>
    `;
  }

  renderDayCard(dia, planData, plates) {
    const actividad = planData.actividad || 'Moderado';
    
    // Determinar si las comidas opcionales están activadas
    const hasDesayuno = planData.has_desayuno || !!planData.desayuno_id;
    const hasMerienda = planData.has_merienda || !!planData.merienda_id;

    const desayuno = plates.find(p => p.id === planData.desayuno_id);
    const almuerzo = plates.find(p => p.id === planData.almuerzo_id);
    const merienda = plates.find(p => p.id === planData.merienda_id);
    const cena = plates.find(p => p.id === planData.cena_id);

    return `
      <div class="day-card glass-card" data-day="${dia.key}">
        <div class="day-header">
          <span class="day-name">${dia.nombre}</span>
          <select class="form-control select-day-activity" data-day="${dia.key}" style="font-size: 0.75rem; padding: 0.2rem 0.4rem; width: auto;">
            <option value="Intenso" ${actividad === 'Intenso' ? 'selected' : ''}>🔴 Intenso</option>
            <option value="Moderado" ${actividad === 'Moderado' ? 'selected' : ''}>🟡 Moderado</option>
            <option value="Descanso" ${actividad === 'Descanso' ? 'selected' : ''}>🟢 Descanso</option>
          </select>
        </div>

        <!-- 1. DESAYUNO (Opcional - Primero) -->
        ${hasDesayuno ? this.renderMealSlot(dia.key, 'desayuno', '🌅 Desayuno', desayuno, plates, true) : ''}

        <!-- 2. ALMUERZO (Fijo) -->
        ${this.renderMealSlot(dia.key, 'almuerzo', '☀️ Almuerzo', almuerzo, plates, false)}

        <!-- 3. MERIENDA (Opcional - En el medio) -->
        ${hasMerienda ? this.renderMealSlot(dia.key, 'merienda', '☕ Merienda', merienda, plates, true) : ''}

        <!-- 4. CENA (Fijo) -->
        ${this.renderMealSlot(dia.key, 'cena', '🌙 Cena', cena, plates, false)}

        <!-- Botones de alta rápida para Desayuno / Merienda -->
        <div style="display: flex; gap: 0.4rem; margin-top: 0.5rem; flex-wrap: wrap;">
          ${!hasDesayuno ? `
            <button class="btn btn-sm btn-secondary btn-add-optional-meal" data-day="${dia.key}" data-type="desayuno" style="font-size: 0.75rem; flex: 1;">
              + 🌅 Desayuno
            </button>
          ` : ''}
          ${!hasMerienda ? `
            <button class="btn btn-sm btn-secondary btn-add-optional-meal" data-day="${dia.key}" data-type="merienda" style="font-size: 0.75rem; flex: 1;">
              + ☕ Merienda
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }

  renderMealSlot(dayKey, mealType, labelText, assignedPlate, plates, isOptional) {
    return `
      <div class="meal-slot">
        <div class="meal-slot-label" style="display: flex; justify-content: space-between; align-items: center;">
          <span>${labelText}</span>
          ${isOptional ? `
            <button class="btn-remove-optional-meal" data-day="${dayKey}" data-type="${mealType}" title="Eliminar ${labelText}" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 0.8rem;">
              🗑️
            </button>
          ` : ''}
        </div>
        ${assignedPlate ? `
          <div class="meal-assigned">
            <div class="meal-assigned-title">${this.escapeHtml(assignedPlate.nombre)}</div>
            <button class="btn btn-sm btn-danger btn-remove-meal" data-day="${dayKey}" data-type="${mealType}" style="margin-top: 0.4rem; width: 100%;">Quitar Plato</button>
          </div>
        ` : `
          <div class="meal-slot-content">Sin plato asignado</div>
          <select class="form-control select-assign-meal" data-day="${dayKey}" data-type="${mealType}" style="margin-top: 0.5rem; font-size: 0.8rem;">
            <option value="">+ Asignar Plato...</option>
            ${plates.map(p => `<option value="${p.id}">${this.escapeHtml(p.nombre)}</option>`).join('')}
          </select>
        `}
      </div>
    `;
  }

  bindEvents() {
    // Cambio nivel de actividad del día
    this.container.querySelectorAll('.select-day-activity').forEach(select => {
      select.addEventListener('change', async (e) => {
        const dayKey = e.target.getAttribute('data-day');
        const level = e.target.value;
        await storage.setDayActivity(dayKey, level);
        await this.render();
        this.bindEvents();
      });
    });

    // Agregar comida opcional (desayuno o merienda)
    this.container.querySelectorAll('.btn-add-optional-meal').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const dayKey = e.currentTarget.getAttribute('data-day');
        const mealType = e.currentTarget.getAttribute('data-type');
        await storage.toggleOptionalMeal(dayKey, mealType, true);
        await this.render();
        this.bindEvents();
      });
    });

    // Eliminar slot de comida opcional
    this.container.querySelectorAll('.btn-remove-optional-meal').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const dayKey = e.currentTarget.getAttribute('data-day');
        const mealType = e.currentTarget.getAttribute('data-type');
        await storage.toggleOptionalMeal(dayKey, mealType, false);
        await this.render();
        this.bindEvents();
      });
    });

    // Asignar plato a cualquier comida
    this.container.querySelectorAll('.select-assign-meal').forEach(select => {
      select.addEventListener('change', async (e) => {
        const dayKey = e.target.getAttribute('data-day');
        const mealType = e.target.getAttribute('data-type');
        const plateId = e.target.value;
        if (plateId) {
          await storage.assignMealToDay(dayKey, mealType, plateId);
          await this.render();
          this.bindEvents();
        }
      });
    });

    // Quitar plato de cualquier comida
    this.container.querySelectorAll('.btn-remove-meal').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const dayKey = e.currentTarget.getAttribute('data-day');
        const mealType = e.currentTarget.getAttribute('data-type');
        await storage.assignMealToDay(dayKey, mealType, null);
        await this.render();
        this.bindEvents();
      });
    });
  }

  escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
}
