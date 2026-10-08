import { storage } from '../services/storage.js';

export class LibraryComponent {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.activeFilterCategory = 'ALL';
  }

  async init() {
    await this.render();
    this.bindEvents();
  }

  async render() {
    const components = await storage.getComponents();
    const plates = await storage.getPlates();

    const filteredComponents = this.activeFilterCategory === 'ALL'
      ? components
      : components.filter(c => c.categoria === this.activeFilterCategory);

    this.container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h2 style="font-size: 1.4rem; font-weight: 700;">📚 Biblioteca de Alimentos y Platos</h2>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">Gestiona tus bloques de macronutrientes e insumos para el ensamble.</p>
        </div>

        <button id="btnOpenNewCompModal" class="btn btn-primary">
          ➕ Agregar Nuevo Alimento
        </button>
      </div>

      <!-- Filtros por categoría de bloque -->
      <div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem; overflow-x: auto; padding-bottom: 0.5rem;">
        <button class="btn btn-secondary btn-sm filter-cat-btn ${this.activeFilterCategory === 'ALL' ? 'active' : ''}" data-cat="ALL">Todos los Bloques</button>
        <button class="btn btn-secondary btn-sm filter-cat-btn ${this.activeFilterCategory === 'Proteina' ? 'active' : ''}" data-cat="Proteina">🥩 Proteínas</button>
        <button class="btn btn-secondary btn-sm filter-cat-btn ${this.activeFilterCategory === 'Vegetal' ? 'active' : ''}" data-cat="Vegetal">🥦 Vegetales</button>
        <button class="btn btn-secondary btn-sm filter-cat-btn ${this.activeFilterCategory === 'Carbohidrato' ? 'active' : ''}" data-cat="Carbohidrato">🥔 Carbohidratos</button>
        <button class="btn btn-secondary btn-sm filter-cat-btn ${this.activeFilterCategory === 'Grasa' ? 'active' : ''}" data-cat="Grasa">🥑 Grasas</button>
      </div>

      <!-- Grilla de Componentes -->
      <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 1rem;">Componentes por Bloque (${filteredComponents.length})</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 3rem;">
        ${filteredComponents.map(c => this.renderComponentCard(c)).join('')}
      </div>

      <!-- Catálogo de Platos Guardados -->
      <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 1rem;">Platos Guardados (${plates.length})</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.25rem;">
        ${plates.map(p => this.renderPlateCard(p, components)).join('')}
      </div>

      <!-- Modal para Agregar Nuevo Componente -->
      <div id="modalNewComp" class="modal-overlay">
        <div class="modal-container glass-card">
          <div class="modal-header">
            <h3 class="modal-title">Registrar Nuevo Alimento</h3>
            <button class="modal-close-btn" id="btnCloseModal">&times;</button>
          </div>
          <form id="formNewComponent">
            <div class="form-group">
              <label>Nombre del Alimento</label>
              <input type="text" id="compNombre" class="form-control" placeholder="Ej: Pechuga de Pollo" required>
            </div>
            <div class="form-group">
              <label>Categoría de Macronutriente</label>
              <select id="compCategoria" class="form-control" required>
                <option value="Proteina">🥩 Proteína</option>
                <option value="Vegetal">🥦 Vegetal</option>
                <option value="Carbohidrato">🥔 Carbohidrato</option>
                <option value="Grasa">🥑 Grasa</option>
              </select>
            </div>
            <div class="form-group">
              <label>Tiempo de Preparación / Cocción (Minutos)</label>
              <input type="number" id="compTiempo" class="form-control" value="10" min="1" required>
            </div>
            <div class="form-group">
              <label>Método de Cocción</label>
              <input type="text" id="compMetodo" class="form-control" placeholder="Ej: Plancha a fuego medio" required>
            </div>
            <div class="form-group">
              <label>Ícono / Emoji</label>
              <input type="text" id="compIcono" class="form-control" value="🥗" required>
            </div>
            <div class="form-group" style="display: flex; align-items: center; gap: 0.5rem; margin-top: 1rem;">
              <input type="checkbox" id="compEnDespensa" checked style="width: 18px; height: 18px;">
              <label for="compEnDespensa" style="margin: 0; cursor: pointer;">⭐ Mostrar en mi Despensa (Ensamblador)</label>
            </div>
            <div style="display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 1.5rem;">
              <button type="button" class="btn btn-secondary" id="btnCancelModal">Cancelar</button>
              <button type="submit" class="btn btn-primary">Guardar Alimento</button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  renderComponentCard(c) {
    const isDespensa = c.en_despensa !== false;

    return `
      <div class="glass-card" style="padding: 1rem; border-radius: var(--radius-md); display: flex; flex-direction: column; justify-content: space-between; gap: 0.75rem;">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; font-size: 1.05rem;">
              <span>${c.icono || '🥗'}</span>
              <span>${this.escapeHtml(c.nombre)}</span>
            </div>
            <span class="block-badge" style="font-size: 0.7rem; padding: 0.15rem 0.4rem;">${c.categoria}</span>
          </div>
          <div style="font-size: 0.825rem; color: var(--text-secondary); margin-top: 0.5rem;">
            <div>⏱️ <strong>${c.tiempo_preparacion_min} min</strong> (${this.escapeHtml(c.metodo_coccion)})</div>
          </div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 0.65rem; gap: 0.5rem;">
          <button class="btn btn-sm ${isDespensa ? 'btn-primary' : 'btn-secondary'} btn-toggle-despensa" data-id="${c.id}" style="font-size: 0.75rem;">
            ${isDespensa ? '⭐ En Despensa' : '⚪ Añadir a Despensa'}
          </button>
          <button class="btn btn-sm btn-danger btn-delete-comp" data-id="${c.id}" title="Eliminar">🗑️</button>
        </div>
      </div>
    `;
  }

  renderPlateCard(plate, allComponents) {
    const prot = allComponents.find(c => c.id === plate.proteina_id);
    const veg = allComponents.find(c => c.id === plate.vegetal_id);
    const carb = allComponents.find(c => c.id === plate.carbo_id);
    const fat = allComponents.find(c => c.id === plate.grasa_id);

    return `
      <div class="glass-card" style="padding: 1.25rem; border-radius: var(--radius-lg); display: flex; flex-direction: column; justify-content: space-between; gap: 1rem;">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${this.escapeHtml(plate.nombre)}</h4>
            <span class="block-badge" style="background: rgba(255, 255, 255, 0.08);">${plate.actividad_recomendada || 'Moderado'}</span>
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.75rem;">
            <span style="font-size: 0.78rem; background: var(--color-prot-bg); color: var(--color-prot); padding: 0.15rem 0.45rem; border-radius: var(--radius-sm);">🥩 ${prot ? prot.nombre : 'Proteína'}</span>
            <span style="font-size: 0.78rem; background: var(--color-veg-bg); color: var(--color-veg); padding: 0.15rem 0.45rem; border-radius: var(--radius-sm);">🥦 ${veg ? veg.nombre : 'Vegetal'}</span>
            <span style="font-size: 0.78rem; background: var(--color-carb-bg); color: var(--color-carb); padding: 0.15rem 0.45rem; border-radius: var(--radius-sm);">🥔 ${carb ? carb.nombre : 'Carbohidrato'}</span>
            <span style="font-size: 0.78rem; background: var(--color-fat-bg); color: var(--color-fat); padding: 0.15rem 0.45rem; border-radius: var(--radius-sm);">🥑 ${fat ? fat.nombre : 'Grasa'}</span>
          </div>

          <div style="background: rgba(0, 0, 0, 0.2); border-radius: var(--radius-md); padding: 0.75rem; font-size: 0.825rem;">
            <div style="font-weight: 700; color: var(--text-secondary); margin-bottom: 0.35rem;">⚡ 3 Pasos de Cocción:</div>
            ${(plate.pasos || []).map((step, i) => `<div style="margin-bottom: 0.2rem;"><strong>${i + 1}.</strong> ${this.escapeHtml(step)}</div>`).join('')}
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button class="btn btn-sm btn-danger btn-delete-plate" data-id="${plate.id}">🗑️ Eliminar Plato</button>
        </div>
      </div>
    `;
  }

  bindEvents() {
    // Filtros por categoría
    this.container.querySelectorAll('.filter-cat-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        this.activeFilterCategory = e.currentTarget.getAttribute('data-cat');
        await this.render();
        this.bindEvents();
      });
    });

    // Toggle Despensa ⭐
    this.container.querySelectorAll('.btn-toggle-despensa').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        await storage.toggleDespensaStatus(id);
        await this.render();
        this.bindEvents();
      });
    });

    // Eliminar Componente
    this.container.querySelectorAll('.btn-delete-comp').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        if (confirm('¿Deseas eliminar este alimento de tu biblioteca?')) {
          await storage.deleteComponent(id);
          await this.render();
          this.bindEvents();
        }
      });
    });

    // Eliminar Plato
    this.container.querySelectorAll('.btn-delete-plate').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        if (confirm('¿Deseas eliminar este plato guardado?')) {
          await storage.deletePlate(id);
          await this.render();
          this.bindEvents();
        }
      });
    });

    // Control modal nuevo componente
    const modal = this.container.querySelector('#modalNewComp');
    const btnOpenModal = this.container.querySelector('#btnOpenNewCompModal');
    const btnCloseModal = this.container.querySelector('#btnCloseModal');
    const btnCancelModal = this.container.querySelector('#btnCancelModal');
    const formNewComp = this.container.querySelector('#formNewComponent');

    if (btnOpenModal) btnOpenModal.addEventListener('click', () => modal.classList.add('open'));
    if (btnCloseModal) btnCloseModal.addEventListener('click', () => modal.classList.remove('open'));
    if (btnCancelModal) btnCancelModal.addEventListener('click', () => modal.classList.remove('open'));

    if (formNewComp) {
      formNewComp.addEventListener('submit', async (e) => {
        e.preventDefault();
        const newComp = {
          nombre: document.getElementById('compNombre').value,
          categoria: document.getElementById('compCategoria').value,
          tiempo_preparacion_min: parseInt(document.getElementById('compTiempo').value, 10),
          metodo_coccion: document.getElementById('compMetodo').value,
          icono: document.getElementById('compIcono').value || '🥗',
          en_despensa: document.getElementById('compEnDespensa').checked
        };
        await storage.saveComponent(newComp);
        modal.classList.remove('open');
        await this.render();
        this.bindEvents();
      });
    }
  }

  escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
}
