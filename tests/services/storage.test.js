import '../helpers/setup-env.js';
import test from 'node:test';
import assert from 'node:assert';
import { storage } from '../../js/services/storage.js';
import { INITIAL_SEED } from '../../js/data/seed.js';

test('StorageService - Carga y estructura de datos iniciales (Seed)', async () => {
  const components = await storage.getComponents();
  assert.ok(Array.isArray(components), 'Los componentes deben ser un array');
  assert.ok(components.length >= 15, 'Debe haber al menos 15 ingredientes iniciales');

  // Verificar que cada componente cumpla con el modelo de datos
  for (const comp of components) {
    assert.ok(comp.id, `El componente ${comp.nombre || 'desconocido'} debe tener un ID`);
    assert.ok(comp.nombre, `El componente ${comp.id} debe tener un nombre`);
    assert.ok(['Proteina', 'Vegetal', 'Carbohidrato', 'Grasa'].includes(comp.categoria), 
      `Categoría inválida en ${comp.id}: ${comp.categoria}`);
    assert.ok(typeof comp.tiempo_preparacion_min === 'number', `Tiempo inválido en ${comp.id}`);
  }
});

test('StorageService - Filtrado de componentes por categoría', async () => {
  const components = await storage.getComponents();
  const proteinas = components.filter(c => c.categoria === 'Proteina');
  const vegetales = components.filter(c => c.categoria === 'Vegetal');
  const carbos = components.filter(c => c.categoria === 'Carbohidrato');
  const grasas = components.filter(c => c.categoria === 'Grasa');

  assert.ok(proteinas.length > 0, 'Debe haber proteínas');
  assert.ok(vegetales.length > 0, 'Debe haber vegetales');
  assert.ok(carbos.length > 0, 'Debe haber carbohidratos');
  assert.ok(grasas.length > 0, 'Debe haber grasas');

  for (const p of proteinas) assert.strictEqual(p.categoria, 'Proteina');
  for (const v of vegetales) assert.strictEqual(v.categoria, 'Vegetal');
  for (const c of carbos) assert.strictEqual(c.categoria, 'Carbohidrato');
  for (const g of grasas) assert.strictEqual(g.categoria, 'Grasa');
});

test('StorageService - Guardado y recuperación de un plato', async () => {
  const nuevoPlato = {
    nombre: 'Bowl de Pollo y Calabaza Test',
    modo_servido: 'caliente',
    ingredientes: [
      { id: 'comp_prot_pollo', nombre: 'Pechuga de Pollo', categoria: 'Proteina' },
      { id: 'comp_veg_calabaza', nombre: 'Calabaza / Zapallo', categoria: 'Vegetal' }
    ],
    pasos: ['Cocinar pollo.', 'Hornear calabaza.', 'Servir caliente.'],
    tiempo_total_min: 20
  };

  const platoGuardado = await storage.savePlate(nuevoPlato);
  assert.ok(platoGuardado.id, 'El plato guardado debe tener un ID autogenerado');
  assert.strictEqual(platoGuardado.nombre, nuevoPlato.nombre);

  const todosLosPlatos = await storage.getPlates();
  const encontrado = todosLosPlatos.find(p => p.id === platoGuardado.id);
  assert.ok(encontrado, 'El plato debe recuperarse de la lista general');
  assert.strictEqual(encontrado.modo_servido, 'caliente');
});

test('StorageService - Exportación y Reseteo a valores de fábrica', async () => {
  const backup = await storage.exportFullData();
  assert.ok(backup.components, 'La exportación debe contener componentes');
  assert.ok(backup.plates, 'La exportación debe contener platos');
  assert.ok(backup.weeklyPlan, 'La exportación debe contener plan semanal');

  await storage.resetToSeed();
  const platesTrasReset = await storage.getPlates();
  assert.strictEqual(platesTrasReset.length, INITIAL_SEED.plates.length, 
    'El reseteo debe devolver exactamente la cantidad de platos de fábrica');
});
