import '../helpers/setup-env.js';
import test from 'node:test';
import assert from 'node:assert';
import { AssemblerComponent } from '../../js/components/assembler.js';
import { storage } from '../../js/services/storage.js';

test('AssemblerComponent - Inicialización y estado inicial', async () => {
  const assembler = new AssemblerComponent('assembler');
  assert.strictEqual(assembler.plateMode, 'caliente', 'El modo por defecto debe ser caliente');
  assert.deepStrictEqual(assembler.selected, {
    Proteina: [],
    Vegetal: [],
    Carbohidrato: [],
    Grasa: []
  }, 'El objeto selected debe iniciar con arrays vacíos para cada categoría');
  assert.strictEqual(assembler.customSteps.length, 3, 'Deben existir 3 pasos de cocina');
});

test('AssemblerComponent - getMissingCategories() detecta faltantes', async () => {
  const assembler = new AssemblerComponent('assembler');
  
  // 1. Al inicio faltan todos los grupos
  let missing = assembler.getMissingCategories();
  assert.strictEqual(missing.length, 4, 'Al inicio deben faltar las 4 categorías');

  // 2. Seleccionar Proteína y Vegetal
  assembler.selected.Proteina = ['comp_prot_1'];
  assembler.selected.Vegetal = ['comp_veg_1'];
  missing = assembler.getMissingCategories();
  assert.strictEqual(missing.length, 2, 'Deben faltar solo 2 categorías (Carbo y Grasa)');
  assert.deepStrictEqual(missing.map(m => m.key), ['Carbohidrato', 'Grasa']);

  // 3. Completar los 4 grupos
  assembler.selected.Carbohidrato = ['comp_carb_1'];
  assembler.selected.Grasa = ['comp_fat_1'];
  missing = assembler.getMissingCategories();
  assert.strictEqual(missing.length, 0, 'No debe faltar ninguna categoría cuando el plato está completo');
});

test('AssemblerComponent - updateStepDefaults() genera 3 pasos según modo caliente vs frío', async () => {
  const assembler = new AssemblerComponent('assembler');
  const components = await storage.getComponents();

  assembler.selected.Proteina = ['comp_prot_1']; // Pechuga / Suprema de Pollo
  assembler.selected.Vegetal = ['comp_veg_1'];
  assembler.selected.Carbohidrato = ['comp_carb_1'];
  assembler.selected.Grasa = ['comp_fat_1'];

  // Modo Caliente
  assembler.plateMode = 'caliente';
  await assembler.updateStepDefaults(components);
  assert.strictEqual(assembler.customSteps.length, 3);
  assert.ok(assembler.customSteps[0].toLowerCase().includes('pollo') || assembler.customSteps[0].includes('cocinar'));
  assert.ok(assembler.customSteps[1].toLowerCase().includes('caliente') || assembler.customSteps[1].toLowerCase().includes('wok') || assembler.customSteps[1].toLowerCase().includes('saltear'));
  assert.ok(assembler.customSteps[2].toLowerCase().includes('caliente') || assembler.customSteps[2].toLowerCase().includes('emplatar'));

  // Modo Frío (Ensalada / Bowl fresco)
  assembler.plateMode = 'frio';
  await assembler.updateStepDefaults(components);
  assert.strictEqual(assembler.customSteps.length, 3);
  assert.ok(assembler.customSteps[0].toLowerCase().includes('ensalada') || assembler.customSteps[0].toLowerCase().includes('proteína'));
  assert.ok(assembler.customSteps[1].toLowerCase().includes('bowl') || assembler.customSteps[1].toLowerCase().includes('mezclar'));
  assert.ok(assembler.customSteps[2].toLowerCase().includes('frío') || assembler.customSteps[2].toLowerCase().includes('aderezar'));
});

test('AssemblerComponent - renderQuadrantContent() formatea cuadrantes vacíos y seleccionados', async () => {
  const assembler = new AssemblerComponent('assembler');
  const components = await storage.getComponents();

  // Vacío: renderiza el placeholder opcional o vacío
  const vacioConPlaceholder = assembler.renderQuadrantContent('Proteina', components, '+ Elegir');
  assert.ok(vacioConPlaceholder.includes('+ Elegir'));

  const vacioSinPlaceholder = assembler.renderQuadrantContent('Proteina', components, '');
  assert.strictEqual(vacioSinPlaceholder, '');

  // Con alimento seleccionado: renderiza el badge de conteo (1) y el nombre en tooltip
  assembler.selected.Proteina = ['comp_prot_1'];
  const llenoHtml = assembler.renderQuadrantContent('Proteina', components, '+ Elegir');
  assert.ok(llenoHtml.includes('Pechuga / Suprema de Pollo'));
  assert.ok(llenoHtml.includes('quadrant-corner-badge'));
  assert.ok(llenoHtml.includes('>1<'));

  // Con múltiples alimentos seleccionados: badge muestra el conteo total (2)
  assembler.selected.Proteina = ['comp_prot_1', 'comp_prot_3'];
  const multipleHtml = assembler.renderQuadrantContent('Proteina', components);
  assert.ok(multipleHtml.includes('Pechuga / Suprema de Pollo'));
  assert.ok(multipleHtml.includes('>2<'));
});

