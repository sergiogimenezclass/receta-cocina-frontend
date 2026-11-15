/**
 * HapticsService: Provee micro-vibraciones hápticas táctiles para celulares.
 */
class HapticsService {
  get isSupported() {
    return typeof navigator !== 'undefined' && 'vibrate' in navigator;
  }

  // Toque suave (al pulsar cuadrante o botón)
  tap() {
    if (this.isSupported) {
      try { navigator.vibrate(15); } catch (_) {}
    }
  }

  // Éxito (doble pulso corto al matchear plato con foto)
  success() {
    if (this.isSupported) {
      try { navigator.vibrate([20, 40, 20]); } catch (_) {}
    }
  }

  // Alerta o advertencia
  warning() {
    if (this.isSupported) {
      try { navigator.vibrate([40, 60, 40]); } catch (_) {}
    }
  }
}

export const hapticsService = new HapticsService();
