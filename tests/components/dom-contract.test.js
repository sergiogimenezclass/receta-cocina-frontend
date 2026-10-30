import '../helpers/setup-env.js';
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { AssemblerComponent } from '../../js/components/assembler.js';

test('Contrato DOM Assembler - Renderizado de elementos obligatorios para eventos JS', async () => {
  const assembler = new AssemblerComponent('assembler');
  await assembler.render();
  const html = assembler.container.innerHTML;

  // 1. Selector de modo caliente / frío
  assert.ok(html.includes('data-mode="caliente"'), 'Falta botón con data-mode="caliente"');
  assert.ok(html.includes('data-mode="frio"'), 'Falta botón con data-mode="frio"');

  // 2. Título del plato
  assert.ok(html.includes('id="plateTitleDisplay"'), 'Falta elemento con id="plateTitleDisplay"');

  // 3. Cuadrantes táctiles del plato circular (para abrir selector modal)
  assert.ok(html.includes('class="visual-plate-circle"'), 'Falta contenedor .visual-plate-circle');
  assert.ok(html.includes('data-category="Proteina"'), 'Falta cuadrante táctil para Proteina');
  assert.ok(html.includes('data-category="Vegetal"'), 'Falta cuadrante táctil para Vegetal');
  assert.ok(html.includes('data-category="Carbohidrato"'), 'Falta cuadrante táctil para Carbohidrato');
  assert.ok(html.includes('data-category="Grasa"'), 'Falta cuadrante táctil para Grasa');

  // 4. Contenedores de contenido de cuadrantes (para actualización reactiva de texto)
  assert.ok(html.includes('id="quadContentProtein"'), 'Falta id="quadContentProtein"');
  assert.ok(html.includes('id="quadContentVeg"'), 'Falta id="quadContentVeg"');
  assert.ok(html.includes('id="quadContentCarb"'), 'Falta id="quadContentCarb"');
  assert.ok(html.includes('id="quadContentFat"'), 'Falta id="quadContentFat"');

  // 5. Botón y Modal de Modo Cocina (3 pasos desplegables)
  assert.ok(html.includes('id="btnOpenCookingMode"'), 'Falta botón id="btnOpenCookingMode"');
  assert.ok(html.includes('id="modalCookingMode"'), 'Falta diálogo nativo id="modalCookingMode"');
  assert.ok(html.includes('id="btnCloseCookingMode"'), 'Falta botón de cierre id="btnCloseCookingMode"');
  assert.ok(html.includes('id="cookingModalTitle"'), 'Falta título en modal id="cookingModalTitle"');
  assert.ok(html.includes('id="cookingStep0"'), 'Falta paso 1 id="cookingStep0"');
  assert.ok(html.includes('id="cookingStep1"'), 'Falta paso 2 id="cookingStep1"');
  assert.ok(html.includes('id="cookingStep2"'), 'Falta paso 3 id="cookingStep2"');
  assert.ok(html.includes('id="btnSavePlateInModal"'), 'Falta botón guardar en modal id="btnSavePlateInModal"');

  // 6. Modal selector táctil de alimentos
  assert.ok(html.includes('id="modalCategoryPicker"'), 'Falta modal id="modalCategoryPicker"');
  assert.ok(html.includes('id="categoryPickerTitle"'), 'Falta id="categoryPickerTitle"');
  assert.ok(html.includes('id="categoryPickerGrid"'), 'Falta id="categoryPickerGrid"');

  // 7. Barra de Chat y Dictado por Voz (IA / Gemini)
  assert.ok(html.includes('id="formAutoSelectIngredients"'), 'Falta formulario id="formAutoSelectIngredients"');
  assert.ok(html.includes('id="autoIngredientsInput"'), 'Falta input de chat id="autoIngredientsInput"');
  assert.ok(html.includes('id="btnVoiceInput"'), 'Falta botón de micrófono id="btnVoiceInput"');

  // 8. Colapso reactivo de plato
  assert.ok(html.includes('id="plateCompactBar"'), 'Falta contenedor de chips compactos id="plateCompactBar"');
  assert.ok(html.includes('id="visualPlateWrapper"'), 'Falta contenedor id="visualPlateWrapper"');

  // 9. Panel en vivo de Desktop
  assert.ok(html.includes('id="livePlateNameInput"'), 'Falta input de nombre en desktop id="livePlateNameInput"');
  assert.ok(html.includes('data-step="0"'), 'Falta input data-step="0"');
  assert.ok(html.includes('data-step="1"'), 'Falta input data-step="1"');
  assert.ok(html.includes('data-step="2"'), 'Falta input data-step="2"');
  assert.ok(html.includes('id="btnSavePlateLive"'), 'Falta botón guardar id="btnSavePlateLive"');
});

test('Contrato DOM index.html - Estructura base requerida por app.js', () => {
  const indexHtml = fs.readFileSync(path.resolve('index.html'), 'utf-8');

  // 1. Secciones de pestañas SPA que App.init() inicializa
  assert.ok(indexHtml.includes('id="assembler"'), 'index.html debe tener section#assembler');
  assert.ok(indexHtml.includes('id="planner"'), 'index.html debe tener section#planner');
  assert.ok(indexHtml.includes('id="library"'), 'index.html debe tener section#library');
  assert.ok(indexHtml.includes('id="settings"'), 'index.html debe tener section#settings');

  // 2. Botones de navegación SPA
  assert.ok(indexHtml.includes('data-tab="assembler"'), 'Falta botón nav data-tab="assembler"');
  assert.ok(indexHtml.includes('data-tab="planner"'), 'Falta botón nav data-tab="planner"');
  assert.ok(indexHtml.includes('data-tab="library"'), 'Falta botón nav data-tab="library"');
  assert.ok(indexHtml.includes('data-tab="settings"'), 'Falta botón nav data-tab="settings"');

  // 3. Botones globales de exportación y reseteo
  assert.ok(indexHtml.includes('id="btnExportJSON"'), 'Falta botón id="btnExportJSON"');
  assert.ok(indexHtml.includes('id="btnResetSeed"'), 'Falta botón id="btnResetSeed"');
});

test('Contrato DOM LibraryComponent - Barra de filtros por macronutrientes responsive', async () => {
  const { LibraryComponent } = await import('../../js/components/library.js');
  const library = new LibraryComponent('library');
  await library.render();
  const html = library.container.innerHTML;

  assert.ok(html.includes('class="library-filter-bar"'), 'Debe incluir contenedor .library-filter-bar');
  assert.ok(html.includes('data-cat="ALL"'), 'Debe incluir filtro ALL');
  assert.ok(html.includes('data-cat="Proteina"'), 'Debe incluir filtro Proteina');
  assert.ok(html.includes('data-cat="Vegetal"'), 'Debe incluir filtro Vegetal');
  assert.ok(html.includes('data-cat="Carbohidrato"'), 'Debe incluir filtro Carbohidrato');
  assert.ok(html.includes('data-cat="Grasa"'), 'Debe incluir filtro Grasa');
  assert.ok(html.includes('filter-cat-btn active'), 'El botón inicial debe tener clase active');
});

