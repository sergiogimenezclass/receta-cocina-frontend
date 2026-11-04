import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const catalogPath = path.resolve(__dirname, '../../js/data/plates-catalog.json');

test('Catálogo Maestro de Platos 2x2 - Estructura y Consistencia', async () => {
  assert.ok(fs.existsSync(catalogPath), 'El archivo plates-catalog.json debe existir');

  const content = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'));
  const seedModule = await import('../../js/data/seed.js');
  const validCompIds = new Set(seedModule.INITIAL_SEED.components.map(c => c.id));

  assert.equal(content.total_lotes, 20, 'Debe haber exactamente 20 lotes');
  assert.equal(content.total_platos, 80, 'Debe haber exactamente 80 platos en el catálogo');
  assert.equal(content.resumen_modos.caliente, 60, 'Debe haber 60 platos calientes (75%)');
  assert.equal(content.resumen_modos.frio, 20, 'Debe haber 20 platos fríos (25%)');
  assert.equal(content.resumen_carbo.sin_carbohidrato_low_carb, 15, 'Debe haber 15 platos sin carbohidrato (low-carb)');

  content.platos.forEach(p => {
    assert.ok(validCompIds.has(p.proteina_id), `proteina_id ${p.proteina_id} debe existir en seed`);
    if (p.carbo_id) {
      assert.ok(validCompIds.has(p.carbo_id), `carbo_id ${p.carbo_id} debe existir en seed`);
    }
    assert.ok(validCompIds.has(p.vegetal_id), `vegetal_id ${p.vegetal_id} debe existir en seed`);
    if (p.vegetal_secundario_id) {
      assert.ok(validCompIds.has(p.vegetal_secundario_id), `vegetal_secundario_id ${p.vegetal_secundario_id} debe existir en seed`);
    }
    assert.ok(validCompIds.has(p.grasa_id), `grasa_id ${p.grasa_id} debe existir en seed`);
    assert.ok(Array.isArray(p.tags) && p.tags.length > 0, `El plato ${p.id} debe tener tags`);
    assert.ok(p.prompt_cuadrante && p.prompt_cuadrante.length > 20, `El plato ${p.id} debe tener prompt de cuadrante`);
  });
});
