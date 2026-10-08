import { storage } from './services/storage.js';
import { AssemblerComponent } from './components/assembler.js';
import { LibraryComponent } from './components/library.js';
import { PlannerComponent } from './components/planner.js';
import { SettingsComponent } from './components/settings.js';

class App {
  constructor() {
    this.assembler = new AssemblerComponent('assembler');
    this.library = new LibraryComponent('library');
    this.planner = new PlannerComponent('planner');
    this.settings = new SettingsComponent('settings');
    
    this.currentTab = 'assembler';
  }

  async init() {
    // Inicializar componentes UI
    await this.assembler.init();
    await this.library.init();
    await this.planner.init();
    await this.settings.init();

    this.bindEvents();
  }

  bindEvents() {
    // Navegación por pestañas SPA
    document.querySelectorAll('.nav-tab').forEach(tabBtn => {
      tabBtn.addEventListener('click', async (e) => {
        const targetTab = e.currentTarget.getAttribute('data-tab');
        await this.switchTab(targetTab);
      });
    });

    // Botón Exportar JSON (Para migración futura a FastAPI backend)
    const btnExport = document.getElementById('btnExportJSON');
    if (btnExport) {
      btnExport.addEventListener('click', async () => {
        const data = await storage.exportFullData();
        const jsonStr = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `mpb_export_${new Date().toISOString().slice(0,10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
      });
    }

    // Botón Reiniciar Datos Seed
    const btnReset = document.getElementById('btnResetSeed');
    if (btnReset) {
      btnReset.addEventListener('click', async () => {
        if (confirm('¿Deseas restablecer todos los datos a los valores iniciales de fábrica?')) {
          await storage.resetToSeed();
          location.reload();
        }
      });
    }
  }

  async switchTab(tabId) {
    this.currentTab = tabId;

    // Actualizar botones de pestaña
    document.querySelectorAll('.nav-tab').forEach(btn => {
      if (btn.getAttribute('data-tab') === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Actualizar páneles
    document.querySelectorAll('.tab-pane').forEach(pane => {
      if (pane.id === tabId) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });

    // Re-renderizar módulo activado para reflejar cambios frescos
    if (tabId === 'assembler') await this.assembler.init();
    if (tabId === 'library') await this.library.init();
    if (tabId === 'planner') await this.planner.init();
    if (tabId === 'settings') await this.settings.init();
  }
}

// Arrancar la aplicación al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
