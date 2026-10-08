import { storage } from '../services/storage.js';

export class AssemblerComponent {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentActivity = 'Moderado';
    
    // Estado de selección del plato (1 id por categoría)
    this.selected = {
      Proteina: null,
      Vegetal: null,
      Carbohidrato: null,
      Grasa: null
    };

    // Micro-instrucciones editables
    this.customSteps = ['', '', ''];
    this.plateName = 'Mi Plato Modular Custom';
    this.drawerOpen = false;
    this.showOnlyDespensa = true;
    this.activityRules = null;
    this.generatedImageSrc = null;
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
      <div class="assembler-header glass-card">
        <div class="activity-selector-container">
          <span class="label">Nivel de Actividad del Día:</span>
          <div class="activity-selector">
            <button class="activity-btn ${this.currentActivity === 'Intenso' ? 'active' : ''}" data-level="Intenso">
              🔴 Intenso (Entreno)
            </button>
            <button class="activity-btn ${this.currentActivity === 'Moderado' ? 'active' : ''}" data-level="Moderado">
              🟡 Moderado
            </button>
            <button class="activity-btn ${this.currentActivity === 'Descanso' ? 'active' : ''}" data-level="Descanso">
              🟢 Descanso (Rest)
            </button>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <button id="btnToggleDespensaFilter" class="btn btn-secondary btn-sm">
            ${this.showOnlyDespensa ? '⭐ Solo mi Despensa' : '🌐 Todo el Catálogo'}
          </button>
        </div>
      </div>

      <!-- Banner Informativo del Modulador de Actividad -->
      <div id="activityPortionNotice" style="font-size: 0.9rem; background: rgba(255, 255, 255, 0.04); padding: 0.85rem 1.25rem; border-radius: var(--radius-md); border-left: 4px solid ${this.getActivityColor()}; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
        <div>
          ${this.getCarbPortionNoticeText()}
        </div>
        <div style="font-weight: 700; font-size: 0.85rem; background: rgba(255, 255, 255, 0.08); padding: 0.3rem 0.75rem; border-radius: var(--radius-sm);">
          Carbohidratos Objetivo: <span style="color: ${this.getActivityColor()};">${this.getCarbTargetText()}</span>
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

