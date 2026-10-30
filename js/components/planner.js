import { storage } from '../services/storage.js';

export class PlannerComponent {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.activeDay = 'all';
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
      <div class="planner-header">
        <h2 class="planner-title">Planificador Semanal</h2>
        <p class="planner-subtitle">Organiza tus comidas de cada día de la semana.</p>
      </div>

      <!-- Selector de día para pantallas móviles -->
      <div class="planner-day-filter">
        <button type="button" class="planner-day-pill ${this.activeDay === 'all' ? 'active' : ''}" data-day="all">Toda la semana</button>
        ${this.dias.map(d => `
          <button type="button" class="planner-day-pill ${this.activeDay === d.key ? 'active' : ''}" data-day="${d.key}">${d.nombre.slice(0, 3)}</button>
        `).join('')}
      </div>

      <!-- Parrilla Semanal -->
      <div class="weekly-grid">
        ${this.dias.map(d => this.renderDayCard(d, weeklyPlan[d.key] || {}, plates)).join('')}
      </div>
    `;
  }

  renderDayCard(dia, planData, plates) {
    // Determinar si las comidas opcionales están activadas
    const hasDesayuno = planData.has_desayuno || !!planData.desayuno_id;
    const hasMerienda = planData.has_merienda || !!planData.merienda_id;

    const desayuno = plates.find(p => p.id === planData.desayuno_id);
    const almuerzo = plates.find(p => p.id === planData.almuerzo_id);
    const merienda = plates.find(p => p.id === planData.merienda_id);
    const cena = plates.find(p => p.id === planData.cena_id);

    return `
      <div class="day-card ${this.activeDay !== 'all' && this.activeDay !== dia.key ? 'is-hidden-mobile' : ''}" data-day="${dia.key}">
        <div class="day-header">
          <span class="day-name">${dia.nombre}</span>
        </div>

        <!-- 1. DESAYUNO (Opcional) -->
        ${hasDesayuno ? this.renderMealSlot(dia.key, 'desayuno', 'Desayuno', desayuno, plates, true) : ''}

        <!-- 2. ALMUERZO (Fijo) -->
        ${this.renderMealSlot(dia.key, 'almuerzo', 'Almuerzo', almuerzo, plates, false)}

        <!-- 3. MERIENDA (Opcional) -->
        ${hasMerienda ? this.renderMealSlot(dia.key, 'merienda', 'Merienda', merienda, plates, true) : ''}

        <!-- 4. CENA (Fijo) -->
        ${this.renderMealSlot(dia.key, 'cena', 'Cena', cena, plates, false)}

        <!-- Botones discretos para sumar Desayuno / Merienda -->
        ${(!hasDesayuno || !hasMerienda) ? `
          <div class="day-add-meals">
            ${!hasDesayuno ? `
              <button type="button" class="btn-add-meal-chip btn-add-optional-meal" data-day="${dia.key}" data-type="desayuno">
                + Desayuno
              </button>
            ` : ''}
            ${!hasMerienda ? `
              <button type="button" class="btn-add-meal-chip btn-add-optional-meal" data-day="${dia.key}" data-type="merienda">
                + Merienda
              </button>
            ` : ''}
          </div>
        ` : ''}
      </div>
    `;
  }

  renderMealSlot(dayKey, mealType, labelText, assignedPlate, plates, isOptional) {
    return `
      <div class="meal-slot">
        <div class="meal-slot-header">
          <span class="meal-slot-label">${labelText}</span>
          ${isOptional ? `
            <button type="button" class="btn-remove-optional-meal" data-day="${dayKey}" data-type="${mealType}" title="Quitar ${labelText}" aria-label="Quitar ${labelText}">
              &times;
            </button>
          ` : ''}
        </div>
        ${assignedPlate ? `
          <div class="meal-assigned">
            <span class="meal-assigned-title" title="${this.escapeHtml(assignedPlate.nombre)}">${this.escapeHtml(assignedPlate.nombre)}</span>
            <button type="button" class="btn-remove-meal" data-day="${dayKey}" data-type="${mealType}" title="Quitar plato" aria-label="Quitar plato">
              &times;
            </button>
          </div>
        ` : `
          <select class="form-control select-assign-meal" data-day="${dayKey}" data-type="${mealType}" aria-label="Asignar plato para ${labelText}">
            <option value="">+ Asignar plato...</option>
            ${plates.map(p => `<option value="${p.id}">${this.escapeHtml(p.nombre)}</option>`).join('')}
          </select>
        `}
      </div>
    `;
  }

  bindEvents() {
    // Selector móvil de día
    this.container.querySelectorAll('.planner-day-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.activeDay = e.currentTarget.getAttribute('data-day');
        this.container.querySelectorAll('.planner-day-pill').forEach(p => p.classList.remove('active'));
        e.currentTarget.classList.add('active');

        this.container.querySelectorAll('.day-card').forEach(card => {
          const cardDay = card.getAttribute('data-day');
          if (this.activeDay === 'all' || this.activeDay === cardDay) {
            card.classList.remove('is-hidden-mobile');
          } else {
            card.classList.add('is-hidden-mobile');
          }
        });
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
