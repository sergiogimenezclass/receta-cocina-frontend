#!/usr/bin/env node

import '../tests/helpers/setup-env.js';
import fs from 'node:fs';
import path from 'node:path';
import { storage } from '../js/services/storage.js';
import { geminiService } from '../js/services/gemini.js';
import { AssemblerComponent } from '../js/components/assembler.js';

// Matriz de los 50 casos de prueba
const TEST_CASES = [
  // Tanda 1: Carnes Vacunas Tradicionales
  { id: 'NL-01', batch: 1, name: 'Bife con Puré y Rúcula', prompt: 'tengo un bife, papas para puré, rúcula y un chorrito de oliva', expectedPlate: 'plate_cat_01' },
  { id: 'NL-02', batch: 1, name: 'Milanesa de Carne con Puré y Mixta', prompt: 'milanesa de carne con puré de papas y ensalada mixta de lechuga', expectedPlate: 'plate_cat_05' },
  { id: 'NL-03', batch: 1, name: 'Wok de Bife con Vegetales y Fideos', prompt: 'wok de bife salteado con vegetales mixtos y fideos al dente con un toque de oliva', expectedPlate: 'plate_cat_137' },
  { id: 'NL-04', batch: 1, name: 'Guiso Criollo de Carne Picada y Lentejas', prompt: 'guisito casero de lentejas con carne picada y calabaza con un chorrito de oliva', expectedPlate: 'plate_cat_181' },
  { id: 'NL-05', batch: 1, name: 'Churrasco con Morrones y Papas', prompt: 'churrasco a la plancha con morrones asados y papas doradas al horno', expectedPlate: 'plate_cat_171' },
  { id: 'NL-06', batch: 1, name: 'Estofado de Tortuguita con Fideos', prompt: 'fideos al dente con estofado criollo de tortuguita en salsa de tomate', expectedPlate: 'plate_cat_169' },
  { id: 'NL-07', batch: 1, name: 'Bife con Papas al Horno y Tomates', prompt: 'bifecito a la plancha con papas doradas al horno y rodajas de tomate asado', expectedPlate: 'plate_cat_163' },
  { id: 'NL-08', batch: 1, name: 'Bife Grillado con Espinacas (Low-Carb)', prompt: 'bife jugoso a la plancha con espinacas salteadas y champiñones con oliva', expectedPlate: 'plate_cat_49' },

  // Tanda 2: Aves y Pollo
  { id: 'NL-09', batch: 2, name: 'Suprema al Verdeo con Puré', prompt: 'suprema de pollo bañada en salsa de verdeo con puré de papas', expectedPlate: 'plate_cat_165' },
  { id: 'NL-10', batch: 2, name: 'Milanesa Napolitana de Pollo con Puré', prompt: 'milanesa de pollo con puré de papas, rodajas de tomate y queso cremoso', expectedPlate: 'plate_cat_126' },
  { id: 'NL-11', batch: 2, name: 'Pata-Muslo al Horno con Batatas', prompt: 'pata muslo de pollo bien dorada al horno con batatas caramelizadas', expectedPlate: 'plate_cat_08' },
  { id: 'NL-12', batch: 2, name: 'Salpicón Criollo de Pollo', prompt: 'salpicón frío con pechuga de pollo desmenuzada, papas hervidas y lechuga fresca con oliva', expectedPlate: 'plate_cat_65' },
  { id: 'NL-13', batch: 2, name: 'Pechuga con Champiñones y Arroz', prompt: 'pechuga de pollo cortada en dados con champiñones salteados y arroz blanco suelto', expectedPlate: 'plate_cat_166' },
  { id: 'NL-14', batch: 2, name: 'Pollo Salteado con Brócoli y Fideos', prompt: 'fideos tirabuzón al dente con dados de pollo dorado y arbolitos de brócoli', expectedPlate: 'plate_cat_186' },
  { id: 'NL-15', batch: 2, name: 'Cazuela de Arroz con Pollo y Morrón', prompt: 'arroz amarillo caldoso con trozos de pollo tierno, puerro y morrón', expectedPlate: 'plate_cat_182' },
  { id: 'NL-16', batch: 2, name: 'Pata-Muslo con Coliflor y Tomates', prompt: 'pata muslo crocante al horno con coliflor dorada y tomates asados sin carbohidratos', expectedPlate: 'plate_cat_59' },

  // Tanda 3: Pescados, Conservas y Cerdo
  { id: 'NL-17', batch: 3, name: 'Merluza a la Plancha con Puré', prompt: 'filete de merluza dorada a la plancha con puré de papas casero y lechuga', expectedPlate: 'plate_cat_03' },
  { id: 'NL-18', batch: 3, name: 'Merluza a la Provenzal con Batatas', prompt: 'filete de merluza con ajo y perejil con rodajas de batata doradas', expectedPlate: 'plate_cat_173' },
  { id: 'NL-19', batch: 3, name: 'Cazuela de Pescado con Arroz y Choclo', prompt: 'cazuela casera de merluza con arroz amarillo suave y granos de choclo', expectedPlate: 'plate_cat_174' },
  { id: 'NL-20', batch: 3, name: 'Merluza Gratinada con Espinacas', prompt: 'filete de merluza al horno con queso gratinado, puré de papas y espinacas', expectedPlate: 'plate_cat_175' },
  { id: 'NL-21', batch: 3, name: 'Costillita de Cerdo con Batata y Espinaca', prompt: 'costillita de cerdo dorada a la sartén con rodajas de batata y espinacas salteadas', expectedPlate: 'plate_cat_17' },
  { id: 'NL-22', batch: 3, name: 'Medallones de Bondiola con Papas', prompt: 'medallones de bondiola de cerdo a la crema de cebolla con papas al horno', expectedPlate: 'plate_cat_177' },
  { id: 'NL-23', batch: 3, name: 'Cerdo Salteado con Choclo y Arroz', prompt: 'tiras de carne de cerdo salteadas con morrón rojo, choclo y arroz blanco', expectedPlate: 'plate_cat_179' },
  { id: 'NL-24', batch: 3, name: 'Porotos con Bondiola Guisada', prompt: 'porotos blancos guisados con trozos tiernos de bondiola y zanahoria', expectedPlate: 'plate_cat_183' },
  { id: 'NL-25', batch: 3, name: 'Fideos con Caballa y Aceitunas', prompt: 'fideos salteados con lomos de caballa en conserva, morrón y aceitunas negras', expectedPlate: 'plate_cat_187' },
  { id: 'NL-26', batch: 3, name: 'Ensalada Fría de Arroz con Caballa', prompt: 'bowl de arroz blanco frío con caballa en conserva, dados de tomate y palta fresca', expectedPlate: 'plate_cat_214' },
  { id: 'NL-27', batch: 3, name: 'Ensalada Rusa con Lomitos de Atún', prompt: 'porción casera de ensalada rusa fría acompañada de lomos de atún y aceitunas', expectedPlate: 'plate_cat_220' },

  // Tanda 4: Pastas, Guisos y Platos de Olla
  { id: 'NL-28', batch: 4, name: 'Fideos con Salsa Bolognesa', prompt: 'fideos al dente con abundante salsa bolognesa de carne molida, tomate y queso rallado', expectedPlate: 'plate_cat_185' },
  { id: 'NL-29', batch: 4, name: 'Fideos Gratinados con Espinacas', prompt: 'fuente individual de fideos con espinacas salteadas y queso fundido gratinado', expectedPlate: 'plate_cat_188' },
  { id: 'NL-30', batch: 4, name: 'Guiso de Lentejas Criollo', prompt: 'guiso casero de lentejas tiernas con carne picada sofrita, calabaza y cebolla dorada', expectedPlate: 'plate_cat_181' },
  { id: 'NL-31', batch: 4, name: 'Estofado Criollo con Papas y Choclo', prompt: 'estofado de palomita vacuna en trozos con papas blandas y choclo desgranado', expectedPlate: 'plate_cat_184' },
  { id: 'NL-32', batch: 4, name: 'Cazuela de Arroz con Pollo y Puerro', prompt: 'cazuela casera de pollo cocido con arroz blanco, caldo suave y puerro con morrón', expectedPlate: 'plate_cat_182' },
  { id: 'NL-33', batch: 4, name: 'Pollo a la Cacerola con Fideos', prompt: 'pata muslo a la cacerola con fideos y salsa de tomate casera', expectedPlate: 'plate_cat_98' },
  { id: 'NL-34', batch: 4, name: 'Guiso de Porotos con Carne y Calabaza', prompt: 'guiso caliente de porotos alubia con trocitos de carne y dados de calabaza', expectedPlate: 'plate_cat_37' },
  { id: 'NL-35', batch: 4, name: 'Cazuela de Lentejas con Palomita', prompt: 'cazuela de lentejas cocidas con tiras de palomita vacuna sofrita y zanahorias', expectedPlate: 'plate_cat_122' },

  // Tanda 5: Ensaladas Frías, Bowls y Vegetarianos
  { id: 'NL-36', batch: 5, name: 'Ensalada Fría de Fideos con Pollo', prompt: 'ensalada fría de fideos espirales con pollo desmenuzado, lechuga picada y tomate', expectedPlate: 'plate_cat_209' },
  { id: 'NL-37', batch: 5, name: 'Fideos Fríos con Huevo y Zanahoria', prompt: 'ensalada fresca de fideos tirabuzón fríos con huevo duro picado y zanahoria rallada con oliva', expectedPlate: 'plate_cat_210' },
  { id: 'NL-38', batch: 5, name: 'Pasta Fría con Atún y Choclo', prompt: 'fideos fríos con atún al natural, choclo dulce desgranado y aceitunas negras con oliva', expectedPlate: 'plate_cat_211' },
  { id: 'NL-39', batch: 5, name: 'Pasta Fría con Queso y Pepino', prompt: 'plato frío de fideos con dados de queso port salut, pepino en rodajas y tomates cherry con oliva', expectedPlate: 'plate_cat_212' },
  { id: 'NL-40', batch: 5, name: 'Arroz Frío con Pollo y Zanahoria', prompt: 'arroz blanco frío desgranado con pollo cocido desmenuzado y zanahoria rallada con oliva', expectedPlate: 'plate_cat_213' },
  { id: 'NL-41', batch: 5, name: 'Arroz Frío con Chauchas y Huevo', prompt: 'ensalada de arroz blanco frío con chauchas tiernas, huevo duro picado y aceitunas verdes', expectedPlate: 'plate_cat_215' },
  { id: 'NL-42', batch: 5, name: 'Bowl de Arroz con Tofu y Pepino', prompt: 'bowl frío de arroz blanco con tofu marinado en limón, pepino crocante y semillas de sésamo', expectedPlate: 'plate_cat_216' },
  { id: 'NL-43', batch: 5, name: 'Ensalada de Remolacha con Huevo', prompt: 'ensalada de remolacha cocida con zanahoria rallada y cuartos de huevo duro con oliva', expectedPlate: 'plate_cat_217' },
  { id: 'NL-44', batch: 5, name: 'Salpicón de Carne Fría con Papas', prompt: 'salpicón criollo de carne vacuna en hebras con papas hervidas y cebollita de verdeo', expectedPlate: 'plate_cat_218' },
  { id: 'NL-45', batch: 5, name: 'Remolacha con Queso Port Salut', prompt: 'ensalada de remolacha en cubos con queso port salut fresco y nueces picadas', expectedPlate: 'plate_cat_219' },
  { id: 'NL-46', batch: 5, name: 'Ensalada de Lentejas con Huevo y Tomate', prompt: 'ensalada fría de lentejas con tomate fresco, cebollita de verdeo y huevo duro con oliva', expectedPlate: 'plate_cat_201' },
  { id: 'NL-47', batch: 5, name: 'Porotos Alubia con Atún y Rúcula', prompt: 'porotos blancos fríos mezclados con atún al natural, rúcula fresca y aceitunas negras', expectedPlate: 'plate_cat_202' },
  { id: 'NL-48', batch: 5, name: 'Salpicón de Pollo con Porotos', prompt: 'salpicón de pollo desmenuzado con porotos alubia y zanahoria rallada con oliva', expectedPlate: 'plate_cat_203' },
  { id: 'NL-49', batch: 5, name: 'Bowl de Quinoa con Palta y Huevo', prompt: 'bowl frío de quinoa cocida con huevo duro picado, palta madura y pepino crocante con oliva', expectedPlate: 'plate_cat_205' },
  { id: 'NL-50', batch: 5, name: 'Bowl de Quinoa con Pollo y Tomates', prompt: 'bowl fresco de quinoa graneada con trozos de pollo grillado frío y tomates cherry al medio con oliva', expectedPlate: 'plate_cat_206' },
];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  const args = process.argv.slice(2);
  const batchArg = args.find(a => a.startsWith('--batch='));
  const delayArg = args.find(a => a.startsWith('--delay='));
  const targetBatch = batchArg ? parseInt(batchArg.split('=')[1], 10) : 1;
  const delayMs = delayArg ? parseInt(delayArg.split('=')[1], 10) : 4000;
  const isAll = args.includes('--all');

  const casesToRun = isAll 
    ? TEST_CASES 
    : TEST_CASES.filter(c => c.batch === targetBatch);

  console.log(`================================================================`);
  console.log(`🚀 BATERÍA E2E DE LENGUAJE NATURAL CON GEMINI AI`);
  console.log(`- Casos a ejecutar: ${casesToRun.length} (${isAll ? 'Todas las tandas' : `Tanda ${targetBatch}`})`);
  console.log(`- Delay anti-saturación: ${delayMs} ms entre llamadas`);
  console.log(`================================================================\n`);

  const apiKey = await storage.getApiKey();
  if (!apiKey || apiKey.length < 5) {
    console.error('❌ ERROR: No se encontró Gemini API Key configurada.');
    console.error('Configurala con process.env.GEMINI_API_KEY o en la aplicación.');
    process.exit(1);
  }

  const allComponents = await storage.getComponents();
  const assembler = new AssemblerComponent('assembler');
  await assembler.render();

  let passed = 0;
  let partialMatch = 0;
  let failed = 0;

  for (let i = 0; i < casesToRun.length; i++) {
    const tc = casesToRun[i];
    console.log(`[${i + 1}/${casesToRun.length}] [${tc.id}] ${tc.name}`);
    console.log(`   🗣️ Entrada: "${tc.prompt}"`);

    const startTime = Date.now();
    try {
      // 1. Llamar a Gemini AI
      const aiResult = await geminiService.assembleFromText(tc.prompt, allComponents, null);
      const elapsed = Date.now() - startTime;

      if (!aiResult) {
        console.log(`   ❌ Gemini no devolvió respuesta (${elapsed} ms)`);
        failed++;
        continue;
      }

      // Asignar IDs
      const getValidIds = (keyArray, keySingle) => {
        let candidateIds = [];
        if (Array.isArray(aiResult[keyArray])) candidateIds = aiResult[keyArray];
        else if (aiResult[keySingle]) candidateIds = [aiResult[keySingle]];
        return allComponents.filter(c => candidateIds.includes(c.id)).map(c => c.id);
      };

      assembler.selected.Proteina = getValidIds('proteina_ids', 'proteina_id');
      assembler.selected.Vegetal = getValidIds('vegetal_ids', 'vegetal_id');
      assembler.selected.Carbohidrato = getValidIds('carbo_ids', 'carbo_id');
      assembler.selected.Grasa = getValidIds('grasa_ids', 'grasa_id');
      if (aiResult.modo) assembler.plateMode = aiResult.modo;

      // 2. Ejecutar Matching con el Catálogo
      const matchRes = await assembler.updateCatalogMatch();

      if (matchRes && matchRes.matched && matchRes.hasImage) {
        const fileExists = fs.existsSync(path.resolve(process.cwd(), matchRes.imageUrl));
        const isExpected = matchRes.plate.id === tc.expectedPlate;

        if (isExpected && fileExists) {
          console.log(`   ✅ PASS (${elapsed} ms): Matcheó ${matchRes.plate.id} ("${matchRes.plate.nombre}") - Score: ${matchRes.score}% - Foto OK (${matchRes.imageUrl})`);
          passed++;
        } else if (fileExists) {
          console.log(`   ⚠️ MATCH AFÍN (${elapsed} ms): Esperaba ${tc.expectedPlate}, pero matcheó ${matchRes.plate.id} ("${matchRes.plate.nombre}") - Score: ${matchRes.score}% - Foto OK`);
          partialMatch++;
        } else {
          console.log(`   ❌ ERROR: Matcheó pero falta el archivo de imagen: ${matchRes.imageUrl}`);
          failed++;
        }
      } else {
        console.log(`   ❌ NO MATCH (${elapsed} ms): Score: ${matchRes ? matchRes.score : 0}% < 80%. Plato sugerido: ${matchRes?.plate?.nombre || 'Ninguno'} (hasImage: ${matchRes?.hasImage})`);
        failed++;
      }
    } catch (err) {
      console.log(`   ❌ EXCEPCIÓN: ${err.message}`);
      failed++;
    }

    if (i < casesToRun.length - 1) {
      console.log(`   ⏳ Esperando ${delayMs / 1000}s para no saturar cuota de Gemini...`);
      await sleep(delayMs);
    }
    console.log('');
  }

  console.log(`================================================================`);
  console.log(`📊 RESUMEN DE LA TANDA`);
  console.log(`- Total ejecutados: ${casesToRun.length}`);
  console.log(`- Exactos (PASS): ${passed}`);
  console.log(`- Afines con foto válida: ${partialMatch}`);
  console.log(`- Fallos o incompletos: ${failed}`);
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Error fatal:', err);
  process.exit(1);
});
