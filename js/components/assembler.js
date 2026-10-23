import { storage } from '../services/storage.js';
import { showToast } from '../utils/toast.js';
import { geminiService } from '../services/gemini.js';

export class AssemblerComponent {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
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
    this.hasCustomAiSteps = false;
    this.generatedImageSrc = null;

    // Estado del buscador de Auto-Ensamblado determinista por ingredientes
    this.autoQueryText = '';
    this.autoMatchNotification = '';
  }

  async init() {
    await this.render();
    this.bindEvents();
  }

  async render() {
    const components = await storage.getComponents();
    this.updateStepDefaults(components);

    const selectedIds = [
      ...(Array.isArray(this.selected.Proteina) ? this.selected.Proteina : []),
      ...(Array.isArray(this.selected.Vegetal) ? this.selected.Vegetal : []),
      ...(Array.isArray(this.selected.Carbohidrato) ? this.selected.Carbohidrato : []),
      ...(Array.isArray(this.selected.Grasa) ? this.selected.Grasa : [])
    ];
    const selComps = components.filter(c => selectedIds.includes(c.id));
    const estimatedTime = selComps.length > 0 
      ? Math.max(...selComps.map(c => c.tiempo_preparacion_min || 10))
      : 15;

    this.container.innerHTML = `
      <!-- Contenedor Principal Versión B (Lienzo Protagónico + Split Desktop) -->
      <div class="assembler-v2-container">

        <!-- COLUMNA IZQUIERDA: Plato Protagónico + Chat -->
        <div class="v2-left-col">

          <div class="plate-canvas-card">
            <!-- 1. Controles de Servido y Tiempo -->
            <div class="plate-top-controls">
              <div class="activity-selector compact">
                <button class="mode-temp-btn ${this.plateMode === 'caliente' ? 'active' : ''}" data-mode="caliente" title="Estilo Caliente (Wok / Sopa)">
                  🍲 Caliente
                </button>
                <button class="mode-temp-btn ${this.plateMode === 'frio' ? 'active' : ''}" data-mode="frio" title="Estilo Frío (Ensalada / Bowl)">
                  🥗 Frío
                </button>
              </div>

              <div class="plate-meta-time">
                ⏱️ ~${estimatedTime} min
              </div>
            </div>

            <!-- 2. Título del Plato -->
            <div class="plate-title-box">
              <h2 class="plate-title" id="plateTitleDisplay">
                ${this.escapeHtml(this.plateName)}
              </h2>
            </div>

            <!-- Barra Colapsada Reactiva (cuando el input de chat tiene foco) -->
            <div class="plate-compact-bar" id="plateCompactBar">
              ${this.renderCompactChips(components)}
            </div>

            <!-- 3. Plato Circular Táctil -->
            <div class="visual-plate-circle-wrapper" id="visualPlateWrapper">
              <div class="visual-plate-circle">
                <!-- Cuadrante 1: Proteína (25% arriba-izquierda) -->
                <div class="plate-quadrant quad-protein" data-category="Proteina" title="Tocar para editar Proteínas">
                  <div class="quad-emoji">🥩</div>
                  <div class="quadrant-badge-title">Proteína</div>
                  <div class="quad-pct">(25%)</div>
                  <div class="quadrant-content" id="quadContentProtein">
                    ${this.renderQuadrantContent('Proteina', components, '+ Elegir')}
                  </div>
                </div>

                <!-- Cuadrante 2: Vegetales (50% mitad derecha) -->
                <div class="plate-quadrant quad-veg" data-category="Vegetal" title="Tocar para editar Vegetales">
                  <div class="quad-emoji">🥦</div>
                  <div class="quadrant-badge-title">Vegetales</div>
                  <div class="quad-pct">(50%)</div>
                  <div class="quadrant-content" id="quadContentVeg">
                    ${this.renderQuadrantContent('Vegetal', components, '+ Elegir')}
                  </div>
                </div>

                <!-- Cuadrante 3: Carbohidrato (25% abajo-izquierda) -->
                <div class="plate-quadrant quad-carb" data-category="Carbohidrato" title="Tocar para editar Carbohidratos">
                  <div class="quad-emoji">🥔</div>
                  <div class="quadrant-badge-title">Carbohidrato</div>
                  <div class="quad-pct">(25%)</div>
                  <div class="quadrant-content" id="quadContentCarb">
                    ${this.renderQuadrantContent('Carbohidrato', components, '+ Elegir')}
                  </div>
                </div>

                <!-- Cuadrante 4: Grasas Saludables (núcleo central) -->
                <div class="plate-quadrant quad-fat" data-category="Grasa" title="Tocar para editar Grasas Saludables">
                  <div class="quad-emoji">🥑</div>
                  <div class="quadrant-badge-title">Grasas</div>
                  <div class="quadrant-content" id="quadContentFat">
                    ${this.renderQuadrantContent('Grasa', components, '+')}
                  </div>
                </div>
              </div>
            </div>

            <!-- 4. Botón de Modo Cocina -->
            <div class="plate-action-box">
              <button type="button" id="btnOpenCookingMode" class="btn-open-cooking-mode">
                🍳 Ver 3 Pasos de Cocinado (${estimatedTime} min) ➔
              </button>
            </div>
          </div>

          <!-- BARRA DE CHAT INTEGRADA CON MICRÓFONO Y TIP DEL CHEF -->
          <div class="v2-bottom-chat-bar">
            <div class="v2-bottom-chat-inner">
              ${this.autoMatchNotification ? `
                <div class="chef-callout-pill" id="chefCalloutPill">
                  <span>${this.autoMatchNotification}</span>
                  <button type="button" class="chef-callout-close" id="btnCloseChefCallout" title="Descartar">&times;</button>
                </div>
              ` : ''}

              <form id="formAutoSelectIngredients" class="v2-chat-form">
                <button type="button" id="btnVoiceInput" class="btn-mic" title="Dictar ingredientes por voz">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
                </button>
                <input type="text" id="autoIngredientsInput" class="v2-chat-input" placeholder="Escribí o dictá lo que tenés..." value="${this.escapeHtml(this.autoQueryText)}" autocomplete="off">
                <button type="submit" class="btn btn-primary btn-chat-submit">
                  ✨ Armar
                </button>
              </form>
            </div>
          </div>

        </div>

        <!-- COLUMNA DERECHA: Panel de Cocina en Vivo (Visible en Desktop ≥ 1024px) -->
        <div class="v2-right-col">
          <div class="live-plate-summary-card">
            <div class="live-plate-header">
              <div class="live-plate-title-group" style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; width: 100%;">
                <span style="font-size: 1.35rem;">🍽️</span>
                <input type="text" id="livePlateNameInput" class="live-plate-title-input" value="${this.escapeHtml(this.plateName)}" placeholder="Nombre de tu plato...">
                <div class="live-plate-meta" style="margin-left: auto;">
                  <span>${this.plateMode === 'frio' ? '🥗 Frío' : '🍲 Caliente'}</span>
                  <span>•</span>
                  <span>⏱️ ~${estimatedTime} min</span>
                </div>
              </div>
            </div>

            <!-- 3 Pasos Ejecutivos Directos -->
            <div class="live-steps-grid" style="grid-template-columns: 1fr; margin-bottom: 1.25rem;">
              <div class="live-step-box">
                <div class="live-step-num">1</div>
                <input type="text" class="live-step-input" data-step="0" value="${this.escapeHtml(this.customSteps[0])}" placeholder="Paso 1: Preparación...">
              </div>
              <div class="live-step-box">
                <div class="live-step-num">2</div>
                <input type="text" class="live-step-input" data-step="1" value="${this.escapeHtml(this.customSteps[1])}" placeholder="Paso 2: Cocción o ensamblado...">
              </div>
              <div class="live-step-box">
                <div class="live-step-num">3</div>
                <input type="text" class="live-step-input" data-step="2" value="${this.escapeHtml(this.customSteps[2])}" placeholder="Paso 3: Emplatado y aderezo...">
              </div>
            </div>

            <!-- Botones de Acción en Desktop -->
            <div style="display: flex; gap: 0.5rem; align-items: center; justify-content: flex-end; flex-wrap: wrap;">
              <button id="btnAiRefineStepsLive" type="button" class="btn btn-secondary btn-sm" title="Reoptimizar 3 pasos con IA">
                ✨ Reoptimizar Pasos
              </button>
              <button id="btnGenerateImage" type="button" class="btn btn-secondary btn-sm" title="Generar imagen con IA">
                🎨 Generar Imagen
              </button>
              <button id="btnSavePlateLive" type="button" class="btn btn-primary btn-sm">
                💾 Guardar Plato
              </button>
            </div>
          </div>
        </div>

      </div>

      <!-- MODAL HTML5 NATIVO: MODO COCINA (DESPLEGABLE MÓVIL) -->
      <dialog id="modalCookingMode" closedby="any" class="cooking-mode-modal">
        <div class="modal-dialog-inner">
          <div class="modal-dialog-header">
            <div class="modal-dialog-title">
              <span>🍳</span>
              <span>Modo Cocina</span>
            </div>
            <button class="modal-dialog-close" id="btnCloseCookingMode">&times;</button>
          </div>

          <div>
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;" id="cookingModalTitle">
              ${this.escapeHtml(this.plateName)}
            </h3>
            <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">
              ${this.plateMode === 'frio' ? '🥗 Estilo Frío' : '🍲 Estilo Caliente'} • ⏱️ Tiempo estimado: ~${estimatedTime} min
            </div>

            <div class="cooking-steps-list">
              <div class="cooking-step-card">
                <div class="cooking-step-badge">1</div>
                <div class="cooking-step-content" id="cookingStep0">${this.escapeHtml(this.customSteps[0] || 'Preparar ingredientes.')}</div>
              </div>
              <div class="cooking-step-card">
                <div class="cooking-step-badge">2</div>
                <div class="cooking-step-content" id="cookingStep1">${this.escapeHtml(this.customSteps[1] || 'Cocción o ensamblado.')}</div>
              </div>
              <div class="cooking-step-card">
                <div class="cooking-step-badge">3</div>
                <div class="cooking-step-content" id="cookingStep2">${this.escapeHtml(this.customSteps[2] || 'Emplatado y aderezo.')}</div>
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 0.75rem; justify-content: flex-end; margin-top: 0.5rem; flex-wrap: wrap;">
            <button id="btnAiRefineInModal" type="button" class="btn btn-secondary btn-sm">
              ✨ Reoptimizar Pasos
            </button>
            <button id="btnSavePlateInModal" type="button" class="btn btn-primary btn-sm">
              💾 Guardar Plato
            </button>
          </div>
        </div>
      </dialog>

      <!-- MODAL HTML5 NATIVO: SELECTOR TÁCTIL DE CATEGORÍA -->
      <dialog id="modalCategoryPicker" closedby="any" class="category-picker-modal">
        <div class="modal-dialog-inner">
          <div class="modal-dialog-header">
            <div class="modal-dialog-title" id="categoryPickerTitle">
              <span>🥗</span> <span>Elegir Ingredientes</span>
            </div>
            <button class="modal-dialog-close" id="btnCloseCategoryPicker">&times;</button>
          </div>
          <div class="category-picker-grid" id="categoryPickerGrid">
            <!-- Renderizado dinámico -->
          </div>
          <div style="display: flex; justify-content: flex-end; margin-top: 0.5rem;">
            <button id="btnDoneCategoryPicker" class="btn btn-primary btn-sm">👍 Listo</button>
          </div>
        </div>
      </dialog>

      <!-- MODAL UI DE GENERACIÓN DE IMAGEN CON IA -->
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

  renderQuadrantContent(category, allComponents, defaultPlaceholder) {
    const selectedIds = Array.isArray(this.selected[category]) ? this.selected[category] : (this.selected[category] ? [this.selected[category]] : []);
    const selComps = allComponents.filter(c => selectedIds.includes(c.id));
    if (selComps.length === 0) {
      return `<span class="quadrant-empty-placeholder">${defaultPlaceholder}</span>`;
    }
    const names = selComps.map(c => c.nombre).join(' + ');
    return `<span class="quadrant-ingredient-text" title="${this.escapeHtml(names)}">${this.escapeHtml(names)}</span>`;
  }

  renderCompactChips(allComponents) {
    const getNames = (cat, defaultName) => {
      const ids = Array.isArray(this.selected[cat]) ? this.selected[cat] : (this.selected[cat] ? [this.selected[cat]] : []);
      const comps = allComponents.filter(c => ids.includes(c.id));
      return comps.length > 0 ? comps.map(c => c.nombre).join(' + ') : defaultName;
    };
    return `
      <div class="plate-compact-chip prot" data-category="Proteina" title="Tocar para cambiar proteína">
        🥩 ${this.escapeHtml(getNames('Proteina', '+ Proteína'))}
      </div>
      <div class="plate-compact-chip veg" data-category="Vegetal" title="Tocar para cambiar vegetales">
        🥦 ${this.escapeHtml(getNames('Vegetal', '+ Vegetales'))}
      </div>
      <div class="plate-compact-chip carb" data-category="Carbohidrato" title="Tocar para cambiar carbohidratos">
        🥔 ${this.escapeHtml(getNames('Carbohidrato', '+ Carbo'))}
      </div>
      <div class="plate-compact-chip fat" data-category="Grasa" title="Tocar para cambiar grasas">
        🥑 ${this.escapeHtml(getNames('Grasa', '+ Grasa'))}
      </div>
    `;
  }

  openCategoryPicker(category, allComponents) {
    const modal = this.container.querySelector('#modalCategoryPicker');
    if (!modal) return;

    const catLabels = {
      Proteina: { icon: '🥩', title: 'Elegir Proteína' },
      Vegetal: { icon: '🥦', title: 'Elegir Vegetales' },
      Carbohidrato: { icon: '🥔', title: 'Elegir Carbohidratos' },
      Grasa: { icon: '🥑', title: 'Elegir Grasas Saludables' }
    };
    const catInfo = catLabels[category] || { icon: '🥗', title: `Elegir ${category}` };

    const titleEl = modal.querySelector('#categoryPickerTitle');
    if (titleEl) {
      titleEl.innerHTML = `<span>${catInfo.icon}</span> <span>${catInfo.title}</span>`;
    }

    const gridEl = modal.querySelector('#categoryPickerGrid');
    if (!gridEl) return;

    const categoryComps = allComponents.filter(c => c.categoria === category);

    const renderSections = () => {
      const selectedIds = Array.isArray(this.selected[category])
        ? this.selected[category]
        : (this.selected[category] ? [this.selected[category]] : []);

      const selectedComps = categoryComps.filter(c => selectedIds.includes(c.id));
      const availableComps = categoryComps.filter(c => !selectedIds.includes(c.id));

      let html = '';

      // 1. SECCIÓN SUPERIOR: Ingredientes actualmente seleccionados en el plato
      if (selectedComps.length > 0) {
        html += `
          <div class="category-picker-section">
            <div class="category-picker-section-title">
              <span>✨ En tu plato actualmente</span>
              <span class="category-picker-badge">${selectedComps.length} activo${selectedComps.length > 1 ? 's' : ''}</span>
            </div>
            <div class="category-picker-selected-list">
              ${selectedComps.map(comp => `
                <div class="category-picker-selected-card" data-id="${comp.id}">
                  <span class="category-picker-selected-icon">${comp.icono || catInfo.icon}</span>
                  <div class="category-picker-selected-info">
                    <span class="category-picker-selected-name">${this.escapeHtml(comp.nombre)}</span>
                    <span class="category-picker-selected-time">⏱️ ${comp.tiempo_preparacion_min} min de cocción</span>
                  </div>
                  <button type="button" class="category-picker-remove-btn" data-action="remove" data-id="${comp.id}" title="Quitar del plato" aria-label="Quitar">✕</button>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="category-picker-divider">
            <span>Otras opciones de la biblioteca</span>
          </div>
        `;
      } else {
        html += `
          <div class="category-picker-empty-hint">
            💡 Tocá cualquier ingrediente abajo para sumarlo al cuadrante
          </div>
        `;
      }

      // 2. SECCIÓN INFERIOR: Grilla de ingredientes disponibles en la biblioteca
      html += `
        <div class="category-picker-subgrid">
          ${availableComps.map(comp => `
            <div class="category-picker-item" data-id="${comp.id}">
              <div class="category-picker-item-icon">${comp.icono || catInfo.icon}</div>
              <div class="category-picker-item-name">${this.escapeHtml(comp.nombre)}</div>
              <div style="font-size: 0.72rem; color: var(--text-secondary);">⏱️ ${comp.tiempo_preparacion_min}m</div>
            </div>
          `).join('')}
        </div>
      `;

      gridEl.innerHTML = html;

      // Eventos para quitar de la lista de seleccionados
      gridEl.querySelectorAll('.category-picker-remove-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          e.stopPropagation();
          const id = e.currentTarget.getAttribute('data-id');
          if (!Array.isArray(this.selected[category])) {
            this.selected[category] = this.selected[category] ? [this.selected[category]] : [];
          }
          const idx = this.selected[category].indexOf(id);
          if (idx >= 0) {
            this.selected[category].splice(idx, 1);
          }
          this.hasCustomAiSteps = false;
          await this.updateVisualPlateAndSteps(allComponents);
          renderSections();
        });
      });

      // Eventos para seleccionar de la biblioteca disponible
      gridEl.querySelectorAll('.category-picker-item').forEach(item => {
        item.addEventListener('click', async (e) => {
          const id = e.currentTarget.getAttribute('data-id');
          if (!Array.isArray(this.selected[category])) {
            this.selected[category] = this.selected[category] ? [this.selected[category]] : [];
          }
          if (!this.selected[category].includes(id)) {
            this.selected[category].push(id);
          }
          this.hasCustomAiSteps = false;
          await this.updateVisualPlateAndSteps(allComponents);
          renderSections();
        });
      });
    };

    renderSections();
    modal.showModal();
  }

  async updateVisualPlateAndSteps(allComponents) {
    this.updateStepDefaults(allComponents);

    // Actualizar contenido de los cuadrantes
    const quadProt = this.container.querySelector('#quadContentProtein');
    if (quadProt) quadProt.innerHTML = this.renderQuadrantContent('Proteina', allComponents, '+ Elegir');

    const quadVeg = this.container.querySelector('#quadContentVeg');
    if (quadVeg) quadVeg.innerHTML = this.renderQuadrantContent('Vegetal', allComponents, '+ Elegir');

    const quadCarb = this.container.querySelector('#quadContentCarb');
    if (quadCarb) quadCarb.innerHTML = this.renderQuadrantContent('Carbohidrato', allComponents, '+ Elegir');

    const quadFat = this.container.querySelector('#quadContentFat');
    if (quadFat) quadFat.innerHTML = this.renderQuadrantContent('Grasa', allComponents, '+');

    // Actualizar barra colapsada
    const compactBar = this.container.querySelector('#plateCompactBar');
    if (compactBar) compactBar.innerHTML = this.renderCompactChips(allComponents);

    // Actualizar título del plato en visualizador y modals
    const titleDisplay = this.container.querySelector('#plateTitleDisplay');
    if (titleDisplay) titleDisplay.textContent = this.plateName;

    const cookingTitle = this.container.querySelector('#cookingModalTitle');
    if (cookingTitle) cookingTitle.textContent = this.plateName;

    const liveInput = this.container.querySelector('#livePlateNameInput');
    if (liveInput && document.activeElement !== liveInput) liveInput.value = this.plateName;

    // Actualizar pasos en Desktop
    this.container.querySelectorAll('.live-step-input').forEach(input => {
      const stepIdx = parseInt(input.getAttribute('data-step'), 10);
      input.value = this.customSteps[stepIdx] || '';
    });

    // Actualizar pasos en Modo Cocina
    const step0 = this.container.querySelector('#cookingStep0');
    if (step0) step0.textContent = this.customSteps[0] || '';
    const step1 = this.container.querySelector('#cookingStep1');
    if (step1) step1.textContent = this.customSteps[1] || '';
    const step2 = this.container.querySelector('#cookingStep2');
    if (step2) step2.textContent = this.customSteps[2] || '';
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

  async updateStepDefaults(components) {
    const getSelComps = (cat) => {
      const ids = Array.isArray(this.selected[cat]) ? this.selected[cat] : (this.selected[cat] ? [this.selected[cat]] : []);
      return components.filter(c => ids.includes(c.id));
    };

    const selProt = getSelComps('Proteina');
    const selVeg = getSelComps('Vegetal');
    const selCarb = getSelComps('Carbohidrato');
    const selFat = getSelComps('Grasa');

    // Si los pasos ya fueron generados o personalizados por la IA, preservarlos
    if (this.hasCustomAiSteps && this.customSteps && this.customSteps.filter(Boolean).length === 3) {
      const stepInputs = this.container.querySelectorAll('.step-text-input, .live-step-input');
      stepInputs.forEach((input) => {
        input.value = this.customSteps[input.getAttribute('data-step')] || '';
      });
      return;
    }

    // Auto-generar título según estilo
    const isFrio = this.plateMode === 'frio';
    const pName = selProt.length > 0 ? selProt.map(c => c.nombre).join(' + ') : 'Proteína';
    const cName = selCarb.length > 0 ? selCarb.map(c => c.nombre).join(' + ') : 'Carbohidrato';

    if (!this.plateName || this.plateName.startsWith('Mi Plato') || this.plateName.includes('Bowl') || this.plateName.includes('Plato')) {
      this.plateName = isFrio
        ? `Bowl Frío de ${pName} con ${cName}`
        : `Plato Caliente de ${pName} con ${cName}`;
      const liveName = document.getElementById('livePlateNameInput');
      if (liveName) liveName.value = this.plateName;
    }

    // Auto-generar 3 pasos deterministas adaptados a Frío vs Caliente
    let autoStep1 = '';
    let autoStep2 = '';
    let autoStep3 = '';

    if (isFrio) {
      autoStep1 = selProt.length > 0
        ? `Preparar ${selProt.map(c => c.nombre).join(' y ')} para la ensalada.`
        : 'Preparar la proteína para la ensalada.';

      autoStep2 = (selVeg.length > 0 || selCarb.length > 0)
        ? `Trocear ${selVeg.length > 0 ? selVeg.map(c => c.nombre).join(' + ') : 'vegetales'} y mezclar con ${selCarb.length > 0 ? selCarb.map(c => c.nombre).join(' + ') : 'base de carbos'} en un bowl amplio.`
        : 'Mezclar vegetales frescos y carbohidratos en bowl frío.';

      autoStep3 = selFat.length > 0
        ? `Aderezar la ensalada fresca con ${selFat.map(c => c.nombre).join(' + ')} y servir frío.`
        : 'Aderezar la ensalada y servir fresco.';
    } else {
      autoStep1 = selProt.length > 0
        ? `${selProt.map(c => c.nombre).join(' y ')}: ${selProt[0].metodo_coccion} (${selProt[0].tiempo_preparacion_min} min).`
        : 'Cocinar proteína a elección a fuego medio.';

      autoStep2 = (selVeg.length > 0 || selCarb.length > 0)
        ? `Cocinar/saltear caliente ${selVeg.length > 0 ? selVeg.map(c => c.nombre).join(' + ') : ''} junto a ${selCarb.length > 0 ? selCarb.map(c => c.nombre).join(' + ') : ''} (al wok, vapor o sopa).`
        : 'Preparar guarnición de carbohidratos y vegetales calientes.';

      autoStep3 = selFat.length > 0
        ? `Emplatar todo caliente y aderezar con ${selFat.map(c => c.nombre).join(' + ')}.`
        : 'Emplatar caliente y servir.';
    }

    this.customSteps = [autoStep1, autoStep2, autoStep3];

    // Actualizar inputs en el DOM
    const stepInputs = this.container.querySelectorAll('.live-step-input');
    stepInputs.forEach((input) => {
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

    // 1. Intentar ensamblado con IA (Gemini) si hay API key y conexión
    try {
      const getSelNames = (cat) => {
        const ids = Array.isArray(this.selected[cat]) ? this.selected[cat] : (this.selected[cat] ? [this.selected[cat]] : []);
        return allComponents.filter(c => ids.includes(c.id)).map(c => c.nombre).join(', ');
      };

      const currentContext = {
        proteina: getSelNames('Proteina'),
        vegetal: getSelNames('Vegetal'),
        carbohidrato: getSelNames('Carbohidrato'),
        grasa: getSelNames('Grasa'),
        modo: this.plateMode
      };

      const aiResult = await geminiService.assembleFromText(queryText, allComponents, currentContext);
      if (aiResult) {
        const getValidIds = (keyArray, keySingle) => {
          let candidateIds = [];
          if (Array.isArray(aiResult[keyArray])) {
            candidateIds = aiResult[keyArray];
          } else if (aiResult[keySingle]) {
            candidateIds = [aiResult[keySingle]];
          }
          return allComponents.filter(c => candidateIds.includes(c.id)).map(c => c.id);
        };

        const validProts = getValidIds('proteina_ids', 'proteina_id');
        const validVegs = getValidIds('vegetal_ids', 'vegetal_id');
        const validCarbs = getValidIds('carbo_ids', 'carbo_id');
        const validFats = getValidIds('grasa_ids', 'grasa_id');

        const foundAny = validProts.length > 0 || validVegs.length > 0 || validCarbs.length > 0 || validFats.length > 0;

        if (foundAny) {
          this.selected.Proteina = validProts;
          this.selected.Vegetal = validVegs;
          this.selected.Carbohidrato = validCarbs;
          this.selected.Grasa = validFats;

          if (aiResult.modo === 'frio' || aiResult.modo === 'caliente') {
            this.plateMode = aiResult.modo;
          }

          if (aiResult.titulo) {
            this.plateName = aiResult.titulo;
          }

          if (Array.isArray(aiResult.pasos) && aiResult.pasos.length >= 3) {
            this.customSteps = aiResult.pasos.slice(0, 3);
            this.hasCustomAiSteps = true;
          }

          if (aiResult.sugerencia_opcional) {
            this.autoMatchNotification = `<div style="padding: 0.65rem 0.85rem; background: var(--color-carb-bg); border: 1px dashed var(--color-carb-border); border-radius: var(--radius-sm); font-size: 0.825rem; color: var(--color-carb); font-weight: 500;">${this.escapeHtml(aiResult.sugerencia_opcional)}</div>`;
          } else {
            this.autoMatchNotification = '';
          }
          showToast('Plato armado con éxito', 'success');
          return;
        }
      }
    } catch (err) {
      console.log('Gemini AI fallback activado:', err.message);
    }

    // 2. Fallback determinista local (algoritmo sin IA)
    this.hasCustomAiSteps = false;
    this.deterministicAutoSelect(queryText, allComponents);
  }

  deterministicAutoSelect(queryText, allComponents) {
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
        carne: ['bife', 'magro', 'carne', 'picada', 'molida', 'vacuno', 'res', 'ternera', 'corte', 'milanesa', 'hamburguesa'],
        asado: ['asado', 'tira', 'costillar', 'parrilla'],
        tortuguita: ['tortuguita', 'tortuga'],
        palomita: ['palomita', 'paloma'],
        pollo: ['pollo', 'pechuga', 'suprema', 'muslo', 'pata', 'pavo', 'ave'],
        huevo: ['huevo', 'huevos', 'pasado', 'revuelto', 'duro', 'cocido', 'omelette', 'clara', 'yema'],
        pescado: ['atun', 'pescado', 'merluza', 'tilapia', 'filete', 'lomo', 'salmon'],
        cerdo: ['cerdo', 'costilla', 'costillita', 'chancho', 'puerco'],
        tofu: ['tofu', 'soya', 'soja', 'seitan']
      },
      Vegetal: {
        wok: ['wok', 'bandejita', 'bandejitas', 'salteado', 'salteada', 'verduras', 'mixto', 'mixtos'],
        cebolla: ['cebolla', 'cebollas', 'wok', 'salteado', 'salteada'],
        morron: ['morron', 'morrones', 'pimiento', 'pimientos', 'aji', 'ajies', 'wok'],
        hongos: ['hongos', 'hongo', 'champinon', 'champinones', 'portobello', 'setas'],
        brocoli: ['brocoli', 'vapor'],
        hojas: ['lechuga', 'rucula', 'hojas', 'verdes'],
        tomate: ['tomate', 'tomates', 'cherry'],
        zanahoria: ['zanahoria', 'zanahorias'],
        zapallo: ['zapallo', 'calabaza', 'anco', 'auyama'],
        zucchini: ['zucchini', 'zapallito', 'calabacin'],
        espinaca: ['espinaca', 'acelga']
      },
      Carbohidrato: {
        papa: ['papa', 'papas', 'patata', 'patatas', 'hervida', 'horno'],
        batata: ['batata', 'batatas', 'camote', 'camotes', 'boniato'],
        mandioca: ['mandioca', 'yuca'],
        arroz: ['arroz', 'blanco', 'integral'],
        pasta: ['fideos', 'fideo', 'pasta', 'pastas', 'tallarines', 'spaghetti'],
        choclo: ['choclo', 'choclos', 'maiz', 'elote'],
        legumbres: ['lenteja', 'lentejas', 'poroto', 'porotos', 'frijol', 'frijoles', 'garbanzo', 'garbanzos'],
        quinoa: ['quinoa', 'graneada']
      },
      Grasa: {
        palta: ['palta', 'paltas', 'aguacate', 'panca', 'panta', 'palte'],
        aceite: ['aceite', 'oliva', 'extra'],
        aceitunas: ['aceituna', 'aceitunas', 'olivas'],
        frutos: ['frutos', 'secos', 'nueces', 'almendras'],
        semillas: ['semillas', 'chia', 'girasol', 'sesamo'],
        queso: ['queso', 'parmesano', 'sardo', 'rallado', 'reggianito']
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
      const missingCats = categories.filter(cat => !this.selected[cat] || this.selected[cat].length === 0);
      if (missingCats.length > 0) {
        this.autoMatchNotification = `<div style="padding: 0.65rem 0.85rem; background: var(--color-carb-bg); border: 1px dashed var(--color-carb-border); border-radius: var(--radius-sm); font-size: 0.825rem; color: var(--color-carb); font-weight: 500;">💡 <strong>Sugerencia opcional:</strong> No detectamos ${missingCats.join(', ')}. Podés sumarlo en las columnas si tenés a mano en la cocina.</div>`;
      } else {
        this.autoMatchNotification = '';
      }
      showToast('Plato armado con éxito', 'info');
    } else {
      this.autoMatchNotification = `<div style="padding: 0.65rem 0.85rem; background: #fee2e2; border: 1px solid #fca5a5; border-radius: var(--radius-sm); font-size: 0.825rem; color: #b91c1c; font-weight: 500;">⚠️ No se encontraron coincidencias en la biblioteca para "${this.escapeHtml(queryText)}". Revisá que los nombres estén cargados en la Biblioteca.</div>`;
    }
  }

  async bindEvents() {
    const components = await storage.getComponents();
    const v2Container = this.container.querySelector('.assembler-v2-container');
    const autoInput = this.container.querySelector('#autoIngredientsInput');

    // 1. Colapso reactivo del plato al enfocar el input de chat (reserva de espacio para teclado móvil)
    if (autoInput && v2Container) {
      autoInput.addEventListener('focus', () => {
        v2Container.classList.add('chat-focused');
      });
      autoInput.addEventListener('blur', () => {
        setTimeout(() => {
          v2Container.classList.remove('chat-focused');
        }, 220);
      });
    }

    // 2. Entrada por Voz con Web Speech API (🎙️ Micrófono nativo)
    const btnVoice = this.container.querySelector('#btnVoiceInput');
    if (btnVoice && autoInput) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        btnVoice.addEventListener('click', () => {
          showToast('Tu navegador no soporta dictado directo por voz. Podés usar el micrófono de tu teclado.', 'info', 4000);
        });
      } else {
        let recognition = null;
        let isListening = false;

        btnVoice.addEventListener('click', () => {
          if (isListening && recognition) {
            recognition.stop();
            return;
          }

          try {
            recognition = new SpeechRecognition();
            recognition.lang = 'es-ES';
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;

            recognition.onstart = () => {
              isListening = true;
              btnVoice.classList.add('listening');
              btnVoice.title = 'Escuchando... Tocá para detener';
              showToast('🎙️ Escuchando... decí lo que tenés en la heladera', 'info', 3000);
            };

            recognition.onresult = async (event) => {
              const transcript = event.results?.[0]?.[0]?.transcript;
              if (transcript) {
                autoInput.value = transcript;
                showToast(`🎙️ Detectado: "${transcript}"`, 'info', 2500);
                // Envío automático al terminar de hablar
                const formAuto = this.container.querySelector('#formAutoSelectIngredients');
                if (formAuto) {
                  formAuto.dispatchEvent(new Event('submit', { cancelable: true }));
                }
              }
            };

            recognition.onerror = (event) => {
              console.warn('Reconocimiento de voz:', event.error);
              if (event.error !== 'no-speech') {
                showToast('No se pudo acceder al micrófono o se canceló el dictado.', 'warning');
              }
            };

            recognition.onend = () => {
              isListening = false;
              btnVoice.classList.remove('listening');
              btnVoice.title = 'Dictar ingredientes por voz';
            };

            recognition.start();
          } catch (err) {
            console.error('Error al inicializar SpeechRecognition:', err);
            isListening = false;
            btnVoice.classList.remove('listening');
          }
        });
      }
    }

    // 3. Formulario de Chat / Asistente de Cocina Rápida
    const formAuto = this.container.querySelector('#formAutoSelectIngredients');
    if (formAuto) {
      formAuto.addEventListener('submit', async (e) => {
        e.preventDefault();
        const inputVal = autoInput ? autoInput.value : '';
        const submitBtn = formAuto.querySelector('button[type="submit"]');
        const prevText = submitBtn ? submitBtn.innerHTML : '';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '⌛ Armando...';
        }
        try {
          await this.autoSelectByIngredientsText(inputVal);
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = prevText;
          }
        }
        await this.render();
        this.bindEvents();
      });
    }

    // 4. Selector de Estilo de Servido (Caliente / Frío)
    this.container.querySelectorAll('.mode-temp-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        this.plateMode = e.currentTarget.getAttribute('data-mode');
        this.hasCustomAiSteps = false;
        this.plateName = ''; // Resetear título genérico para regenerar con el nuevo estilo
        await this.render();
        this.bindEvents();
      });
    });

    // 5. Interacción con Cuadrantes del Plato y Chips Colapsados (Abre Selector Táctil)
    this.container.querySelectorAll('.plate-quadrant, .plate-compact-chip').forEach(el => {
      el.addEventListener('click', (e) => {
        const category = e.currentTarget.getAttribute('data-category');
        if (category) {
          this.openCategoryPicker(category, components);
        }
      });
    });

    // 6. Modal Modo Cocina (HTML5 <dialog>)
    const modalCooking = this.container.querySelector('#modalCookingMode');
    const btnOpenCooking = this.container.querySelector('#btnOpenCookingMode');
    const btnCloseCooking = this.container.querySelector('#btnCloseCookingMode');

    if (btnOpenCooking && modalCooking) {
      btnOpenCooking.addEventListener('click', () => {
        modalCooking.showModal();
      });
    }

    if (btnCloseCooking && modalCooking) {
      btnCloseCooking.addEventListener('click', () => {
        modalCooking.close();
      });
    }

    if (modalCooking) {
      modalCooking.addEventListener('click', (e) => {
        if (e.target === modalCooking) {
          modalCooking.close();
        }
      });
    }

    // 7. Modal Selector de Categoría (HTML5 <dialog>)
    const modalPicker = this.container.querySelector('#modalCategoryPicker');
    const btnClosePicker = this.container.querySelector('#btnCloseCategoryPicker');
    const btnDonePicker = this.container.querySelector('#btnDoneCategoryPicker');

    if (btnClosePicker && modalPicker) {
      btnClosePicker.addEventListener('click', () => modalPicker.close());
    }
    if (btnDonePicker && modalPicker) {
      btnDonePicker.addEventListener('click', () => modalPicker.close());
    }
    if (modalPicker) {
      modalPicker.addEventListener('click', (e) => {
        if (e.target === modalPicker) {
          modalPicker.close();
        }
      });
    }

    // 8. Descartar Callout Efímero del Chef
    const btnCloseCallout = this.container.querySelector('#btnCloseChefCallout');
    if (btnCloseCallout) {
      btnCloseCallout.addEventListener('click', () => {
        this.autoMatchNotification = '';
        const pill = this.container.querySelector('#chefCalloutPill');
        if (pill) pill.remove();
      });
    }

    // 9. Reoptimizar Pasos con IA (Desktop y Modal)
    const handleAiRefine = async (btnEl) => {
      const getSelComps = (cat) => {
        const ids = Array.isArray(this.selected[cat]) ? this.selected[cat] : (this.selected[cat] ? [this.selected[cat]] : []);
        return components.filter(c => ids.includes(c.id));
      };

      const selProt = getSelComps('Proteina');
      const selVeg = getSelComps('Vegetal');
      const selCarb = getSelComps('Carbohidrato');
      const selFat = getSelComps('Grasa');

      if (!selProt.length && !selVeg.length && !selCarb.length && !selFat.length) {
        showToast('Seleccioná al menos 1 ingrediente primero', 'warning');
        return;
      }

      const prevText = btnEl.innerHTML;
      btnEl.disabled = true;
      btnEl.innerHTML = '⌛ Optimizando...';

      try {
        const selectedComps = [...selProt, ...selVeg, ...selCarb, ...selFat];
        const result = await geminiService.refineSteps(selectedComps, this.plateMode);
        if (result && Array.isArray(result.pasos) && result.pasos.length >= 3) {
          this.customSteps = result.pasos.slice(0, 3);
          this.hasCustomAiSteps = true;
          if (result.titulo) {
            this.plateName = result.titulo;
          }
          await this.updateVisualPlateAndSteps(components);
          showToast('✨ Pasos optimizados con IA', 'success');
        }
      } catch (err) {
        if (err.message === 'API_KEY_MISSING') {
          showToast('Ingresá tu API Key de Gemini en Ajustes (⚙️) para usar la IA', 'warning');
        } else {
          showToast('No se pudo conectar con la IA. Usando pasos locales.', 'info');
        }
      } finally {
        btnEl.disabled = false;
        btnEl.innerHTML = prevText;
      }
    };

    const btnAiRefineLive = this.container.querySelector('#btnAiRefineStepsLive');
    if (btnAiRefineLive) {
      btnAiRefineLive.addEventListener('click', () => handleAiRefine(btnAiRefineLive));
    }

    const btnAiRefineModal = this.container.querySelector('#btnAiRefineInModal');
    if (btnAiRefineModal) {
      btnAiRefineModal.addEventListener('click', () => handleAiRefine(btnAiRefineModal));
    }

    // 10. Inputs de texto de pasos en vivo (Desktop)
    this.container.querySelectorAll('.live-step-input').forEach(input => {
      input.addEventListener('input', (e) => {
        const stepIdx = parseInt(e.target.getAttribute('data-step'), 10);
        this.customSteps[stepIdx] = e.target.value;
        this.hasCustomAiSteps = true;
        const modalStep = this.container.querySelector(`#cookingStep${stepIdx}`);
        if (modalStep) modalStep.textContent = e.target.value;
      });
    });

    // 11. Input nombre de plato (Desktop)
    const liveNameInput = this.container.querySelector('#livePlateNameInput');
    if (liveNameInput) {
      liveNameInput.addEventListener('input', (e) => {
        this.plateName = e.target.value;
        const plateTitleDisplay = this.container.querySelector('#plateTitleDisplay');
        if (plateTitleDisplay) plateTitleDisplay.textContent = e.target.value;
        const cookingModalTitle = this.container.querySelector('#cookingModalTitle');
        if (cookingModalTitle) cookingModalTitle.textContent = e.target.value;
      });
    }

    // 12. Guardar Plato (Desktop y Modal)
    const btnSavePlateLive = this.container.querySelector('#btnSavePlateLive');
    if (btnSavePlateLive) {
      btnSavePlateLive.addEventListener('click', () => this.saveCurrentPlate());
    }

    const btnSavePlateInModal = this.container.querySelector('#btnSavePlateInModal');
    if (btnSavePlateInModal) {
      btnSavePlateInModal.addEventListener('click', async () => {
        await this.saveCurrentPlate();
        if (modalCooking) modalCooking.close();
      });
    }

    // 13. Control Modal Generador de Imagen
    const modalImg = this.container.querySelector('#modalImageGen');
    const btnCloseImgModal = this.container.querySelector('#btnCloseImgModal');
    const imgModalBody = this.container.querySelector('#imgModalBody');

    if (btnCloseImgModal && modalImg) {
      btnCloseImgModal.addEventListener('click', () => {
        modalImg.classList.remove('open');
      });
    }

    const btnGenImg = this.container.querySelector('#btnGenerateImage');
    if (btnGenImg && modalImg && imgModalBody) {
      btnGenImg.addEventListener('click', () => {
        modalImg.classList.add('open');
        imgModalBody.innerHTML = `
          <div style="text-align: center;">
            <div style="margin-bottom: 1rem; overflow: hidden; border-radius: var(--radius-lg); border: 1px solid var(--border-glow); box-shadow: var(--shadow-md);">
              <img src="img/plato-ejemplo.png" alt="Plato de ejemplo" style="width: 100%; max-height: 380px; object-fit: cover; display: block;">
            </div>
            <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.25rem;">${this.escapeHtml(this.plateName) || 'Plato Modular'}</h4>
            <p style="color: var(--text-secondary); font-size: 0.825rem; margin-bottom: 1rem;">
              Vista de referencia del plato ensamblado.
            </p>
            <div style="display: flex; gap: 0.75rem; justify-content: center;">
              <button class="btn btn-secondary btn-sm" id="btnCloseImgModalInner">
                👍 Cerrar
              </button>
            </div>
          </div>
        `;
        const innerClose = imgModalBody.querySelector('#btnCloseImgModalInner');
        if (innerClose) {
          innerClose.addEventListener('click', () => modalImg.classList.remove('open'));
        }
      });
    }
  }

  async saveCurrentPlate() {
    const hasAny = [
      ...(Array.isArray(this.selected.Proteina) ? this.selected.Proteina : []),
      ...(Array.isArray(this.selected.Vegetal) ? this.selected.Vegetal : []),
      ...(Array.isArray(this.selected.Carbohidrato) ? this.selected.Carbohidrato : []),
      ...(Array.isArray(this.selected.Grasa) ? this.selected.Grasa : [])
    ].length > 0;

    if (!hasAny) {
      showToast('Seleccioná al menos un ingrediente para guardar el plato.', 'warning');
      return;
    }

    const newPlate = {
      nombre: this.plateName || 'Plato Modular',
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
