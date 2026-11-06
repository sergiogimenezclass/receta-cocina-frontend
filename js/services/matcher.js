/**
 * CatalogMatcherService: Compara la selección actual de ingredientes contra el catálogo maestro de 80 platos.
 * Regla de coincidencia: 5 criterios (Proteína, Vegetal, Carbohidrato, Grasa, Modo) = 20% cada uno.
 * Coincidencia requerida: >= 80% (4 de 5 criterios coincidentes).
 */
export class CatalogMatcherService {
  constructor() {
    this._catalog = null;
  }

  async loadCatalog() {
    if (this._catalog) return this._catalog;
    try {
      if (typeof fetch !== 'undefined') {
        const resp = await fetch('js/data/plates-catalog.json');
        if (resp.ok) {
          this._catalog = await resp.json();
          return this._catalog;
        }
      }
    } catch (_) {}

    // Fallback para entornos Node.js / pruebas unitarias
    try {
      if (typeof process !== 'undefined' && process.versions && process.versions.node) {
        const fs = await import('node:fs');
        const path = await import('node:path');
        const catalogPath = path.resolve(process.cwd(), 'js/data/plates-catalog.json');
        if (fs.existsSync(catalogPath)) {
          this._catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'));
          return this._catalog;
        }
      }
    } catch (_) {}

    return null;
  }

  setCatalog(catalogObj) {
    this._catalog = catalogObj;
  }

  /**
   * Encuentra el plato del catálogo que mejor combina con la selección del usuario.
   * @param {Object} selection - Objeto con Proteina, Vegetal, Carbohidrato, Grasa (arrays de IDs)
   * @param {string} mode - 'caliente' | 'frio'
   * @param {number} threshold - Umbral de coincidencia porcentual (default: 80)
   * @returns {Object} Resultado del matching
   */
  async findBestMatch(selection, mode = 'caliente', threshold = 80) {
    const catalog = await this.loadCatalog();
    if (!catalog || !Array.isArray(catalog.platos)) {
      return { matched: false, score: 0, plate: null, hasImage: false, imageUrl: null, matchedCriteria: [] };
    }

    const selProts = Array.isArray(selection.Proteina) ? selection.Proteina : (selection.Proteina ? [selection.Proteina] : []);
    const selVegs = Array.isArray(selection.Vegetal) ? selection.Vegetal : (selection.Vegetal ? [selection.Vegetal] : []);
    const selCarbs = Array.isArray(selection.Carbohidrato) ? selection.Carbohidrato : (selection.Carbohidrato ? [selection.Carbohidrato] : []);
    const selFats = Array.isArray(selection.Grasa) ? selection.Grasa : (selection.Grasa ? [selection.Grasa] : []);

    let bestMatch = null;
    let highestScore = -1;

    for (const plate of catalog.platos) {
      let score = 0;
      const matchedCriteria = [];

      // 1. Proteína (20%)
      if (plate.proteina_id && selProts.includes(plate.proteina_id)) {
        score += 20;
        matchedCriteria.push('proteina');
      }

      // 2. Vegetal (20%)
      const vegMatch = (plate.vegetal_id && selVegs.includes(plate.vegetal_id)) ||
                       (plate.vegetal_secundario_id && selVegs.includes(plate.vegetal_secundario_id));
      if (vegMatch) {
        score += 20;
        matchedCriteria.push('vegetal');
      }

      // 3. Carbohidrato (20%)
      if (plate.carbo_id) {
        if (selCarbs.includes(plate.carbo_id)) {
          score += 20;
          matchedCriteria.push('carbohidrato');
        }
      } else {
        // Plato low-carb sin carbohidrato en el catálogo
        if (selCarbs.length === 0) {
          score += 20;
          matchedCriteria.push('carbohidrato_lowcarb');
        } else if (plate.vegetal_secundario_id && selVegs.includes(plate.vegetal_secundario_id)) {
          score += 20;
          matchedCriteria.push('carbohidrato_doble_veg');
        }
      }

      // 4. Grasa (20%)
      if (plate.grasa_id && selFats.includes(plate.grasa_id)) {
        score += 20;
        matchedCriteria.push('grasa');
      }

      // 5. Modo (20%)
      if (plate.modo && plate.modo === mode) {
        score += 20;
        matchedCriteria.push('modo');
      }

      const hasImage = Boolean(plate.imagen_url && plate.imagen_url.trim().length > 0);

      // Priorizar mayor puntaje; ante igualdad, priorizar el que ya tenga foto recortada disponible
      if (
        score > highestScore ||
        (score === highestScore && hasImage && (!bestMatch || !bestMatch.hasImage))
      ) {
        highestScore = score;
        bestMatch = {
          score,
          plate,
          hasImage,
          imageUrl: hasImage ? plate.imagen_url : null,
          matchedCriteria
        };
      }
    }

    if (bestMatch && bestMatch.score >= threshold) {
      return {
        matched: true,
        ...bestMatch
      };
    }

    return {
      matched: false,
      score: highestScore >= 0 ? highestScore : 0,
      plate: bestMatch ? bestMatch.plate : null,
      hasImage: bestMatch ? bestMatch.hasImage : false,
      imageUrl: null,
      matchedCriteria: bestMatch ? bestMatch.matchedCriteria : []
    };
  }
}

export const catalogMatcher = new CatalogMatcherService();
