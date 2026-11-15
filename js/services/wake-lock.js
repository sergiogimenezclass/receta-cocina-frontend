/**
 * WakeLockService: Mantiene la pantalla encendida mientras el usuario cocina
 * para evitar que el teléfono se bloquee con las manos sucias.
 */
class WakeLockService {
  constructor() {
    this._sentinel = null;
    this._isActive = false;

    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', () => {
        if (this._isActive && document.visibilityState === 'visible') {
          this.requestWakeLock();
        }
      });
    }
  }

  get isSupported() {
    return typeof navigator !== 'undefined' && 'wakeLock' in navigator;
  }

  async requestWakeLock() {
    if (!this.isSupported) return false;
    try {
      this._sentinel = await navigator.wakeLock.request('screen');
      this._isActive = true;
      this._sentinel.addEventListener('release', () => {
        this._sentinel = null;
      });
      console.log('💡 [WakeLock]: Pantalla bloqueada contra apagado automático');
      return true;
    } catch (err) {
      console.warn('No se pudo activar Screen Wake Lock:', err.message);
      return false;
    }
  }

  releaseWakeLock() {
    if (this._sentinel) {
      this._sentinel.release().catch(() => {});
      this._sentinel = null;
    }
    this._isActive = false;
    console.log('💡 [WakeLock]: Pantalla liberada');
  }
}

export const wakeLockService = new WakeLockService();
