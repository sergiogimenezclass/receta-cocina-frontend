import '../helpers/setup-env.js';
import test from 'node:test';
import assert from 'node:assert';
import { AssemblerComponent } from '../../js/components/assembler.js';
import { storage } from '../../js/services/storage.js';

test('AssemblerComponent - Integración de matching con catálogo y cola de fotos', async () => {
  await storage.clearGenerationQueue();
  const assembler = new AssemblerComponent('assembler');

  // Caso 1: Coincidencia 100% con plate_cat_01 (Bife con puré y rúcula, caliente)
  assembler.selected.Proteina = ['comp_prot_3'];
  assembler.selected.Carbohidrato = ['comp_carb_3'];
  assembler.selected.Vegetal = ['comp_veg_1'];
  assembler.selected.Grasa = ['comp_fat_1'];
  assembler.plateMode = 'caliente';

  const res100 = await assembler.updateCatalogMatch();
  assert.equal(res100.matched, true);
  assert.equal(res100.score, 100);
  assert.equal(assembler.matchedPlateImage, 'img/platos/plate_cat_01.jpg');
  assert.equal(assembler.showPhotoView, true);

  // Renderizar y verificar que el HTML incluye la foto del catálogo
  await assembler.render();
  const html100 = assembler.container.innerHTML;
  assert.ok(html100.includes('src="img/platos/plate_cat_01.jpg"'));
  assert.ok(html100.includes('100% coincidencia'));
  assert.ok(html100.includes('id="btnTogglePlateView"'));

  // Caso 2: Coincidencia < 80% (se añade a la cola de generación)
  await storage.clearGenerationQueue();
  assembler.selected.Proteina = ['comp_prot_3'];
  assembler.selected.Carbohidrato = ['comp_carb_7']; // Mandioca
  assembler.selected.Vegetal = ['comp_veg_14']; // Remolacha
  assembler.selected.Grasa = ['comp_fat_7']; // Manteca
  assembler.plateMode = 'caliente';

  const resLow = await assembler.updateCatalogMatch();
  assert.equal(resLow.matched, false);
  assert.equal(assembler.matchedPlateImage, null);

  const queue = await storage.getGenerationQueue();
  assert.equal(queue.length, 1, 'Debe haber encolado el plato que no alcanzó 80%');
  assert.equal(queue[0].status, 'pending');
});
