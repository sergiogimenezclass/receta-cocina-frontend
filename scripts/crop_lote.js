import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const inputImagePath = process.argv[2];
const loteId = process.argv[3] || 'lote_02';

if (!inputImagePath) {
  console.error("Uso: node scripts/crop_lote.js <ruta_imagen_2x2> [lote_id]");
  process.exit(1);
}

if (!fs.existsSync(inputImagePath)) {
  console.error(`Error: No existe el archivo de imagen: ${inputImagePath}`);
  process.exit(1);
}

const catalogPath = path.join(rootDir, 'js', 'data', 'plates-catalog.json');
const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'));

const lote = catalog.lotes.find(l => l.lote_id === loteId);
if (!lote) {
  console.error(`Error: No se encontró el lote '${loteId}' en el catálogo`);
  process.exit(1);
}

const outDir = path.join(rootDir, 'img', 'batch-platos');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Guardar copia del master 2x2
const masterDest = path.join(outDir, `${loteId}_master_2x2.jpg`);
fs.copyFileSync(inputImagePath, masterDest);
console.log(`Master 2x2 guardado en: ${masterDest}`);

// 2. Obtener dimensiones de la imagen con ImageMagick identify
const dimOutput = execSync(`identify -format "%w %h" "${inputImagePath}"`).toString().trim();
const [width, height] = dimOutput.split(' ').map(Number);
console.log(`Dimensiones de la imagen master: ${width}x${height}px`);

const halfW = Math.floor(width / 2);
const halfH = Math.floor(height / 2);
// Margen de seguridad para omitir la calle / cruz blanca divisoria (~1.2% del ancho)
const gutter = Math.max(10, Math.round(width * 0.012));
const tileW = halfW - (gutter * 2);
const tileH = halfH - (gutter * 2);
console.log(`Aplicando recorte limpio sin calles: ${tileW}x${tileH}px (gutter: ${gutter}px)`);

const quadrantMap = [
  { pos: 'superior_izq', geom: `${tileW}x${tileH}+${gutter}+${gutter}` },
  { pos: 'superior_der', geom: `${tileW}x${tileH}+${halfW + gutter}+${gutter}` },
  { pos: 'inferior_izq', geom: `${tileW}x${tileH}+${gutter}+${halfH + gutter}` },
  { pos: 'inferior_der', geom: `${tileW}x${tileH}+${halfW + gutter}+${halfH + gutter}` }
];

console.log(`\nProcesando los 4 platos del ${loteId} (${lote.tema}):`);
quadrantMap.forEach(q => {
  const plate = lote.platos.find(p => p.cuadrante === q.pos);
  if (!plate) {
    console.warn(`Aviso: No se encontró definición para el cuadrante ${q.pos}`);
    return;
  }

  const finalName = `${plate.id}.jpg`;
  const finalPath = path.join(outDir, finalName);
  
  // Recortar directamente con el offset de seguridad
  execSync(`convert "${inputImagePath}" -crop ${q.geom} +repage "${finalPath}"`);
  
  const relUrl = `img/batch-platos/${finalName}`;
  plate.imagen_url = relUrl;
  
  // Actualizar también en la lista plana de platos
  const flatPlate = catalog.platos.find(p => p.id === plate.id);
  if (flatPlate) {
    flatPlate.imagen_url = relUrl;
  }

  console.log(`  ✓ [${q.pos}] (${q.geom}) -> ${finalName} ("${plate.nombre}")`);
});

// Guardar catálogo actualizado con las rutas de las imágenes
fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2), 'utf-8');
console.log(`\nCatálogo actualizado con las nuevas rutas de imagen en: ${catalogPath}`);