test('AssemblerComponent - renderCompactChips() genera los 4 badges compactos', async () => {
  const assembler = new AssemblerComponent('assembler');
  const components = await storage.getComponents();
  const chipsHtml = assembler.renderCompactChips(components);

  assert.ok(chipsHtml.includes('data-category="Proteina"'));
  assert.ok(chipsHtml.includes('data-category="Vegetal"'));
  assert.ok(chipsHtml.includes('data-category="Carbohidrato"'));
  assert.ok(chipsHtml.includes('data-category="Grasa"'));
});

test('AssemblerComponent - escapeHtml() previene inyección de código malicioso (XSS)', () => {
  const assembler = new AssemblerComponent('assembler');
  const sanitized = assembler.escapeHtml('<script>alert("xss")</script>&');
  assert.strictEqual(sanitized, '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;&amp;');
});

test('AssemblerComponent - hasCategorySelected y getQuadrantEmoji para activación dinámica de cuadrantes', async () => {
  const assembler = new AssemblerComponent('assembler');
  const components = await storage.getComponents();

  // En vacío: hasCategorySelected retorna false y getQuadrantEmoji retorna el emoji por defecto
  assert.strictEqual(assembler.hasCategorySelected('Proteina'), false);
  assert.strictEqual(assembler.getQuadrantEmoji('Proteina', components, '🥩'), '🥩');

  // Al seleccionar pollo: hasCategorySelected retorna true y getQuadrantEmoji retorna el icono específico (🍗)
  assembler.selected.Proteina = ['comp_prot_1'];
  assert.strictEqual(assembler.hasCategorySelected('Proteina'), true);
  assert.strictEqual(assembler.getQuadrantEmoji('Proteina', components, '🥩'), '🍗');
});

test('AssemblerComponent - deterministicAutoSelect no confunde "pata" con "palta"', async () => {
  const assembler = new AssemblerComponent('testContainer');
  const components = await storage.getComponents();

  assembler.deterministicAutoSelect('papas, cebolla, rabanito, pata de pollo', components);

  assert.ok(assembler.selected.Proteina.length > 0, 'Debe detectar pollo como Proteína');
  assert.ok(assembler.selected.Vegetal.length > 0, 'Debe detectar cebolla como Vegetal');
  assert.ok(assembler.selected.Carbohidrato.length > 0, 'Debe detectar papas como Carbohidrato');
  assert.strictEqual(assembler.selected.Grasa.length, 0, 'No debe asignar Palta como Grasa al procesar "pata"');
});

test('AssemblerComponent - deterministicAutoSelect detecta correctamente nuevas proteínas cotidianas argentinas', async () => {
  const assembler = new AssemblerComponent('testContainer');
  const components = await storage.getComponents();

  // Test 1: Milanesa
  assembler.deterministicAutoSelect('tengo una milanesa con pure de papas', components);
  assert.strictEqual(assembler.selected.Proteina[0], 'comp_prot_14', 'Debe detectar Milanesa');

  // Test 2: Bondiola de cerdo
  assembler.deterministicAutoSelect('bife de bondiola con ensalada de rucula', components);
  assert.strictEqual(assembler.selected.Proteina[0], 'comp_prot_15', 'Debe detectar Bondiola');

  // Test 3: Queso Port Salut
  assembler.deterministicAutoSelect('queso port salut con tomate', components);
  assert.strictEqual(assembler.selected.Proteina[0], 'comp_prot_16', 'Debe detectar Queso Fresco / Port Salut');

  // Test 4: Caballa en lata
  assembler.deterministicAutoSelect('lata de caballa con arroz', components);
  assert.strictEqual(assembler.selected.Proteina[0], 'comp_prot_17', 'Debe detectar Caballa');

  // Test 5: Soja texturizada
  assembler.deterministicAutoSelect('soja texturizada salteada con fideos', components);
  assert.strictEqual(assembler.selected.Proteina[0], 'comp_prot_18', 'Debe detectar Soja texturizada');

  // Test 6: Bife de hígado
  assembler.deterministicAutoSelect('bife de higado con cebolla', components);
  assert.strictEqual(assembler.selected.Proteina[0], 'comp_prot_19', 'Debe detectar Hígado');
});

test('AssemblerComponent - deterministicAutoSelect detecta correctamente grasas Manteca y Crema de Leche', async () => {
  const assembler = new AssemblerComponent('testContainer');
  const components = await storage.getComponents();

  // Test Manteca
  assembler.deterministicAutoSelect('fideos con manteca', components);
  assert.strictEqual(assembler.selected.Grasa[0], 'comp_fat_7', 'Debe detectar Manteca como Grasa');

  // Test Crema de Leche
  assembler.deterministicAutoSelect('pollo salteado con crema de leche y champiñones', components);
  assert.strictEqual(assembler.selected.Grasa[0], 'comp_fat_8', 'Debe detectar Crema de Leche como Grasa');
});

