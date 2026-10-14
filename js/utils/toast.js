/**
 * Sistema de notificaciones in-app (toast) y diálogos de confirmación.
 * Reemplaza por completo el uso de alert() y confirm() del navegador.
 */

// Asegura que el contenedor de toasts exista en el DOM
function getToastContainer() {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  return container;
}

/**
 * Muestra una notificación toast.
 * @param {string} message  - Texto del mensaje.
 * @param {'success'|'error'|'warning'|'info'} type - Tipo visual.
 * @param {number} duration - Milisegundos antes de desaparecer (default 3500).
 */
export function showToast(message, type = 'info', duration = 3500) {
  const container = getToastContainer();

  const icons = {
    success: '✅',
    error:   '❌',
    warning: '⚠️',
    info:    'ℹ️',
  };

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <span class="toast__icon">${icons[type] ?? 'ℹ️'}</span>
    <span class="toast__msg">${message}</span>
    <button class="toast__close" aria-label="Cerrar">×</button>
  `;

  container.appendChild(toast);

  // Animación de entrada
  requestAnimationFrame(() => toast.classList.add('toast--visible'));

  const dismiss = () => {
    toast.classList.remove('toast--visible');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
  };

  toast.querySelector('.toast__close').addEventListener('click', dismiss);
  setTimeout(dismiss, duration);
}

/**
 * Muestra un diálogo de confirmación propio (reemplaza confirm()).
 * @param {string} message - Pregunta a mostrar.
 * @returns {Promise<boolean>} Resuelve true si el usuario confirma.
 */
export function showConfirm(message) {
  return new Promise((resolve) => {
    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'confirm-overlay';

    overlay.innerHTML = `
      <div class="confirm-dialog" role="dialog" aria-modal="true">
        <p class="confirm-dialog__msg">${message}</p>
        <div class="confirm-dialog__actions">
          <button id="confirmCancel" class="btn btn-secondary btn-sm">Cancelar</button>
          <button id="confirmOk"     class="btn btn-primary  btn-sm">Confirmar</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('confirm-overlay--visible'));

    const close = (result) => {
      overlay.classList.remove('confirm-overlay--visible');
      overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
      resolve(result);
    };

    overlay.querySelector('#confirmOk').addEventListener('click', () => close(true));
    overlay.querySelector('#confirmCancel').addEventListener('click', () => close(false));
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(false); });
  });
}