  calculatePortion(comp) {
    if (!comp) return '';
    const cat = comp.categoria;
    if (this.activityRules && this.activityRules[this.currentActivity] && this.activityRules[this.currentActivity][cat]) {
      return this.activityRules[this.currentActivity][cat];
    }
    return comp.porcion_base || '1 porción';
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

  renderColumn(category, title, allComponents) {
    let categoryComponents = allComponents.filter(c => c.categoria === category);
    
    // Si el filtro de Despensa está activo, filtrar solo los marcados en despensa
    if (this.showOnlyDespensa) {
      const despensaComponents = categoryComponents.filter(c => c.en_despensa !== false);
      if (despensaComponents.length > 0) {
        categoryComponents = despensaComponents;
      }
    }

    // Auto-seleccionar el primero si no hay ninguno seleccionado
    if (!this.selected[category] && categoryComponents.length > 0) {
      this.selected[category] = categoryComponents[0].id;
    }

    let subBadge = category;
    if (category === 'Carbohidrato') {
      subBadge = `🥔 ${this.getCarbTargetText()}`;
    } else if (category === 'Vegetal' && this.currentActivity === 'Descanso') {
      subBadge = '🥗 Extra Fibra';
    }

    const cardsHtml = categoryComponents.map(comp => {
      const isSelected = this.selected[category] === comp.id;
      const portionText = this.calculatePortion(comp);

      return `
        <div class="component-item-card ${isSelected ? 'selected' : ''}"
             data-id="${comp.id}" data-category="${category}">
          <div class="card-header-row">
            <div class="card-title-group">
              <span>${comp.icono || '🥗'}</span>
              <span>${this.escapeHtml(comp.nombre)}</span>
            </div>
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
          <span class="block-badge">${subBadge}</span>
        </div>
        <div class="components-list">
          ${cardsHtml.length > 0 ? cardsHtml : '<div style="color: var(--text-muted); font-size: 0.85rem; padding: 1rem;">No hay componentes cargados.</div>'}
        </div>
      </div>
    `;
  }

  renderStickyChips(allComponents) {
    const selProt = allComponents.find(c => c.id === this.selected.Proteina);
    const selVeg = allComponents.find(c => c.id === this.selected.Vegetal);
    const selCarb = allComponents.find(c => c.id === this.selected.Carbohidrato);
    const selFat = allComponents.find(c => c.id === this.selected.Grasa);

    return `
      <div class="sticky-chip" style="background: var(--color-prot-bg); color: var(--color-prot); border: 1px solid var(--color-prot-border);">
        🥩 ${selProt ? selProt.nombre : 'Proteína'} (${selProt ? this.calculatePortion(selProt) : '-'})
      </div>
      <div class="sticky-chip" style="background: var(--color-veg-bg); color: var(--color-veg); border: 1px solid var(--color-veg-border);">
        🥦 ${selVeg ? selVeg.nombre : 'Vegetal'} (${selVeg ? this.calculatePortion(selVeg) : '-'})
      </div>
      <div class="sticky-chip" style="background: var(--color-carb-bg); color: var(--color-carb); border: 1px solid var(--color-carb-border);">
        🥔 ${selCarb ? selCarb.nombre : 'Carbohidrato'} (${selCarb ? this.calculatePortion(selCarb) : '-'})
      </div>
      <div class="sticky-chip" style="background: var(--color-fat-bg); color: var(--color-fat); border: 1px solid var(--color-fat-border);">
        🥑 ${selFat ? selFat.nombre : 'Grasa'} (${selFat ? this.calculatePortion(selFat) : '-'})
      </div>
    `;
  }

  async updateStepDefaults(components) {
    const selectedComps = {
      Proteina: components.find(c => c.id === this.selected.Proteina),
      Vegetal: components.find(c => c.id === this.selected.Vegetal),
      Carbohidrato: components.find(c => c.id === this.selected.Carbohidrato),
      Grasa: components.find(c => c.id === this.selected.Grasa)
    };

    // Auto-generar título si es el genérico
    if (!this.plateName || this.plateName.startsWith('Mi Plato') || this.plateName.includes('Bowl') || this.plateName.includes('Plato de')) {
      const pName = selectedComps.Proteina ? selectedComps.Proteina.nombre : 'Proteína';
      const cName = selectedComps.Carbohidrato ? selectedComps.Carbohidrato.nombre : 'Carbohidrato';
      this.plateName = `Plato de ${pName} con ${cName} (${this.currentActivity})`;
      const nameInput = document.getElementById('plateNameInput');
      if (nameInput) nameInput.value = this.plateName;
    }

    // Auto-generar 3 pasos si el usuario no los ha editado manualmente de forma personalizada
    const autoStep1 = selectedComps.Proteina 
      ? `${selectedComps.Proteina.nombre} (${this.calculatePortion(selectedComps.Proteina)}): ${selectedComps.Proteina.metodo_coccion} (${selectedComps.Proteina.tiempo_preparacion_min} min).` 
      : 'Cocinar proteína a elección.';

    const autoStep2 = selectedComps.Carbohidrato && selectedComps.Vegetal
      ? `${selectedComps.Carbohidrato.nombre} [Porción ${this.calculatePortion(selectedComps.Carbohidrato)}] y ${selectedComps.Vegetal.nombre} (${this.calculatePortion(selectedComps.Vegetal)}).`
      : 'Preparar guarnición de carbohidratos y vegetales.';

    const autoStep3 = selectedComps.Grasa
      ? `Emplatar todo junto y aderezar con ${selectedComps.Grasa.nombre} (${selectedComps.Grasa.porcion_base || '1 cda'}).`
      : 'Emplatar caliente y servir.';

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

  bindEvents() {
    // Toggle Filtro Despensa ⭐
    const btnToggleDespensa = this.container.querySelector('#btnToggleDespensaFilter');
    if (btnToggleDespensa) {
      btnToggleDespensa.addEventListener('click', async () => {
        this.showOnlyDespensa = !this.showOnlyDespensa;
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

    // Selección de tarjetas en las 4 columnas
    this.container.querySelectorAll('.component-item-card').forEach(card => {
      card.addEventListener('click', async (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const category = e.currentTarget.getAttribute('data-category');
        this.selected[category] = id;
        
        const components = await storage.getComponents();
        this.container.querySelectorAll(`.component-item-card[data-category="${category}"]`).forEach(c => {
          c.classList.remove('selected');
        });
        e.currentTarget.classList.add('selected');
        
        // Actualizar chips flotantes en tiempo real
        const stickyContainer = this.container.querySelector('#stickyChipsSummary');
        if (stickyContainer) {
          stickyContainer.innerHTML = this.renderStickyChips(components);
        }
        this.updateStepDefaults(components);
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
      const executeImageGeneration = async (mode = 'plate') => {
        const apiKey = await storage.getApiKey();
        const stabilityKey = await storage.getStabilityApiKey();

        if (!apiKey && !stabilityKey) {
          alert('🔑 Por favor ingresa tu API Key en la pestaña Ajustes (⚙️) para habilitar la generación de imágenes con IA.');
          const settingsTab = document.querySelector('.nav-tab[data-tab="settings"]');
          if (settingsTab) settingsTab.click();
          return;
        }

        const components = await storage.getComponents();
        const selProt = components.find(c => c.id === this.selected.Proteina);
        const selVeg = components.find(c => c.id === this.selected.Vegetal);
        const selCarb = components.find(c => c.id === this.selected.Carbohidrato);
        const selFat = components.find(c => c.id === this.selected.Grasa);

        let promptText = '';
        if (mode === 'grid') {
          promptText = `A top-view 2x2 grid collage photography showing 4 separate food items in 4 distinct quadrants: top-left quadrant ${selProt ? selProt.nombre : 'Proteína'}, top-right quadrant ${selVeg ? selVeg.nombre : 'Vegetal'}, bottom-left quadrant ${selCarb ? selCarb.nombre : 'Carbohidrato'}, bottom-right quadrant ${selFat ? selFat.nombre : 'Grasa'}. High quality food photography, clean grid divider, studio lighting.`;
        } else {
          promptText = `Un plato saludable y delicioso compuesto por ${selProt ? selProt.nombre : ''}, ${selVeg ? selVeg.nombre : ''}, ${selCarb ? selCarb.nombre : ''} y ${selFat ? selFat.nombre : ''}. Presentación gourmet.`;
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

      btnGenImg.addEventListener('click', () => executeImageGeneration('grid'));
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
      alert('Por favor selecciona 1 ingrediente en cada uno de los 4 bloques.');
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
    alert(`¡Plato "${newPlate.nombre}" guardado con éxito en tu biblioteca de platos!`);
  }

  escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
}
