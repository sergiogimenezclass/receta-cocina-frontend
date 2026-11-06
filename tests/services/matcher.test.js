import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CatalogMatcherService } from '../../js/services/matcher.js';

test('CatalogMatcherService - Coincidencia 100% y 80% con el catálogo', async () => {
  const matcher = new CatalogMatcherService();
  const catalog = await matcher.loadCatalog();
  assert.ok(catalog, 'El catálogo debe cargarse correctamente');

  // Caso 1: Bife a la Plancha con Puré y Rúcula (plate_cat_01) - 100% (5/5)
  // proteina: comp_prot_3, carbo: comp_carb_3, vegetal: comp_veg_1, grasa: comp_fat_1, modo: caliente
  const fullMatchSelection = {
    Proteina: ['comp_prot_3'],
    Carbohidrato: ['comp_carb_3'],
    Vegetal: ['comp_veg_1'],
    Grasa: ['comp_fat_1']
  };

  const res100 = await matcher.findBestMatch(fullMatchSelection, 'caliente', 80);
  assert.equal(res100.matched, true, 'Debe coincidir con umbral 80');
  assert.equal(res100.score, 100, 'Debe tener 100% de coincidencia');
  assert.equal(res100.plate.id, 'plate_cat_01');
  assert.equal(res100.hasImage, true);
  assert.equal(res100.imageUrl, 'img/platos/plate_cat_01.jpg');

  // Caso 2: 80% (4/5) - Mismos ingredientes pero con grasa diferente (palta comp_fat_2 en vez de oliva comp_fat_1)
  const eightyMatchSelection = {
    Proteina: ['comp_prot_3'],
    Carbohidrato: ['comp_carb_3'],
    Vegetal: ['comp_veg_1'],
    Grasa: ['comp_fat_2'] // Diferente grasa
  };

  const res80 = await matcher.findBestMatch(eightyMatchSelection, 'caliente', 80);
  assert.equal(res80.matched, true, 'Debe coincidir con 80%');
  assert.equal(res80.score, 80, 'El puntaje debe ser exactamente 80%');
  assert.ok(res80.plate);

  // Caso 3: Coincidencia baja (< 80%) - solo proteína y modo coinciden (40%)
  const lowMatchSelection = {
    Proteina: ['comp_prot_3'],
    Carbohidrato: ['comp_carb_7'], // Mandioca
    Vegetal: ['comp_veg_14'], // Remolacha
    Grasa: ['comp_fat_7'] // Manteca
  };

  const resLow = await matcher.findBestMatch(lowMatchSelection, 'caliente', 80);
  assert.equal(resLow.matched, false, 'No debe superar el umbral de 80%');
  assert.ok(resLow.score < 80, 'El puntaje debe ser menor a 80');
});
