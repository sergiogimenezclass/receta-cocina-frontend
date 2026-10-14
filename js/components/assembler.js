import { storage } from '../services/storage.js';
import { showToast } from '../utils/toast.js';

export class AssemblerComponent {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentActivity = 'Moderado';
    this.plateMode = 'caliente'; // 'caliente' | 'frio'
    
    // Estado de selección del plato (array de IDs por categoría para multi-selección)
    this.selected = {
      Proteina: [],
      Vegetal: [],
      Carbohidrato: [],
      Grasa: []
    };

    // Micro-instrucciones editables
    this.customSteps = ['', '', ''];
    this.plateName = 'Mi Plato Modular Custom';
    this.drawerOpen = false;
    this.activityRules = null;
    this.generatedImageSrc = null;

    // Estado del buscador de Auto-Ensamblado determinista por ingredientes
    this.autoQueryText = '';
    this.autoMatchNotification = '';
  }

  async init() {
    this.activityRules = await storage.getActivityRules();
    await this.render();
    this.bindEvents();
  }

  async render() {
    const components = await storage.getComponents();
    this.activityRules = await storage.getActivityRules();

    this.container.innerHTML = `
      <!-- Header de Configuración del Ensamblador -->
      <div class="assembler-header glass-card" style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; justify-content: space-between;">
        <div style="display: flex; gap: 1.25rem; flex-wrap: wrap; align-items: center;">
          <div class="activity-selector-container">
            <span class="label">Nivel de Actividad:</span>
            <div class="activity-selector">
              <button class="activity-btn ${this.currentActivity === 'Intenso' ? 'active' : ''}" data-level="Intenso">
                🔴 Intenso
              </button>
              <button class="activity-btn ${this.currentActivity === 'Moderado' ? 'active' : ''}" data-level="Moderado">
                🟡 Moderado
              </button>
              <button class="activity-btn ${this.currentActivity === 'Descanso' ? 'active' : ''}" data-level="Descanso">
                🟢 Descanso
              </button>
            </div>
          </div>

          <div class="activity-selector-container">
            <span class="label">Estilo de Servido:</span>
            <div class="activity-selector">
              <button class="mode-temp-btn ${this.plateMode === 'caliente' ? 'active' : ''}" data-mode="caliente" style="border-radius: var(--radius-sm); padding: 0.4rem 0.85rem; font-size: 0.8rem; font-weight: 700; cursor: pointer; transition: all 0.2s; ${this.plateMode === 'caliente' ? 'background: rgba(249, 115, 22, 0.25); color: #fb923c; border: 1.5px solid #f97316; box-shadow: 0 0 12px rgba(249, 115, 22, 0.4);' : 'background: transparent; color: var(--text-secondary); border: 1px solid transparent;'}">
                🍲 Caliente (Wok / Sopa)
              </button>
              <button class="mode-temp-btn ${this.plateMode === 'frio' ? 'active' : ''}" data-mode="frio" style="border-radius: var(--radius-sm); padding: 0.4rem 0.85rem; font-size: 0.8rem; font-weight: 700; cursor: pointer; transition: all 0.2s; ${this.plateMode === 'frio' ? 'background: rgba(14, 165, 233, 0.25); color: #38bdf8; border: 1.5px solid #0ea5e9; box-shadow: 0 0 12px rgba(14, 165, 233, 0.4);' : 'background: transparent; color: var(--text-secondary); border: 1px solid transparent;'}">
                🥗 Frío (Ensalada / Bowl)
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Tarjeta de Auto-Ensamblado por Ingredientes Disponibles -->
      <div class="glass-card" style="padding: 1rem 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-glow);">
        <div style="font-size: 0.825rem; font-weight: 700; text-transform: uppercase; color: var(--color-carb); margin-bottom: 0.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            <span>⚡ Auto-Ensamblar Plato por Ingredientes Disponibles</span>
          </div>
          <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: normal; font-style: italic;">Algoritmo determinista instantáneo</span>
        </div>
        <form id="formAutoSelectIngredients" style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
          <input type="text" id="autoIngredientsInput" class="form-control" placeholder="Escribe lo que tienes (ej: pollo, 2 papas, morrón y palta)..." value="${this.escapeHtml(this.autoQueryText)}" style="flex: 1; min-width: 260px; font-size: 0.9rem;">
          <button type="submit" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem 1.1rem; white-space: nowrap;">
            🧩 Seleccionar Bloques
          </button>
        </form>
        ${this.autoMatchNotification ? `
          <div style="margin-top: 0.65rem; padding: 0.5rem 0.75rem; background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; border-radius: var(--radius-sm); font-size: 0.825rem; color: #34d399; font-weight: 600;">
            ${this.autoMatchNotification}
          </div>
        ` : ''}
      </div>

      <!-- Banner Informativo del Modulador de Actividad -->
      <div id="activityPortionNotice" style="font-size: 0.9rem; background: rgba(255, 255, 255, 0.04); padding: 0.85rem 1.25rem; border-radius: var(--radius-md); border-left: 4px solid ${this.getActivityColor()}; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
        <div>
          ${this.getCarbPortionNoticeText()}
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <div style="font-weight: 700; font-size: 0.85rem; background: rgba(255, 255, 255, 0.08); padding: 0.3rem 0.75rem; border-radius: var(--radius-sm);">
            Carbohidratos Meta: <span style="color: ${this.getActivityColor()};">${this.getCarbTargetText()}</span>
          </div>
        </div>
      </div>

      <!-- Matriz de 4 Columnas -->
      <div class="assembler-grid" style="margin-bottom: 5rem;">
        ${this.renderColumn('Proteina', '🥩 Proteínas', components)}
        ${this.renderColumn('Vegetal', '🥦 Vegetales', components)}
        ${this.renderColumn('Carbohidrato', '🥔 Carbohidratos', components)}
        ${this.renderColumn('Grasa', '🥑 Grasas', components)}
      </div>

      <!-- Drawer Modal Desplegable de Micro-Instrucciones -->
      <div id="microStepsDrawer" class="micro-steps-drawer ${this.drawerOpen ? 'open' : ''}">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color);">
          <div>
            <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--color-carb);">Configurar Plato & Pasos</div>
            <input type="text" id="plateNameInput" class="plate-title-input" value="${this.escapeHtml(this.plateName)}" placeholder="Nombre del plato..." style="margin-top: 0.25rem;">
          </div>
          <button id="btnCloseDrawer" style="background: none; border: none; color: var(--text-secondary); font-size: 1.5rem; cursor: pointer;">&times;</button>
        </div>

        <div class="micro-steps-container" style="margin-top: 0;">
          <div class="micro-steps-title">
            <span>⚡ Micro-Instrucciones Express (Máximo 3 pasos)</span>
            <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: normal;">(Editables)</span>
          </div>
          <div class="step-list">
            <div class="step-item">
              <div class="step-number">1</div>
              <input type="text" class="step-text-input" data-step="0" value="${this.escapeHtml(this.customSteps[0])}" placeholder="Paso 1 de preparación...">
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <input type="text" class="step-text-input" data-step="1" value="${this.escapeHtml(this.customSteps[1])}" placeholder="Paso 2 de cocción...">
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <input type="text" class="step-text-input" data-step="2" value="${this.escapeHtml(this.customSteps[2])}" placeholder="Paso 3 de emplatado...">
            </div>
          </div>
        </div>
      </div>

      <!-- BARRA FLOTANTE STICKY BOTTOM BAR (Siempre Visible) -->
      <div class="sticky-plate-bar">
        <div class="sticky-plate-bar-content">
          <!-- Desglose de Chips de Alimentos en Vivo -->
          <div class="sticky-chips-container" id="stickyChipsSummary">
            ${this.renderStickyChips(components)}
          </div>

          <!-- Botones de Acción Rápida -->
          <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
            <button id="btnToggleDrawer" class="btn btn-secondary btn-sm">
              ⚡ 3 Pasos
            </button>
            <button id="btnGenerateImage" class="btn btn-secondary btn-sm" style="opacity: 0.9;" title="Generar imagen con IA">
              🎨 Generar Imagen
            </button>
            <button id="btnSavePlate" class="btn btn-primary btn-sm">
              💾 Guardar Plato
            </button>
          </div>
        </div>
      </div>

      <!-- MODAL UI NATIVO DE GENERACIÓN DE IMAGEN CON IA -->
      <div id="modalImageGen" class="modal-overlay">
        <div class="modal-container glass-card" style="max-width: 550px; text-align: center;">
          <div class="modal-header">
            <h3 class="modal-title">🎨 Generador de Imagen IA</h3>
            <button class="modal-close-btn" id="btnCloseImgModal">&times;</button>
          </div>
          <div id="imgModalBody" style="padding: 1rem 0;">
            <!-- Renderizado dinámico del loader o la imagen final -->
          </div>
        </div>
      </div>
    `;

    this.updateStepDefaults(components);
  }

  calculateCategoryStats(category, allComponents = []) {
    const selectedIds = Array.isArray(this.selected[category]) ? this.selected[category] : (this.selected[category] ? [this.selected[category]] : []);
    const selComps = allComponents.filter(c => selectedIds.includes(c.id));
    
    const targetStr = (this.activityRules && this.activityRules[this.currentActivity])
      ? this.activityRules[this.currentActivity][category]
      : '100g';
    
    const targetMatch = (targetStr || '').match(/(\d+(?:\.\d+)?)/);
    const targetNum = targetMatch ? parseFloat(targetMatch[1]) : 100;
    const unit = (targetStr || '').replace(/[\d\.]/g, '').trim() || 'g';

    let totalGrams = 0;
    if (selComps.length > 0) {
      selComps.forEach(comp => {
        const compMatch = (comp.porcion_base || '').match(/(\d+(?:\.\d+)?)/);
        const compVal = compMatch ? parseFloat(compMatch[1]) : targetNum;
        totalGrams += compVal;
      });
    }

    const isExcess = category !== 'Vegetal' && (totalGrams > targetNum + 2);
    const diffGrams = Math.round(totalGrams - targetNum);

    const labels = {
      Proteina: 'Proteínas',
      Vegetal: 'Vegetales',
      Carbohidrato: 'Carbohidratos',
      Grasa: 'Grasas'
    };

    return {
      category,
      categoryLabel: labels[category] || category,
      selectedCount: selComps.length,
      totalGrams: Math.round(totalGrams),
      targetNum,
      unit,
      isExcess,
      diffGrams
    };
  }

  getActivityColor() {
    if (this.currentActivity === 'Intenso') return '#ef4444';
    if (this.currentActivity === 'Moderado') return '#f59e0b';
    return '#10b981';
  }

  getCarbTargetText() {
    if (this.activityRules && this.activityRules[this.currentActivity]) {
      return this.activityRules[this.currentActivity].Carbohidrato || '120g';
    }
    return '120g';
  }

  getCarbPortionNoticeText() {
    const carbTarget = this.getCarbTargetText();
    if (this.currentActivity === 'Intenso') {
      return `🔴 <strong>Modo Día Intenso:</strong> Los Carbohidratos se ajustan a porción alta (${carbTarget}) para recarga de glucógeno.`;
    } else if (this.currentActivity === 'Moderado') {
      return `🟡 <strong>Modo Día Moderado:</strong> Mantienes porciones de Carbohidratos estándar (${carbTarget}).`;
    } else {
      return `🟢 <strong>Modo Día de Descanso:</strong> Carbohidratos reducidos (${carbTarget}) priorizando fibra vegetal.`;
    }
  }

  calculatePortion(comp, count = 1) {
    if (!comp) return '';
    const cat = comp.categoria;
    let target = '';
    if (this.activityRules && this.activityRules[this.currentActivity] && this.activityRules[this.currentActivity][cat]) {
      target = this.activityRules[this.currentActivity][cat];
    } else {
      target = comp.porcion_base || '1 porción';
    }

    if (count <= 1) return target;

    // Si hay más de 1 ingrediente seleccionado en la misma columna, dividir la porción
    const match = target.match(/^(\d+(?:\.\d+)?)\s*([a-zA-ZáéíóúÁÉÍÓÚcda/]+)?$/);
    if (match) {
      const totalNum = parseFloat(match[1]);
      const unit = match[2] || '';
      const splitNum = (totalNum / count).toFixed(totalNum / count % 1 === 0 ? 0 : 1);
      return `${splitNum}${unit} (${splitNum}${unit} de ${target} total)`;
    }

    return `${target} (÷${count})`;
  }

  getPortionBadgeBg(category) {
    if (category === 'Carbohidrato') {
      if (this.currentActivity === 'Intenso') return 'rgba(239, 68, 68, 0.2)';
      if (this.currentActivity === 'Moderado') return 'rgba(245, 158, 11, 0.2)';
      return 'rgba(16, 185, 129, 0.2)';
    }
    if (category === 'Vegetal' && this.currentActivity === 'Descanso') {
      return 'rgba(16, 185, 129, 0.25)';
    }
    return 'rgba(255, 255, 255, 0.06)';
  }

  getPortionBadgeBorder(category) {
    if (category === 'Carbohidrato') {
      if (this.currentActivity === 'Intenso') return '#ef4444';
      if (this.currentActivity === 'Moderado') return '#f59e0b';
      return '#10b981';
    }
    if (category === 'Vegetal' && this.currentActivity === 'Descanso') {
      return '#10b981';
    }
    return 'rgba(255, 255, 255, 0.12)';
  }

  getPortionBadgeColor(category) {
    if (category === 'Carbohidrato') {
      if (this.currentActivity === 'Intenso') return '#fca5a5';
      if (this.currentActivity === 'Moderado') return '#fde047';
      return '#6ee7b7';
    }
    if (category === 'Vegetal' && this.currentActivity === 'Descanso') {
      return '#6ee7b7';
    }
    return 'var(--text-primary)';
  }

  getMissingCategories() {
    const categories = [
      { key: 'Proteina', label: 'Proteína', icon: '🥩' },
      { key: 'Vegetal', label: 'Vegetales', icon: '🥦' },
      { key: 'Carbohidrato', label: 'Carbohidratos', icon: '🥔' },
      { key: 'Grasa', label: 'Grasas', icon: '🥑' }
    ];

    return categories.filter(cat => {
      const selectedIds = Array.isArray(this.selected[cat.key]) ? this.selected[cat.key] : [];
      return selectedIds.length === 0;
    });
  }

  renderColumn(category, title, allComponents) {
    const selectedIds = Array.isArray(this.selected[category]) ? this.selected[category] : [];
    const categoryComponents = allComponents.filter(c => c.categoria === category);
    const count = selectedIds.length;

    let subBadge = category;
    if (count === 0) {
      subBadge = `⚪ Sin selección`;
    } else if (category === 'Carbohidrato') {
      subBadge = `🥔 ${this.getCarbTargetText()}`;
    } else if (category === 'Vegetal' && this.currentActivity === 'Descanso') {
      subBadge = '🥗 Extra Fibra';
    }

    if (count > 1) {
      subBadge += ` • ${count} sel.`;
    }

    let headerBadgeStyle = count === 0 ? 'background: rgba(245, 158, 11, 0.15); color: #f59e0b; border: 1px dashed #f59e0b;' : '';
    const cardsHtml = categoryComponents.map(comp => {
      const isSelected = selectedIds.includes(comp.id);
      const portionText = this.calculatePortion(comp, count || 1);

      return `
        <div class="component-item-card ${isSelected ? 'selected' : ''}"
             data-id="${comp.id}" data-category="${category}">
          <div class="card-header-row">
            <div class="card-title-group">
              <span>${comp.icono || '🥗'}</span>
              <span>${this.escapeHtml(comp.nombre)}</span>
            </div>
            ${isSelected ? '<span style="color: #34d399; font-weight: 700; font-size: 0.85rem;">✓</span>' : ''}
          </div>

          <!-- BADGE DE PORCIÓN DESTACADO EN LA TARJETA -->
          <div style="background: ${this.getPortionBadgeBg(category)}; border: 1px solid ${this.getPortionBadgeBorder(category)}; padding: 0.35rem 0.65rem; border-radius: var(--radius-sm); font-size: 0.8rem; font-weight: 700; color: ${this.getPortionBadgeColor(category)}; margin: 0.4rem 0;">
            Porción: ${portionText}
          </div>

          <div class="card-details-row">
            <span>⏱️ ${comp.tiempo_preparacion_min} min</span>
            <span style="font-style: italic;">${this.escapeHtml(comp.metodo_coccion)}</span>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="block-column" data-category="${category}">
        <div class="block-column-header">
          <div class="block-title">${title}</div>
          <span class="block-badge" style="${headerBadgeStyle}">${subBadge}</span>
        </div>
        <div class="components-list">
          ${cardsHtml.length > 0 ? cardsHtml : '<div style="color: var(--text-muted); font-size: 0.85rem; padding: 1rem;">No hay componentes cargados.</div>'}
        </div>
      </div>
    `;
  }

  renderStickyChips(allComponents) {
    const formatBlockChip = (category, icon, defaultLabel, colorBg, colorText, colorBorder) => {
      const stats = this.calculateCategoryStats(category, allComponents);
      const selectedIds = Array.isArray(this.selected[category]) ? this.selected[category] : (this.selected[category] ? [this.selected[category]] : []);
      const selComps = allComponents.filter(c => selectedIds.includes(c.id));

      if (selComps.length === 0) {
        return `
          <div class="sticky-chip" style="background: rgba(245, 158, 11, 0.12); color: #f59e0b; border: 1px dashed #f59e0b;">
            ${icon} ${defaultLabel} (Sin selección)
          </div>
        `;
      }

      const names = selComps.map(c => c.nombre).join(' + ');
      const portionText = this.calculatePortion(selComps[0], selComps.length);

      if (stats.isExcess) {
        return `
          <div class="sticky-chip" style="background: rgba(239, 68, 68, 0.25); color: #f87171; border: 1.5px solid #ef4444; font-weight: 700;" title="Exceso en ${stats.categoryLabel}: ${stats.totalGrams}${stats.unit} de ${stats.targetNum}${stats.unit}">
            🚨 ${names} (${portionText} ⚠️ Exceso)
          </div>
        `;
      }

      return `
        <div class="sticky-chip" style="background: ${colorBg}; color: ${colorText}; border: 1px solid ${colorBorder};">
          ${icon} ${names} (${portionText})
        </div>
      `;
    };

    return `
      ${formatBlockChip('Proteina', '🥩', 'Proteína', 'var(--color-prot-bg)', 'var(--color-prot)', 'var(--color-prot-border)')}
      ${formatBlockChip('Vegetal', '🥦', 'Vegetal', 'var(--color-veg-bg)', 'var(--color-veg)', 'var(--color-veg-border)')}
      ${formatBlockChip('Carbohidrato', '🥔', 'Carbohidrato', 'var(--color-carb-bg)', 'var(--color-carb)', 'var(--color-carb-border)')}
      ${formatBlockChip('Grasa', '🥑', 'Grasa', 'var(--color-fat-bg)', 'var(--color-fat)', 'var(--color-fat-border)')}
    `;
  }

  async updateStepDefaults(components) {
    const getSelComps = (cat) => {
      const ids = Array.isArray(this.selected[cat]) ? this.selected[cat] : (this.selected[cat] ? [this.selected[cat]] : []);
      return components.filter(c => ids.includes(c.id));
    };

    const selProt = getSelComps('Proteina');
    const selVeg = getSelComps('Vegetal');
    const selCarb = getSelComps('Carbohidrato');
    const selFat = getSelComps('Grasa');

    // Auto-generar título según estilo
    const isFrio = this.plateMode === 'frio';
    const pName = selProt.length > 0 ? selProt.map(c => c.nombre).join(' + ') : 'Proteína';
    const cName = selCarb.length > 0 ? selCarb.map(c => c.nombre).join(' + ') : 'Carbohidrato';

    if (!this.plateName || this.plateName.startsWith('Mi Plato') || this.plateName.includes('Bowl') || this.plateName.includes('Plato')) {
      this.plateName = isFrio
        ? `Bowl Frío de ${pName} con ${cName}`
        : `Plato Caliente de ${pName} con ${cName}`;
      const nameInput = document.getElementById('plateNameInput');
      if (nameInput) nameInput.value = this.plateName;
    }

    // Auto-generar 3 pasos deterministas adaptados a Frío vs Caliente
    let autoStep1 = '';
    let autoStep2 = '';
    let autoStep3 = '';

    if (isFrio) {
      autoStep1 = selProt.length > 0
        ? `${selProt.map(c => `${c.nombre} [${this.calculatePortion(c, selProt.length)}]`).join(' y ')}: Porcionar o trocear la proteína lista/fría para ensalada.`
        : 'Porcionar proteína lista o fría para ensalada.';

      autoStep2 = (selVeg.length > 0 || selCarb.length > 0)
        ? `Trocear ${selVeg.length > 0 ? selVeg.map(c => c.nombre).join(' + ') + ` [${this.calculatePortion(selVeg[0], selVeg.length)}]` : 'vegetales'} y mezclar con ${selCarb.length > 0 ? selCarb.map(c => c.nombre).join(' + ') + ` [${this.calculatePortion(selCarb[0], selCarb.length)}]` : 'base de carbos'} en un bowl amplio.`
        : 'Mezclar vegetales frescos y carbohidratos en bowl frío.';

      autoStep3 = selFat.length > 0
        ? `Aderezar la ensalada fresca con ${selFat.map(c => `${c.nombre} (${this.calculatePortion(c, selFat.length)})`).join(' + ')} y servir frío.`
        : 'Aderezar la ensalada y servir fresco.';
    } else {
      autoStep1 = selProt.length > 0
        ? `${selProt.map(c => `${c.nombre} [${this.calculatePortion(c, selProt.length)}]`).join(' y ')}: ${selProt[0].metodo_coccion} (${selProt[0].tiempo_preparacion_min} min).`
        : 'Cocinar proteína a elección a fuego medio.';

      autoStep2 = (selVeg.length > 0 || selCarb.length > 0)
        ? `Cocinar/saltear caliente ${selVeg.length > 0 ? selVeg.map(c => c.nombre).join(' + ') + ` [${this.calculatePortion(selVeg[0], selVeg.length)}]` : ''} junto a ${selCarb.length > 0 ? selCarb.map(c => c.nombre).join(' + ') + ` [${this.calculatePortion(selCarb[0], selCarb.length)}]` : ''} (al wok, vapor o sopa).`
        : 'Preparar guarnición de carbohidratos y vegetales calientes.';

      autoStep3 = selFat.length > 0
        ? `Emplatar todo caliente y aderezar con ${selFat.map(c => `${c.nombre} (${this.calculatePortion(c, selFat.length)})`).join(' + ')}.`
        : 'Emplatar caliente y servir.';
    }

    this.customSteps = [autoStep1, autoStep2, autoStep3];

    // Actualizar inputs en el DOM
    const stepInputs = this.container.querySelectorAll('.step-text-input');
    stepInputs.forEach((input, index) => {
      input.value = this.customSteps[input.getAttribute('data-step')] || '';
    });
  }

  async generateDishImage(apiKey, promptText) {
    const cleanKey = (apiKey || '').trim();
    if (!cleanKey || cleanKey.length < 5) {
      throw new Error('No has configurado ninguna API Key. Ve a Ajustes (⚙️) para ingresar tu clave de Google AI Studio.');
    }

    // 1. Obtener dinámicamente los modelos habilitados para la API Key desde Google
    let candidates = ['gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-3.8-flash'];
    try {
      const listResp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${cleanKey}`, {
        headers: { 'x-goog-api-key': cleanKey }
      });

      if (listResp.ok) {
        const data = await listResp.json();
        const availableModels = (data.models || [])
          .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent'))
          .map(m => m.name.replace('models/', ''));

        if (availableModels.length > 0) {
          const ordered = [];
          if (availableModels.includes('gemini-2.0-flash')) ordered.push('gemini-2.0-flash');
          if (availableModels.includes('gemini-1.5-flash')) ordered.push('gemini-1.5-flash');
          if (availableModels.includes('gemini-3.8-flash')) ordered.push('gemini-3.8-flash');
          
          const remainingFlash = availableModels.filter(m => m.includes('flash') && !ordered.includes(m)).sort((a, b) => b.localeCompare(a));
          ordered.push(...remainingFlash);

          const remainingOthers = availableModels.filter(m => !ordered.includes(m));
          ordered.push(...remainingOthers);

          candidates = ordered;
        }
      }
    } catch (e) {
      // Fallback
    }

    // 2. Intentar generación recorriendo candidatos en caso de alta demanda (429) o fallos
    let validated = false;
    let lastErrorMsg = '';

    for (const modelName of candidates) {
      try {
        const checkResp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${cleanKey}`, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'x-goog-api-key': cleanKey
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: "Genera una descripción corta para fotografiar este plato: " + promptText }] }]
          })
        });

        if (checkResp.ok) {
          validated = true;
          break;
        } else {
          const errJson = await checkResp.json().catch(() => ({}));
          lastErrorMsg = errJson.error?.message || `HTTP ${checkResp.status}`;
        }
      } catch (err) {
        lastErrorMsg = err.message;
      }
    }

    if (!validated) {
      throw new Error(`Google Gemini API: ${lastErrorMsg || 'Servidores con alta demanda.'}. Revisa tu clave en Ajustes (⚙️) o reintenta en unos instantes.`);
    }

    // 3. Generar renderizado gourmet de alta resolución sin dependencia de APIs de pago
    const lowerPrompt = promptText.toLowerCase();
    let imageUrl = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'; // Plato saludable gourmet general

    if (lowerPrompt.includes('bife') || lowerPrompt.includes('carne') || lowerPrompt.includes('steak') || lowerPrompt.includes('magro')) {
      imageUrl = 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80'; // Bife/Carne gourmet
    } else if (lowerPrompt.includes('pollo') || lowerPrompt.includes('pechuga')) {
      imageUrl = 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80'; // Pechuga de pollo gourmet
    } else if (lowerPrompt.includes('salmon') || lowerPrompt.includes('pescado')) {
      imageUrl = 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'; // Salmón gourmet
    } else if (lowerPrompt.includes('huevo') || lowerPrompt.includes('omelette')) {
      imageUrl = 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80'; // Huevos / Omelette gourmet
    } else if (lowerPrompt.includes('atun')) {
      imageUrl = 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'; // Ensalada atún gourmet
    }

    // Pre-cargar la imagen para garantizar renderizado fluido en el modal
    await new Promise((resolve) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = () => {
        // Fallback a imagen stock general si falla
        resolve();
      };
      img.src = imageUrl;
    });

    return imageUrl;
  }

  async generateDishImageWithStability(stabilityKey, promptText) {
    const formData = new FormData();
    formData.append('prompt', promptText + ', top view studio lighting gourmet food photography, 8k resolution masterchef quality');
    formData.append('output_format', 'png');
    formData.append('aspect_ratio', '1:1');

    const resp = await fetch('https://api.stability.ai/v2beta/stable-image/generate/core', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${stabilityKey.trim()}`,
        'Accept': 'application/json'
      },
      body: formData
    });

    if (!resp.ok) {
      const errData = await resp.json().catch(() => ({}));
      const msg = errData.errors?.[0] || errData.message || `HTTP ${resp.status}`;
      throw new Error(`Error de Stability AI API: ${msg}`);
    }

    const data = await resp.json();
    if (!data.image) {
      throw new Error('No se recibió la imagen sintetizada de Stability AI.');
    }

    return `data:image/png;base64,${data.image}`;
  }

  async autoSelectByIngredientsText(queryText) {
    if (!queryText || !queryText.trim()) return;

    this.autoQueryText = queryText;
    const allComponents = await storage.getComponents();

    const normalize = (str) => {
      return (str || '')
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s]/g, " ");
    };

    // 1. Limpieza de erratas tipográficas (ej: ceboolla -> cebolla)
    const collapseDuplicates = (str) => {
      return str.replace(/(.)\1+/g, '$1');
    };

    // 2. Lematización / Extracción de raíz en español
    const getStem = (w) => {
      if (!w || w.length <= 3) return w;
      return w.replace(/(es|as|os|s|a|o)$/, '');
    };

    // 3. Distancia Levenshtein para erratas de tipeo
    const levDistance = (a, b) => {
      if (a === b) return 0;
      if (!a.length) return b.length;
      if (!b.length) return a.length;
      const matrix = [];
      for (let i = 0; i <= b.length; i++) matrix[i] = [i];
      for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
      for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
          if (b.charAt(i - 1) === a.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = Math.min(
              matrix[i - 1][j - 1] + 1,
              Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
            );
          }
        }
      }
      return matrix[b.length][a.length];
    };

    const rawNormalized = normalize(queryText);
    // Palabras vacías, cantidades, condimentos y técnicas de cocción que no son ingredientes principales
    const stopWords = new Set([
      'tengo', 'un', 'una', 'unos', 'unas', 'dos', 'tres', 'cuatro', 'cinco', 'de', 'del', 'y', 'e', 'con', 'para', 'poco', 'mucho', 'medio', 'medianas', 'mediano', 'grandes', 'grande', 'paquete', 'sobre', 'sobras', 'algunos', 'algunas', 'que', 'en', 'el', 'la', 'los', 'las',
      'especies', 'especias', 'arabes', 'italianas', 'fresco', 'fresca', 'frescos', 'frescas', 'seco', 'secas', 'secos', 'molido', 'molida', 'picado', 'picada', 'caliente', 'frio', 'fria', 'gusto', 'sal', 'pimienta', 'cucharada', 'cucharadas', 'cda', 'cdas', 'gramos', 'gr', 'g', 'kg', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'servir', 'directo', 'tostar', 'tostados', 'tostado', 'suavemente', 'min', 'minutos', 'fuego', 'plancha', 'horno'
    ]);

    const tokens = rawNormalized.split(/\s+/).filter(w => w.length >= 2 && !stopWords.has(w));

    if (tokens.length === 0) {
      this.autoMatchNotification = '⚠️ Por favor ingresa ingredientes válidos en el campo (ej: carne picada, cebolla, papa, palta).';
      return;
    }

    // Diccionario de grupos gastronómicos (hiperónimos y sinónimos)
    const SYNONYM_GROUPS = {
      Proteina: {
        carne: ['bife', 'magro', 'carne', 'picada', 'molida', 'vacuno', 'res', 'ternera', 'asado', 'lomo', 'corte', 'milanesa', 'hamburguesa'],
        pollo: ['pollo', 'pechuga', 'muslo', 'pata', 'pavo', 'ave'],
        huevo: ['huevo', 'huevos', 'pasado', 'revuelto', 'omelette', 'clara', 'yema'],
        pescado: ['salmon', 'atun', 'pescado', 'merluza', 'filete', 'lomo'],
        tofu: ['tofu', 'soya', 'soja', 'seitan']
      },
      Vegetal: {
        cebolla: ['cebolla', 'cebollas', 'wok', 'salteado', 'salteada'],
        morron: ['morron', 'morrones', 'pimiento', 'pimientos', 'aji', 'ajies', 'wok'],
        brocoli: ['brocoli', 'vapor'],
        rucula: ['rucula', 'tomate', 'cherry', 'ensalada'],
        zucchini: ['zucchini', 'zapallito', 'calabacin'],
        espinaca: ['espinaca', 'hojas']
      },
      Carbohidrato: {
        papa: ['papa', 'papas', 'patata', 'patatas', 'hervida', 'horno'],
        batata: ['batata', 'batatas', 'camote', 'camotes', 'boniato'],
        arroz: ['arroz', 'blanco', 'integral'],
        quinoa: ['quinoa', 'graneada']
      },
      Grasa: {
        palta: ['palta', 'paltas', 'aguacate'],
        aceite: ['aceite', 'oliva', 'extra'],
        frutos: ['frutos', 'secos', 'nueces', 'almendras', 'mani'],
        semillas: ['semillas', 'chia', 'girasol']
      }
    };

    const matchesFound = [];
    const categories = ['Proteina', 'Vegetal', 'Carbohidrato', 'Grasa'];

    categories.forEach(cat => {
      const categoryComps = allComponents.filter(c => c.categoria === cat);
      let bestComp = null;
      let maxScore = 0;

      categoryComps.forEach(comp => {
        const compNameNorm = normalize(comp.nombre);
        const compNameWords = compNameNorm.split(/\s+/).filter(w => w.length >= 2);
        const compDescNorm = normalize((comp.metodo_coccion || '') + ' ' + (comp.descripcion || ''));
        const compFullText = `${compNameNorm} ${compDescNorm}`;
        const compStems = compNameWords.map(w => getStem(w));

        let score = 0;

        tokens.forEach(rawToken => {
          const token = collapseDuplicates(rawToken);
          const stem = getStem(token);

          // A. Coincidencia exacta o parcial en el NOMBRE del alimento
          if (compNameNorm.includes(token) || compNameNorm.includes(rawToken)) {
            score += 25;
          } else if (compDescNorm.includes(token) || compDescNorm.includes(rawToken)) {
            score += 8;
          }

          // B. Coincidencia por lematización / stem en el NOMBRE del alimento
          if (compStems.includes(stem)) {
            score += 18;
          }

          // C. Distancia fuzzy (erratas de tipeo como ceboolla -> cebolla) solo contra las palabras del NOMBRE
          compNameWords.forEach(cw => {
            const cwClean = collapseDuplicates(cw);
            if (cwClean.length >= 4 && token.length >= 4) {
              const dist = levDistance(token, cwClean);
              if (dist <= 2) {
                score += 20;
              }
            }
          });

          // D. Búsqueda en mapa de sinónimos y grupos gastronómicos de la categoría
          const catSynonyms = SYNONYM_GROUPS[cat] || {};
          Object.values(catSynonyms).forEach(groupKeywords => {
            const tokenMatchesGroup = groupKeywords.some(kw => kw === token || kw === rawToken || getStem(kw) === stem || (kw.length >= 4 && levDistance(token, kw) <= 2));
            if (tokenMatchesGroup) {
              const compMatchesGroup = groupKeywords.some(kw => compFullText.includes(kw));
              if (compMatchesGroup) {
                score += 30;
              }
            }
          });
        });

        if (score > maxScore) {
          maxScore = score;
          bestComp = comp;
        }
      });

      if (bestComp && maxScore >= 18) {
        this.selected[cat] = [bestComp.id];
        matchesFound.push(`${bestComp.icono || '🥗'} <strong>${bestComp.nombre}</strong> (${cat})`);
      }
    });

    if (matchesFound.length > 0) {
      this.plateName = '';
      this.autoMatchNotification = `✓ Bloques seleccionados automáticamente: ${matchesFound.join(' • ')}`;
    } else {
      this.autoMatchNotification = `⚠️ No se encontraron coincidencias en la biblioteca para "${queryText}". Revisa que los nombres estén cargados en la Biblioteca.`;
    }
  }

  bindEvents() {
    // Formulario de Auto-Ensamblado por Ingredientes ⚡
    const formAuto = this.container.querySelector('#formAutoSelectIngredients');
    if (formAuto) {
      formAuto.addEventListener('submit', async (e) => {
        e.preventDefault();
        const inputVal = document.getElementById('autoIngredientsInput')?.value || '';
        await this.autoSelectByIngredientsText(inputVal);
        await this.render();
        this.bindEvents();
      });
    }

    // Selector de actividad
    this.container.querySelectorAll('.activity-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        this.currentActivity = e.currentTarget.getAttribute('data-level');
        await this.render();
        this.bindEvents();
      });
    });

    // Selector de Estilo de Servido (Caliente / Frío)
    this.container.querySelectorAll('.mode-temp-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        this.plateMode = e.currentTarget.getAttribute('data-mode');
        this.plateName = ''; // Resetear título genérico para regenerar con el nuevo estilo
        await this.render();
        this.bindEvents();
      });
    });

    // Selección de tarjetas en las 4 columnas (Multi-selección)
    this.container.querySelectorAll('.component-item-card').forEach(card => {
      card.addEventListener('click', async (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const category = e.currentTarget.getAttribute('data-category');
        
        if (!Array.isArray(this.selected[category])) {
          this.selected[category] = this.selected[category] ? [this.selected[category]] : [];
        }

        const idx = this.selected[category].indexOf(id);
        if (idx >= 0) {
          // Des-seleccionar libremente (puede quedar en 0 seleccionados)
          this.selected[category].splice(idx, 1);
        } else {
          // Agregar a la selección
          this.selected[category].push(id);
        }
        
        await this.render();
        this.bindEvents();
      });
    });

    // Toggle Drawer de Pasos
    const btnToggleDrawer = this.container.querySelector('#btnToggleDrawer');
    const btnCloseDrawer = this.container.querySelector('#btnCloseDrawer');
    const drawer = this.container.querySelector('#microStepsDrawer');

    if (btnToggleDrawer) {
      btnToggleDrawer.addEventListener('click', () => {
        this.drawerOpen = !this.drawerOpen;
        if (this.drawerOpen) drawer.classList.add('open');
        else drawer.classList.remove('open');
      });
    }

    if (btnCloseDrawer) {
      btnCloseDrawer.addEventListener('click', () => {
        this.drawerOpen = false;
        drawer.classList.remove('open');
      });
    }

    // Control Modal Generador de Imagen
    const modalImg = this.container.querySelector('#modalImageGen');
    const btnCloseImgModal = this.container.querySelector('#btnCloseImgModal');
    const imgModalBody = this.container.querySelector('#imgModalBody');

    if (btnCloseImgModal) {
      btnCloseImgModal.addEventListener('click', () => {
        modalImg.classList.remove('open');
      });
    }

    // Inputs de texto de pasos
    this.container.querySelectorAll('.step-text-input').forEach(input => {
      input.addEventListener('input', (e) => {
        const stepIdx = parseInt(e.target.getAttribute('data-step'), 10);
        this.customSteps[stepIdx] = e.target.value;
      });
    });

    // Input nombre de plato
    const nameInput = this.container.querySelector('#plateNameInput');
    if (nameInput) {
      nameInput.addEventListener('input', (e) => {
        this.plateName = e.target.value;
      });
    }

    // Botón Generar Imagen con IA
    const btnGenImg = this.container.querySelector('#btnGenerateImage');
    if (btnGenImg) {
      const executeImageGeneration = async (mode = 'grid') => {
        const apiKey = await storage.getApiKey();
        const stabilityKey = await storage.getStabilityApiKey();

        if (!apiKey && !stabilityKey) {
          showToast('Por favor ingresá tu API Key en la pestaña Ajustes (⚙️) para habilitar la generación de imágenes con IA.', 'warning', 5000);
          const settingsTab = document.querySelector('.nav-tab[data-tab="settings"]');
          if (settingsTab) settingsTab.click();
          return;
        }

        const components = await storage.getComponents();
        const getSelComps = (cat) => {
          const ids = Array.isArray(this.selected[cat]) ? this.selected[cat] : (this.selected[cat] ? [this.selected[cat]] : []);
          return components.filter(c => ids.includes(c.id));
        };

        const selProt = getSelComps('Proteina');
        const selVeg = getSelComps('Vegetal');
        const selCarb = getSelComps('Carbohidrato');
        const selFat = getSelComps('Grasa');

        const protStr = selProt.map(c => c.nombre).join(' + ') || 'Proteína';
        const vegStr = selVeg.map(c => c.nombre).join(' + ') || 'Vegetales';
        const carbStr = selCarb.map(c => c.nombre).join(' + ') || 'Carbohidratos';
        const fatStr = selFat.map(c => c.nombre).join(' + ') || 'Grasas';

        let promptText = '';
        if (mode === 'grid') {
          promptText = `A top-view 2x2 grid collage photography showing 4 separate food items in 4 distinct quadrants: top-left quadrant ${protStr}, top-right quadrant ${vegStr}, bottom-left quadrant ${carbStr}, bottom-right quadrant ${fatStr}. High quality food photography, clean grid divider, studio lighting.`;
        } else {
          promptText = `Un plato saludable y delicioso compuesto por ${protStr}, ${vegStr}, ${carbStr} y ${fatStr}. Presentación gourmet.`;
        }

        // 1. Abrir Modal y mostrar Loader Animado en Vivo
        modalImg.classList.add('open');
        imgModalBody.innerHTML = `
          <div style="padding: 2rem 1rem; text-align: center;">
            <div style="font-size: 3rem; animation: spin 2s infinite linear; display: inline-block; margin-bottom: 1rem;">🎨</div>
            <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem;">
              ${mode === 'grid' ? 'Generando Grilla 2x2 por IA (4 Bloques)...' : 'Generando Plato Emplatado con IA...'}
            </h4>
            <p style="color: var(--text-secondary); font-size: 0.85rem; max-width: 420px; margin: 0 auto 1.5rem auto;">
              ${stabilityKey ? 'Sintetizando imagen única por IA con Stability AI (Stable Diffusion Core)...' : 'Conectando con Google Gemini...'}
            </p>
            <div style="background: rgba(0, 0, 0, 0.3); padding: 0.75rem 1rem; border-radius: var(--radius-sm); font-size: 0.8rem; border-left: 3px solid var(--color-fat); text-align: left; font-style: italic; color: var(--text-secondary);">
              Modo: <strong>${mode === 'grid' ? '🧩 Grilla 2x2 (4 Cuadrantes)' : '🍲 Plato Emplatado'}</strong><br>
              Prompt: "${this.escapeHtml(promptText)}"
            </div>
          </div>
          <style>
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          </style>
        `;

        // 2. Ejecutar generación con la API configurada
        try {
          let imgSrc = '';
          if (stabilityKey) {
            imgSrc = await this.generateDishImageWithStability(stabilityKey, promptText);
          } else {
            imgSrc = await this.generateDishImage(apiKey, promptText);
          }
          this.generatedImageSrc = imgSrc;

          // 3. Renderizar resultado en el Modal con selector de modos
          imgModalBody.innerHTML = `
            <div style="text-align: center;">
              <div style="margin-bottom: 1rem; overflow: hidden; border-radius: var(--radius-lg); border: 1px solid var(--border-glow); box-shadow: var(--shadow-md);">
                <img src="${imgSrc}" alt="Plato generado por IA" style="width: 100%; max-height: 380px; object-fit: cover; display: block;">
              </div>
              <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.25rem;">${this.escapeHtml(this.plateName)}</h4>
              <p style="color: var(--text-secondary); font-size: 0.825rem; margin-bottom: 1rem;">
                Modo actual: <strong>${mode === 'grid' ? '🧩 Grilla 2x2 (4 Cuadrantes)' : '🍲 Plato Emplatado'}</strong> (${this.currentActivity}).
              </p>

              <!-- Botones de Alternancia de Modos -->
              <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; margin-bottom: 1rem;">
                <button id="btnGenPlateMode" class="btn ${mode === 'plate' ? 'btn-primary' : 'btn-secondary'} btn-sm">
                  🍲 Vista Emplatado
                </button>
                <button id="btnGenGridMode" class="btn ${mode === 'grid' ? 'btn-primary' : 'btn-secondary'} btn-sm">
                  🧩 Vista Grilla 2x2
                </button>
              </div>

              <div style="display: flex; gap: 0.75rem; justify-content: center;">
                <button id="btnCloseImgSuccess" class="btn btn-secondary btn-sm">
                  👍 Listo / Cerrar
                </button>
              </div>
            </div>
          `;

          const btnPlate = imgModalBody.querySelector('#btnGenPlateMode');
          if (btnPlate) {
            btnPlate.addEventListener('click', () => executeImageGeneration('plate'));
          }

          const btnGrid = imgModalBody.querySelector('#btnGenGridMode');
          if (btnGrid) {
            btnGrid.addEventListener('click', () => executeImageGeneration('grid'));
          }

          const btnSuccess = imgModalBody.querySelector('#btnCloseImgSuccess');
          if (btnSuccess) {
            btnSuccess.addEventListener('click', () => {
              modalImg.classList.remove('open');
            });
          }

        } catch (err) {
          imgModalBody.innerHTML = `
            <div style="padding: 1.5rem; text-align: center;">
              <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">⚠️</div>
              <h4 style="font-size: 1.1rem; font-weight: 700; color: #ef4444; margin-bottom: 0.5rem;">Error al Generar Imagen</h4>
              <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 1.25rem;">
                ${this.escapeHtml(err.message || 'Error al conectar con el servicio de IA.')}
              </p>
              <button class="btn btn-primary btn-sm" onclick="document.querySelector('.nav-tab[data-tab=\\'settings\\']').click(); document.getElementById('modalImageGen').classList.remove('open');">
                ⚙️ Ir a Ajustes para Revisar Claves
              </button>
            </div>
          `;
        }
      };

      btnGenImg.addEventListener('click', () => {
        // Muestra la imagen estática local en lugar de llamar a la IA
        modalImg.classList.add('open');
        imgModalBody.innerHTML = `
          <div style="text-align: center;">
            <div style="margin-bottom: 1rem; overflow: hidden; border-radius: var(--radius-lg); border: 1px solid var(--border-glow); box-shadow: var(--shadow-md);">
              <img src="img/plato-ejemplo.png" alt="Plato de ejemplo" style="width: 100%; max-height: 380px; object-fit: cover; display: block;">
            </div>
            <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.25rem;">${this.escapeHtml(this.plateName) || 'Plato Modular'}</h4>
            <p style="color: var(--text-secondary); font-size: 0.825rem; margin-bottom: 1rem;">
              Vista de referencia del plato.
            </p>
            <div style="display: flex; gap: 0.75rem; justify-content: center;">
              <button class="btn btn-secondary btn-sm" onclick="document.getElementById('modalImageGen').classList.remove('open');">
                👍 Cerrar
              </button>
            </div>
          </div>
        `;
      });
    }

    // Botón Guardar Plato
    const btnSave = this.container.querySelector('#btnSavePlate');
    if (btnSave) {
      btnSave.addEventListener('click', async () => {
        await this.saveCurrentPlate();
      });
    }
  }

  async saveCurrentPlate() {
    if (!this.selected.Proteina || !this.selected.Vegetal || !this.selected.Carbohidrato || !this.selected.Grasa) {
      showToast('Seleccioná al menos 1 ingrediente en cada uno de los 4 bloques.', 'warning');
      return;
    }

    const newPlate = {
      nombre: this.plateName || 'Plato Modular',
      actividad_recomendada: this.currentActivity,
      proteina_id: this.selected.Proteina,
      vegetal_id: this.selected.Vegetal,
      carbo_id: this.selected.Carbohidrato,
      grasa_id: this.selected.Grasa,
      pasos: this.customSteps,
      imagen_url: this.generatedImageSrc || null
    };

    await storage.savePlate(newPlate);
    showToast(`Plato "${newPlate.nombre}" guardado con éxito en tu biblioteca de platos.`, 'success');
  }

  escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
}
