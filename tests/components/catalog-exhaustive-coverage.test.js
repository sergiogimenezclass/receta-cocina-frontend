import '../helpers/setup-env.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { CatalogMatcherService } from '../../js/services/matcher.js';

test('Catálogo Maestro - Cobertura exhaustiva de integridad física y matching (Nivel 1)', async () => {
  const matcher = new CatalogMatcherService();
  const catalog = await matcher.loadCatalog();
  assert.ok(catalog, 'El catálogo debe cargar correctamente');
  assert.ok(Array.isArray(catalog.platos), 'Debe contener un arreglo de platos');

  const activePlatesWithImages = catalog.platos.filter(p => p.imagen_url && p.imagen_url.trim().length > 0);
  assert.ok(activePlatesWithImages.length >= 220, `Debe haber al menos 220 platos con fotos activas (hay ${activePlatesWithImages.length})`);

  let missingFiles = 0;
  let corruptedFiles = 0;
  let match80Failures = 0;

  for (const plate of activePlatesWithImages) {
    // 1. Integridad del archivo en disco
    const filePath = path.resolve(process.cwd(), plate.imagen_url);
    if (!fs.existsSync(filePath)) {
      missingFiles++;
      continue;
    }

    const stats = fs.statSync(filePath);
    if (stats.size < 10000) {
      corruptedFiles++;
    }

    // 2. Coincidencia perfecta (100% de sus componentes definidos)
    const selFull = {
      Proteina: plate.proteina_id ? [plate.proteina_id] : [],
      Carbohidrato: plate.carbo_id ? [plate.carbo_id] : [],
      Vegetal: [plate.vegetal_id, plate.vegetal_secundario_id].filter(Boolean),
      Grasa: plate.grasa_id ? [plate.grasa_id] : []
    };

    const resFull = await matcher.findBestMatch(selFull, plate.modo, 80);
    assert.equal(resFull.matched, true, `El plato ${plate.id} (${plate.nombre}) debe matchear con sus propios componentes`);
    assert.equal(resFull.hasImage, true, `El plato ${plate.id} debe reportar hasImage: true`);
    assert.ok(resFull.score >= 80, `El plato ${plate.id} debe obtener score >= 80 con sus propios componentes`);

    // 3. Coincidencia al 80% (variando la grasa por una no coincidente)
    const sel80 = {
      Proteina: plate.proteina_id ? [plate.proteina_id] : [],
      Carbohidrato: plate.carbo_id ? [plate.carbo_id] : [],
      Vegetal: [plate.vegetal_id, plate.vegetal_secundario_id].filter(Boolean),
      Grasa: ['comp_fat_distinta_de_prueba']
    };

    const res80 = await matcher.findBestMatch(sel80, plate.modo, 80);
    if (!res80.matched || res80.score < 80) {
      match80Failures++;
    }
  }

  assert.equal(missingFiles, 0, `No debe faltar ningún archivo de imagen en disco (faltan: ${missingFiles})`);
  assert.equal(corruptedFiles, 0, `No debe haber archivos de imagen con tamaño inválido (corruptos: ${corruptedFiles})`);
  assert.equal(match80Failures, 0, `Todos los platos activos deben soportar coincidencia >= 80% (fallaron: ${match80Failures})`);
});
