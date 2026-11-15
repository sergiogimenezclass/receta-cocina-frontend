/**
 * PwaInstallComponent: Gestiona la instalación de la PWA en Android, iOS y Desktop.
 */
export class PwaInstallComponent {
  constructor(containerId = 'pwa-install-container') {
    this.containerId = containerId;
    this.deferredPrompt = null;
    this.isInstalled = false;
    this.isIos = false;

    this.checkEnvironment();
    this.initListeners();
  }

  checkEnvironment() {
    if (typeof window === 'undefined') return;

    // Detectar si ya corre en modo standalone
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                         window.navigator.standalone === true;
    this.isInstalled = isStandalone;

    // Detectar iOS / iPadOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    this.isIos = /iphone|ipad|ipod/.test(userAgent) && !window.MSStream;
  }

  initListeners() {
    if (typeof window === 'undefined') return;

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.render();
    });

    window.addEventListener('appinstalled', () => {
      this.isInstalled = true;
      this.deferredPrompt = null;
      this.render();
      console.log('🎉 [PWA]: Antirecetario instalado con éxito');
    });
  }

  render() {
    const container = document.getElementById(this.containerId);
    if (!container) return;

    // Si ya está instalada, no mostrar nada
    if (this.isInstalled) {
      container.innerHTML = '';
      return;
    }

    // Si hay un prompt diferido disponible (Android / Chrome / Edge)
    if (this.deferredPrompt) {
      container.innerHTML = `
        <button id="btnPwaInstall" class="btn-pwa-install" aria-label="Instalar Antirecetario" title="Instalar Antirecetario como aplicación">
          <span class="pwa-icon">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x1="12" y1="15" y2="3"/>
            </svg>
          </span>
          <span class="pwa-text">Instalar</span>
        </button>
      `;

      const btn = container.querySelector('#btnPwaInstall');
      if (btn) {
        btn.addEventListener('click', async () => {
          if (!this.deferredPrompt) return;
          this.deferredPrompt.prompt();
          const { outcome } = await this.deferredPrompt.userChoice;
          if (outcome === 'accepted') {
            this.deferredPrompt = null;
            this.render();
          }
        });
      }
      return;
    }

    // Si es iOS Safari y no está instalada, mostrar opción con guía
    if (this.isIos && !this.isInstalled) {
      container.innerHTML = `
        <button id="btnIosInstallGuide" class="btn-pwa-install btn-pwa-ios" aria-label="Cómo instalar en iPhone" title="Instalar en iPhone">
          <span class="pwa-icon">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x1="12" y1="15" y2="3"/>
            </svg>
          </span>
          <span class="pwa-text">Instalar</span>
        </button>
      `;

      const btnIos = container.querySelector('#btnIosInstallGuide');
      if (btnIos) {
        btnIos.addEventListener('click', () => {
          this.showIosGuideModal();
        });
      }
    }
  }

  showIosGuideModal() {
    let modal = document.getElementById('modalIosInstall');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'modalIosInstall';
      modal.className = 'modal-backdrop pwa-ios-modal';
      modal.innerHTML = `
        <div class="modal-dialog pwa-ios-dialog">
          <div class="modal-header">
            <h3>Instalar Antirecetario en iPhone</h3>
            <button class="btn-close-modal" id="btnCloseIosModal">&times;</button>
          </div>
          <div class="pwa-ios-steps">
            <p>Seguí estos 2 pasos en Safari para tenerla como una app nativa:</p>
            <ol>
              <li>Tocá el botón <strong>Compartir</strong> <span style="font-size: 1.2rem;">⎋</span> en la barra inferior de Safari.</li>
              <li>Desplazate hacia abajo y seleccioná <strong>"Agregar a pantalla de inicio"</strong> <span style="font-size: 1.2rem;">➕</span>.</li>
            </ol>
            <div style="text-align: center; margin-top: 16px;">
              <button class="btn-primary" id="btnOkIosModal" style="padding: 8px 24px;">¡Entendido!</button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      const close = () => { modal.style.display = 'none'; };
      modal.querySelector('#btnCloseIosModal').addEventListener('click', close);
      modal.querySelector('#btnOkIosModal').addEventListener('click', close);
      modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
    }
    modal.style.display = 'flex';
  }
}
