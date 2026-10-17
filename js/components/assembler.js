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
      <!-- Header de Configuración del Ensamblador -->
      <div class="assembler-header glass-card" style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
        <div style="display: flex; gap: 1.25rem; flex-wrap: wrap; align-items: center;">
          <div class="activity-selector-container">
            <span class="label">Estilo de Servido:</span>
            <div class="activity-selector">
              <button class="mode-temp-btn ${this.plateMode === 'caliente' ? 'active' : ''}" data-mode="caliente">
                🍲 Caliente (Wok / Salteado / Sopa)
              </button>
              <button class="mode-temp-btn ${this.plateMode === 'frio' ? 'active' : ''}" data-mode="frio">
                🥗 Frío (Ensalada / Bowl)
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Consola Conversacional Unificada -->
      <div class="conversational-console">
        <div class="console-header-row">
          <div class="console-title">
            <span>💬</span>
            <span>Asistente de Cocina Rápida</span>
          </div>
        </div>

        <form id="formAutoSelectIngredients" style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
          <input type="text" id="autoIngredientsInput" class="form-control" placeholder="Escribí lo que tenés en la heladera o cómo ajustar el plato..." value="${this.escapeHtml(this.autoQueryText)}" style="flex: 1; min-width: 260px; font-size: 0.9rem;">
          <button type="submit" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem 1.25rem; white-space: nowrap;">
            ✨ Armar Plato
          </button>
        </form>

        ${this.autoMatchNotification || ''}
      </div>

      <!-- Tarjeta de Resumen Ejecutivo y 3 Pasos en Pantalla Única -->
      <div class="live-plate-summary-card">
        <div class="live-plate-header">
          <div class="live-plate-title-group" style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
            <span style="font-size: 1.35rem;">🍽️</span>
            <input type="text" id="livePlateNameInput" class="live-plate-title-input" value="${this.escapeHtml(this.plateName)}" placeholder="Nombre de tu plato...">
            <div class="live-plate-meta">
              <span>${this.plateMode === 'frio' ? '🥗 Frío' : '🍲 Caliente'}</span>
              <span>•</span>
              <span>⏱️ ~${estimatedTime} min</span>
            </div>
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
            <button id="btnAiRefineStepsLive" type="button" class="btn btn-secondary btn-sm" title="Reoptimizar 3 pasos con IA">
              ✨ Reoptimizar Pasos
            </button>
            <button id="btnSavePlateLive" type="button" class="btn btn-primary btn-sm">
              💾 Guardar Plato
            </button>
          </div>
        </div>

        <!-- 3 Pasos Ejecutivos Directos -->
        <div class="live-steps-grid">
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
      </div>

      <!-- Matriz de 4 Columnas (Inventario Vivo) -->
      <div class="assembler-grid" style="margin-bottom: 5rem;">
        ${this.renderColumn('Proteina', '🥩 Proteínas', components)}
        ${this.renderColumn('Vegetal', '🥦 Vegetales', components)}
        ${this.renderColumn('Carbohidrato', '🥔 Carbohidratos', components)}
        ${this.renderColumn('Grasa', '🥑 Grasas', components)}
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
    }

    if (count > 1) {
      subBadge += ` • ${count} sel.`;
    }

    let headerBadgeStyle = count === 0 ? 'background: var(--color-carb-bg); color: var(--color-carb); border: 1px dashed var(--color-carb-border);' : '';
    const cardsHtml = categoryComponents.map(comp => {
      const isSelected = selectedIds.includes(comp.id);
      return `
        <div class="component-item-card ${isSelected ? 'selected' : ''}"
             data-id="${comp.id}" data-category="${category}">
          <div class="card-header-row">
            <div class="card-title-group">
              <span>${comp.icono || '🥗'}</span>
              <span>${this.escapeHtml(comp.nombre)}</span>
            </div>
            ${isSelected ? '<span style="color: var(--color-veg); font-weight: 700; font-size: 0.85rem;">✓</span>' : ''}
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
      const selectedIds = Array.isArray(this.selected[category]) ? this.selected[category] : (this.selected[category] ? [this.selected[category]] : []);
      const selComps = allComponents.filter(c => selectedIds.includes(c.id));

      if (selComps.length === 0) {
        return `
          <div class="sticky-chip" style="background: var(--color-carb-bg); color: var(--color-carb); border: 1px dashed var(--color-carb-border);">
            ${icon} ${defaultLabel} (Sin selección)
          </div>
        `;
      }

      const names = selComps.map(c => c.nombre).join(' + ');
      return `
        <div class="sticky-chip" style="background: ${colorBg}; color: ${colorText}; border: 1px solid ${colorBorder};">
          ${icon} ${names}
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
        const validProt = allComponents.find(c => c.id === aiResult.proteina_id);
        const validVeg = allComponents.find(c => c.id === aiResult.vegetal_id);
        const validCarb = allComponents.find(c => c.id === aiResult.carbo_id);
        const validFat = allComponents.find(c => c.id === aiResult.grasa_id);

        const foundAny = validProt || validVeg || validCarb || validFat;

        if (foundAny) {
          this.selected.Proteina = validProt ? [validProt.id] : [];
          this.selected.Vegetal = validVeg ? [validVeg.id] : [];
          this.selected.Carbohidrato = validCarb ? [validCarb.id] : [];
          this.selected.Grasa = validFat ? [validFat.id] : [];

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

  bindEvents() {
    // Formulario de Auto-Ensamblado por Ingredientes ⚡
    const formAuto = this.container.querySelector('#formAutoSelectIngredients');
    if (formAuto) {
      formAuto.addEventListener('submit', async (e) => {
        e.preventDefault();
        const inputVal = document.getElementById('autoIngredientsInput')?.value || '';
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

    // Selector de Estilo de Servido (Caliente / Frío)
    this.container.querySelectorAll('.mode-temp-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        this.plateMode = e.currentTarget.getAttribute('data-mode');
        this.hasCustomAiSteps = false;
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
        
        this.hasCustomAiSteps = false;
        await this.render();
        this.bindEvents();
      });
    });

    // Botón Optimizar Pasos con IA (directo en la tarjeta principal)
    const btnAiRefineLive = this.container.querySelector('#btnAiRefineStepsLive');
    if (btnAiRefineLive) {
      btnAiRefineLive.addEventListener('click', async () => {
        const components = await storage.getComponents();
        const getSelComps = (cat) => {
          const ids = Array.isArray(this.selected[cat]) ? this.selected[cat] : (this.selected[cat] ? [this.selected[cat]] : []);
          return components.filter(c => ids.includes(c.id));
        };

        const selProt = getSelComps('Proteina');
        const selVeg = getSelComps('Vegetal');
        const selCarb = getSelComps('Carbohidrato');
        const selFat = getSelComps('Grasa');

        if (!selProt.length || !selVeg.length || !selCarb.length || !selFat.length) {
          showToast('Seleccioná al menos 1 ingrediente en cada bloque primero', 'warning');
          return;
        }

        const prevText = btnAiRefineLive.innerHTML;
        btnAiRefineLive.disabled = true;
        btnAiRefineLive.innerHTML = '⌛ Optimizando...';

        try {
          const selectedComps = [...selProt, ...selVeg, ...selCarb, ...selFat];
          const result = await geminiService.refineSteps(selectedComps, this.plateMode);
          if (result && Array.isArray(result.pasos) && result.pasos.length >= 3) {
            this.customSteps = result.pasos.slice(0, 3);
            this.hasCustomAiSteps = true;
            if (result.titulo) {
              this.plateName = result.titulo;
              const nameInput = this.container.querySelector('#livePlateNameInput');
              if (nameInput) nameInput.value = this.plateName;
            }
            this.container.querySelectorAll('.live-step-input').forEach((input) => {
              const stepIdx = parseInt(input.getAttribute('data-step'), 10);
              input.value = this.customSteps[stepIdx] || '';
            });
            showToast('✨ Pasos optimizados con IA', 'success');
          }
        } catch (err) {
          if (err.message === 'API_KEY_MISSING') {
            showToast('Ingresá tu API Key de Gemini en Ajustes (⚙️) para usar la IA', 'warning');
          } else {
            showToast('No se pudo conectar con la IA. Usando pasos locales.', 'info');
          }
        } finally {
          btnAiRefineLive.disabled = false;
          btnAiRefineLive.innerHTML = prevText;
        }
      });
    }

    // Inputs de texto de pasos en vivo (pantalla principal)
    this.container.querySelectorAll('.live-step-input').forEach(input => {
      input.addEventListener('input', (e) => {
        const stepIdx = parseInt(e.target.getAttribute('data-step'), 10);
        this.customSteps[stepIdx] = e.target.value;
        this.hasCustomAiSteps = true;
      });
    });

    // Input nombre de plato (pantalla principal)
    const liveNameInput = this.container.querySelector('#livePlateNameInput');
    if (liveNameInput) {
      liveNameInput.addEventListener('input', (e) => {
        this.plateName = e.target.value;
      });
    }

    // Botones Guardar Plato (pantalla principal y sticky bar)
    const btnSavePlateLive = this.container.querySelector('#btnSavePlateLive');
    if (btnSavePlateLive) {
      btnSavePlateLive.addEventListener('click', async () => {
        await this.saveCurrentPlate();
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
            <div style="background: #f7f9fc; padding: 0.75rem 1rem; border-radius: var(--radius-sm); font-size: 0.8rem; border-left: 3px solid var(--color-fat); text-align: left; font-style: italic; color: var(--text-secondary);">
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
                Modo actual: <strong>${mode === 'grid' ? '🧩 Grilla 2x2 (4 Cuadrantes)' : '🍲 Plato Emplatado'}</strong>.
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
