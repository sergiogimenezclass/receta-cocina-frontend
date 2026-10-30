import { INITIAL_SEED } from '../data/seed.js';

const KEYS = {
  COMPONENTS: 'mpb_components_v1',
  PLATES: 'mpb_plates_v1',
  WEEKLY_PLAN: 'mpb_weekly_plan_v1',
  API_KEY: 'mpb_gemini_api_key_v1',
  STABILITY_API_KEY: 'mpb_stability_api_key_v1',
  VOICE_LANG: 'mpb_voice_lang_v1',
};

/**
 * StorageService: Capa de abstracción de persistencia.
 * Actualmente usa LocalStorage. Totalmente preparado para conmutar a API REST.
 */
class StorageService {
  constructor() {
    this._initSeedIfNeeded();
  }

  _initSeedIfNeeded() {
    const currentSeedVersion = localStorage.getItem('mpb_seed_version');
    if (currentSeedVersion !== 'v2_latam') {
      const existing = JSON.parse(localStorage.getItem(KEYS.COMPONENTS) || '[]');
      // Preservar componentes personalizados creados por el usuario
      const customComps = existing.filter(c => !c.id.startsWith('comp_prot_') && !c.id.startsWith('comp_veg_') && !c.id.startsWith('comp_carb_') && !c.id.startsWith('comp_fat_'));
      localStorage.setItem(KEYS.COMPONENTS, JSON.stringify([...INITIAL_SEED.components, ...customComps]));
      localStorage.setItem(KEYS.PLATES, JSON.stringify(INITIAL_SEED.plates));
      localStorage.setItem(KEYS.WEEKLY_PLAN, JSON.stringify(INITIAL_SEED.weeklyPlan));
      localStorage.setItem('mpb_seed_version', 'v2_latam');
    }

    if (!localStorage.getItem(KEYS.COMPONENTS)) {
      localStorage.setItem(KEYS.COMPONENTS, JSON.stringify(INITIAL_SEED.components));
    }
    if (!localStorage.getItem(KEYS.PLATES)) {
      localStorage.setItem(KEYS.PLATES, JSON.stringify(INITIAL_SEED.plates));
    }
    if (!localStorage.getItem(KEYS.WEEKLY_PLAN)) {
      localStorage.setItem(KEYS.WEEKLY_PLAN, JSON.stringify(INITIAL_SEED.weeklyPlan));
    }
    localStorage.removeItem('mpb_activity_rules_v1');
    this._removeLegacyPortionMetadata();
  }

  _removeLegacyPortionMetadata() {
    const components = JSON.parse(localStorage.getItem(KEYS.COMPONENTS) || '[]');
    let componentsChanged = false;
    components.forEach(component => {
      if (Object.hasOwn(component, 'porcion_base')) {
        delete component.porcion_base;
        componentsChanged = true;
      }
    });
    if (componentsChanged) {
      localStorage.setItem(KEYS.COMPONENTS, JSON.stringify(components));
    }

    const plates = JSON.parse(localStorage.getItem(KEYS.PLATES) || '[]');
    let platesChanged = false;
    plates.forEach(plate => {
      if (Object.hasOwn(plate, 'actividad_recomendada')) {
        delete plate.actividad_recomendada;
        platesChanged = true;
      }
    });
    if (platesChanged) {
      localStorage.setItem(KEYS.PLATES, JSON.stringify(plates));
    }
  }

  // --- CONFIGURACIÓN & API KEYS ---
  async getApiKey() {
    return localStorage.getItem(KEYS.API_KEY) || '';
  }

  async saveApiKey(key) {
    localStorage.setItem(KEYS.API_KEY, key.trim());
    return key.trim();
  }

  async getStabilityApiKey() {
    return localStorage.getItem(KEYS.STABILITY_API_KEY) || '';
  }

  async saveStabilityApiKey(key) {
    localStorage.setItem(KEYS.STABILITY_API_KEY, key.trim());
    return key.trim();
  }

  async getVoiceLanguage() {
    return localStorage.getItem(KEYS.VOICE_LANG) || 'es-ES';
  }

  async saveVoiceLanguage(lang) {
    const validLang = (lang || 'es-ES').trim();
    localStorage.setItem(KEYS.VOICE_LANG, validLang);
    return validLang;
  }

  // --- COMPONENTES ---
  async getComponents() {
    const data = localStorage.getItem(KEYS.COMPONENTS);
    return data ? JSON.parse(data) : [];
  }

  async saveComponent(component) {
    const components = await this.getComponents();
    if (!component.id) {
      component.id = 'comp_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4);
    }
    const index = components.findIndex(c => c.id === component.id);
    if (index >= 0) {
      components[index] = { ...components[index], ...component };
    } else {
      components.push(component);
    }
    localStorage.setItem(KEYS.COMPONENTS, JSON.stringify(components));
    return component;
  }

  async deleteComponent(componentId) {
    let components = await this.getComponents();
    components = components.filter(c => c.id !== componentId);
    localStorage.setItem(KEYS.COMPONENTS, JSON.stringify(components));
    return true;
  }

  // --- PLATOS ---
  async getPlates() {
    const data = localStorage.getItem(KEYS.PLATES);
    return data ? JSON.parse(data) : [];
  }

  async savePlate(plate) {
    const plates = await this.getPlates();
    if (!plate.id) {
      plate.id = 'plate_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4);
      plate.creado_en = new Date().toISOString();
    }
    const index = plates.findIndex(p => p.id === plate.id);
    if (index >= 0) {
      plates[index] = { ...plates[index], ...plate };
    } else {
      plates.push(plate);
    }
    localStorage.setItem(KEYS.PLATES, JSON.stringify(plates));
    return plate;
  }

  async deletePlate(plateId) {
    let plates = await this.getPlates();
    plates = plates.filter(p => p.id !== plateId);
    localStorage.setItem(KEYS.PLATES, JSON.stringify(plates));
    return true;
  }

  // --- PLAN SEMANAL ---
  async getWeeklyPlan() {
    const data = localStorage.getItem(KEYS.WEEKLY_PLAN);
    return data ? JSON.parse(data) : INITIAL_SEED.weeklyPlan;
  }

  async updateDayPlan(diaKey, data) {
    const plan = await this.getWeeklyPlan();
    plan[diaKey] = { ...plan[diaKey], ...data };
    localStorage.setItem(KEYS.WEEKLY_PLAN, JSON.stringify(plan));
    return plan;
  }

  async setDayActivity(diaKey, nivelActividad) {
    const plan = await this.getWeeklyPlan();
    if (plan[diaKey]) {
      plan[diaKey].actividad = nivelActividad;
      localStorage.setItem(KEYS.WEEKLY_PLAN, JSON.stringify(plan));
    }
    return plan;
  }

  async assignMealToDay(diaKey, tipoComida, platoId) {
    const plan = await this.getWeeklyPlan();
    if (plan[diaKey]) {
      plan[diaKey][`${tipoComida}_id`] = platoId;
      localStorage.setItem(KEYS.WEEKLY_PLAN, JSON.stringify(plan));
    }
    return plan;
  }

  async toggleOptionalMeal(diaKey, tipoComida, enabled) {
    const plan = await this.getWeeklyPlan();
    if (plan[diaKey]) {
      plan[diaKey][`has_${tipoComida}`] = enabled;
      if (!enabled) {
        plan[diaKey][`${tipoComida}_id`] = null;
      }
      localStorage.setItem(KEYS.WEEKLY_PLAN, JSON.stringify(plan));
    }
    return plan;
  }

  // --- RESET & MIGRATION UTILS ---
  async resetToSeed() {
    localStorage.removeItem(KEYS.COMPONENTS);
    localStorage.removeItem(KEYS.PLATES);
    localStorage.removeItem(KEYS.WEEKLY_PLAN);
    this._initSeedIfNeeded();
    return true;
  }

  async exportFullData() {
    return {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      components: await this.getComponents(),
      plates: await this.getPlates(),
      weeklyPlan: await this.getWeeklyPlan()
    };
  }
}

export const storage = new StorageService();
