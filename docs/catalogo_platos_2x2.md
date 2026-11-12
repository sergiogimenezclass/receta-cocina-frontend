# Catálogo Maestro de Platos 2x2 (Cobertura $\ge 90\%$)

Este documento contiene la biblioteca oficial de **280 combinaciones gastronómicas cotidianas argentinas**, organizadas en **70 lotes de 4 platos cada uno** para su generación fotográfica en grillas simétricas de 2x2 mediante Inteligencia Artificial.

> [!IMPORTANT]
> ### 📊 Estado de Cobertura y Generación
> - **Total de platos definidos:** 280 platos en 70 lotes 2x2 (Cobertura ampliada al 90%).
> - **Platos generados y activos en la app:** **176 platos** (44 lotes).
> - **Platos pendientes:** **104 platos** (26 lotes).
> - **Masters 2x2 conservados:** 44 imágenes en `img/lotes-master/`.

---

## Métricas del Catálogo
- **Total de Lotes (Imágenes 2x2 a generar):** 70
- **Total de Platos resultantes (recortados 1:1):** 280
- **Estructura por Fases de Cobertura:**
  - 🥇 **Fase 1 (Lotes 01 al 10 / Platos 01 al 40):** Núcleo esencial caliente (**100% generado y activo**).
  - 🥈 **Fase 2 (Lotes 11 al 20 / Platos 41 al 80):** Ensaladas frías, pastas y cenas low-carb (**100% generado y activo**).
  - 🥉 **Fase 3 (Lotes 21 al 30 / Platos 81 al 120):** Cortes tradicionales, estacionalidad y variantes (**100% generado y activo**).
  - 🏅 **Fase 4 (Lotes 31 al 40 / Platos 121 al 160):** Olla criolla, wok variado, pescados y ensaladas (**100% generado y activo**).
  - 🚀 **Fase 5 (Lotes 41 al 70 / Platos 161 al 280):** Expansión al 90% de cobertura — más clásicos, variantes rápidas y ensaladas complejas.
- **Distribución por Estilo de Servicio:**
  - 🍲 **Platos Calientes (horno, plancha, wok, guisados):** 211 platos (75.4%)
  - 🥗 **Platos Fríos (ensaladas, bowls, viandas de verano):** 69 platos (24.6%)
- **Distribución por Macronutrientes:**
  - 🥔 **Platos con Carbohidrato almidonado:** 213 platos (76.1%)
  - 🥩 **Platos Low-Carb / Cenas Ligeras (Doble vegetal + grasa):** 67 platos (23.9%)

---

## Estructura de Cuadrantes para cada Lote 2x2
Cada imagen generada por la IA debe ser cuadrada (proporción 1:1) y dividirse simétricamente en 4 cuadrantes:
| Cuadrante | Ubicación | Código |
| :--- | :--- | :--- |
| **Cuadrante 1** | Superior Izquierdo | `superior_izq` (Top-Left) |
| **Cuadrante 2** | Superior Derecho | `superior_der` (Top-Right) |
| **Cuadrante 3** | Inferior Izquierdo | `inferior_izq` (Bottom-Left) |
| **Cuadrante 4** | Inferior Derecho | `inferior_der` (Bottom-Right) |

## Regla Fotográfica Obligatoria: Comida Casera Cotidiana en Plano Cenital (90° Top-Down)
- **Ángulo de cámara:** Plano cenital directo estricto perpendicular a 90 grados (overhead flat lay, vista de pájaro desde arriba). PROHIBIDO tomas a 45 grados, perspectivas laterales o planos oblicuos. El plato debe verse circular, completo y centrado desde arriba.
- **Estilo de Emplatado:** Comida casera real de todos los días (15 minutos, comida rápida de casa). Cero pretensiones de restaurante gourmet:
  - Arroz y puré servidos con cuchara sopera al costado (PROHIBIDO moldear en timbales, cilindros o flores con manteca).
  - Ensaladas mezcladas de forma natural (PROHIBIDO abanicos milimétricos de lechuga o arreglos florales).
  - Comida rica, abundante y de casa.
- **Vajilla y Entorno:** Plato común de loza en fondo neutro limpio. Sin copas de vino, cubiertos posados ni servilletas de hotel.

---

## Lote 1 (lote_01): Clásicos Fundacionales Argentinos
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_01_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Bife a la Plancha con Puré y Rúcula (`plate_cat_01`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Bife de chorizo o churrasco jugoso sellado a la plancha con puré de papas rústico dorado y ensalada fresca de rúcula aderezada con aceite de oliva.
- **Prompt Fotográfico:** *"Bife de lomo / churrasco jugoso sellado a la plancha con marcas de cocción, acompañado de puré de papas casero dorado y ensalada fresca de hojas de rúcula y tomates cherry con un chorrito de aceite de oliva virgen."*

### ↗️ Superior Derecho — Suprema Grillada con Calabaza y Brócoli (`plate_cat_02`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🎃 Zapallo / Calabaza / Anco + 🥦 Brócoli al Vapor
  - **Grasa:** 🥑 Palta / Aguacate
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Suprema de pechuga dorada con hierbas, cubos de calabaza asada caramelizada, arbolitos de brócoli al vapor y láminas de palta madura.
- **Prompt Fotográfico:** *"Suprema de pechuga de pollo dorada y jugosa con hierbas y rodajas de limón, cubos de calabaza anco asada dulce, brócoli verde brillante al vapor y trozos de palta fresca."*

### ↙️ Inferior Izquierdo — Merluza al Limón con Arroz y Espinaca (`plate_cat_03`)
- **Ingredientes Clave:**
  - **Proteína:** 🐟 Filete de Pescado Blanco (Merluza / Tilapia)
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Filet de merluza a la plancha con perejil y gajos de limón, acompañado de arroz blanco esponjoso y espinacas tiernas salteadas con oliva.
- **Prompt Fotográfico:** *"Filete de pescado blanco (merluza) a la plancha con limón, porción de arroz blanco servido con cuchara al costado y espinacas salteadas con aceite de oliva."*

### ↘️ Inferior Derecho — Huevos Revueltos con Fideos al Wok (`plate_cat_04`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥘 Wok de Vegetales Mixtos
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Huevos revueltos esponjosos con fideos secos salteados con wok de morrón, cebolla y zanahoria, espolvoreados con semillas tostadas.
- **Prompt Fotográfico:** *"Huevos revueltos cremosos y esponjosos sobre plato cerámico, acompañados de fideos salteados al wok con tiras finas de morrón rojo, cebolla y zanahoria, terminados con semillas de girasol tostadas."*

> [!NOTE] Prompt consolidado para generar el Lote 1 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Bife de lomo / churrasco jugoso sellado a la plancha con marcas de cocción, acompañado de puré de papas casero dorado y ensalada fresca de hojas de rúcula y tomates cherry con un chorrito de aceite de oliva virgen.
- Cuadrante Superior Derecho: Suprema de pechuga de pollo dorada y jugosa con hierbas y rodajas de limón, cubos de calabaza anco asada dulce, brócoli verde brillante al vapor y trozos de palta fresca.
- Cuadrante Inferior Izquierdo: Filete de pescado blanco (merluza) a la plancha con limón, porción de arroz blanco servido con cuchara al costado y espinacas salteadas con aceite de oliva.
- Cuadrante Inferior Derecho: Huevos revueltos cremosos y esponjosos sobre plato cerámico, acompañados de fideos salteados al wok con tiras finas de morrón rojo, cebolla y zanahoria, terminados con semillas de girasol tostadas.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 2 (lote_02): Milanesas y Comidas Caseras Populares
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_02_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Milanesa de Carne con Puré y Mixta (`plate_cat_05`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Milanesa (Carne o Pollo)
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Milanesa clásica de nalga/bola de lomo crujiente al horno con puré de papas casero y ensalada mixta de lechuga y tomate.
- **Prompt Fotográfico:** *"Milanesa de carne vacuna dorada recién horneada con gajo de limón al costado, porción de puré de papas casero servido rústicamente con cuchara y ensalada simple de lechuga y tomate mezclada."*

### ↗️ Superior Derecho — Milanesa de Pollo con Fideos al Manteca y Queso (`plate_cat_06`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Milanesa (Carne o Pollo)
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Milanesa de pechuga dorada con fideos cinta salteados a la manteca, lluvia de queso rallado sardo y rodajas de tomate fresco.
- **Prompt Fotográfico:** *"Suprema milanesa de pollo dorada al horno, junto a un nido de fideos salteados con manteca fundida y lluvia de queso rallado sardo gratinado, acompañado de rodajas de tomate perita."*

### ↙️ Inferior Izquierdo — Picadillo Criollo con Arroz Blanco y Huevo (`plate_cat_07`)
- **Ingredientes Clave:**
  - **Proteína:** 🥘 Carne Picada / Molida
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada) + 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Carne picada especial salteada con cebolla, morrón rojo y especias criollas, servida con arroz blanco al vapor, cuartos de huevo duro y aceitunas verdes.
- **Prompt Fotográfico:** *"Carne picada salteada casera con cebolla y morrón, servida con porción de arroz blanco al costado con cuchara, mitades de huevo duro y aceitunas verdes."*

### ↘️ Inferior Derecho — Pata-Muslo al Horno con Batatas Caramelizadas (`plate_cat_08`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pata-Muslo de Pollo
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~25 min | **Servido:** Caliente
- **Descripción Culinaria:** Pata-muslo asado con piel crujiente al limón y orégano, cuñas de batata doradas y gajos de cebolla asada dulce.
- **Prompt Fotográfico:** *"Pata-muslo de pollo asado con piel dorada y crocante con romero y limón, acompañado de gajos de batata asada caramelizada y cebolla dorada al horno con aceite de oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 2 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Milanesa de carne vacuna dorada recién horneada con gajo de limón al costado, porción de puré de papas casero servido rústicamente con cuchara y ensalada simple de lechuga y tomate mezclada.
- Cuadrante Superior Derecho: Suprema milanesa de pollo dorada al horno, junto a un nido de fideos salteados con manteca fundida y lluvia de queso rallado sardo gratinado, acompañado de rodajas de tomate perita.
- Cuadrante Inferior Izquierdo: Carne picada salteada casera con cebolla y morrón, servida con porción de arroz blanco al costado con cuchara, mitades de huevo duro y aceitunas verdes.
- Cuadrante Inferior Derecho: Pata-muslo de pollo asado con piel dorada y crocante con romero y limón, acompañado de gajos de batata asada caramelizada y cebolla dorada al horno con aceite de oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 3 (lote_03): Pastas, Guisos y Platos de Olla
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_03_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Fideos con Tuco Casero de Carne Picada (`plate_cat_09`)
- **Ingredientes Clave:**
  - **Proteína:** 🥘 Carne Picada / Molida
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos + 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Plato hondo de fideos al dente con salsa boloñesa casera de carne picada, tomate maduro, cebolla y abundante queso rallado.
- **Prompt Fotográfico:** *"Plato hondo de fideos spaghetti al dente con salsa tuco boloñesa casera con abundante carne picada magra, tomate fresco reducido, hojas de laurel y abundante lluvia de queso parmesano rallado."*

### ↗️ Superior Derecho — Cazuela de Lentejas Express con Picada (`plate_cat_10`)
- **Ingredientes Clave:**
  - **Proteína:** 🥘 Carne Picada / Molida
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🥕 Zanahoria Rallada / Cocida + 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~18 min | **Servido:** Caliente
- **Descripción Culinaria:** Cazuela reconfortante de lentejas cocidas con carne picada salteada, cubos de zanahoria, cebolla y morrón con pimentón dulce.
- **Prompt Fotográfico:** *"Cazuela de barro humeante con guiso express de lentejas tiernas, carne picada salteada, rodajas de zanahoria naranja, morrón rojo en cubitos y un toque de pimentón dulce con aceite de oliva."*

### ↙️ Inferior Izquierdo — Salteado Rústico de Carne Picada con Papas (`plate_cat_11`)
- **Ingredientes Clave:**
  - **Proteína:** 🥘 Carne Picada / Molida
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Salteado express a la sartén de carne molida bien dorada con cubos pequeños de papa crujiente dorada, cebolla tierna salteada y aceitunas verdes.
- **Prompt Fotográfico:** *"Plato hondo de salteado rústico a la sartén de carne picada jugosa y dorada con dados pequeños de papas doradas crujientes, cebolla salteada y rodajas de aceitunas verdes brillantes."*

### ↘️ Inferior Derecho — Guiso de Porotos con Bondiola y Zapallo (`plate_cat_12`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bondiola o Solomillo de Cerdo
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🎃 Zapallo / Calabaza / Anco
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~25 min | **Servido:** Caliente
- **Descripción Culinaria:** Guiso espeso de porotos cocidos con bocados tiernos de bondiola de cerdo dorada y cubos dulces de zapallo anco.
- **Prompt Fotográfico:** *"Plato hondo de guisado criollo con porotos blancos tiernos, trozos dorados y jugosos de bondiola de cerdo, cubos de zapallo anco color naranja intenso y perejil fresco picado."*

> [!NOTE] Prompt consolidado para generar el Lote 3 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Plato hondo de fideos spaghetti al dente con salsa tuco boloñesa casera con abundante carne picada magra, tomate fresco reducido, hojas de laurel y abundante lluvia de queso parmesano rallado.
- Cuadrante Superior Derecho: Cazuela de barro humeante con guiso express de lentejas tiernas, carne picada salteada, rodajas de zanahoria naranja, morrón rojo en cubitos y un toque de pimentón dulce con aceite de oliva.
- Cuadrante Inferior Izquierdo: Plato hondo de salteado rústico a la sartén de carne picada jugosa y dorada con dados pequeños de papas doradas crujientes, cebolla salteada y rodajas de aceitunas verdes brillantes.
- Cuadrante Inferior Derecho: Plato hondo de guisado criollo con porotos blancos tiernos, trozos dorados y jugosos de bondiola de cerdo, cubos de zapallo anco color naranja intenso y perejil fresco picado.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 4 (lote_04): Cortes Vacunos Cotidianos a la Plancha y Olla
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_04_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Tortuguita en Bifes a la Criolla con Arroz (`plate_cat_13`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Tortuguita en Bifes
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde) + 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Bifecitos finos de tortuguita sellados a la plancha con cebolla y morrón salteados, servidos con arroz blanco al vapor.
- **Prompt Fotográfico:** *"Bifecitos finos de carne vacuna dorados a la plancha cubiertos de salteado criollo de cebolla en juliana y tiras de morrón rojo, con porción de arroz blanco casero al costado."*

### ↗️ Superior Derecho — Palomita en Bifes con Puré de Batata y Ensalada (`plate_cat_14`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Palomita en Bifes
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Bifecitos tiernos de palomita vuelta y vuelta a fuego vivo con puré cremoso de batata y hojas de rúcula.
- **Prompt Fotográfico:** *"Bifes delgados de palomita a la plancha, acompañados de puré casero de batata servido con cuchara y hojas frescas de rúcula con aceite de oliva."*

### ↙️ Inferior Izquierdo — Hígado Encebollado con Puré de Papas (`plate_cat_15`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife de Hígado Encebollado
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Bifecito de hígado jugoso salteado con abundante cebolla caramelizada y puré de papas enriquecido con manteca.
- **Prompt Fotográfico:** *"Bife de hígado vacuno tierno y jugoso cubierto de abundantes aros de cebolla dorada caramelizada, servido con puré de papas rústico emulsionado con manteca derretida."*

### ↘️ Inferior Derecho — Tira de Asado a la Plancha con Ensalada Rusa (`plate_cat_16`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Tira de Asado
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~25 min | **Servido:** Caliente
- **Descripción Culinaria:** Tira de asado crocante a la plancha gruesa acompañada de clásica ensalada rusa (papas y zanahorias en cubos) con aceitunas.
- **Prompt Fotográfico:** *"Tira de asado con hueso bien marcada y dorada a la plancha, servida junto a una porción de clásica ensalada rusa (cubitos de papa y zanahoria) decorada con aceitunas verdes enteras."*

> [!NOTE] Prompt consolidado para generar el Lote 4 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Bifecitos finos de carne vacuna dorados a la plancha cubiertos de salteado criollo de cebolla en juliana y tiras de morrón rojo, con porción de arroz blanco casero al costado.
- Cuadrante Superior Derecho: Bifes delgados de palomita a la plancha, acompañados de puré casero de batata servido con cuchara y hojas frescas de rúcula con aceite de oliva.
- Cuadrante Inferior Izquierdo: Bife de hígado vacuno tierno y jugoso cubierto de abundantes aros de cebolla dorada caramelizada, servido con puré de papas rústico emulsionado con manteca derretida.
- Cuadrante Inferior Derecho: Tira de asado con hueso bien marcada y dorada a la plancha, servida junto a una porción de clásica ensalada rusa (cubitos de papa y zanahoria) decorada con aceitunas verdes enteras.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 5 (lote_05): Cerdo y Aves con Guarniciones Variadas
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_05_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Costillita de Cerdo con Batata y Espinaca (`plate_cat_17`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Costillita / Bife de Cerdo
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Costillita de cerdo jugosa dorada a la sartén con rodajas de batata asada y salteado tibio de espinaca con ajo y oliva.
- **Prompt Fotográfico:** *"Costillita de cerdo dorada a la plancha con limón, acompañada de rodajas de batata asada dulce y espinacas tiernas salteadas con aceite de oliva extra virgen."*

### ↗️ Superior Derecho — Bondiola de Cerdo con Choclo y Morrón Asado (`plate_cat_18`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bondiola o Solomillo de Cerdo
  - **Carbohidrato:** 🌽 Choclo / Maíz Desgranado
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~18 min | **Servido:** Caliente
- **Descripción Culinaria:** Medallones de bondiola dorada con choclo desgranado salteado a la manteca y tiras de morrón asado dulce.
- **Prompt Fotográfico:** *"Medallones gruesos de bondiola de cerdo sellados con costra caramelizada, porción de choclo amarillo desgranado salteado con manteca y tiras de morrón rojo asado dulce."*

### ↙️ Inferior Izquierdo — Suprema con Arroz al Verdeo y Zanahorias (`plate_cat_19`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro + 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Suprema de pollo a la plancha con arroz blanco salteado con cebolla de verdeo fresca y bastones de zanahoria tiernos.
- **Prompt Fotográfico:** *"Pechuga de pollo a la plancha dorada en filetes, servida con arroz blanco salteado con abundante cebolla de verdeo en rodajitas y bastones de zanahoria brillante al oliva."*

### ↘️ Inferior Derecho — Pata-Muslo al Limón con Mandioca al Vapor (`plate_cat_20`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pata-Muslo de Pollo
  - **Carbohidrato:** 🪵 Mandioca / Yuca Hervida
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~25 min | **Servido:** Caliente
- **Descripción Culinaria:** Pata-muslo asado bien crocante con trozos tiernos de mandioca hervida al vapor aderezada con aceite de oliva y perejil.
- **Prompt Fotográfico:** *"Pata-muslo de pollo al horno dorado al orégano y limón, acompañado de trozos suaves de mandioca hervida blanca aderezados con aceite de oliva y perejil picado, junto a hojas verdes."*

> [!NOTE] Prompt consolidado para generar el Lote 5 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Costillita de cerdo dorada a la plancha con limón, acompañada de rodajas de batata asada dulce y espinacas tiernas salteadas con aceite de oliva extra virgen.
- Cuadrante Superior Derecho: Medallones gruesos de bondiola de cerdo sellados con costra caramelizada, porción de choclo amarillo desgranado salteado con manteca y tiras de morrón rojo asado dulce.
- Cuadrante Inferior Izquierdo: Pechuga de pollo a la plancha dorada en filetes, servida con arroz blanco salteado con abundante cebolla de verdeo en rodajitas y bastones de zanahoria brillante al oliva.
- Cuadrante Inferior Derecho: Pata-muslo de pollo al horno dorado al orégano y limón, acompañado de trozos suaves de mandioca hervida blanca aderezados con aceite de oliva y perejil picado, junto a hojas verdes.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 6 (lote_06): Pescados y Conservas al Plato Caliente
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_06_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Merluza a la Plancha con Puré y Tomates (`plate_cat_21`)
- **Ingredientes Clave:**
  - **Proteína:** 🐟 Filete de Pescado Blanco (Merluza / Tilapia)
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Filet de merluza dorado a la sartén con orégano y limón, puré de papas cremoso y rodajas de tomate aderezadas.
- **Prompt Fotográfico:** *"Filetes de merluza blanca dorados a la plancha con rodajas de limón y perejil, acompañados de puré de papas casero suave y rodajas de tomate fresco condimentadas con aceite de oliva."*

### ↗️ Superior Derecho — Merluza con Wok de Vegetales y Arroz (`plate_cat_22`)
- **Ingredientes Clave:**
  - **Proteína:** 🐟 Filete de Pescado Blanco (Merluza / Tilapia)
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🥘 Wok de Vegetales Mixtos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Filet de pescado blanco tierno servido sobre salteado caliente de wok mixto (zucchini, morrón, cebolla) y arroz blanco.
- **Prompt Fotográfico:** *"Filete de pescado blanco a la plancha tierno y dorado, servido sobre salteado casero de vegetales (zucchini, morrón y cebolla) con arroz blanco suelto y esparcido de forma plana e irregular al costado (granos sueltos, sin forma de bola, domo ni molde)."*

### ↙️ Inferior Izquierdo — Fideos Salteados con Atún, Tomate y Aceitunas (`plate_cat_23`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Fideos al dente salteados a fuego vivo con lomitos de atún al natural, dados de tomate fresco y aceitunas negras.
- **Prompt Fotográfico:** *"Plato de fideos al dente salteados en sartén con trozos de atún en lomo, tomates en cubos dorados, aceitunas negras en rodajas y hojitas de albahaca fresca."*

### ↘️ Inferior Derecho — Caballa Salteada con Papas y Verdeo al Pimentón (`plate_cat_24`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Caballa en Lata (al Natural o Aceite)
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Lomos de caballa salteados con papas en cubos al vapor, cebolla de verdeo y una pizca de pimentón dulce.
- **Prompt Fotográfico:** *"Lomos tiernos de caballa salteados en sartén caliente con papas cocidas en cubos, lluvia de cebolla de verdeo en rodajas finas y pizca de pimentón ahumado con aceite de oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 6 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Filetes de merluza blanca dorados a la plancha con rodajas de limón y perejil, acompañados de puré de papas casero suave y rodajas de tomate fresco condimentadas con aceite de oliva.
- Cuadrante Superior Derecho: Filete de pescado blanco a la plancha tierno y dorado, servido sobre salteado casero de vegetales (zucchini, morrón y cebolla) con arroz blanco suelto y esparcido de forma plana e irregular al costado (granos sueltos, sin forma de bola, domo ni molde).
- Cuadrante Inferior Izquierdo: Plato de fideos al dente salteados en sartén con trozos de atún en lomo, tomates en cubos dorados, aceitunas negras en rodajas y hojitas de albahaca fresca.
- Cuadrante Inferior Derecho: Lomos tiernos de caballa salteados en sartén caliente con papas cocidas en cubos, lluvia de cebolla de verdeo en rodajas finas y pizca de pimentón ahumado con aceite de oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 7 (lote_07): Huevos y Omelettes Rápidos de Almuerzo y Cena
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_07_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Omelette de Queso con Batatas Doradas y Tomate (`plate_cat_25`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Omelette dorado relleno de queso cremoso derretido, acompañado de dados de batata salteados y tomates cherry.
- **Prompt Fotográfico:** *"Omelette esponjoso dorado doblado a la mitad con queso fresco derretido en su interior, acompañado de dados de batata asada dorada y tomates cherry con aceite de oliva."*

### ↗️ Superior Derecho — Huevos Revueltos con Avena Salada, Champiñones y Palta (`plate_cat_26`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** 🥣 Avena (Arrollada)
  - **Vegetales:** 🍄 Hongos / Champiñones Salteados
  - **Grasa:** 🥑 Palta / Aguacate
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Huevos revueltos bien cremosos sobre base de avena salada caliente, champiñones salteados al dente y abanico de palta.
- **Prompt Fotográfico:** *"Bowl tibio con huevos revueltos cremosos montados sobre avena salada cocida, champiñones dorados en rodajas a la sartén y gajos de palta madura con pimienta negra recién molida."*

### ↙️ Inferior Izquierdo — Revuelto Gramajo Casero Express (`plate_cat_27`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Clásico revuelto gramajo con huevos apenas cuajados, papas doradas en bastones finos y cebolla salteada a la manteca.
- **Prompt Fotográfico:** *"Plato hondo de clásico Revuelto Gramajo porteño: huevos revueltos húmedos y cremosos combinados con papas en bastones delgados dorados y cebolla salteada a la manteca fundida."*

### ↘️ Inferior Derecho — Tortilla de Acelga con Queso Rallado y Tomate (`plate_cat_28`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Porción de tortilla esponjosa de acelga o espinaca con papas en cubitos, queso rallado gratinado y rodajas de tomate.
- **Prompt Fotográfico:** *"Triángulo grueso servido de tortilla de acelga y espinaca verde intenso con papas picadas, cubierta con queso rallado dorado y ensalada de rodajas de tomate con orégano."*

> [!NOTE] Prompt consolidado para generar el Lote 7 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Omelette esponjoso dorado doblado a la mitad con queso fresco derretido en su interior, acompañado de dados de batata asada dorada y tomates cherry con aceite de oliva.
- Cuadrante Superior Derecho: Bowl tibio con huevos revueltos cremosos montados sobre avena salada cocida, champiñones dorados en rodajas a la sartén y gajos de palta madura con pimienta negra recién molida.
- Cuadrante Inferior Izquierdo: Plato hondo de clásico Revuelto Gramajo porteño: huevos revueltos húmedos y cremosos combinados con papas en bastones delgados dorados y cebolla salteada a la manteca fundida.
- Cuadrante Inferior Derecho: Triángulo grueso servido de tortilla de acelga y espinaca verde intenso con papas picadas, cubierta con queso rallado dorado y ensalada de rodajas de tomate con orégano.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 8 (lote_08): Vegetales Rellenos y Platos Gratinados
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_08_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Zapallito Relleno con Carne Picada y Arroz (`plate_cat_29`)
- **Ingredientes Clave:**
  - **Proteína:** 🥘 Carne Picada / Molida
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🥒 Zucchini / Zapallito a la Plancha
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~20 min | **Servido:** Caliente
- **Descripción Culinaria:** Medios zapallitos redondos rellenos de carne picada sazonada con arroz blanco, coronados con queso gratinado al horno.
- **Prompt Fotográfico:** *"Zapallitos redondos cortados a la mitad y rellenos con carne picada jugosa, arroz blanco y cebollita, cubiertos de queso rallado gratinado dorado burbujeante."*

### ↗️ Superior Derecho — Calabaza Asada Rellena con Pollo y Choclo (`plate_cat_30`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🌽 Choclo / Maíz Desgranado
  - **Vegetales:** 🎃 Zapallo / Calabaza / Anco
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~25 min | **Servido:** Caliente
- **Descripción Culinaria:** Mitad de calabaza asada tierna rellena con tiras de pollo a la plancha, choclo desgranado dulce y queso derretido.
- **Prompt Fotográfico:** *"Media calabaza asada caramelizada ahuecada y rellena de pechuga de pollo desmenuzada, granos de choclo amarillo dulce y queso sardo rallado dorado al horno."*

### ↙️ Inferior Izquierdo — Berenjena Napolitana con Puré de Papas (`plate_cat_31`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🍆 Berenjena a la Plancha o Asada + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Rodajas gruesas de berenjena a la plancha cubiertas con salsa de tomate, queso cremoso fundido y puré de papas.
- **Prompt Fotográfico:** *"Láminas gruesas de berenjena a la plancha a la napolitana con salsa de tomate casera y abundante queso derretido con orégano, servidas junto a porción plana y rústica de puré de papas casero aplastado con tenedor (sin flores de manga ni rosetas, solo el plato sin cubiertos al costado)."*

### ↘️ Inferior Derecho — Morrón Relleno con Huevo, Carne Picada y Arroz (`plate_cat_32`)
- **Ingredientes Clave:**
  - **Proteína:** 🥘 Carne Picada / Molida
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~20 min | **Servido:** Caliente
- **Descripción Culinaria:** Medio morrón rojo asado relleno con carne picada sofrita, arroz y queso gratinado con cebollita de verdeo.
- **Prompt Fotográfico:** *"Medio morrón rojo grande asado al horno relleno con carne picada bien condimentada, arroz blanco y queso derretido dorado, con cebollita de verdeo fresca encima."*

> [!NOTE] Prompt consolidado para generar el Lote 8 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Zapallitos redondos cortados a la mitad y rellenos con carne picada jugosa, arroz blanco y cebollita, cubiertos de queso rallado gratinado dorado burbujeante.
- Cuadrante Superior Derecho: Media calabaza asada caramelizada ahuecada y rellena de pechuga de pollo desmenuzada, granos de choclo amarillo dulce y queso sardo rallado dorado al horno.
- Cuadrante Inferior Izquierdo: Láminas gruesas de berenjena a la plancha a la napolitana con salsa de tomate casera y abundante queso derretido con orégano, servidas junto a porción plana y rústica de puré de papas casero aplastado con tenedor (sin flores de manga ni rosetas, solo el plato sin cubiertos al costado).
- Cuadrante Inferior Derecho: Medio morrón rojo grande asado al horno relleno con carne picada bien condimentada, arroz blanco y queso derretido dorado, con cebollita de verdeo fresca encima.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 9 (lote_09): Woks y Salteados Rápidos al Fuego Fuerte
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_09_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Wok de Pollo con Fideos, Vegetales y Semillas (`plate_cat_33`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥘 Wok de Vegetales Mixtos
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Tiras de pechuga salteadas a fuego fuerte con fideos secos, morrón, cebolla y zanahoria, coronadas con mix de semillas tostadas.
- **Prompt Fotográfico:** *"Plato hondo de fideos salteados en sartén con tiras doradas de pechuga de pollo, tiras de morrón rojo, cebolla y zanahoria salteadas, espolvoreadas con semillas de sésamo."*

### ↗️ Superior Derecho — Salteado de Carne con Chauchas y Arroz Blanco (`plate_cat_34`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🫛 Chauchas al Vapor o Salteadas + 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Tiras de bife magro salteadas con chauchas verdes tiernas y cebolla en juliana, servidas con arroz blanco.
- **Prompt Fotográfico:** *"Salteado casero de tiras de bife vacuno dorado con chauchas verdes tiernas y cebolla salteada, servido con arroz blanco suelto y esparcido de forma plana al costado (sin forma de bola ni molde)."*

### ↙️ Inferior Izquierdo — Cerdo Salteado con Zucchini, Hongos y Fideos (`plate_cat_35`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Costillita / Bife de Cerdo
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥒 Zucchini / Zapallito a la Plancha + 🍄 Hongos / Champiñones Salteados
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Tiras de costillita de cerdo doradas con dados de zucchini y champiñones salteados, mezclados con fideos cinta.
- **Prompt Fotográfico:** *"Tiras doradas de carne de cerdo salteadas en sartén con dados de zucchini, láminas de champiñones dorados y fideos secos mezclados de forma casera y simple."*

### ↘️ Inferior Derecho — Wok de Tofu con Brócoli, Arroz y Sésamo (`plate_cat_36`)
- **Ingredientes Clave:**
  - **Proteína:** 🧈 Tofu a la Plancha
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🥦 Brócoli al Vapor
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Cubos de tofu bien dorados a la plancha con arbolitos de brócoli al vapor, arroz blanco o integral y semillas de sésamo.
- **Prompt Fotográfico:** *"Plato casero con cubos dorados de tofu a la plancha, arbolitos de brócoli cocido al vapor y porción de arroz blanco suelto y esparcido plano al costado con semillas de sésamo."*

> [!NOTE] Prompt consolidado para generar el Lote 9 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Plato hondo de fideos salteados en sartén con tiras doradas de pechuga de pollo, tiras de morrón rojo, cebolla y zanahoria salteadas, espolvoreadas con semillas de sésamo.
- Cuadrante Superior Derecho: Salteado casero de tiras de bife vacuno dorado con chauchas verdes tiernas y cebolla salteada, servido con arroz blanco suelto y esparcido de forma plana al costado (sin forma de bola ni molde).
- Cuadrante Inferior Izquierdo: Tiras doradas de carne de cerdo salteadas en sartén con dados de zucchini, láminas de champiñones dorados y fideos secos mezclados de forma casera y simple.
- Cuadrante Inferior Derecho: Plato casero con cubos dorados de tofu a la plancha, arbolitos de brócoli cocido al vapor y porción de arroz blanco suelto y esparcido plano al costado con semillas de sésamo.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 10 (lote_10): Legumbres, Quinoa y Risottos Criollos
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_10_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Guiso de Porotos Alubia con Carne y Calabaza (`plate_cat_37`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🎃 Zapallo / Calabaza / Anco
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~20 min | **Servido:** Caliente
- **Descripción Culinaria:** Estofado criollo de porotos alubia tiernos con cubos de carne vacuna magra y dados de calabaza dulce.
- **Prompt Fotográfico:** *"Plato hondo de guiso casero de porotos alubia blancos tiernos con trocitos de carne vacuna sellada y dados de calabaza anaranjada dulce."*

### ↗️ Superior Derecho — Quinoa Caliente con Pollo, Hongos y Puerro (`plate_cat_38`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🌾 Quinoa
  - **Vegetales:** 🍄 Hongos / Champiñones Salteados + 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Bowl tibio de quinoa esponjosa con cubos dorados de pechuga de pollo, champiñones salteados y puerro al oliva.
- **Prompt Fotográfico:** *"Plato hondo de quinoa cocida suelta con cubos dorados de pechuga de pollo a la plancha, champiñones salteados y rodajas de puerro con aceite de oliva."*

### ↙️ Inferior Izquierdo — Lentejas Estofadas con Huevo Duro y Zanahoria (`plate_cat_39`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Plato nutritivo de lentejas estofadas con rodajas de zanahoria tierna, coronadas con huevo duro en mitades y oliva.
- **Prompt Fotográfico:** *"Plato hondo de lentejas estofadas caseras con rodajas de zanahoria tierna, coronadas con dos mitades de huevo duro y un toque de pimentón dulce."*

### ↘️ Inferior Derecho — Arroz Cremoso con Pollo, Manteca y Queso (`plate_cat_40`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~18 min | **Servido:** Caliente
- **Descripción Culinaria:** Arroz cremoso estilo risotto criollo cocinado con pechuga de pollo desmenuzada, cebolla dorada, manteca y queso rallado.
- **Prompt Fotográfico:** *"Plato hondo de arroz cremoso casero ligado con queso rallado, bocados dorados de pechuga de pollo y cebolla rehogada, esparcido de forma rústica y plana."*

> [!NOTE] Prompt consolidado para generar el Lote 10 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Plato hondo de guiso casero de porotos alubia blancos tiernos con trocitos de carne vacuna sellada y dados de calabaza anaranjada dulce.
- Cuadrante Superior Derecho: Plato hondo de quinoa cocida suelta con cubos dorados de pechuga de pollo a la plancha, champiñones salteados y rodajas de puerro con aceite de oliva.
- Cuadrante Inferior Izquierdo: Plato hondo de lentejas estofadas caseras con rodajas de zanahoria tierna, coronadas con dos mitades de huevo duro y un toque de pimentón dulce.
- Cuadrante Inferior Derecho: Plato hondo de arroz cremoso casero ligado con queso rallado, bocados dorados de pechuga de pollo y cebolla rehogada, esparcido de forma rústica y plana.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 11 (lote_11): Pastas y Cereales con Salsas Ligeras
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_11_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Fideos con Pollo a la Crema y Champiñones (`plate_cat_41`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🍄 Hongos / Champiñones Salteados
  - **Grasa:** 🥛 Crema de Leche
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Fideos al dente bañados en salsa suave de crema de leche con dados de pollo dorado y champiñones laminados.
- **Prompt Fotográfico:** *"Plato hondo de fideos al dente salteados con tiras de pollo a la plancha, salsa suave de crema de leche y láminas de champiñones salteados."*

### ↗️ Superior Derecho — Fideos con Queso Fresco, Espinaca y Nueces (`plate_cat_42`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada
  - **Grasa:** 🌰 Frutos Secos (Nueces / Almendras)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Pasta salteada con hojas de espinaca tierna, cubos de queso cremoso que se funden al servir y nueces picadas crujientes.
- **Prompt Fotográfico:** *"Plato hondo de fideos cortos con hojas de espinaca salteadas, dados de queso fresco derretido y nueces picadas tostadas."*

### ↙️ Inferior Izquierdo — Avena Salada Caliente con Huevo y Espinaca (`plate_cat_43`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** 🥣 Avena (Arrollada)
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Caliente
- **Descripción Culinaria:** Avena salada caliente cocida con caldo, coronada con huevo revuelto o poché y espinacas al oliva.
- **Prompt Fotográfico:** *"Plato hondo de avena salada caliente casera y cremosa, coronada con huevo revuelto tierno, espinacas salteadas y un hilo de aceite de oliva."*

### ↘️ Inferior Derecho — Arroz con Atún a la Crema y Cebolla de Verdeo (`plate_cat_44`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🥛 Crema de Leche
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Arroz blanco caliente salteado con atún desmenuzado, un chorrito de crema de leche y aros verdes de cebollita de verdeo.
- **Prompt Fotográfico:** *"Plato casero de arroz blanco suelto y cremoso salteado en sartén con trozos de atún, crema de leche y cebollita de verdeo picada, esparcido plano en el plato (sin bola ni molde)."*

> [!NOTE] Prompt consolidado para generar el Lote 11 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Plato hondo de fideos al dente salteados con tiras de pollo a la plancha, salsa suave de crema de leche y láminas de champiñones salteados.
- Cuadrante Superior Derecho: Plato hondo de fideos cortos con hojas de espinaca salteadas, dados de queso fresco derretido y nueces picadas tostadas.
- Cuadrante Inferior Izquierdo: Plato hondo de avena salada caliente casera y cremosa, coronada con huevo revuelto tierno, espinacas salteadas y un hilo de aceite de oliva.
- Cuadrante Inferior Derecho: Plato casero de arroz blanco suelto y cremoso salteado en sartén con trozos de atún, crema de leche y cebollita de verdeo picada, esparcido plano en el plato (sin bola ni molde).
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 12 (lote_12): Opciones Vegetarianas y Proteínas Vegetales
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_12_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Tofu a la Plancha con Puré de Calabaza y Brócoli (`plate_cat_45`)
- **Ingredientes Clave:**
  - **Proteína:** 🧈 Tofu a la Plancha
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🥦 Brócoli al Vapor + 🎃 Zapallo / Calabaza / Anco
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Láminas gruesas de tofu bien doradas y crocantes con puré mixto de papa y calabaza, más brócoli al vapor.
- **Prompt Fotográfico:** *"Láminas gruesas de tofu dorado a la plancha, porción plana y rústica de puré casero de calabaza aplastado con tenedor (sin flores de manga ni rosetas), y arbolitos de brócoli cocido con aceite de oliva."*

### ↗️ Superior Derecho — Fideos con Boloñesa de Soja Texturizada (`plate_cat_46`)
- **Ingredientes Clave:**
  - **Proteína:** 🫘 Soja Texturizada Salteada
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada) + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Fideos al dente con salsa de tomate criolla y soja texturizada sofrita con cebolla y orégano, con queso rallado.
- **Prompt Fotográfico:** *"Plato hondo de fideos al dente con salsa boloñesa casera de soja texturizada con tomate, cebolla dorada y lluvia de queso rallado."*

### ↙️ Inferior Izquierdo — Quinoa Caliente con Tofu, Zucchini y Semillas (`plate_cat_47`)
- **Ingredientes Clave:**
  - **Proteína:** 🧈 Tofu a la Plancha
  - **Carbohidrato:** 🌾 Quinoa
  - **Vegetales:** 🥒 Zucchini / Zapallito a la Plancha
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Bowl caliente de quinoa cocida con dados de tofu sellado, rodajas de zucchini a la plancha y semillas de girasol tostadas.
- **Prompt Fotográfico:** *"Plato hondo de quinoa cocida suelta con cubos dorados de tofu a la sartén, rodajitas de zucchini salteadas y semillas de girasol tostadas."*

### ↘️ Inferior Derecho — Soja Texturizada con Arroz, Morrón y Cebolla (`plate_cat_48`)
- **Ingredientes Clave:**
  - **Proteína:** 🫘 Soja Texturizada Salteada
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde) + 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Salteado criollo de soja texturizada hidratada con morrón rojo y cebolla, servida con arroz blanco suelto.
- **Prompt Fotográfico:** *"Salteado criollo casero de soja texturizada dorada con cubitos de morrón rojo y cebolla, acompañado de arroz blanco suelto y esparcido de forma plana al costado (sin forma de bola ni molde)."*

> [!NOTE] Prompt consolidado para generar el Lote 12 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Láminas gruesas de tofu dorado a la plancha, porción plana y rústica de puré casero de calabaza aplastado con tenedor (sin flores de manga ni rosetas), y arbolitos de brócoli cocido con aceite de oliva.
- Cuadrante Superior Derecho: Plato hondo de fideos al dente con salsa boloñesa casera de soja texturizada con tomate, cebolla dorada y lluvia de queso rallado.
- Cuadrante Inferior Izquierdo: Plato hondo de quinoa cocida suelta con cubos dorados de tofu a la sartén, rodajitas de zucchini salteadas y semillas de girasol tostadas.
- Cuadrante Inferior Derecho: Salteado criollo casero de soja texturizada dorada con cubitos de morrón rojo y cebolla, acompañado de arroz blanco suelto y esparcido de forma plana al costado (sin forma de bola ni molde).
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 13 (lote_13): Cenas Ligeras Low-Carb: Carnes y Aves
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_13_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Bife Grillado con Espinacas y Champiñones Salteados (`plate_cat_49`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada + 🍄 Hongos / Champiñones Salteados
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Bife de lomo o churrasco jugoso sin carbohidrato, acompañado de salteado caliente de hojas de espinaca y champiñones con oliva.
- **Prompt Fotográfico:** *"Bife de carne vacuna a la plancha jugoso con costra dorada, acompañado exclusivamente de una generosa porción de espinacas tiernas salteadas y champiñones dorados al ajillo con aceite de oliva."*

### ↗️ Superior Derecho — Pechuga Dorada con Brócoli y Coliflor a la Manteca (`plate_cat_50`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥦 Brócoli al Vapor + 🥦 Coliflor al Vapor o Salteada
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Filet de pechuga dorada a la plancha servido con ramilletes de brócoli y coliflor al vapor bañados con manteca fundida.
- **Prompt Fotográfico:** *"Pechuga de pollo dorada jugosa a la plancha con limón, servida junto a arbolitos de brócoli verde brillante y coliflor blanca al vapor bañados con manteca derretida y pimienta negra."*

### ↙️ Inferior Izquierdo — Costillita de Cerdo con Zucchini y Berenjenas (`plate_cat_51`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Costillita / Bife de Cerdo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥒 Zucchini / Zapallito a la Plancha + 🍆 Berenjena a la Plancha o Asada
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Costillita de cerdo a la plancha con rodajas gruesas de zucchini y berenjenas asadas con hierbas y oliva.
- **Prompt Fotográfico:** *"Costillita de cerdo marcada a la plancha bien dorada con gajo de limón, acompañada de láminas asadas de berenjena y rodajas de zucchini a la plancha con aceite de oliva extra virgen."*

### ↘️ Inferior Derecho — Hamburguesas Caseras al Plato con Rúcula y Palta (`plate_cat_52`)
- **Ingredientes Clave:**
  - **Proteína:** 🥘 Carne Picada / Molida
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🥑 Palta / Aguacate
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Dos hamburguesas caseras de carne picada magra al plato con colchón de rúcula fresca, tomatitos cherry y abanico de palta.
- **Prompt Fotográfico:** *"Dos medallones gruesos de hamburguesa casera de carne vacuna bien dorados al plato, servidos sobre un colchón de hojas de rúcula fresca con láminas de palta madura y aceite de oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 13 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Bife de carne vacuna a la plancha jugoso con costra dorada, acompañado exclusivamente de una generosa porción de espinacas tiernas salteadas y champiñones dorados al ajillo con aceite de oliva.
- Cuadrante Superior Derecho: Pechuga de pollo dorada jugosa a la plancha con limón, servida junto a arbolitos de brócoli verde brillante y coliflor blanca al vapor bañados con manteca derretida y pimienta negra.
- Cuadrante Inferior Izquierdo: Costillita de cerdo marcada a la plancha bien dorada con gajo de limón, acompañada de láminas asadas de berenjena y rodajas de zucchini a la plancha con aceite de oliva extra virgen.
- Cuadrante Inferior Derecho: Dos medallones gruesos de hamburguesa casera de carne vacuna bien dorados al plato, servidos sobre un colchón de hojas de rúcula fresca con láminas de palta madura y aceite de oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 14 (lote_14): Cenas Ligeras Low-Carb: Pescados, Huevos y Tofu
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_14_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Merluza al Limón con Chauchas y Calabaza al Oliva (`plate_cat_53`)
- **Ingredientes Clave:**
  - **Proteína:** 🐟 Filete de Pescado Blanco (Merluza / Tilapia)
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🫛 Chauchas al Vapor o Salteadas + 🎃 Zapallo / Calabaza / Anco
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Filet de merluza tierna a la plancha con chauchas salteadas al dente y cubitos tiernos de calabaza al oliva.
- **Prompt Fotográfico:** *"Filete de merluza blanca cocido a la plancha con perejil fresco y limón, acompañado de chauchas verdes tiernas salteadas y dados de calabaza anco asada con aceite de oliva."*

### ↗️ Superior Derecho — Revuelto de Huevos con Zucchini y Queso Sardo (`plate_cat_54`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥒 Zucchini / Zapallito a la Plancha
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Caliente
- **Descripción Culinaria:** Huevos revueltos salteados con zucchini en cubitos dorados, cebolla de verdeo y lluvia de queso rallado sardo.
- **Prompt Fotográfico:** *"Huevos revueltos esponjosos y cremosos salteados en sartén con dados dorados de zucchini tierno y terminados con abundante queso sardo rallado gratinado."*

### ↙️ Inferior Izquierdo — Omelette de Queso Fresco con Tomates y Semillas (`plate_cat_55`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos + 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Caliente
- **Descripción Culinaria:** Omelette tierno relleno de queso fresco con ensalada tibia de tomates cherry salteados y mix de semillas de chía y sésamo.
- **Prompt Fotográfico:** *"Omelette dorado esponjoso con centro de queso fresco derretido, acompañado de tomates en rodajas asados en sartén y espolvoreado con semillas mixtas tostadas."*

### ↘️ Inferior Derecho — Tofu Salteado con Wok de Vegetales y Almendras (`plate_cat_56`)
- **Ingredientes Clave:**
  - **Proteína:** 🧈 Tofu a la Plancha
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥘 Wok de Vegetales Mixtos
  - **Grasa:** 🌰 Frutos Secos (Nueces / Almendras)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Cubos de tofu a la plancha salteados con variedad de vegetales (zucchini, morrón, cebolla) y almendras tostadas picadas.
- **Prompt Fotográfico:** *"Wok colorido sin fideos ni arroz: cubos de tofu dorado crocante salteados con juliana de vegetales mixtos crocantes y almendras fileteadas tostadas."*

> [!NOTE] Prompt consolidado para generar el Lote 14 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Filete de merluza blanca cocido a la plancha con perejil fresco y limón, acompañado de chauchas verdes tiernas salteadas y dados de calabaza anco asada con aceite de oliva.
- Cuadrante Superior Derecho: Huevos revueltos esponjosos y cremosos salteados en sartén con dados dorados de zucchini tierno y terminados con abundante queso sardo rallado gratinado.
- Cuadrante Inferior Izquierdo: Omelette dorado esponjoso con centro de queso fresco derretido, acompañado de tomates en rodajas asados en sartén y espolvoreado con semillas mixtas tostadas.
- Cuadrante Inferior Derecho: Wok colorido sin fideos ni arroz: cubos de tofu dorado crocante salteados con juliana de vegetales mixtos crocantes y almendras fileteadas tostadas.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 15 (lote_15): Cenas Express Low-Carb Cotidianas
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_15_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Palomita en Bifes con Ensalada de Repollo y Aceitunas (`plate_cat_57`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Palomita en Bifes
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥬 Repollo (Blanco o Colorado) + 🥗 Rabanitos en Rodajas
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Bifecitos de palomita a la plancha servidos con ensalada crujiente de repollo blanco en juliana, rabanitos y aceitunas.
- **Prompt Fotográfico:** *"Bifes delgados de carne de palomita dorados a la plancha, acompañados de ensalada simple de repollo blanco en tiras, rodajas de rabanito y aceitunas verdes."*

### ↗️ Superior Derecho — Tira de Asado con Berenjenas y Morrones Asados (`plate_cat_58`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Tira de Asado
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🍆 Berenjena a la Plancha o Asada + 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~20 min | **Servido:** Caliente
- **Descripción Culinaria:** Costilla de asado crocante a la plancha con berenjena asada ahumada y tiras de morrón quemado al fuego.
- **Prompt Fotográfico:** *"Tira de asado dorada a la plancha, servida con rodajas de berenjena asada y tiras de morrón rojo asado con aceite de oliva."*

### ↙️ Inferior Izquierdo — Pata-Muslo al Horno con Coliflor y Tomates Asados (`plate_cat_59`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pata-Muslo de Pollo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥦 Coliflor al Vapor o Salteada + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~25 min | **Servido:** Caliente
- **Descripción Culinaria:** Presa de pollo asada con piel crujiente, servida con ramilletes de coliflor salteada al orégano y tomates asados.
- **Prompt Fotográfico:** *"Pata-muslo asada al horno bien dorada, acompañada de ramilletes de coliflor salteada dorada a la sartén y mitades de tomate asado con orégano y oliva."*

### ↘️ Inferior Derecho — Atún Caliente con Chauchas al Vapor y Huevo Duro (`plate_cat_60`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🫛 Chauchas al Vapor o Salteadas
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Caliente
- **Descripción Culinaria:** Lomo de atún escurrido salteado tibio con chauchas al vapor y huevo duro en cuartos con aceite de oliva.
- **Prompt Fotográfico:** *"Plato caliente con lomos de atún salteados en sartén, chauchas verdes tiernas al vapor y cuartos de huevo duro con aceite de oliva y pimienta."*

> [!NOTE] Prompt consolidado para generar el Lote 15 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Bifes delgados de carne de palomita dorados a la plancha, acompañados de ensalada simple de repollo blanco en tiras, rodajas de rabanito y aceitunas verdes.
- Cuadrante Superior Derecho: Tira de asado dorada a la plancha, servida con rodajas de berenjena asada y tiras de morrón rojo asado con aceite de oliva.
- Cuadrante Inferior Izquierdo: Pata-muslo asada al horno bien dorada, acompañada de ramilletes de coliflor salteada dorada a la sartén y mitades de tomate asado con orégano y oliva.
- Cuadrante Inferior Derecho: Plato caliente con lomos de atún salteados en sartén, chauchas verdes tiernas al vapor y cuartos de huevo duro con aceite de oliva y pimienta.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 16 (lote_16): Ensaladas y Platos Fríos de Atún y Pescado
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_16_master_2x2.jpg`)
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Ensalada de Atún con Arroz, Huevo y Aceitunas (`plate_cat_61`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Clásica ensalada veraniega de arroz blanco frío con atún en lomo, dados de tomate fresco, huevo duro picado y aceitunas verdes.
- **Prompt Fotográfico:** *"Ensalada fría casera de arroz blanco suelto y desgranado mezclado naturalmente con trozos de atún al natural, dados de tomate fresco, cuartos de huevo duro y aceitunas verdes (arroz suelto mezclado, sin molde ni timbal)."*

### ↗️ Superior Derecho — Salpicón de Atún con Papas, Zanahoria y Oliva (`plate_cat_62`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🥕 Zanahoria Rallada / Cocida + 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Salpicón frío con cubos de papa hervida fría, zanahoria rallada fresca, hojas de lechuga y lomos de atún aderezados con oliva.
- **Prompt Fotográfico:** *"Plato hondo de salpicón frío casero con cubos de papa hervida, zanahoria rallada fresca, hojas de lechuga cortada y lomos de atún con un chorrito de aceite de oliva."*

### ↙️ Inferior Izquierdo — Ensalada de Caballa con Fideos Fríos y Rúcula (`plate_cat_63`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Caballa en Lata (al Natural o Aceite)
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula) + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Fideos secos fríos (tirabuzón/moñito) con lomos de caballa en conserva, hojas de rúcula fresca y tomates cherry.
- **Prompt Fotográfico:** *"Ensalada fría de fideos cortos al dente mezclados con lomos de caballa en conserva, hojas de rúcula fresca y tomates cherry cortados al medio con aceite de oliva."*

### ↘️ Inferior Derecho — Bowl Frío de Arroz con Atún, Choclo y Palta (`plate_cat_64`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** 🌽 Choclo / Maíz Desgranado
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🥑 Palta / Aguacate
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Bowl fresco con base de choclo amarillo desgranado, arroz blanco frío, atún en trozos y abanico de palta con limón.
- **Prompt Fotográfico:** *"Plato de ensalada fría con granos de choclo amarillo dulce, arroz blanco frío suelto y esparcido de forma plana, lomos de atún, daditos de tomate fresco y trozos de palta con limón (sin molde)."*

> [!NOTE] Prompt consolidado para generar el Lote 16 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Ensalada fría casera de arroz blanco suelto y desgranado mezclado naturalmente con trozos de atún al natural, dados de tomate fresco, cuartos de huevo duro y aceitunas verdes (arroz suelto mezclado, sin molde ni timbal).
- Cuadrante Superior Derecho: Plato hondo de salpicón frío casero con cubos de papa hervida, zanahoria rallada fresca, hojas de lechuga cortada y lomos de atún con un chorrito de aceite de oliva.
- Cuadrante Inferior Izquierdo: Ensalada fría de fideos cortos al dente mezclados con lomos de caballa en conserva, hojas de rúcula fresca y tomates cherry cortados al medio con aceite de oliva.
- Cuadrante Inferior Derecho: Plato de ensalada fría con granos de choclo amarillo dulce, arroz blanco frío suelto y esparcido de forma plana, lomos de atún, daditos de tomate fresco y trozos de palta con limón (sin molde).
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 17 (lote_17): Salpicones de Pollo y Ensaladas de Ave
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_17_master_2x2.jpg`)
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Salpicón Criollo de Pollo con Papas y Hojas Verdes (`plate_cat_65`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula) + 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Pechuga de pollo cocida desmenuzada fría con cubos de papa hervida, lechuga crocante y zanahoria rallada al oliva.
- **Prompt Fotográfico:** *"Salpicón casero frío servido en plato con desorden natural y entropía: hebras de pechuga de pollo desmenuzada entremezcladas de forma asimétrica y despareja con dados rústicos de papa hervida, hojas de lechuga cortada a mano y zanahoria rallada con aceite de oliva (sin patrones geométricos)."*

### ↗️ Superior Derecho — Ensalada Caesar Criolla con Pollo y Parmesano (`plate_cat_66`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Frío
- **Descripción Culinaria:** Tiras de pechuga dorada fría sobre colchón abundante de hojas verdes, crutones crocantes y lascas de queso sardo/parmesano.
- **Prompt Fotográfico:** *"Ensalada de pollo casera servida con espontaneidad y asimetría: hojas de lechuga y rúcula mezcladas al desgaire con tiras irregulares de pollo grillado frío volcadas encima, crutones dorados esparcidos al azar y lascas de queso parmesano repartidas de forma despareja."*

### ↙️ Inferior Izquierdo — Bowl de Quinoa Fría con Pollo y Pepino (`plate_cat_67`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🌾 Quinoa
  - **Vegetales:** 🥒 Pepino en Rodajas + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Frío
- **Descripción Culinaria:** Quinoa cocida fría con cubos de pollo a la plancha, rodajas finas de pepino refrescante, tomates cherry y oliva.
- **Prompt Fotográfico:** *"Plato de quinoa fría suelta con entropía orgánica: dados de pollo a la plancha volcados a un costado, rodajas irregulares de pepino fresco y tomates cortados mezclados sin ningún patrón circular ni concéntrico con aceite de oliva."*

### ↘️ Inferior Derecho — Ensalada de Pollo con Choclo, Remolacha y Nueces (`plate_cat_68`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🌽 Choclo / Maíz Desgranado
  - **Vegetales:** 🥗 Remolacha (Rallada o Hervida)
  - **Grasa:** 🌰 Frutos Secos (Nueces / Almendras)
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Frío
- **Descripción Culinaria:** Pollo cocido desmenuzado con choclo desgranado dulce, remolacha cocida en cubos y mariposas de nueces crujientes.
- **Prompt Fotográfico:** *"Ensalada casera servida rústicamente: pollo desmenuzado mezclado naturalmente con granos sueltos de choclo amarillo, dados desparejos de remolacha teñidos de violeta y trozos de nueces partidas esparcidos con total asimetría."*

> [!NOTE] Prompt consolidado para generar el Lote 17 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Salpicón casero frío servido en plato con desorden natural y entropía: hebras de pechuga de pollo desmenuzada entremezcladas de forma asimétrica y despareja con dados rústicos de papa hervida, hojas de lechuga cortada a mano y zanahoria rallada con aceite de oliva (sin patrones geométricos).
- Cuadrante Superior Derecho: Ensalada de pollo casera servida con espontaneidad y asimetría: hojas de lechuga y rúcula mezcladas al desgaire con tiras irregulares de pollo grillado frío volcadas encima, crutones dorados esparcidos al azar y lascas de queso parmesano repartidas de forma despareja.
- Cuadrante Inferior Izquierdo: Plato de quinoa fría suelta con entropía orgánica: dados de pollo a la plancha volcados a un costado, rodajas irregulares de pepino fresco y tomates cortados mezclados sin ningún patrón circular ni concéntrico con aceite de oliva.
- Cuadrante Inferior Derecho: Ensalada casera servida rústicamente: pollo desmenuzado mezclado naturalmente con granos sueltos de choclo amarillo, dados desparejos de remolacha teñidos de violeta y trozos de nueces partidas esparcidos con total asimetría.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 18 (lote_18): Huevos Duros y Ensaladas de Legumbres Frías
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_18_master_2x2.jpg`)
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Ensalada de Lentejas Frías con Huevo Duro y Tomate (`plate_cat_69`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos + 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Lentejas cocidas escurridas frías mezcladas con dados de tomate, huevo duro picado y cebolla de verdeo con oliva.
- **Prompt Fotográfico:** *"Ensalada casera de lentejas totalmente revuelta y mezclada (tossed salad): las lentejas cocidas, daditos de tomate, cebolla de verdeo y huevo duro picado están entremezclados homogéneamente en un solo revuelto rústico con aceite de oliva (PROHIBIDO círculos, anillos perimetrales o ingredientes separados)."*

### ↗️ Superior Derecho — Ensalada Primavera de Fideos con Huevo y Choclo (`plate_cat_70`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥕 Zanahoria Rallada / Cocida + 🥦 Brócoli al Vapor
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Fideos secos fríos con trozos de huevo duro, choclo en grano, zanahoria rallada fresca y aceitunas negras.
- **Prompt Fotográfico:** *"Ensalada de fideos tirabuzón (fusilli) fríos totalmente mezclada y revuelta: fideos espirales entremezclados homogéneamente con granos de choclo amarillo, hebras de zanahoria rallada, huevo duro picado y aceitunas negras picadas en una masa uniforme revuelta de ensalada (PROHIBIDO terminantemente fideos con forma de rueda, manubrio o engranaje; PROHIBIDO colocar cosas en círculo)."*

### ↙️ Inferior Izquierdo — Ensalada de Porotos Alubia Fríos con Huevo y Perejil (`plate_cat_71`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Porotos alubia blancos tiernos fríos con abundante perejil fresco picado, tomate en cubos, huevo duro y aceite de oliva.
- **Prompt Fotográfico:** *"Ensalada de porotos alubia blancos totalmente revuelta: porotos blancos cocidos mezclados de forma uniforme con trocitos de tomate, huevo duro picado rústico y perejil fresco con aceite de oliva, todo revuelto en un montículo casero."*

### ↘️ Inferior Derecho — Ensalada de Arroz Frío con Huevo, Chauchas y Palta (`plate_cat_72`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🫛 Chauchas al Vapor o Salteadas
  - **Grasa:** 🥑 Palta / Aguacate
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Arroz blanco frío suelto con chauchas cocidas tiernas en trocitos, huevo duro picado y cubos de palta fresca.
- **Prompt Fotográfico:** *"Ensalada de arroz blanco frío totalmente revuelta: arroz suelto mezclado homogéneamente con trocitos de chauchas verdes, dados de palta y huevo picado en un revoltijo apetitoso de casa (sin moldes ni círculos decorativos)."*

> [!NOTE] Prompt consolidado para generar el Lote 18 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Ensalada casera de lentejas totalmente revuelta y mezclada (tossed salad): las lentejas cocidas, daditos de tomate, cebolla de verdeo y huevo duro picado están entremezclados homogéneamente en un solo revuelto rústico con aceite de oliva (PROHIBIDO círculos, anillos perimetrales o ingredientes separados).
- Cuadrante Superior Derecho: Ensalada de fideos tirabuzón (fusilli) fríos totalmente mezclada y revuelta: fideos espirales entremezclados homogéneamente con granos de choclo amarillo, hebras de zanahoria rallada, huevo duro picado y aceitunas negras picadas en una masa uniforme revuelta de ensalada (PROHIBIDO terminantemente fideos con forma de rueda, manubrio o engranaje; PROHIBIDO colocar cosas en círculo).
- Cuadrante Inferior Izquierdo: Ensalada de porotos alubia blancos totalmente revuelta: porotos blancos cocidos mezclados de forma uniforme con trocitos de tomate, huevo duro picado rústico y perejil fresco con aceite de oliva, todo revuelto en un montículo casero.
- Cuadrante Inferior Derecho: Ensalada de arroz blanco frío totalmente revuelta: arroz suelto mezclado homogéneamente con trocitos de chauchas verdes, dados de palta y huevo picado en un revoltijo apetitoso de casa (sin moldes ni círculos decorativos).
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 19 (lote_19): Quesos Frescos, Caprese y Ensaladas Livianas
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_19_master_2x2.jpg`)
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Ensalada Caprese Criolla con Queso Fresco y Rúcula (`plate_cat_73`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos + 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Rodajas gruesas de tomate maduro con láminas de queso fresco o port salut, hojas de rúcula y aceite de oliva extra virgen.
- **Prompt Fotográfico:** *"Ensalada Caprese rústica servida de forma informal y casera: trozos desparejos de tomate fresco y dados o cuñas de queso fresco mezclados con hojas verdes de rúcula y aceite de oliva (PROHIBIDO rueda o abanico concéntrico de rodajas alternadas)."*

### ↗️ Superior Derecho — Ensalada Fresca de Ricota con Remolacha y Nueces (`plate_cat_74`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥗 Remolacha (Rallada o Hervida) + 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🌰 Frutos Secos (Nueces / Almendras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Copos de ricota fresca sobre colchón de rúcula, dados de remolacha cocida dulce y nueces picadas crujientes.
- **Prompt Fotográfico:** *"Plato de ensalada fresca con hojas de rúcula dispuestas libremente, dados de remolacha cocida esparcidos de forma despareja, copos rústicos de ricota fresca y nueces partidas con aceite de oliva (distribución asimétrica natural)."*

### ↙️ Inferior Izquierdo — Pasta Fría con Dados de Queso, Tomate y Aceitunas (`plate_cat_75`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Fideos fríos al dente con dados de queso port salut/tybo, tomatitos en cuartos, aceitunas negras y albahaca fresca.
- **Prompt Fotográfico:** *"Plato hondo de ensalada de fideos tirabuzón fríos mezclados al descuido casero con cubos irregulares de queso fresco, tomates cherry cortados al azar, aceitunas negras dispersas y albahaca con aceite de oliva."*

### ↘️ Inferior Derecho — Bowl de Quinoa con Queso Port Salut, Pepino y Semillas (`plate_cat_76`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** 🌾 Quinoa
  - **Vegetales:** 🥒 Pepino en Rodajas + 🥗 Rabanitos en Rodajas
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Frío
- **Descripción Culinaria:** Quinoa fría con cubitos de queso port salut, rodajas finas de pepino, rabanitos crocantes y mix de semillas de chía.
- **Prompt Fotográfico:** *"Quinoa fría suelta en plato hondo con dados rústicos de queso fresco blanco, rodajitas de pepino y rabanitos volcados de forma asimétrica y espolvoreados con semillas (sin anillos concéntricos)."*

> [!NOTE] Prompt consolidado para generar el Lote 19 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Ensalada Caprese rústica servida de forma informal y casera: trozos desparejos de tomate fresco y dados o cuñas de queso fresco mezclados con hojas verdes de rúcula y aceite de oliva (PROHIBIDO rueda o abanico concéntrico de rodajas alternadas).
- Cuadrante Superior Derecho: Plato de ensalada fresca con hojas de rúcula dispuestas libremente, dados de remolacha cocida esparcidos de forma despareja, copos rústicos de ricota fresca y nueces partidas con aceite de oliva (distribución asimétrica natural).
- Cuadrante Inferior Izquierdo: Plato hondo de ensalada de fideos tirabuzón fríos mezclados al descuido casero con cubos irregulares de queso fresco, tomates cherry cortados al azar, aceitunas negras dispersas y albahaca con aceite de oliva.
- Cuadrante Inferior Derecho: Quinoa fría suelta en plato hondo con dados rústicos de queso fresco blanco, rodajitas de pepino y rabanitos volcados de forma asimétrica y espolvoreados con semillas (sin anillos concéntricos).
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 20 (lote_20): Viandas Prácticas y Bowls Nutritivos de Verano
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_20_master_2x2.jpg`)
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Salpicón de Carne Fría con Papas y Hojas Verdes (`plate_cat_77`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula) + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Tiras frías de bife o carne asada cocida con dados de papa hervida, hojas de lechuga crocante, tomate y oliva.
- **Prompt Fotográfico:** *"Salpicón criollo de carne vacuna cocida desmenuzada fría, mezclada espontáneamente con dados de papa hervida rústica, hojas de lechuga troceadas y tomate fresco con aceite de oliva (sin patrones circulares)."*

### ↗️ Superior Derecho — Ensalada Rusa con Tiras de Milanesa Fría (`plate_cat_78`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Milanesa (Carne o Pollo)
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Clásica ensalada rusa de papa y zanahoria con tiras crujientes de milanesa fría y aceitunas verdes.
- **Prompt Fotográfico:** *"Porción rústica de ensalada rusa servida a un costado con cuchara, acompañada al lado por tiras de milanesa dorada fría dispuestas de forma casual y aceitunas verdes sin alinear."*

### ↙️ Inferior Izquierdo — Bowl Detox de Tofu Frío con Quinoa y Repollo (`plate_cat_79`)
- **Ingredientes Clave:**
  - **Proteína:** 🧈 Tofu a la Plancha
  - **Carbohidrato:** 🌾 Quinoa
  - **Vegetales:** 🥬 Repollo (Blanco o Colorado) + 🥒 Pepino en Rodajas
  - **Grasa:** 🥑 Palta / Aguacate
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Frío
- **Descripción Culinaria:** Tofu firme frío marinado en limón sobre quinoa cocida, juliana fina de repollo colorado, pepino y palta.
- **Prompt Fotográfico:** *"Plato frío con base de quinoa cocida suelta, cubos de tofu blanco marinado volcados a un costado, repollo colorado en juliana y trozos de palta madura servidos de forma libre y asimétrica con aceite de oliva."*

### ↘️ Inferior Derecho — Ensalada de Avena Remojada con Atún y Zanahoria (`plate_cat_80`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** 🥣 Avena (Arrollada)
  - **Vegetales:** 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Base fresca de avena arrollada hidratada con agua o caldo frío, lomitos de atún al natural, zanahoria rallada y semillas.
- **Prompt Fotográfico:** *"Ensalada fría casera de avena arrollada hidratada mezclada al desgaire con trozos de atún claro, hebras de zanahoria fresca y semillas tostadas esparcidas con naturalidad sin orden simétrico."*

> [!NOTE] Prompt consolidado para generar el Lote 20 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Salpicón criollo de carne vacuna cocida desmenuzada fría, mezclada espontáneamente con dados de papa hervida rústica, hojas de lechuga troceadas y tomate fresco con aceite de oliva (sin patrones circulares).
- Cuadrante Superior Derecho: Porción rústica de ensalada rusa servida a un costado con cuchara, acompañada al lado por tiras de milanesa dorada fría dispuestas de forma casual y aceitunas verdes sin alinear.
- Cuadrante Inferior Izquierdo: Plato frío con base de quinoa cocida suelta, cubos de tofu blanco marinado volcados a un costado, repollo colorado en juliana y trozos de palta madura servidos de forma libre y asimétrica con aceite de oliva.
- Cuadrante Inferior Derecho: Ensalada fría casera de avena arrollada hidratada mezclada al desgaire con trozos de atún claro, hebras de zanahoria fresca y semillas tostadas esparcidas con naturalidad sin orden simétrico.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 21 (lote_21): Milanesas y Cortes Tradicionales Argentinos
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_21_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Milanesa de Carne al Horno con Papas y Tomate (`plate_cat_81`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Milanesa (Carne o Pollo)
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Milanesa de nalga o bola de lomo dorada y crujiente al horno, acompañada de papas doradas en cubos y rodajas de tomate fresco.
- **Prompt Fotográfico:** *"Milanesa de carne dorada y crujiente servida en el plato con gajo de limón, acompañada de papas en cubos doradas al horno y rodajas frescas de tomate con orégano y aceite de oliva."*

### ↗️ Superior Derecho — Milanesa de Pollo con Puré Mixto de Calabaza y Batata (`plate_cat_82`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Milanesa (Carne o Pollo)
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🎃 Zapallo / Calabaza / Anco
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Suprema milanesa dorada al horno, servida junto a un puré mixto rústico de calabaza y batata aplastado con tenedor y manteca.
- **Prompt Fotográfico:** *"Milanesa de pollo dorada y crocante con limón, servida al lado de una porción rústica y plana de puré mixto de calabaza y batata anaranjado brillante con manteca (sin moldes ni flores)."*

### ↙️ Inferior Izquierdo — Tortuguita en Bifes a la Plancha con Puré de Papas y Cebolla (`plate_cat_83`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Tortuguita en Bifes
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Bifecitos finos de tortuguita sellados a la plancha muy caliente, con cebolla caramelizada suave por encima y puré de papas casero.
- **Prompt Fotográfico:** *"Bifecitos delgados de carne vacuna dorados a la plancha cubiertos con hebras de cebolla rehogada dorada, servidos junto a puré de papas casero suave y plano con manteca."*

### ↘️ Inferior Derecho — Palomita en Bifes con Arroz Blanco y Repollo Salteado (`plate_cat_84`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Palomita en Bifes
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🥬 Repollo (Blanco o Colorado)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Bifes tiernos de palomita a la sartén con pimienta, acompañados de arroz blanco desgranado y juliana de repollo blanco salteado al dente.
- **Prompt Fotográfico:** *"Bifes finos de carne vacuna sellados al fuego, acompañados de porción de arroz blanco suelto y esparcido de forma plana al costado y repollo blanco tierno salteado a la sartén con oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 21 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Milanesa de carne dorada y crujiente servida en el plato con gajo de limón, acompañada de papas en cubos doradas al horno y rodajas frescas de tomate con orégano y aceite de oliva.
- Cuadrante Superior Derecho: Milanesa de pollo dorada y crocante con limón, servida al lado de una porción rústica y plana de puré mixto de calabaza y batata anaranjado brillante con manteca (sin moldes ni flores).
- Cuadrante Inferior Izquierdo: Bifecitos delgados de carne vacuna dorados a la plancha cubiertos con hebras de cebolla rehogada dorada, servidos junto a puré de papas casero suave y plano con manteca.
- Cuadrante Inferior Derecho: Bifes finos de carne vacuna sellados al fuego, acompañados de porción de arroz blanco suelto y esparcido de forma plana al costado y repollo blanco tierno salteado a la sartén con oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 22 (lote_22): Cortes Vacunos al Fuego y Hígado Encebollado
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_22_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Tira de Asado a la Plancha con Ensalada Criolla Caliente (`plate_cat_85`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Tira de Asado
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde) + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~20 min | **Servido:** Caliente
- **Descripción Culinaria:** Tira de asado con costra dorada a la plancha de hierro, acompañada de sofrito criollo de morrón rojo, tomate en dados y cebolla con oliva.
- **Prompt Fotográfico:** *"Corte de tira de asado vacuno dorado a la plancha de hierro con marcas de cocción, acompañado de salteado criollo de morrones rojos en tiras y dados de tomate jugoso con aceite de oliva."*

### ↗️ Superior Derecho — Tira de Asado Dorada con Mandioca Hervida y Hojas Verdes (`plate_cat_86`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Tira de Asado
  - **Carbohidrato:** 🪵 Mandioca / Yuca Hervida
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~20 min | **Servido:** Caliente
- **Descripción Culinaria:** Asado a la plancha tierno y sabroso, servido junto a trozos de mandioca hervida blanca con aceite de oliva virgen y hojas frescas.
- **Prompt Fotográfico:** *"Tira de asado jugosa dorada a la plancha, servida con trozos rústicos de mandioca hervida blanca tierna bañada en aceite de oliva y hojas frescas verdes al costado."*

### ↙️ Inferior Izquierdo — Bife de Hígado Encebollado con Puré de Papas (`plate_cat_87`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife de Hígado Encebollado
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Clásico bife de hígado vacuno tierno sellado a fuego vivo, cubierto de abundante cebolla dorada dulce y puré de papas casero.
- **Prompt Fotográfico:** *"Bife de hígado vacuno sellado a la sartén cubierto con abundante cebolla caramelizada dorada, acompañado de puré de papas casero rústico aplastado con tenedor."*

### ↘️ Inferior Derecho — Bife de Hígado Salteado con Morrón y Arroz Blanco (`plate_cat_88`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife de Hígado Encebollado
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Tiras jugosas de hígado vacuno salteadas rápidamente en sartén con tiras de morrón rojo, cebolla y servidas con arroz blanco suelto.
- **Prompt Fotográfico:** *"Salteado casero de tiras de hígado vacuno selladas con tiras de morrón rojo brillante, acompañado de porción plana de arroz blanco desgranado con cuchara."*

> [!NOTE] Prompt consolidado para generar el Lote 22 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Corte de tira de asado vacuno dorado a la plancha de hierro con marcas de cocción, acompañado de salteado criollo de morrones rojos en tiras y dados de tomate jugoso con aceite de oliva.
- Cuadrante Superior Derecho: Tira de asado jugosa dorada a la plancha, servida con trozos rústicos de mandioca hervida blanca tierna bañada en aceite de oliva y hojas frescas verdes al costado.
- Cuadrante Inferior Izquierdo: Bife de hígado vacuno sellado a la sartén cubierto con abundante cebolla caramelizada dorada, acompañado de puré de papas casero rústico aplastado con tenedor.
- Cuadrante Inferior Derecho: Salteado casero de tiras de hígado vacuno selladas con tiras de morrón rojo brillante, acompañado de porción plana de arroz blanco desgranado con cuchara.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 23 (lote_23): Bondiola y Costillitas de Cerdo con Batata y Choclo
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_23_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Bondiola a la Plancha con Batata Asada y Brócoli (`plate_cat_89`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bondiola o Solomillo de Cerdo
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🥦 Brócoli al Vapor
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Medallones tiernos de bondiola de cerdo dorados a la plancha, acompañados de rodajas de batata asada dulce y arbolitos de brócoli al vapor con manteca.
- **Prompt Fotográfico:** *"Medallones de bondiola de cerdo bien dorados a la plancha, acompañados de rodajas de batata asada con piel caramelizada y arbolitos de brócoli al vapor con manteca derretida."*

### ↗️ Superior Derecho — Bondiola Sellada con Salteado de Choclo y Verdeo (`plate_cat_90`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bondiola o Solomillo de Cerdo
  - **Carbohidrato:** 🌽 Choclo / Maíz Desgranado
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Trozos de bondiola de cerdo salteados en sartén con granos de choclo amarillo dulce, cebollita de verdeo picada y un toque de manteca.
- **Prompt Fotográfico:** *"Tiras de bondiola de cerdo bien selladas en sartén caliente, acompañadas de salteado de choclo amarillo desgranado con cebolla de verdeo picada y manteca."*

### ↙️ Inferior Izquierdo — Costillita de Cerdo con Salteado de Repollo y Zanahoria (`plate_cat_91`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Costillita / Bife de Cerdo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥬 Repollo (Blanco o Colorado) + 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Costillita de cerdo jugosa con limón, servida con un abundante salteado caliente de repollo blanco en tiras y zanahoria con aceite de oliva.
- **Prompt Fotográfico:** *"Costillita de cerdo dorada a la plancha con limón, servida junto a un salteado casero caliente de finas tiras de repollo blanco y zanahoria con aceite de oliva."*

### ↘️ Inferior Derecho — Costillita de Cerdo al Limón con Papas y Chauchas al Vapor (`plate_cat_92`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Costillita / Bife de Cerdo
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🫛 Chauchas al Vapor o Salteadas
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Costillita de cerdo dorada a la plancha con limón, servida con papas cocidas al vapor doradas y chauchas verdes tiernas con oliva.
- **Prompt Fotográfico:** *"Costillita de cerdo a la plancha con gajo de limón, acompañada de cubos de papa cocida dorada y chauchas verdes tiernas salteadas con aceite de oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 23 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Medallones de bondiola de cerdo bien dorados a la plancha, acompañados de rodajas de batata asada con piel caramelizada y arbolitos de brócoli al vapor con manteca derretida.
- Cuadrante Superior Derecho: Tiras de bondiola de cerdo bien selladas en sartén caliente, acompañadas de salteado de choclo amarillo desgranado con cebolla de verdeo picada y manteca.
- Cuadrante Inferior Izquierdo: Costillita de cerdo dorada a la plancha con limón, servida junto a un salteado casero caliente de finas tiras de repollo blanco y zanahoria con aceite de oliva.
- Cuadrante Inferior Derecho: Costillita de cerdo a la plancha con gajo de limón, acompañada de cubos de papa cocida dorada y chauchas verdes tiernas salteadas con aceite de oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 24 (lote_24): Pescados y Caballa en Sartén y Cacerola
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_24_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Merluza al Horno con Costra de Queso y Puré de Calabaza (`plate_cat_93`)
- **Ingredientes Clave:**
  - **Proteína:** 🐟 Filete de Pescado Blanco (Merluza / Tilapia)
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🎃 Zapallo / Calabaza / Anco
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Filete de merluza horneado con costra dorada de queso rallado sardo, acompañado de puré rústico de calabaza y rodajas de batata dulce.
- **Prompt Fotográfico:** *"Filete de merluza horneado con queso sardo dorado por encima y limón, servido con puré rústico de calabaza anaranjada dulce y rodajas de batata asada."*

### ↗️ Superior Derecho — Caballa Salteada con Fideos Secos, Tomate y Aceitunas (`plate_cat_94`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Caballa en Lata (al Natural o Aceite)
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Lomos de caballa salteados en sartén caliente con fideos secos al dente, cubos de tomate fresco y rodajitas de aceitunas negras.
- **Prompt Fotográfico:** *"Plato de fideos tirabuzón al dente salteados en sartén con trozos de caballa en conserva, daditos de tomate fresco salteado y aceitunas negras en rodajas."*

### ↙️ Inferior Izquierdo — Cazuela Rápida de Merluza con Papas, Cebolla y Pimentón (`plate_cat_95`)
- **Ingredientes Clave:**
  - **Proteína:** 🐟 Filete de Pescado Blanco (Merluza / Tilapia)
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Trozos tiernos de merluza cocidos en cacerola con rodajas de papa hervida, cebolla rehogada dulce, pimentón dulce y oliva.
- **Prompt Fotográfico:** *"Cazuela casera de trozos de merluza blanca cocidos con rodajas de papa tierna, abundante cebolla rehogada y un toque de pimentón dulce con aceite de oliva."*

### ↘️ Inferior Derecho — Caballa a la Sartén con Chauchas y Arroz Blanco (`plate_cat_96`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Caballa en Lata (al Natural o Aceite)
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🫛 Chauchas al Vapor o Salteadas
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Lomos de caballa sellados rápidamente en sartén con chauchas verdes salteadas y una porción de arroz blanco desgranado.
- **Prompt Fotográfico:** *"Lomos dorados de caballa a la sartén servidos junto a chauchas verdes salteadas al dente y una porción plana de arroz blanco desgranado con cuchara."*

> [!NOTE] Prompt consolidado para generar el Lote 24 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Filete de merluza horneado con queso sardo dorado por encima y limón, servido con puré rústico de calabaza anaranjada dulce y rodajas de batata asada.
- Cuadrante Superior Derecho: Plato de fideos tirabuzón al dente salteados en sartén con trozos de caballa en conserva, daditos de tomate fresco salteado y aceitunas negras en rodajas.
- Cuadrante Inferior Izquierdo: Cazuela casera de trozos de merluza blanca cocidos con rodajas de papa tierna, abundante cebolla rehogada y un toque de pimentón dulce con aceite de oliva.
- Cuadrante Inferior Derecho: Lomos dorados de caballa a la sartén servidos junto a chauchas verdes salteadas al dente y una porción plana de arroz blanco desgranado con cuchara.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 25 (lote_25): Pollo y Aves con Salsas Ligeras y Vegetales de Estación
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_25_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Pata-Muslo al Horno con Batatas Asadas y Puerro (`plate_cat_97`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pata-Muslo de Pollo
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~25 min | **Servido:** Caliente
- **Descripción Culinaria:** Pata-muslo dorada y crocante cocida al horno sobre rodajas de batata dulce caramelizada y rodajitas tiernas de puerro.
- **Prompt Fotográfico:** *"Pata-muslo de pollo al horno bien dorada con piel crocante, acompañada de rodajas de batata asada dulce y puerro tierno cocido con aceite de oliva."*

### ↗️ Superior Derecho — Pata-Muslo a la Cacerola con Fideos y Salsa de Tomate (`plate_cat_98`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pata-Muslo de Pollo
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~25 min | **Servido:** Caliente
- **Descripción Culinaria:** Pollo tierno cocinado a la cacerola en salsa casera de tomate, servido con fideos al dente y lluvia de orégano.
- **Prompt Fotográfico:** *"Pata-muslo de pollo cocinada a fuego lento en salsa casera de tomate con trocitos de cebolla, servida junto a fideos secos al dente con perejil."*

### ↙️ Inferior Izquierdo — Suprema con Crema Ligera, Champiñones y Fideos (`plate_cat_99`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🍄 Hongos / Champiñones Salteados
  - **Grasa:** 🥛 Crema de Leche
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Tiras doradas de pechuga de pollo salteadas con champiñones en láminas, fideos y un toque de crema de leche suave con pimienta.
- **Prompt Fotográfico:** *"Tiras doradas de pechuga de pollo y láminas de champiñones salteados en salsa suave de crema de leche, servidos con fideos al dente en plato de loza."*

### ↘️ Inferior Derecho — Pechuga de Pollo Salteada con Coliflor y Zanahoria (`plate_cat_100`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥦 Coliflor al Vapor o Salteada + 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Bocados de pechuga de pollo dorados al fuego con ramilletes de coliflor salteada tierna y bastones de zanahoria con oliva.
- **Prompt Fotográfico:** *"Salteado casero de cubos de pechuga de pollo dorada con ramilletes de coliflor dorada a la sartén y bastoncitos de zanahoria tierna con aceite de oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 25 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Pata-muslo de pollo al horno bien dorada con piel crocante, acompañada de rodajas de batata asada dulce y puerro tierno cocido con aceite de oliva.
- Cuadrante Superior Derecho: Pata-muslo de pollo cocinada a fuego lento en salsa casera de tomate con trocitos de cebolla, servida junto a fideos secos al dente con perejil.
- Cuadrante Inferior Izquierdo: Tiras doradas de pechuga de pollo y láminas de champiñones salteados en salsa suave de crema de leche, servidos con fideos al dente en plato de loza.
- Cuadrante Inferior Derecho: Salteado casero de cubos de pechuga de pollo dorada con ramilletes de coliflor dorada a la sartén y bastoncitos de zanahoria tierna con aceite de oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 26 (lote_26): Plant-Based, Soja Texturizada y Omelettes
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_26_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Guiso Express de Lentejas con Soja Sofrita y Zanahoria (`plate_cat_101`)
- **Ingredientes Clave:**
  - **Proteína:** 🫘 Soja Texturizada Salteada
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Guiso rápido y sustancioso de lentejas cocidas con soja texturizada sofrita, dados de zanahoria dulce, cebolla y pimentón.
- **Prompt Fotográfico:** *"Plato hondo de guiso casero de lentejas tiernas con soja texturizada sofrita bien dorada, rodajas de zanahoria y cebollita con pimentón dulce."*

### ↗️ Superior Derecho — Soja Sofrita a la Criolla con Puré de Papas y Morrón (`plate_cat_102`)
- **Ingredientes Clave:**
  - **Proteína:** 🫘 Soja Texturizada Salteada
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Picadillo criollo vegetariano de soja texturizada sofrita con morrón rojo y cebolla, servido junto a puré de papas casero suave.
- **Prompt Fotográfico:** *"Picadillo casero de soja texturizada dorada en sartén con cubitos de morrón rojo y cebolla, servido al lado de puré de papas casero rústico aplastado plano."*

### ↙️ Inferior Izquierdo — Omelette con Queso Port Salut, Champiñones y Espinaca (`plate_cat_103`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada + 🍄 Hongos / Champiñones Salteados
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Caliente
- **Descripción Culinaria:** Omelette esponjoso casero relleno de queso fresco fundido, acompañado de láminas doradas de champiñón y espinacas salteadas.
- **Prompt Fotográfico:** *"Omelette casero esponjoso y dorado doblado al medio con queso fresco fundido en su interior, servido junto a champiñones dorados y espinacas salteadas con manteca."*

### ↘️ Inferior Derecho — Tofu a la Plancha con Fideos, Coliflor y Sésamo (`plate_cat_104`)
- **Ingredientes Clave:**
  - **Proteína:** 🧈 Tofu a la Plancha
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥦 Coliflor al Vapor o Salteada
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Láminas firmes de tofu dorado a la sartén con fideos secos salteados, ramilletes tiernos de coliflor y lluvia de semillas de sésamo.
- **Prompt Fotográfico:** *"Láminas doradas y crocantes de tofu a la plancha, servidas con fideos al dente salteados, ramilletes de coliflor al vapor y semillas de sésamo tostadas."*

> [!NOTE] Prompt consolidado para generar el Lote 26 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Plato hondo de guiso casero de lentejas tiernas con soja texturizada sofrita bien dorada, rodajas de zanahoria y cebollita con pimentón dulce.
- Cuadrante Superior Derecho: Picadillo casero de soja texturizada dorada en sartén con cubitos de morrón rojo y cebolla, servido al lado de puré de papas casero rústico aplastado plano.
- Cuadrante Inferior Izquierdo: Omelette casero esponjoso y dorado doblado al medio con queso fresco fundido en su interior, servido junto a champiñones dorados y espinacas salteadas con manteca.
- Cuadrante Inferior Derecho: Láminas doradas y crocantes de tofu a la plancha, servidas con fideos al dente salteados, ramilletes de coliflor al vapor y semillas de sésamo tostadas.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 27 (lote_27): Cenas Ligeras Low-Carb sin Almidón
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_27_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Bife a la Plancha con Berenjenas Asadas y Tomates Cherry (`plate_cat_105`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🍆 Berenjena a la Plancha o Asada + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Churrasco jugoso sellado a fuego vivo, acompañado de rodajas de berenjena asada tierna y tomatitos cherry salteados con orégano y oliva.
- **Prompt Fotográfico:** *"Bife jugoso de carne vacuna a la plancha con costra dorada, acompañado exclusivamente de rodajas gruesas de berenjena asada y tomates cherry salteados con aceite de oliva."*

### ↗️ Superior Derecho — Hamburguesa con Queso Fundido, Chauchas y Cebolla (`plate_cat_106`)
- **Ingredientes Clave:**
  - **Proteína:** 🥘 Carne Picada / Molida
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🫛 Chauchas al Vapor o Salteadas + 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Hamburguesa casera de carne vacuna con queso semiduro fundido por encima, servida con chauchas salteadas y cebolla dorada.
- **Prompt Fotográfico:** *"Hamburguesa casera de carne vacuna dorada al plato cubierta con queso fundido dorado, acompañada de chauchas verdes salteadas y cebolla rehogada (sin pan ni papas)."*

### ↙️ Inferior Izquierdo — Merluza Sellada con Salteado de Zucchini y Champiñones (`plate_cat_107`)
- **Ingredientes Clave:**
  - **Proteína:** 🐟 Filete de Pescado Blanco (Merluza / Tilapia)
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥒 Zucchini / Zapallito a la Plancha + 🍄 Hongos / Champiñones Salteados
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Filete de pescado blanco a la plancha con limón, acompañado de salteado de dados de zucchini y láminas de champiñones dorados.
- **Prompt Fotográfico:** *"Filete de merluza blanca dorado a la plancha con limón y perejil, acompañado de dados de zucchini tierno y champiñones salteados a la sartén con oliva."*

### ↘️ Inferior Derecho — Tofu Crocante con Salteado de Berenjenas y Pimientos (`plate_cat_108`)
- **Ingredientes Clave:**
  - **Proteína:** 🧈 Tofu a la Plancha
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🍆 Berenjena a la Plancha o Asada + 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Cubos de tofu bien dorados y crujientes a la sartén, acompañados de salteado mediterráneo de berenjena en dados y morrón rojo con oliva.
- **Prompt Fotográfico:** *"Cubos dorados y crocantes de tofu a la sartén, servidos sobre salteado caliente de berenjenas en cubos y tiras de morrón rojo dulce con aceite de oliva virgen."*

> [!NOTE] Prompt consolidado para generar el Lote 27 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Bife jugoso de carne vacuna a la plancha con costra dorada, acompañado exclusivamente de rodajas gruesas de berenjena asada y tomates cherry salteados con aceite de oliva.
- Cuadrante Superior Derecho: Hamburguesa casera de carne vacuna dorada al plato cubierta con queso fundido dorado, acompañada de chauchas verdes salteadas y cebolla rehogada (sin pan ni papas).
- Cuadrante Inferior Izquierdo: Filete de merluza blanca dorado a la plancha con limón y perejil, acompañado de dados de zucchini tierno y champiñones salteados a la sartén con oliva.
- Cuadrante Inferior Derecho: Cubos dorados y crocantes de tofu a la sartén, servidos sobre salteado caliente de berenjenas en cubos y tiras de morrón rojo dulce con aceite de oliva virgen.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 28 (lote_28): Pastas, Gratinados y Avena Salada Caliente
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_28_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Fideos a la Crema con Pollo, Espinaca y Queso Rallado (`plate_cat_109`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada
  - **Grasa:** 🥛 Crema de Leche
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Fideos secos al dente salteados con trocitos de pechuga dorada, hojas de espinaca tierna, crema de leche suave y queso sardo rallado.
- **Prompt Fotográfico:** *"Fideos al dente salteados en sartén con tiras de pollo dorado, espinacas tiernas, salsa suave de crema de leche y lluvia de queso rallado."*

### ↗️ Superior Derecho — Arroz Gratinado con Carne Picada, Cebolla y Queso (`plate_cat_110`)
- **Ingredientes Clave:**
  - **Proteína:** 🥘 Carne Picada / Molida
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Arroz blanco casero suelto con sofrito de carne molida, cebolla dorada y abundante queso cremoso fundido por encima.
- **Prompt Fotográfico:** *"Porción plana de arroz blanco casero salteado con carne picada dorada, cebolla caramelizada y cubierto con queso derretido gratinado dorado."*

### ↙️ Inferior Izquierdo — Huevos Revueltos con Queso sobre Batata Asada (`plate_cat_111`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Huevos revueltos húmedos y cremosos con queso parmesano rallado, servidos sobre rodajas doradas de batata asada y rúcula.
- **Prompt Fotográfico:** *"Huevos revueltos tiernos y cremosos con queso rallado, servidos sobre rodajas gruesas de batata asada dulce y hojas frescas de rúcula con aceite de oliva."*

### ↘️ Inferior Derecho — Avena Salada Caliente con Pollo, Espinaca y Manteca (`plate_cat_112`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🥣 Avena (Arrollada)
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Avena arrollada cocida en caldo suave y cremosa con manteca, coronada con dados de pechuga dorada y hojas de espinaca salteadas.
- **Prompt Fotográfico:** *"Plato hondo de avena salada casera caliente y cremosa ligada con manteca, acompañada de bocados de pechuga de pollo dorada y espinaca salteada."*

> [!NOTE] Prompt consolidado para generar el Lote 28 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Fideos al dente salteados en sartén con tiras de pollo dorado, espinacas tiernas, salsa suave de crema de leche y lluvia de queso rallado.
- Cuadrante Superior Derecho: Porción plana de arroz blanco casero salteado con carne picada dorada, cebolla caramelizada y cubierto con queso derretido gratinado dorado.
- Cuadrante Inferior Izquierdo: Huevos revueltos tiernos y cremosos con queso rallado, servidos sobre rodajas gruesas de batata asada dulce y hojas frescas de rúcula con aceite de oliva.
- Cuadrante Inferior Derecho: Plato hondo de avena salada casera caliente y cremosa ligada con manteca, acompañada de bocados de pechuga de pollo dorada y espinaca salteada.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 29 (lote_29): Ensaladas y Salpicones de Estación
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_29_master_2x2.jpg`)
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Salpicón de Pollo con Remolacha, Choclo y Nueces (`plate_cat_113`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🌽 Choclo / Maíz Desgranado
  - **Vegetales:** 🥗 Remolacha (Rallada o Hervida)
  - **Grasa:** 🌰 Frutos Secos (Nueces / Almendras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Salpicón fresco con hebras de pechuga de pollo cocida, dados de remolacha dulce, granos de choclo amarillo y nueces partidas crujientes.
- **Prompt Fotográfico:** *"Ensalada casera servida rústicamente: pollo desmenuzado mezclado naturalmente con granos sueltos de choclo amarillo, dados de remolacha teñidos de violeta y nueces partidas con aceite de oliva."*

### ↗️ Superior Derecho — Ensalada Fría de Lentejas con Caballa, Rabanitos y Tomate (`plate_cat_114`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Caballa en Lata (al Natural o Aceite)
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🥗 Rabanitos en Rodajas + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Lentejas cocidas firmes mezcladas al descuido con trozos de caballa en conserva, rodajitas crocantes de rabanito, tomate y oliva.
- **Prompt Fotográfico:** *"Ensalada fría totalmente mezclada de lentejas cocidas firmes con lomos de caballa desmenuzada, rodajitas finas de rabanito rosado y daditos de tomate fresco con aceite de oliva."*

### ↙️ Inferior Izquierdo — Ensalada de Fideos con Atún, Pepino y Aceitunas (`plate_cat_115`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥒 Pepino en Rodajas
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Fideos tirabuzón fríos al dente mezclados con lomitos de atún al natural, dados de pepino fresco y aceitunas negras.
- **Prompt Fotográfico:** *"Ensalada de pasta fría casera totalmente revuelta: fideos tirabuzón mezclados con trozos de atún al natural, dados crocantes de pepino fresco y rodajitas de aceitunas negras con oliva."*

### ↘️ Inferior Derecho — Bowl Fresco de Quinoa con Huevo Duro, Rabanito y Palta (`plate_cat_116`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** 🌾 Quinoa
  - **Vegetales:** 🥗 Rabanitos en Rodajas
  - **Grasa:** 🥑 Palta / Aguacate
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Frío
- **Descripción Culinaria:** Quinoa cocida fría suelta servida con huevo duro picado rústico, rodajitas finas de rabanitos crocantes y gajos de palta con oliva.
- **Prompt Fotográfico:** *"Plato hondo de quinoa fría suelta servida con trozos desparejos de huevo duro picado, rodajitas de rabanitos frescos y dados de palta madura con aceite de oliva virgen."*

> [!NOTE] Prompt consolidado para generar el Lote 29 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Ensalada casera servida rústicamente: pollo desmenuzado mezclado naturalmente con granos sueltos de choclo amarillo, dados de remolacha teñidos de violeta y nueces partidas con aceite de oliva.
- Cuadrante Superior Derecho: Ensalada fría totalmente mezclada de lentejas cocidas firmes con lomos de caballa desmenuzada, rodajitas finas de rabanito rosado y daditos de tomate fresco con aceite de oliva.
- Cuadrante Inferior Izquierdo: Ensalada de pasta fría casera totalmente revuelta: fideos tirabuzón mezclados con trozos de atún al natural, dados crocantes de pepino fresco y rodajitas de aceitunas negras con oliva.
- Cuadrante Inferior Derecho: Plato hondo de quinoa fría suelta servida con trozos desparejos de huevo duro picado, rodajitas de rabanitos frescos y dados de palta madura con aceite de oliva virgen.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 30 (lote_30): Bowls Frescos, Quesos y Viandas de Verano
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_30_master_2x2.jpg`)
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Ensalada de Remolacha con Queso Port Salut, Rúcula y Nueces (`plate_cat_117`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥗 Remolacha (Rallada o Hervida) + 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🌰 Frutos Secos (Nueces / Almendras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Dados de remolacha cocida dulce con cubos de queso port salut fresco, hojas de rúcula y nueces picadas con aceite de oliva.
- **Prompt Fotográfico:** *"Plato de ensalada fresca con hojas de rúcula dispuestas libremente, dados de remolacha cocida esparcidos de forma despareja, cubos rústicos de queso fresco y nueces partidas con aceite de oliva."*

### ↗️ Superior Derecho — Ensalada de Repollo con Atún, Pepino y Palta (`plate_cat_118`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥬 Repollo (Blanco o Colorado) + 🥒 Pepino en Rodajas
  - **Grasa:** 🥑 Palta / Aguacate
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Juliana fina de repollo blanco y colorado mezclada con lomitos de atún, dados de pepino crujiente y palta madura con limón.
- **Prompt Fotográfico:** *"Ensalada fría casera de repollo cortado en juliana fina mezclado con trozos de atún al natural, dados de pepino fresco y gajos de palta madura con un hilo de aceite de oliva."*

### ↙️ Inferior Izquierdo — Bowl de Arroz Frío con Queso Fresco, Pepino, Choclo y Semillas (`plate_cat_119`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🥒 Pepino en Rodajas + 🥦 Brócoli al Vapor
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Arroz blanco cocido suelto y frío con cubos de queso fresco, rodajas de pepino, granos de choclo amarillo y mix de semillas tostadas.
- **Prompt Fotográfico:** *"Bowl de ensalada de arroz blanco frío suelto y plano, mezclado con dados de queso blanco fresco, rodajitas de pepino, choclo amarillo y semillas de girasol tostadas."*

### ↘️ Inferior Derecho — Bowl de Avena Remojada con Huevo Duro, Tomate y Semillas (`plate_cat_120`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** 🥣 Avena (Arrollada)
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Base fresca de avena arrollada hidratada en frío con agua o caldo ligero, huevo duro picado rústico, cubos de tomate y semillas.
- **Prompt Fotográfico:** *"Bowl nutritivo de avena arrollada tierna hidratada en frío, servida con trozos rústicos de huevo duro, daditos de tomate fresco y mix de semillas de chía y sésamo con oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 30 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Plato de ensalada fresca con hojas de rúcula dispuestas libremente, dados de remolacha cocida esparcidos de forma despareja, cubos rústicos de queso fresco y nueces partidas con aceite de oliva.
- Cuadrante Superior Derecho: Ensalada fría casera de repollo cortado en juliana fina mezclado con trozos de atún al natural, dados de pepino fresco y gajos de palta madura con un hilo de aceite de oliva.
- Cuadrante Inferior Izquierdo: Bowl de ensalada de arroz blanco frío suelto y plano, mezclado con dados de queso blanco fresco, rodajitas de pepino, choclo amarillo y semillas de girasol tostadas.
- Cuadrante Inferior Derecho: Bowl nutritivo de avena arrollada tierna hidratada en frío, servida con trozos rústicos de huevo duro, daditos de tomate fresco y mix de semillas de chía y sésamo con oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 31 (lote_31): Clásicos de Olla y Cacerola Caseros
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_31_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Guiso Criollo de Tortuguita con Papas, Calabaza y Puerro (`plate_cat_121`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Tortuguita en Bifes
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🎃 Zapallo / Calabaza / Anco + 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~25 min | **Servido:** Caliente
- **Descripción Culinaria:** Dados tiernos de tortuguita cocinados a fuego lento en cacerola con cubos de papa blanda, calabaza dulce y rodajitas de puerro.
- **Prompt Fotográfico:** *"Plato hondo de guiso criollo casero con bocados tiernos de carne vacuna cocida, cubos de papa tierna, dados de calabaza anaranjada dulce y puerro rehogado con pimentón dulce."*

### ↗️ Superior Derecho — Cazuela de Lentejas con Tiras de Palomita y Zanahoria (`plate_cat_122`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Palomita en Bifes
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~20 min | **Servido:** Caliente
- **Descripción Culinaria:** Cazuela reconfortante de lentejas cocidas con tiras tiernas de palomita sellada, rodajas de zanahoria dulce y cebolla dorada.
- **Prompt Fotográfico:** *"Plato hondo de lentejas estofadas caseras con tiras de carne vacuna sellada al fuego, rodajitas tiernas de zanahoria y cebollita rehogada con aceite de oliva."*

### ↙️ Inferior Izquierdo — Estofado de Pollo a la Cacerola con Arroz Blanco y Morrón (`plate_cat_123`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pata-Muslo de Pollo
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~25 min | **Servido:** Caliente
- **Descripción Culinaria:** Pata-muslo de pollo dorada y tierna cocida con tiras de morrón rojo dulce en cacerola, acompañada de arroz blanco desgranado.
- **Prompt Fotográfico:** *"Porción de pata-muslo de pollo jugosa cocida a la cacerola con salsa criolla de morrón rojo y cebolla, servida junto a una porción plana de arroz blanco desgranado."*

### ↘️ Inferior Derecho — Cazuela de Bondiola de Cerdo con Mandioca y Verdeo (`plate_cat_124`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bondiola o Solomillo de Cerdo
  - **Carbohidrato:** 🪵 Mandioca / Yuca Hervida
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~20 min | **Servido:** Caliente
- **Descripción Culinaria:** Bocados dorados de bondiola de cerdo salteados en cacerola con mandioca hervida tierna y abundante cebolla de verdeo picada.
- **Prompt Fotográfico:** *"Cazuela casera de cubos de bondiola de cerdo sellados a fuego vivo, acompañados de trozos rústicos de mandioca hervida blanca y cebolla de verdeo fresca picada con oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 31 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Plato hondo de guiso criollo casero con bocados tiernos de carne vacuna cocida, cubos de papa tierna, dados de calabaza anaranjada dulce y puerro rehogado con pimentón dulce.
- Cuadrante Superior Derecho: Plato hondo de lentejas estofadas caseras con tiras de carne vacuna sellada al fuego, rodajitas tiernas de zanahoria y cebollita rehogada con aceite de oliva.
- Cuadrante Inferior Izquierdo: Porción de pata-muslo de pollo jugosa cocida a la cacerola con salsa criolla de morrón rojo y cebolla, servida junto a una porción plana de arroz blanco desgranado.
- Cuadrante Inferior Derecho: Cazuela casera de cubos de bondiola de cerdo sellados a fuego vivo, acompañados de trozos rústicos de mandioca hervida blanca y cebolla de verdeo fresca picada con oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 32 (lote_32): Milanesas Porteñas y Variaciones al Horno
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_32_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Milanesa de Carne con Fideos al Dente, Manteca y Queso (`plate_cat_125`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Milanesa (Carne o Pollo)
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Milanesa dorada y crujiente servida con fideos secos al dente salteados a la manteca, queso rallado y unas hojas verdes frescas.
- **Prompt Fotográfico:** *"Milanesa de carne vacuna dorada con gajo de limón, servida al lado de fideos secos al dente salteados a la manteca con queso rallado y hojas de rúcula fresca."*

### ↗️ Superior Derecho — Milanesa Napolitana de Pollo con Puré de Papas (`plate_cat_126`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Milanesa (Carne o Pollo)
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Suprema milanesa cubierta con salsa casera de tomate, rodaja de tomate fresco y queso fundido gratinado, acompañada de puré de papas.
- **Prompt Fotográfico:** *"Milanesa napolitana de pollo con salsa de tomate y queso derretido dorado al horno con orégano, servida al lado de puré de papas casero suave y plano con cuchara."*

### ↙️ Inferior Izquierdo — Milanesa de Carne con Choclo a la Manteca y Espinacas (`plate_cat_127`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Milanesa (Carne o Pollo)
  - **Carbohidrato:** 🌽 Choclo / Maíz Desgranado
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Milanesa crujiente de carne vacuna acompañada de granos de choclo salteados a la manteca y espinacas tiernas al vapor.
- **Prompt Fotográfico:** *"Milanesa de carne dorada con limón, acompañada de porción de choclo amarillo desgranado salteado con manteca y hojas de espinaca tiernas salteadas al costado."*

### ↘️ Inferior Derecho — Milanesa de Pollo con Coliflor Salteada y Zanahoria (`plate_cat_128`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Milanesa (Carne o Pollo)
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥦 Coliflor al Vapor o Salteada + 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Milanesa de pechuga dorada y crocante servida sin almidón junto a ramilletes de coliflor dorada a la sartén y bastones de zanahoria.
- **Prompt Fotográfico:** *"Milanesa de pollo dorada y crocante con gajo de limón, servida al plato junto a ramilletes de coliflor salteada dorada y bastones de zanahoria tierna con aceite de oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 32 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Milanesa de carne vacuna dorada con gajo de limón, servida al lado de fideos secos al dente salteados a la manteca con queso rallado y hojas de rúcula fresca.
- Cuadrante Superior Derecho: Milanesa napolitana de pollo con salsa de tomate y queso derretido dorado al horno con orégano, servida al lado de puré de papas casero suave y plano con cuchara.
- Cuadrante Inferior Izquierdo: Milanesa de carne dorada con limón, acompañada de porción de choclo amarillo desgranado salteado con manteca y hojas de espinaca tiernas salteadas al costado.
- Cuadrante Inferior Derecho: Milanesa de pollo dorada y crocante con gajo de limón, servida al plato junto a ramilletes de coliflor salteada dorada y bastones de zanahoria tierna con aceite de oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 33 (lote_33): Asados y Planchas de Fuego Rápido
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_33_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Tira de Asado a la Plancha con Batatas y Chimichurri de Verdeo (`plate_cat_129`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Tira de Asado
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~20 min | **Servido:** Caliente
- **Descripción Culinaria:** Tira de asado jugosa sellada a la plancha gruesa, servida con rodajas de batata asada dorada y chimichurri criollo de cebolla de verdeo.
- **Prompt Fotográfico:** *"Corte de tira de asado vacuno dorado a la plancha de hierro con su hueso, acompañado de rodajas de batata asada dulce y cebollita de verdeo picada con aceite de oliva."*

### ↗️ Superior Derecho — Palomita a la Plancha con Fideos Salteados y Brócoli (`plate_cat_130`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Palomita en Bifes
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥦 Brócoli al Vapor
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Bifecitos magros de palomita vuelta y vuelta a la sartén caliente, acompañados de fideos al dente y arbolitos verdes de brócoli al vapor.
- **Prompt Fotográfico:** *"Bifes finos de palomita vacuna sellados a la plancha, servidos junto a fideos tirabuzón salteados al dente y arbolitos de brócoli cocidos al vapor con aceite de oliva."*

### ↙️ Inferior Izquierdo — Tortuguita en Bifes con Wok de Vegetales Mixtos y Sésamo (`plate_cat_131`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Tortuguita en Bifes
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥘 Wok de Vegetales Mixtos
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Bifecitos rápidos de tortuguita a la plancha servidos sobre un wok caliente de vegetales mixtos en juliana con semillas de sésamo.
- **Prompt Fotográfico:** *"Bifecitos delgados de carne vacuna sellados al fuego vivo, servidos sobre un salteado colorido de vegetales mixtos (morrón, cebolla, zucchini y zanahoria) con semillas de sésamo."*

### ↘️ Inferior Derecho — Bife de Hígado a la Plancha con Calabaza Asada y Cebollas (`plate_cat_132`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife de Hígado Encebollado
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🎃 Zapallo / Calabaza / Anco + 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Hígado vacuno tierno sellado en plancha con cebollas caramelizadas, acompañado de rodajas de batata asada y puré de calabaza.
- **Prompt Fotográfico:** *"Bife tierno de hígado vacuno sellado a la plancha con hebras de cebolla dorada por encima, servido con trozos de calabaza asada dulce y rodajas de batata con oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 33 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Corte de tira de asado vacuno dorado a la plancha de hierro con su hueso, acompañado de rodajas de batata asada dulce y cebollita de verdeo picada con aceite de oliva.
- Cuadrante Superior Derecho: Bifes finos de palomita vacuna sellados a la plancha, servidos junto a fideos tirabuzón salteados al dente y arbolitos de brócoli cocidos al vapor con aceite de oliva.
- Cuadrante Inferior Izquierdo: Bifecitos delgados de carne vacuna sellados al fuego vivo, servidos sobre un salteado colorido de vegetales mixtos (morrón, cebolla, zucchini y zanahoria) con semillas de sésamo.
- Cuadrante Inferior Derecho: Bife tierno de hígado vacuno sellado a la plancha con hebras de cebolla dorada por encima, servido con trozos de calabaza asada dulce y rodajas de batata con oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 34 (lote_34): Sartén de Pescados, Caballa y Mariscos Caseros
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_34_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Merluza al Limón con Puré Mixto de Calabaza y Papas (`plate_cat_133`)
- **Ingredientes Clave:**
  - **Proteína:** 🐟 Filete de Pescado Blanco (Merluza / Tilapia)
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🎃 Zapallo / Calabaza / Anco
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Filete tierno de merluza dorada a la plancha con limón y perejil, acompañado de puré mixto suave de papas y calabaza con manteca.
- **Prompt Fotográfico:** *"Filetes de merluza blanca dorados a la plancha con gajo de limón, acompañados de porción plana de puré mixto de papa y calabaza anaranjada ligado con manteca."*

### ↗️ Superior Derecho — Caballa Salteada con Quinoa Tibia y Brócoli al Vapor (`plate_cat_134`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Caballa en Lata (al Natural o Aceite)
  - **Carbohidrato:** 🌾 Quinoa
  - **Vegetales:** 🥦 Brócoli al Vapor
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Lomos de caballa en conserva salteados en sartén caliente, servidos sobre quinoa cocida suelta y arbolitos verdes de brócoli al vapor.
- **Prompt Fotográfico:** *"Plato hondo con lomos dorados de caballa salteados en sartén, acompañados de quinoa cocida suelta tibia y arbolitos de brócoli al vapor con aceite de oliva."*

### ↙️ Inferior Izquierdo — Merluza a la Plancha con Mandioca Dorada y Tomate Asado (`plate_cat_135`)
- **Ingredientes Clave:**
  - **Proteína:** 🐟 Filete de Pescado Blanco (Merluza / Tilapia)
  - **Carbohidrato:** 🪵 Mandioca / Yuca Hervida
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Filete de pescado blanco a la sartén con rodajas doradas de mandioca hervida y mitades de tomate asado al orégano.
- **Prompt Fotográfico:** *"Filete de merluza sellado a la plancha con limón, acompañado de trozos de mandioca dorados en sartén y rodajas de tomate asadas con orégano y oliva."*

### ↘️ Inferior Derecho — Caballa a la Sartén con Salteado de Repollo y Verdeo (`plate_cat_136`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Caballa en Lata (al Natural o Aceite)
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥬 Repollo (Blanco o Colorado) + 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Lomos de caballa salteados brevemente al fuego con juliana fina de repollo blanco salteado al dente y cebolla de verdeo.
- **Prompt Fotográfico:** *"Lomos de caballa salteados a la sartén servidos sobre un salteado caliente de finas tiras de repollo blanco y cebollita de verdeo fresca con aceite de oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 34 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Filetes de merluza blanca dorados a la plancha con gajo de limón, acompañados de porción plana de puré mixto de papa y calabaza anaranjada ligado con manteca.
- Cuadrante Superior Derecho: Plato hondo con lomos dorados de caballa salteados en sartén, acompañados de quinoa cocida suelta tibia y arbolitos de brócoli al vapor con aceite de oliva.
- Cuadrante Inferior Izquierdo: Filete de merluza sellado a la plancha con limón, acompañado de trozos de mandioca dorados en sartén y rodajas de tomate asadas con orégano y oliva.
- Cuadrante Inferior Derecho: Lomos de caballa salteados a la sartén servidos sobre un salteado caliente de finas tiras de repollo blanco y cebollita de verdeo fresca con aceite de oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 35 (lote_35): Salteados al Wok y Wok de Vegetales Mixtos
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_35_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Wok de Bife Vacuno con Vegetales Mixtos y Fideos (`plate_cat_137`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥘 Wok de Vegetales Mixtos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Tiras de bife selladas a fuego fuerte en wok con juliana de vegetales variados y fideos secos integrados en una sola salteada.
- **Prompt Fotográfico:** *"Plato de fideos al dente salteados al fuego vivo con tiras de bife vacuno doradas y wok de vegetales mixtos (morrón, cebolla, zucchini y zanahoria) con oliva."*

### ↗️ Superior Derecho — Wok de Pollo con Vegetales Mixtos y Arroz Blanco (`plate_cat_138`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🥘 Wok de Vegetales Mixtos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Bocados de pechuga de pollo dorados al wok con surtido de vegetales mixtos crocantes, servidos junto a arroz blanco suelto.
- **Prompt Fotográfico:** *"Tiras de pechuga de pollo doradas en wok con abundante mezcla de vegetales salteados, servidas junto a porción plana de arroz blanco desgranado."*

### ↙️ Inferior Izquierdo — Salteado de Cerdo con Wok de Vegetales y Sésamo (`plate_cat_139`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Costillita / Bife de Cerdo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥘 Wok de Vegetales Mixtos
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Tiras doradas de cerdo salteadas en wok caliente con vegetales mixtos crujientes y espolvoreadas con semillas de sésamo tostadas.
- **Prompt Fotográfico:** *"Salteado caliente al wok de tiras de costillita de cerdo doradas con vegetales mixtos al dente, rociadas con lluvia de semillas de sésamo tostadas (sin arroz ni fideos)."*

### ↘️ Inferior Derecho — Wok de Tofu Crocante con Quinoa, Vegetales y Frutos Secos (`plate_cat_140`)
- **Ingredientes Clave:**
  - **Proteína:** 🧈 Tofu a la Plancha
  - **Carbohidrato:** 🌾 Quinoa
  - **Vegetales:** 🥘 Wok de Vegetales Mixtos
  - **Grasa:** 🌰 Frutos Secos (Nueces / Almendras)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Cubos crocantes de tofu sellados al wok con vegetales mixtos, quinoa cocida salteada y nueces o almendras picadas tostadas.
- **Prompt Fotográfico:** *"Bowl caliente con base de quinoa suelta salteada, cubos dorados y crocantes de tofu al wok con vegetales mixtos y trozos crujientes de nueces partidas."*

> [!NOTE] Prompt consolidado para generar el Lote 35 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Plato de fideos al dente salteados al fuego vivo con tiras de bife vacuno doradas y wok de vegetales mixtos (morrón, cebolla, zucchini y zanahoria) con oliva.
- Cuadrante Superior Derecho: Tiras de pechuga de pollo doradas en wok con abundante mezcla de vegetales salteados, servidas junto a porción plana de arroz blanco desgranado.
- Cuadrante Inferior Izquierdo: Salteado caliente al wok de tiras de costillita de cerdo doradas con vegetales mixtos al dente, rociadas con lluvia de semillas de sésamo tostadas (sin arroz ni fideos).
- Cuadrante Inferior Derecho: Bowl caliente con base de quinoa suelta salteada, cubos dorados y crocantes de tofu al wok con vegetales mixtos y trozos crujientes de nueces partidas.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 36 (lote_36): Platos Vegetarianos, Soja Texturizada y Tofu
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_36_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Cazuela de Soja Sofrita con Batatas y Cebolla Dorada (`plate_cat_141`)
- **Ingredientes Clave:**
  - **Proteína:** 🫘 Soja Texturizada Salteada
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Guiso seco de soja texturizada sofrita con cubos de batata dulce asada tierna, cebolla caramelizada y una pizca de pimentón.
- **Prompt Fotográfico:** *"Cazuela casera de soja texturizada dorada en sartén con dados tiernos de batata dulce cocida, abundante cebolla rehogada dulce y aceite de oliva."*

### ↗️ Superior Derecho — Fideos al Filetto con Soja Sofrita y Queso Rallado (`plate_cat_142`)
- **Ingredientes Clave:**
  - **Proteína:** 🫘 Soja Texturizada Salteada
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Fideos secos al dente con salsa casera boloñesa vegetariana de soja sofrita y tomate, coronados con lluvia de queso rallado sardo.
- **Prompt Fotográfico:** *"Plato de fideos secos al dente con salsa roja espesa de tomate casero y soja texturizada sofrita tipo boloñesa, cubierto con queso rallado por encima."*

### ↙️ Inferior Izquierdo — Tofu a la Plancha con Puré de Calabaza y Berenjenas (`plate_cat_143`)
- **Ingredientes Clave:**
  - **Proteína:** 🧈 Tofu a la Plancha
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🎃 Zapallo / Calabaza / Anco + 🍆 Berenjena a la Plancha o Asada
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Láminas gruesas de tofu dorado a la sartén con puré rústico de calabaza aplastado con tenedor y rodajas de berenjena asada.
- **Prompt Fotográfico:** *"Láminas doradas de tofu a la plancha servidas al lado de porción rústica y plana de puré de calabaza anaranjada dulce y rodajas de berenjena asada con oliva."*

### ↘️ Inferior Derecho — Avena Salada con Huevo Revuelto, Espinaca y Queso Sardo (`plate_cat_144`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** 🥣 Avena (Arrollada)
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Caliente
- **Descripción Culinaria:** Avena arrollada cocida cremosa en plato hondo, coronada con huevos revueltos suaves, hojas de espinaca salteada y queso rallado.
- **Prompt Fotográfico:** *"Plato hondo de avena salada caliente y cremosa ligada con queso sardo rallado, coronada con huevos revueltos esponjosos y espinacas salteadas."*

> [!NOTE] Prompt consolidado para generar el Lote 36 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Cazuela casera de soja texturizada dorada en sartén con dados tiernos de batata dulce cocida, abundante cebolla rehogada dulce y aceite de oliva.
- Cuadrante Superior Derecho: Plato de fideos secos al dente con salsa roja espesa de tomate casero y soja texturizada sofrita tipo boloñesa, cubierto con queso rallado por encima.
- Cuadrante Inferior Izquierdo: Láminas doradas de tofu a la plancha servidas al lado de porción rústica y plana de puré de calabaza anaranjada dulce y rodajas de berenjena asada con oliva.
- Cuadrante Inferior Derecho: Plato hondo de avena salada caliente y cremosa ligada con queso sardo rallado, coronada con huevos revueltos esponjosos y espinacas salteadas.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 37 (lote_37): Cenas Ligeras Low-Carb sin Almidón
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_37_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Pata-Muslo al Horno con Coliflor y Champiñones Salteados (`plate_cat_145`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pata-Muslo de Pollo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥦 Coliflor al Vapor o Salteada + 🍄 Hongos / Champiñones Salteados
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~25 min | **Servido:** Caliente
- **Descripción Culinaria:** Pata-muslo dorada crocante al horno acompañada exclusivamente de ramilletes de coliflor salteada dorada y champiñones con manteca.
- **Prompt Fotográfico:** *"Pata-muslo de pollo dorada y crujiente al horno con orégano y limón, acompañada de coliflor dorada a la sartén y champiñones salteados con manteca."*

### ↗️ Superior Derecho — Bondiola de Cerdo con Berenjenas Asadas y Zucchini (`plate_cat_146`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bondiola o Solomillo de Cerdo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🍆 Berenjena a la Plancha o Asada + 🥒 Zucchini / Zapallito a la Plancha
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Medallones de bondiola dorados a la plancha de hierro con rodajas asadas de berenjena y zucchini tierno con aceite de oliva.
- **Prompt Fotográfico:** *"Medallones tiernos de bondiola de cerdo sellados al fuego vivo, acompañados de rodajas tiernas de berenjena asada y zucchini a la plancha con aceite de oliva."*

### ↙️ Inferior Izquierdo — Tortuguita en Bifes con Chauchas y Tomates Cherry (`plate_cat_147`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Tortuguita en Bifes
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🫛 Chauchas al Vapor o Salteadas + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Bifecitos rápidos de tortuguita a la plancha servidos junto a chauchas verdes salteadas y tomatitos cherry dulces con orégano.
- **Prompt Fotográfico:** *"Bifecitos delgados de carne vacuna a la plancha con limón, servidos con chauchas verdes salteadas al dente y tomates cherry salteados en sartén con oliva."*

### ↘️ Inferior Derecho — Bife de Hígado con Cebollitas y Espinacas al Vapor (`plate_cat_148`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife de Hígado Encebollado
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada) + 🥬 Espinaca o Acelga Salteada
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Bife tierno de hígado vacuno sellado a fuego vivo con cebolla rehogada suave y hojas de espinaca cocidas con oliva y limón.
- **Prompt Fotográfico:** *"Bife de hígado vacuno tierno sellado a la sartén con hebras de cebolla dorada dulce por encima y espinacas salteadas al costado con aceite de oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 37 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Pata-muslo de pollo dorada y crujiente al horno con orégano y limón, acompañada de coliflor dorada a la sartén y champiñones salteados con manteca.
- Cuadrante Superior Derecho: Medallones tiernos de bondiola de cerdo sellados al fuego vivo, acompañados de rodajas tiernas de berenjena asada y zucchini a la plancha con aceite de oliva.
- Cuadrante Inferior Izquierdo: Bifecitos delgados de carne vacuna a la plancha con limón, servidos con chauchas verdes salteadas al dente y tomates cherry salteados en sartén con oliva.
- Cuadrante Inferior Derecho: Bife de hígado vacuno tierno sellado a la sartén con hebras de cebolla dorada dulce por encima y espinacas salteadas al costado con aceite de oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 38 (lote_38): Pastas, Salsas Cremosas y Gratinados
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_38_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Fideos a la Crema con Cerdo Dorado y Champiñones (`plate_cat_149`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Costillita / Bife de Cerdo
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🍄 Hongos / Champiñones Salteados
  - **Grasa:** 🥛 Crema de Leche
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Fideos secos al dente salteados en crema de leche suave con trocitos dorados de carne de cerdo y champiñones en láminas.
- **Prompt Fotográfico:** *"Plato de fideos al dente salteados en salsa de crema de leche con dados dorados de carne de cerdo y champiñones en láminas con pimienta negra recién molida."*

### ↗️ Superior Derecho — Pastel de Calabaza Gratinado con Carne Picada y Queso (`plate_cat_150`)
- **Ingredientes Clave:**
  - **Proteína:** 🥘 Carne Picada / Molida
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🎃 Zapallo / Calabaza / Anco + 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~20 min | **Servido:** Caliente
- **Descripción Culinaria:** Pastel casero al horno con base jugosa de carne picada sofrita con cebolla, cubierta de puré de calabaza dulce y queso gratinado.
- **Prompt Fotográfico:** *"Porción de pastel casero de calabaza anaranjada dulce gratinado al horno con queso fundido dorado por encima, sobre relleno jugoso de carne picada con cebolla."*

### ↙️ Inferior Izquierdo — Arroz Cremoso con Pollo Dorado, Brócoli y Crema (`plate_cat_151`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🥦 Brócoli al Vapor
  - **Grasa:** 🥛 Crema de Leche
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Arroz blanco casero suave y cremoso ligado con crema de leche, acompañado de trozos dorados de pechuga de pollo y brócoli verde.
- **Prompt Fotográfico:** *"Plato hondo de arroz cremoso ligado con crema de leche suave y queso, acompañado de dados de pechuga de pollo dorada y arbolitos verdes de brócoli al vapor."*

### ↘️ Inferior Derecho — Huevos Revueltos con Queso Port Salut, Papas y Verdeo (`plate_cat_152`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Huevos revueltos húmedos con dados de queso port salut derretido, servidos junto a papas doradas en cubos y cebolla de verdeo.
- **Prompt Fotográfico:** *"Huevos revueltos tiernos y húmedos con hebras de queso derretido en sartén con manteca, servidos junto a dados de papas doradas y cebolla de verdeo picada."*

> [!NOTE] Prompt consolidado para generar el Lote 38 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Plato de fideos al dente salteados en salsa de crema de leche con dados dorados de carne de cerdo y champiñones en láminas con pimienta negra recién molida.
- Cuadrante Superior Derecho: Porción de pastel casero de calabaza anaranjada dulce gratinado al horno con queso fundido dorado por encima, sobre relleno jugoso de carne picada con cebolla.
- Cuadrante Inferior Izquierdo: Plato hondo de arroz cremoso ligado con crema de leche suave y queso, acompañado de dados de pechuga de pollo dorada y arbolitos verdes de brócoli al vapor.
- Cuadrante Inferior Derecho: Huevos revueltos tiernos y húmedos con hebras de queso derretido en sartén con manteca, servidos junto a dados de papas doradas y cebolla de verdeo picada.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 39 (lote_39): Ensaladas Proteicas de Legumbres y Quinoa
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_39_master_2x2.jpg`)
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Ensalada Fría de Porotos con Tiras de Bife y Rabanitos (`plate_cat_153`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🥗 Rabanitos en Rodajas
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Porotos alubia blancos tiernos fríos mezclados con tiras de carne vacuna asada fría, rodajas finas de rabanitos y perejil fresco.
- **Prompt Fotográfico:** *"Ensalada casera totalmente mezclada de porotos blancos cocidos con tiras de carne asada fría desmenuzada, rodajitas crocantes de rabanito y perejil con aceite de oliva."*

### ↗️ Superior Derecho — Ensalada Fresca de Lentejas con Atún, Pepino y Aceitunas (`plate_cat_154`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🥒 Pepino en Rodajas
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Lentejas cocidas al dente mezcladas con lomitos de atún al natural, daditos de pepino crujiente y aceitunas negras con oliva.
- **Prompt Fotográfico:** *"Plato de ensalada fresca revuelta con lentejas cocidas firmes, hebras de atún al natural, dados de pepino fresco y aceitunas negras troceadas con aceite de oliva."*

### ↙️ Inferior Izquierdo — Bowl Fresco de Quinoa con Milanesa Fría, Tomate y Rúcula (`plate_cat_155`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Milanesa (Carne o Pollo)
  - **Carbohidrato:** 🌾 Quinoa
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos + 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Quinoa cocida fría suelta servida con tiras de milanesa dorada fría, cubitos de tomate fresco y hojas verdes de rúcula con oliva.
- **Prompt Fotográfico:** *"Bowl fresco con base de quinoa suelta fría, acompañado de tiras crujientes de milanesa dorada fría dispuestas al descuido, cubos de tomate jugoso y hojas de rúcula."*

### ↘️ Inferior Derecho — Salpicón de Palomita Fría con Remolacha, Choclo y Oliva (`plate_cat_156`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Palomita en Bifes
  - **Carbohidrato:** 🌽 Choclo / Maíz Desgranado
  - **Vegetales:** 🥗 Remolacha (Rallada o Hervida)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Salpicón criollo de verano con carne tierna de palomita hervida desmenuzada, dados de remolacha cocida dulce, granos de choclo y oliva.
- **Prompt Fotográfico:** *"Salpicón casero frío mezclado rústicamente: carne vacuna cocida fría desmenuzada en hebras, dados de remolacha cocida dulce y granos sueltos de choclo amarillo con aceite de oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 39 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Ensalada casera totalmente mezclada de porotos blancos cocidos con tiras de carne asada fría desmenuzada, rodajitas crocantes de rabanito y perejil con aceite de oliva.
- Cuadrante Superior Derecho: Plato de ensalada fresca revuelta con lentejas cocidas firmes, hebras de atún al natural, dados de pepino fresco y aceitunas negras troceadas con aceite de oliva.
- Cuadrante Inferior Izquierdo: Bowl fresco con base de quinoa suelta fría, acompañado de tiras crujientes de milanesa dorada fría dispuestas al descuido, cubos de tomate jugoso y hojas de rúcula.
- Cuadrante Inferior Derecho: Salpicón casero frío mezclado rústicamente: carne vacuna cocida fría desmenuzada en hebras, dados de remolacha cocida dulce y granos sueltos de choclo amarillo con aceite de oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 40 (lote_40): Bowls de Verano, Quesos Frescos y Frutos Secos
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_40_master_2x2.jpg`)
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Ensalada de Queso Port Salut con Pepino, Hojas Verdes y Nueces (`plate_cat_157`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥒 Pepino en Rodajas + 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🌰 Frutos Secos (Nueces / Almendras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Ensalada fresca y crocante con cubos de queso port salut, rodajas finas de pepino, mix de lechuga y rúcula y nueces partidas tostadas.
- **Prompt Fotográfico:** *"Plato de ensalada fresca con hojas verdes variadas dispuestas libremente, cubos blancos de queso port salut fresco, rodajas delgadas de pepino y mitades de nueces partidas con oliva."*

### ↗️ Superior Derecho — Ensalada de Remolacha con Huevo Duro, Repollo y Semillas (`plate_cat_158`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥗 Remolacha (Rallada o Hervida) + 🥬 Repollo (Blanco o Colorado)
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Ensalada colorida de verano con dados de remolacha cocida, juliana fina de repollo blanco, huevo duro troceado y semillas tostadas.
- **Prompt Fotográfico:** *"Ensalada casera fresca y colorida: dados de remolacha dulce entremezclados con repollo en juliana finísima, trozos rústicos de huevo duro picado y lluvia de semillas tostadas con oliva."*

### ↙️ Inferior Izquierdo — Bowl de Avena Remojada con Caballa, Tomate y Palta (`plate_cat_159`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Caballa en Lata (al Natural o Aceite)
  - **Carbohidrato:** 🥣 Avena (Arrollada)
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🥑 Palta / Aguacate
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Base fresca de avena arrollada hidratada en frío, cubierta con lomitos de caballa en conserva, dados de tomate fresco y gajos de palta.
- **Prompt Fotográfico:** *"Bowl fresco con base de avena arrollada tierna hidratada en frío, acompañada de lomos de caballa clara, dados de tomate jugoso y gajos de palta madura con un hilo de limón y oliva."*

### ↘️ Inferior Derecho — Ensalada de Arroz con Tofu Marinado, Brócoli y Frutos Secos (`plate_cat_160`)
- **Ingredientes Clave:**
  - **Proteína:** 🧈 Tofu a la Plancha
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🥦 Brócoli al Vapor
  - **Grasa:** 🌰 Frutos Secos (Nueces / Almendras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Arroz blanco cocido frío suelto y desgranado con cubitos de tofu marinado en limón, arbolitos tiernos de brócoli y almendras tostadas.
- **Prompt Fotográfico:** *"Bowl de ensalada fresca con arroz blanco desgranado plano, cubos de tofu blanco marinado, arbolitos de brócoli al dente cocido al vapor y almendras picadas crocantes con oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 40 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Plato de ensalada fresca con hojas verdes variadas dispuestas libremente, cubos blancos de queso port salut fresco, rodajas delgadas de pepino y mitades de nueces partidas con oliva.
- Cuadrante Superior Derecho: Ensalada casera fresca y colorida: dados de remolacha dulce entremezclados con repollo en juliana finísima, trozos rústicos de huevo duro picado y lluvia de semillas tostadas con oliva.
- Cuadrante Inferior Izquierdo: Bowl fresco con base de avena arrollada tierna hidratada en frío, acompañada de lomos de caballa clara, dados de tomate jugoso y gajos de palta madura con un hilo de limón y oliva.
- Cuadrante Inferior Derecho: Bowl de ensalada fresca con arroz blanco desgranado plano, cubos de tofu blanco marinado, arbolitos de brócoli al dente cocido al vapor y almendras picadas crocantes con oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 41 (lote_41): Clásicos Caseros con Papa y Huevo
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_41_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Tortilla Española Casera con Ensalada Mixta (`plate_cat_161`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada) + 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Porción dorada y jugosa de tortilla de papas y cebolla, servida junto a ensalada fresca de hojas verdes con aceite de oliva.
- **Prompt Fotográfico:** *"Cuña gruesa y jugosa de tortilla de papas dorada con cebolla caramelizada, servida al lado de una ensalada fresca de hojas de rúcula y lechuga con aceite de oliva."*

### ↗️ Superior Derecho — Revuelto Gramajo Porteño Clásico (`plate_cat_162`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada) + 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Papas pay doradas salteadas en sartén con huevos revueltos cremosos, cebollita rehogada y verdeo fresco con manteca.
- **Prompt Fotográfico:** *"Porción generosa de revuelto gramajo casero con papas pay doradas y crocantes, huevos revueltos cremosos y lluvia de cebollita de verdeo fresca."*

### ↙️ Inferior Izquierdo — Bife a la Plancha con Papas al Horno y Tomates Asados (`plate_cat_163`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Churrasco jugoso sellado en plancha de hierro con dados de papas doradas al romero y rodajas de tomate asadas.
- **Prompt Fotográfico:** *"Bife de carne vacuna sellado con marcas de plancha, acompañado de dados de papas doradas al horno y mitades de tomate asado con orégano y oliva."*

### ↘️ Inferior Derecho — Omelette Dorado con Queso Port Salut y Puré Rústico (`plate_cat_164`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Omelette esponjoso relleno de queso port salut derretido, acompañado de puré de papas casero suave y hojas de espinaca.
- **Prompt Fotográfico:** *"Omelette dorado doblado con queso derretido en su interior, servido junto a porción plana de puré de papas casero y espinacas salteadas."*

> [!NOTE] Prompt consolidado para generar el Lote 41 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Cuña gruesa y jugosa de tortilla de papas dorada con cebolla caramelizada, servida al lado de una ensalada fresca de hojas de rúcula y lechuga con aceite de oliva.
- Cuadrante Superior Derecho: Porción generosa de revuelto gramajo casero con papas pay doradas y crocantes, huevos revueltos cremosos y lluvia de cebollita de verdeo fresca.
- Cuadrante Inferior Izquierdo: Bife de carne vacuna sellado con marcas de plancha, acompañado de dados de papas doradas al horno y mitades de tomate asado con orégano y oliva.
- Cuadrante Inferior Derecho: Omelette dorado doblado con queso derretido en su interior, servido junto a porción plana de puré de papas casero y espinacas salteadas.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 42 (lote_42): Suprema de Pollo en Variaciones Rápidas
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_42_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Suprema al Verdeo con Puré de Papas (`plate_cat_165`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🥛 Crema de Leche
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Pechuga de pollo sellada a la sartén en salsa cremosa de cebollas de verdeo y puerro, acompañada de puré de papas casero.
- **Prompt Fotográfico:** *"Suprema de pollo dorada bañada en salsa cremosa de abundante cebollita de verdeo, servida al lado de puré de papas casero plano con manteca."*

### ↗️ Superior Derecho — Suprema con Champiñones y Arroz Blanco (`plate_cat_166`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🍄 Hongos / Champiñones Salteados
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Tiras doradas de suprema salteadas con láminas de champiñones a la manteca, servidas junto a arroz blanco desgranado.
- **Prompt Fotográfico:** *"Bocados de pechuga de pollo dorada salteados con champiñones en láminas jugosas, acompañados de porción plana de arroz blanco suelto."*

### ↙️ Inferior Izquierdo — Suprema a la Plancha con Batatas Asadas y Rúcula (`plate_cat_167`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Suprema sellada al limón con rodajas de batata caramelizadas al horno y hojas frescas de rúcula con oliva.
- **Prompt Fotográfico:** *"Filete grueso de pechuga grillada con limón, acompañado de rodajas de batata dulce doradas al horno y ensaladita de rúcula con oliva."*

### ↘️ Inferior Derecho — Suprema Grillada con Chauchas al Vapor y Tomates Cherry (Low-Carb) (`plate_cat_168`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🫛 Chauchas al Vapor o Salteadas + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Pechuga a la plancha con limón y orégano, servida sin harinas con chauchas tiernas salteadas y tomatitos cherry dulces.
- **Prompt Fotográfico:** *"Pechuga de pollo jugosa grillada con limón, acompañada de chauchas verdes al vapor salteadas con aceite de oliva y tomates cherry salteados."*

> [!NOTE] Prompt consolidado para generar el Lote 42 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Suprema de pollo dorada bañada en salsa cremosa de abundante cebollita de verdeo, servida al lado de puré de papas casero plano con manteca.
- Cuadrante Superior Derecho: Bocados de pechuga de pollo dorada salteados con champiñones en láminas jugosas, acompañados de porción plana de arroz blanco suelto.
- Cuadrante Inferior Izquierdo: Filete grueso de pechuga grillada con limón, acompañado de rodajas de batata dulce doradas al horno y ensaladita de rúcula con oliva.
- Cuadrante Inferior Derecho: Pechuga de pollo jugosa grillada con limón, acompañada de chauchas verdes al vapor salteadas con aceite de oliva y tomates cherry salteados.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 43 (lote_43): Cortes Vacunos de Sartén y Cacerola
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_43_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Tortuguita Estofada en Salsa Roja con Fideos (`plate_cat_169`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Tortuguita en Bifes
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos + 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~20 min | **Servido:** Caliente
- **Descripción Culinaria:** Bocados tiernos de tortuguita cocidos a fuego lento en salsa casera de tomate con cebolla, servidos sobre fideos al dente con queso rallado.
- **Prompt Fotográfico:** *"Plato de fideos al dente cubiertos con estofado casero de trozos tiernos de tortuguita vacuna en salsa roja espesa y queso rallado."*

### ↗️ Superior Derecho — Palomita en Salsa Criolla con Mandioca Hervida (`plate_cat_170`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Palomita en Bifes
  - **Carbohidrato:** 🪵 Mandioca / Yuca Hervida
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde) + 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~18 min | **Servido:** Caliente
- **Descripción Culinaria:** Bifecitos de palomita rehogados con morrón rojo y cebolla criolla, servidos con trozos rústicos de mandioca hervida al vapor.
- **Prompt Fotográfico:** *"Bifecitos de palomita vacuna jugosos con salsa criolla de morrones y cebolla dorada, acompañados de mandioca hervida blanca con oliva."*

### ↙️ Inferior Izquierdo — Churrasco con Morrones Asados y Papas al Horno (`plate_cat_171`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Bife vacuno sellado a la plancha con tiras dulces de morrón asado y papas doradas al horno con oliva.
- **Prompt Fotográfico:** *"Churrasco vacuno dorado a la plancha de hierro, servido con tiras tiernas de morrón rojo asado y dados de papa dorada al horno."*

### ↘️ Inferior Derecho — Bife Magro con Ensalada Caprese Tibia (Low-Carb) (`plate_cat_172`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos + 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Bife a la plancha servido sin almidón con rodajas de tomate asado, hojas de rúcula y lascas de queso sardo.
- **Prompt Fotográfico:** *"Bife de carne vacuna a la plancha con marcas de fuego, acompañado de rodajas de tomate asado caliente, hojas de rúcula fresca y queso rallado."*

> [!NOTE] Prompt consolidado para generar el Lote 43 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Plato de fideos al dente cubiertos con estofado casero de trozos tiernos de tortuguita vacuna en salsa roja espesa y queso rallado.
- Cuadrante Superior Derecho: Bifecitos de palomita vacuna jugosos con salsa criolla de morrones y cebolla dorada, acompañados de mandioca hervida blanca con oliva.
- Cuadrante Inferior Izquierdo: Churrasco vacuno dorado a la plancha de hierro, servido con tiras tiernas de morrón rojo asado y dados de papa dorada al horno.
- Cuadrante Inferior Derecho: Bife de carne vacuna a la plancha con marcas de fuego, acompañado de rodajas de tomate asado caliente, hojas de rúcula fresca y queso rallado.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 44 (lote_44): Pescados Rápidos al Horno y Sartén
- **Estado:** ✅ Generado y recortado (`img/lotes-master/lote_44_master_2x2.jpg`)
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Merluza a la Provenzal con Batatas Doradas (`plate_cat_173`)
- **Ingredientes Clave:**
  - **Proteína:** 🐟 Filete de Pescado Blanco (Merluza / Tilapia)
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Filete de merluza salteado con ajo, perejil y verdeo, acompañado de rodajas de batata doradas a la sartén con oliva.
- **Prompt Fotográfico:** *"Filete de merluza dorada a la provenzal con cebollita de verdeo y perejil fresco, servido con rodajas de batata dulce doradas."*

### ↗️ Superior Derecho — Cazuela de Pescado con Arroz, Choclo y Morrón (`plate_cat_174`)
- **Ingredientes Clave:**
  - **Proteína:** 🐟 Filete de Pescado Blanco (Merluza / Tilapia)
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde) + 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~18 min | **Servido:** Caliente
- **Descripción Culinaria:** Trozos de pescado blanco cocidos en cacerola con arroz blanco, granos de choclo y sofrito de morrón y cebolla.
- **Prompt Fotográfico:** *"Plato hondo de cazuela casera con trozos de pescado blanco tierno, arroz amarillo suave, granos de choclo y tiras de morrón rojo."*

### ↙️ Inferior Izquierdo — Merluza Gratinada con Espinaca y Puré de Papas (`plate_cat_175`)
- **Ingredientes Clave:**
  - **Proteína:** 🐟 Filete de Pescado Blanco (Merluza / Tilapia)
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Filete de merluza horneado con queso sardo fundido por encima, acompañado de espinacas a la manteca y puré de papas.
- **Prompt Fotográfico:** *"Filete de merluza con costra dorada de queso gratinado al horno, servido al lado de puré de papas rústico y espinacas salteadas."*

### ↘️ Inferior Derecho — Filete de Pescado con Wok de Vegetales (Low-Carb) (`plate_cat_176`)
- **Ingredientes Clave:**
  - **Proteína:** 🐟 Filete de Pescado Blanco (Merluza / Tilapia)
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥘 Wok de Vegetales Mixtos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Merluza dorada vuelta y vuelta en sartén con limón, servida sobre salteado de vegetales mixtos al dente sin harinas.
- **Prompt Fotográfico:** *"Filete de merluza blanca dorado a la plancha con limón, servido sobre abundante salteado caliente de vegetales mixtos en juliana con oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 44 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Filete de merluza dorada a la provenzal con cebollita de verdeo y perejil fresco, servido con rodajas de batata dulce doradas.
- Cuadrante Superior Derecho: Plato hondo de cazuela casera con trozos de pescado blanco tierno, arroz amarillo suave, granos de choclo y tiras de morrón rojo.
- Cuadrante Inferior Izquierdo: Filete de merluza con costra dorada de queso gratinado al horno, servido al lado de puré de papas rústico y espinacas salteadas.
- Cuadrante Inferior Derecho: Filete de merluza blanca dorado a la plancha con limón, servido sobre abundante salteado caliente de vegetales mixtos en juliana con oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 45 (lote_45): Platos de Cerdo Dorados
> [!WARNING]
> **Estado:** 📌 **PRÓXIMO LOTE A GENERAR / RETOMA TRAS REINICIO DE CUOTA** (`plate_cat_177` al `plate_cat_180`)

- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Bondiola de Cerdo a la Mostaza con Papas Doradas (`plate_cat_177`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bondiola o Solomillo de Cerdo
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🥛 Crema de Leche
- **Tiempo sugerido:** ⏱️ ~18 min | **Servido:** Caliente
- **Descripción Culinaria:** Medallones de bondiola dorados en sartén con cebollas caramelizadas y salsa suave de crema, acompañados de papas al horno.
- **Prompt Fotográfico:** *"Medallones de bondiola de cerdo dorados con salsa suave de crema y cebolla, servidos al lado de dados de papas doradas al horno."*

### ↗️ Superior Derecho — Costillita de Cerdo con Puré de Batata y Verdeo (`plate_cat_178`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Costillita / Bife de Cerdo
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Costillita dorada a la plancha de hierro con limón, servida con puré de batata anaranjado con manteca y cebollita de verdeo.
- **Prompt Fotográfico:** *"Costillita de cerdo dorada a la plancha con limón, acompañada de puré rústico plano de batata dulce y cebollita de verdeo picada."*

### ↙️ Inferior Izquierdo — Salteado de Cerdo con Arroz Blanco y Choclo (`plate_cat_179`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Costillita / Bife de Cerdo
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Tiras de cerdo selladas en sartén caliente con morrón rojo dulce y granos de choclo, servidas con porción plana de arroz blanco.
- **Prompt Fotográfico:** *"Tiras doradas de carne de cerdo salteadas con morrón rojo y granos de choclo, servidas junto a porción de arroz blanco desgranado plano."*

### ↘️ Inferior Derecho — Medallones de Cerdo con Ensalada Tibia de Repollo y Zanahoria (Low-Carb) (`plate_cat_180`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bondiola o Solomillo de Cerdo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥬 Repollo (Blanco o Colorado) + 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Bondiola de cerdo sellada vuelta y vuelta con ensalada caliente de repollo blanco salteado y zanahoria con aceite de oliva.
- **Prompt Fotográfico:** *"Medallones de bondiola dorados a la plancha con limón, servidos sobre abundante salteado caliente de finas tiras de repollo y zanahoria."*

> [!NOTE] Prompt consolidado para generar el Lote 45 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Medallones de bondiola de cerdo dorados con salsa suave de crema y cebolla, servidos al lado de dados de papas doradas al horno.
- Cuadrante Superior Derecho: Costillita de cerdo dorada a la plancha con limón, acompañada de puré rústico plano de batata dulce y cebollita de verdeo picada.
- Cuadrante Inferior Izquierdo: Tiras doradas de carne de cerdo salteadas con morrón rojo y granos de choclo, servidas junto a porción de arroz blanco desgranado plano.
- Cuadrante Inferior Derecho: Medallones de bondiola dorados a la plancha con limón, servidos sobre abundante salteado caliente de finas tiras de repollo y zanahoria.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 46 (lote_46): Olla Reconfortante y Guisados Secos
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Guisito de Lentejas con Carne Picada y Calabaza (`plate_cat_181`)
- **Ingredientes Clave:**
  - **Proteína:** 🥘 Carne Picada / Molida
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🎃 Zapallo / Calabaza / Anco + 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~25 min | **Servido:** Caliente
- **Descripción Culinaria:** Lentejas tiernas cocidas en cacerola con carne picada sofrita, dados de calabaza dulce y cebolla caramelizada servidas con cuchara.
- **Prompt Fotográfico:** *"Plato hondo de guiso casero de lentejas tiernas con carne picada sofrita, dados blandos de calabaza anaranjada y cebolla dorada."*

### ↗️ Superior Derecho — Cazuela de Arroz con Pollo, Puerro y Morrón (`plate_cat_182`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pata-Muslo de Pollo
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro + 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~25 min | **Servido:** Caliente
- **Descripción Culinaria:** Pollo a la cacerola estofado con arroz blanco en caldo casero, rodajitas de puerro y tiras de morrón rojo.
- **Prompt Fotográfico:** *"Cazuela casera servida en plato con trozos de pollo tierno cocidos junto a arroz blanco en caldo suave con puerro y morrón."*

### ↙️ Inferior Izquierdo — Porotos Blancos con Bondiola Estofada y Zanahoria (`plate_cat_183`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bondiola o Solomillo de Cerdo
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~20 min | **Servido:** Caliente
- **Descripción Culinaria:** Porotos alubia blancos cocidos con cubos de bondiola dorada, rodajas de zanahoria dulce y una pizca de pimentón dulce.
- **Prompt Fotográfico:** *"Plato hondo de porotos alubia blancos guisados con trozos tiernos de bondiola de cerdo dorada y rodajas de zanahoria con oliva."*

### ↘️ Inferior Derecho — Estofado de Palomita con Papas y Choclo (`plate_cat_184`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Palomita en Bifes
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~25 min | **Servido:** Caliente
- **Descripción Culinaria:** Carne vacuna de palomita estofada a fuego lento con cubos de papa tierna, granos de choclo y cebolla rehogada.
- **Prompt Fotográfico:** *"Plato hondo de estofado criollo con trozos tiernos de palomita vacuna, papas cocidas blandas y choclo desgranado con pimentón."*

> [!NOTE] Prompt consolidado para generar el Lote 46 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Plato hondo de guiso casero de lentejas tiernas con carne picada sofrita, dados blandos de calabaza anaranjada y cebolla dorada.
- Cuadrante Superior Derecho: Cazuela casera servida en plato con trozos de pollo tierno cocidos junto a arroz blanco en caldo suave con puerro y morrón.
- Cuadrante Inferior Izquierdo: Plato hondo de porotos alubia blancos guisados con trozos tiernos de bondiola de cerdo dorada y rodajas de zanahoria con oliva.
- Cuadrante Inferior Derecho: Plato hondo de estofado criollo con trozos tiernos de palomita vacuna, papas cocidas blandas y choclo desgranado con pimentón.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 47 (lote_47): Pastas Simples y Gratinadas
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Fideos con Salsa Bolognesa Casera y Queso Sardo (`plate_cat_185`)
- **Ingredientes Clave:**
  - **Proteína:** 🥘 Carne Picada / Molida
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos + 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Fideos secos al dente con salsa bolognesa casera de carne picada y tomate con cebolla, espolvoreados con queso sardo rallado.
- **Prompt Fotográfico:** *"Plato de fideos al dente cubiertos con abundante salsa boloñesa casera de carne picada sofrita con tomate y queso sardo rallado."*

### ↗️ Superior Derecho — Tirabuzones con Pollo Dorado y Brócoli al Oliva (`plate_cat_186`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥦 Brócoli al Vapor
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Fideos tirabuzón salteados en sartén con daditos de pechuga de pollo dorada y arbolitos verdes de brócoli al oliva.
- **Prompt Fotográfico:** *"Plato de fideos tirabuzón salteados al dente con dados de pollo dorado y arbolitos verdes de brócoli cocidos con aceite de oliva."*

### ↙️ Inferior Izquierdo — Fideos con Caballa en Salsa Criolla y Aceitunas (`plate_cat_187`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Caballa en Lata (al Natural o Aceite)
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Pasta seca salteada con lomos de caballa en conserva, salsa tibia de morrones y rodajitas de aceitunas negras.
- **Prompt Fotográfico:** *"Plato de fideos al dente salteados con lomos desmenuzados de caballa en conserva, tiras de morrón y aceitunas negras picadas."*

### ↘️ Inferior Derecho — Pasta Gratinada con Espinacas, Queso Port Salut y Parmesano (`plate_cat_188`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Fideos cortos al horno con espinacas salteadas a la manteca, cubiertos con dados de queso port salut y costra dorada de parmesano.
- **Prompt Fotográfico:** *"Fuente individual de fideos gratinados al horno con espinacas tiernas, queso port salut fundido y costra dorada de queso rallado."*

> [!NOTE] Prompt consolidado para generar el Lote 47 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Plato de fideos al dente cubiertos con abundante salsa boloñesa casera de carne picada sofrita con tomate y queso sardo rallado.
- Cuadrante Superior Derecho: Plato de fideos tirabuzón salteados al dente con dados de pollo dorado y arbolitos verdes de brócoli cocidos con aceite de oliva.
- Cuadrante Inferior Izquierdo: Plato de fideos al dente salteados con lomos desmenuzados de caballa en conserva, tiras de morrón y aceitunas negras picadas.
- Cuadrante Inferior Derecho: Fuente individual de fideos gratinados al horno con espinacas tiernas, queso port salut fundido y costra dorada de queso rallado.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 48 (lote_48): Cenas Livianas de Sartén Low-Carb
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Bife de Cuadril con Salteado de Hongos y Zucchini (`plate_cat_189`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🍄 Hongos / Champiñones Salteados + 🥒 Zucchini / Zapallito a la Plancha
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Bife vacuno sellado a la plancha con marcas de fuego, servido con champiñones en láminas y dados de zucchini salteados con oliva.
- **Prompt Fotográfico:** *"Bife de carne vacuna dorado a la plancha de hierro, acompañado de champiñones salteados y rodajas de zucchini tierno con oliva."*

### ↗️ Superior Derecho — Omelette de Espinaca con Palta y Ensalada de Tomate (`plate_cat_190`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🥑 Palta / Aguacate
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Omelette esponjoso con espinacas picadas, servido con rodajas de tomate fresco y gajos de palta madura con oliva.
- **Prompt Fotográfico:** *"Omelette dorado relleno de espinaca salteada, acompañado al costado por rodajas de tomate fresco y gajos de palta con oliva."*

### ↙️ Inferior Izquierdo — Suprema con Salteado de Coliflor y Morrón Rojo (`plate_cat_191`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥦 Coliflor al Vapor o Salteada + 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Pechuga grillada al limón servida con ramilletes de coliflor salteada dorada a la sartén y tiras de morrón rojo.
- **Prompt Fotográfico:** *"Suprema de pollo a la plancha dorada con limón, acompañada de coliflor salteada crujiente y tiras de morrón rojo dulce con oliva."*

### ↘️ Inferior Derecho — Pata-Muslo al Horno con Berenjenas y Tomate Asado (`plate_cat_192`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pata-Muslo de Pollo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🍆 Berenjena a la Plancha o Asada + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~20 min | **Servido:** Caliente
- **Descripción Culinaria:** Pata-muslo dorada crocante al horno, acompañada de rodajas de berenjena asada con orégano y mitades de tomate asado.
- **Prompt Fotográfico:** *"Pata-muslo de pollo al horno bien crocante, servida con rodajas de berenjena asada y tomates al horno dorados con aceite de oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 48 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Bife de carne vacuna dorado a la plancha de hierro, acompañado de champiñones salteados y rodajas de zucchini tierno con oliva.
- Cuadrante Superior Derecho: Omelette dorado relleno de espinaca salteada, acompañado al costado por rodajas de tomate fresco y gajos de palta con oliva.
- Cuadrante Inferior Izquierdo: Suprema de pollo a la plancha dorada con limón, acompañada de coliflor salteada crujiente y tiras de morrón rojo dulce con oliva.
- Cuadrante Inferior Derecho: Pata-muslo de pollo al horno bien crocante, servida con rodajas de berenjena asada y tomates al horno dorados con aceite de oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 49 (lote_49): Vegetarianos y Proteína Vegetal Caliente
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Tofu Marinado Crocante con Arroz Blanco y Brócoli (`plate_cat_193`)
- **Ingredientes Clave:**
  - **Proteína:** 🧈 Tofu a la Plancha
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🥦 Brócoli al Vapor
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Cubos de tofu dorado crocante salteados con semillas de sésamo, servidos junto a arroz blanco suelto y brócoli al vapor.
- **Prompt Fotográfico:** *"Cubos de tofu bien dorados y crocantes con semillas de sésamo tostadas, servidos junto a porción plana de arroz blanco y brócoli verde."*

### ↗️ Superior Derecho — Cazuela de Soja Sofrita con Mandioca y Verdeo (`plate_cat_194`)
- **Ingredientes Clave:**
  - **Proteína:** 🫘 Soja Texturizada Salteada
  - **Carbohidrato:** 🪵 Mandioca / Yuca Hervida
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Soja texturizada dorada en sartén con pimentón y cebolla de verdeo, servida con trozos de mandioca hervida tierna con oliva.
- **Prompt Fotográfico:** *"Cazuela de soja texturizada sofrita con cebollita de verdeo y pimentón, acompañada de trozos rústicos de mandioca hervida blanca."*

### ↙️ Inferior Izquierdo — Avena Salada Cremosa con Champiñones y Queso Sardo (`plate_cat_195`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** 🥣 Avena (Arrollada)
  - **Vegetales:** 🍄 Hongos / Champiñones Salteados
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Plato hondo de avena arrollada caliente y cremosa ligada con manteca y queso sardo, con champiñones salteados por encima.
- **Prompt Fotográfico:** *"Plato hondo de avena salada caliente y cremosa con queso rallado, coronada con láminas de champiñones salteados dorados."*

### ↘️ Inferior Derecho — Revuelto de Tofu con Espinacas y Semillas (Low-Carb) (`plate_cat_196`)
- **Ingredientes Clave:**
  - **Proteína:** 🧈 Tofu a la Plancha
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada + 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Tofu desmenuzado salteado en sartén caliente con hojas de espinaca, cebolla rehogada y mix de semillas tostadas sin harinas.
- **Prompt Fotográfico:** *"Salteado caliente de tofu desmenuzado dorado con espinacas tiernas, cebolla rehogada dulce y semillas de sésamo con oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 49 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Cubos de tofu bien dorados y crocantes con semillas de sésamo tostadas, servidos junto a porción plana de arroz blanco y brócoli verde.
- Cuadrante Superior Derecho: Cazuela de soja texturizada sofrita con cebollita de verdeo y pimentón, acompañada de trozos rústicos de mandioca hervida blanca.
- Cuadrante Inferior Izquierdo: Plato hondo de avena salada caliente y cremosa con queso rallado, coronada con láminas de champiñones salteados dorados.
- Cuadrante Inferior Derecho: Salteado caliente de tofu desmenuzado dorado con espinacas tiernas, cebolla rehogada dulce y semillas de sésamo con oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 50 (lote_50): Platos Rápidos con Choclo y Mandioca
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Picadillo de Carne con Choclo Cremoso y Puré de Calabaza (`plate_cat_197`)
- **Ingredientes Clave:**
  - **Proteína:** 🥘 Carne Picada / Molida
  - **Carbohidrato:** 🌽 Choclo / Maíz Desgranado
  - **Vegetales:** 🎃 Zapallo / Calabaza / Anco
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Carne picada sofrita con cebolla y choclo amarillo desgranado a la manteca, servida con puré suave de calabaza anco.
- **Prompt Fotográfico:** *"Picadillo casero de carne molida sofrita con granos de choclo dulce a la manteca, acompañado de puré plano de calabaza anaranjada."*

### ↗️ Superior Derecho — Mandioca Salteada con Huevos Revueltos y Verdeo (`plate_cat_198`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** 🪵 Mandioca / Yuca Hervida
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Cubos de mandioca cocida salteados en sartén con manteca hasta dorar, mezclados con huevos revueltos cremosos y verdeo fresco.
- **Prompt Fotográfico:** *"Revuelto casero de mandioca en cubos dorados en sartén con huevos revueltos esponjosos y abundante cebollita de verdeo."*

### ↙️ Inferior Izquierdo — Pechuga Grillada con Mandioca Dorada y Tomate Asado (`plate_cat_199`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🪵 Mandioca / Yuca Hervida
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Suprema de pollo a la plancha de hierro con gajo de limón, acompañada de mandioca dorada a la sartén y tomate asado.
- **Prompt Fotográfico:** *"Pechuga de pollo dorada a la plancha con limón, servida con trozos de mandioca dorados y rodajas de tomate asado con orégano y oliva."*

### ↘️ Inferior Derecho — Bondiola Sellada con Salteado de Choclo y Morrón (`plate_cat_200`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bondiola o Solomillo de Cerdo
  - **Carbohidrato:** 🌽 Choclo / Maíz Desgranado
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Medallón de bondiola jugoso sellado al fuego vivo, servido con salteado caliente de granos de choclo dulce y morrón rojo en tiras.
- **Prompt Fotográfico:** *"Medallón de bondiola de cerdo dorado a la plancha con limón, acompañado de salteado de choclo amarillo desgranado y tiras de morrón rojo."*

> [!NOTE] Prompt consolidado para generar el Lote 50 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Picadillo casero de carne molida sofrita con granos de choclo dulce a la manteca, acompañado de puré plano de calabaza anaranjada.
- Cuadrante Superior Derecho: Revuelto casero de mandioca en cubos dorados en sartén con huevos revueltos esponjosos y abundante cebollita de verdeo.
- Cuadrante Inferior Izquierdo: Pechuga de pollo dorada a la plancha con limón, servida con trozos de mandioca dorados y rodajas de tomate asado con orégano y oliva.
- Cuadrante Inferior Derecho: Medallón de bondiola de cerdo dorado a la plancha con limón, acompañado de salteado de choclo amarillo desgranado y tiras de morrón rojo.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 51 (lote_51): Ensaladas Frías de Legumbres
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Ensalada de Lentejas con Huevo Duro, Tomate y Cebollita (`plate_cat_201`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos + 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Lentejas cocidas firmes mezcladas con daditos de tomate fresco, cebolla de verdeo picada y cuartos de huevo duro con oliva.
- **Prompt Fotográfico:** *"Ensalada casera de lentejas cocidas firmes entremezcladas con trozos de tomate fresco, cebollita de verdeo y huevo duro picado con aceite de oliva."*

### ↗️ Superior Derecho — Porotos Blancos con Atún al Natural, Rúcula y Aceitunas (`plate_cat_202`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Porotos alubia blancos tiernos con lomos de atún desmenuzado, hojas de rúcula silvestre y aceitunas negras con oliva.
- **Prompt Fotográfico:** *"Plato hondo de porotos alubia blancos entremezclados con trozos de atún al natural, hojas verdes de rúcula y aceitunas negras."*

### ↙️ Inferior Izquierdo — Salpicón de Porotos con Pollo Desmenuzado y Zanahoria (`plate_cat_203`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Hebras de pollo frío desmenuzado con porotos blancos cocidos, zanahoria rallada fresca y perejil picado con oliva.
- **Prompt Fotográfico:** *"Salpicón casero frío de pollo desmenuzado mezclado naturalmente con porotos blancos tiernos y zanahoria rallada con aceite de oliva."*

### ↘️ Inferior Derecho — Ensalada de Lentejas con Queso Port Salut y Pepino (`plate_cat_204`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🥒 Pepino en Rodajas
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Lentejas cocidas frías con dados tiernos de queso port salut, rodajas finas de pepino crocante y aderezo de limón y oliva.
- **Prompt Fotográfico:** *"Bowl de lentejas cocidas frías entremezcladas con cubos de queso port salut blanco, rodajas de pepino fresco y aceite de oliva virgen."*

> [!NOTE] Prompt consolidado para generar el Lote 51 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Ensalada casera de lentejas cocidas firmes entremezcladas con trozos de tomate fresco, cebollita de verdeo y huevo duro picado con aceite de oliva.
- Cuadrante Superior Derecho: Plato hondo de porotos alubia blancos entremezclados con trozos de atún al natural, hojas verdes de rúcula y aceitunas negras.
- Cuadrante Inferior Izquierdo: Salpicón casero frío de pollo desmenuzado mezclado naturalmente con porotos blancos tiernos y zanahoria rallada con aceite de oliva.
- Cuadrante Inferior Derecho: Bowl de lentejas cocidas frías entremezcladas con cubos de queso port salut blanco, rodajas de pepino fresco y aceite de oliva virgen.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 52 (lote_52): Bowls de Quinoa y Granos Fríos
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Quinoa Fría con Palta Madura, Pepino y Semillas (`plate_cat_205`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** 🌾 Quinoa
  - **Vegetales:** 🥒 Pepino en Rodajas
  - **Grasa:** 🥑 Palta / Aguacate
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Base de quinoa cocida suelta fría con trozos de huevo duro, rodajas de pepino y gajos de palta con semillas de sésamo.
- **Prompt Fotográfico:** *"Bowl de quinoa cocida suelta fría con gajos de palta madura, rodajitas de pepino crocante, huevo duro picado y semillas tostadas con oliva."*

### ↗️ Superior Derecho — Bowl de Quinoa con Pollo Grillado Frío y Tomates Cherry (`plate_cat_206`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🌾 Quinoa
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Quinoa cocida fría con dados de pechuga grillada fría, mitades de tomates cherry jugosos y hojas de albahaca con oliva.
- **Prompt Fotográfico:** *"Bowl frío con base de quinoa graneada, trozos de pechuga de pollo grillada fría al descuido y tomates cherry cortados al medio con oliva."*

### ↙️ Inferior Izquierdo — Ensalada de Quinoa con Atún Claro y Choclo Desgranado (`plate_cat_207`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** 🌾 Quinoa
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Quinoa cocida suave con lomos de atún al natural, granos de choclo amarillo y cubitos de morrón rojo dulce.
- **Prompt Fotográfico:** *"Plato hondo de ensalada fresca de quinoa cocida suelta con lomitos de atún, granos de choclo amarillo y daditos de morrón rojo."*

### ↘️ Inferior Derecho — Quinoa con Remolacha Cocida, Rúcula y Frutos Secos (`plate_cat_208`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** 🌾 Quinoa
  - **Vegetales:** 🥗 Remolacha (Rallada o Hervida) + 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🌰 Frutos Secos (Nueces / Almendras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Quinoa teñida con dados de remolacha cocida dulce, hojas frescas de rúcula, cubitos de queso fresco y nueces partidas.
- **Prompt Fotográfico:** *"Bowl colorido con base de quinoa suelta, cubos de remolacha cocida teñida de morado, hojas de rúcula y nueces picadas con queso fresco."*

> [!NOTE] Prompt consolidado para generar el Lote 52 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Bowl de quinoa cocida suelta fría con gajos de palta madura, rodajitas de pepino crocante, huevo duro picado y semillas tostadas con oliva.
- Cuadrante Superior Derecho: Bowl frío con base de quinoa graneada, trozos de pechuga de pollo grillada fría al descuido y tomates cherry cortados al medio con oliva.
- Cuadrante Inferior Izquierdo: Plato hondo de ensalada fresca de quinoa cocida suelta con lomitos de atún, granos de choclo amarillo y daditos de morrón rojo.
- Cuadrante Inferior Derecho: Bowl colorido con base de quinoa suelta, cubos de remolacha cocida teñida de morado, hojas de rúcula y nueces picadas con queso fresco.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 53 (lote_53): Ensaladas de Pasta Fría
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Pasta Fría con Pollo Grillado, Hojas Verdes y Tomate (`plate_cat_209`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula) + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Fideos tirabuzón fríos al dente con tiras de pollo grillado frío, hojas de lechuga cortada a mano y dados de tomate con oliva.
- **Prompt Fotográfico:** *"Ensalada de fideos espirales fríos al dente mezclados con tiras de pollo grillado frío, hojas de lechuga troceada y cubitos de tomate fresco."*

### ↗️ Superior Derecho — Ensalada Primaveral de Fideos con Huevo Duro y Zanahoria (`plate_cat_210`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Fideos cortos al dente fríos entremezclados con trozos de huevo duro, hebras de zanahoria rallada fresca y perejil con oliva.
- **Prompt Fotográfico:** *"Plato de ensalada de fideos tirabuzón fríos totalmente revueltos con trocitos de huevo duro picado, zanahoria rallada fina y aceite de oliva."*

### ↙️ Inferior Izquierdo — Pasta Fría con Atún, Choclo Dulce y Aceitunas Negras (`plate_cat_211`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Fideos cortos con lomitos de atún al natural, granos tiernos de choclo, tiritas de morrón y rodajas de aceitunas negras.
- **Prompt Fotográfico:** *"Ensalada de pasta fría con fideos cortos al dente, trozos de atún al natural, granos de choclo amarillo y aceitunas negras dispersas."*

### ↘️ Inferior Derecho — Fideos Cortos con Queso Port Salut, Pepino y Tomate Cherry (`plate_cat_212`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥒 Pepino en Rodajas + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Fideos secos fríos con cubos tiernos de queso port salut, rodajitas de pepino crujiente y tomatitos cherry con aceite de oliva.
- **Prompt Fotográfico:** *"Plato hondo de ensalada fresca de fideos fríos mezclados con dados blancos de queso port salut, pepino en rodajas finas y tomates cherry."*

> [!NOTE] Prompt consolidado para generar el Lote 53 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Ensalada de fideos espirales fríos al dente mezclados con tiras de pollo grillado frío, hojas de lechuga troceada y cubitos de tomate fresco.
- Cuadrante Superior Derecho: Plato de ensalada de fideos tirabuzón fríos totalmente revueltos con trocitos de huevo duro picado, zanahoria rallada fina y aceite de oliva.
- Cuadrante Inferior Izquierdo: Ensalada de pasta fría con fideos cortos al dente, trozos de atún al natural, granos de choclo amarillo y aceitunas negras dispersas.
- Cuadrante Inferior Derecho: Plato hondo de ensalada fresca de fideos fríos mezclados con dados blancos de queso port salut, pepino en rodajas finas y tomates cherry.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 54 (lote_54): Bowls de Arroz Frío y Viandas
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Arroz Primavera Frío con Pollo Desmenuzado y Zanahoria (`plate_cat_213`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Arroz blanco suelto frío mezclado de forma natural con hebras de pollo cocido, zanahoria rallada dulce y aceite de oliva virgen.
- **Prompt Fotográfico:** *"Plato de arroz blanco frío suelto y desgranado plano con hebras de pollo cocido desmenuzado, zanahoria rallada fresca y oliva (sin molde)."*

### ↗️ Superior Derecho — Arroz con Caballa, Tomate Jugoso y Palta Madura (`plate_cat_214`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Caballa en Lata (al Natural o Aceite)
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🥑 Palta / Aguacate
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Arroz blanco desgranado frío con trozos de caballa en conserva, dados de tomate fresco y gajos cremosos de palta con limón.
- **Prompt Fotográfico:** *"Bowl de arroz blanco frío plano entremezclado con trozos de caballa en conserva, dados de tomate jugoso y trozos de palta fresca."*

### ↙️ Inferior Izquierdo — Ensalada de Arroz con Huevo Duro, Chauchas y Aceitunas (`plate_cat_215`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🫛 Chauchas al Vapor o Salteadas
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Arroz blanco frío suelto mezclado con trozos de huevo duro, chauchas verdes hervidas cortadas al bies y aceitunas verdes.
- **Prompt Fotográfico:** *"Plato de ensalada fresca de arroz blanco cocido suelto con trozos de chauchas verdes tiernas, huevo duro picado rústico y aceitunas verdes."*

### ↘️ Inferior Derecho — Bowl de Arroz Frío con Tofu Marinado, Pepino y Sésamo (`plate_cat_216`)
- **Ingredientes Clave:**
  - **Proteína:** 🧈 Tofu a la Plancha
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🥒 Pepino en Rodajas
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Base plana de arroz blanco frío con cubitos de tofu marinado, rodajitas crujientes de pepino y lluvia de semillas de sésamo tostadas.
- **Prompt Fotográfico:** *"Bowl fresco con base de arroz blanco suelto plano, cubos de tofu marinado en limón, rodajas finas de pepino y semillas de sésamo con oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 54 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Plato de arroz blanco frío suelto y desgranado plano con hebras de pollo cocido desmenuzado, zanahoria rallada fresca y oliva (sin molde).
- Cuadrante Superior Derecho: Bowl de arroz blanco frío plano entremezclado con trozos de caballa en conserva, dados de tomate jugoso y trozos de palta fresca.
- Cuadrante Inferior Izquierdo: Plato de ensalada fresca de arroz blanco cocido suelto con trozos de chauchas verdes tiernas, huevo duro picado rústico y aceitunas verdes.
- Cuadrante Inferior Derecho: Bowl fresco con base de arroz blanco suelto plano, cubos de tofu marinado en limón, rodajas finas de pepino y semillas de sésamo con oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 55 (lote_55): Ensaladas de Raíces y Verano
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Ensalada Colorida de Remolacha y Zanahoria con Huevo Duro (`plate_cat_217`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥗 Remolacha (Rallada o Hervida) + 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Dados dulces de remolacha hervida y hebras de zanahoria fresca con cuartos de huevo duro y un chorrito de aceite de oliva.
- **Prompt Fotográfico:** *"Plato de ensalada con dados de remolacha cocida violeta brillante, hebras de zanahoria rallada naranja y cuartos de huevo duro con oliva."*

### ↗️ Superior Derecho — Salpicón Vacuno con Papas Rústicas y Cebolla de Verdeo (`plate_cat_218`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Palomita en Bifes
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Tiras de palomita vacuna cocida desmenuzada fría con cubos de papa hervida, abundante cebolla de verdeo y aceite de oliva virgen.
- **Prompt Fotográfico:** *"Salpicón criollo frío de carne vacuna en hebras mezclado naturalmente con cubos de papa hervida tierna y cebollita de verdeo fresca."*

### ↙️ Inferior Izquierdo — Remolacha Tibia con Queso Port Salut y Nueces Tostadas (`plate_cat_219`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥗 Remolacha (Rallada o Hervida)
  - **Grasa:** 🌰 Frutos Secos (Nueces / Almendras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Dados de remolacha cocida dulce con cubos tiernos de queso port salut blanco y mitades de nueces crocantes tostadas con oliva.
- **Prompt Fotográfico:** *"Plato hondo con dados de remolacha cocida dulce, cubos blancos de queso port salut fresco y trozos de nueces partidas crujientes."*

### ↘️ Inferior Derecho — Ensalada Rusa Casera con Lomos de Atún y Aceitunas (`plate_cat_220`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Clásica ensalada rusa de papas y zanahorias hervidas en cubitos con mayonesa u oliva, servida con lomitos de atún y aceitunas verdes.
- **Prompt Fotográfico:** *"Porción rústica de ensalada rusa servida a un costado con cuchara, acompañada al lado con lomos de atún claro y aceitunas verdes."*

> [!NOTE] Prompt consolidado para generar el Lote 55 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Plato de ensalada con dados de remolacha cocida violeta brillante, hebras de zanahoria rallada naranja y cuartos de huevo duro con oliva.
- Cuadrante Superior Derecho: Salpicón criollo frío de carne vacuna en hebras mezclado naturalmente con cubos de papa hervida tierna y cebollita de verdeo fresca.
- Cuadrante Inferior Izquierdo: Plato hondo con dados de remolacha cocida dulce, cubos blancos de queso port salut fresco y trozos de nueces partidas crujientes.
- Cuadrante Inferior Derecho: Porción rústica de ensalada rusa servida a un costado con cuchara, acompañada al lado con lomos de atún claro y aceitunas verdes.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 56 (lote_56): Platos Rápidos con Quesos y Huevos
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Revuelto de Zucchini con Queso Port Salut y Arroz (`plate_cat_221`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🥒 Zucchini / Zapallito a la Plancha
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Dados de zucchini salteados en sartén con huevos revueltos esponjosos y queso port salut fundido, servidos con arroz blanco plano.
- **Prompt Fotográfico:** *"Huevos revueltos tiernos con dados dorados de zucchini y hebras de queso derretido, servidos junto a porción plana de arroz blanco."*

### ↗️ Superior Derecho — Omelette de Queso con Rúcula y Tomate Asado (Low-Carb) (`plate_cat_222`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos + 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Omelette dorado relleno con abundante queso derretido, acompañado de rodajas de tomate asado caliente y hojas de rúcula.
- **Prompt Fotográfico:** *"Omelette dorado esponjoso con queso fundido en su interior, servido junto a rodajas de tomate asado en sartén y hojas de rúcula fresca."*

### ↙️ Inferior Izquierdo — Revuelto de Acelga y Papas con Huevo a la Manteca (`plate_cat_223`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Cubos de papa tierna dorada en sartén con hojas picadas de acelga o espinaca tierna y huevos revueltos a la manteca.
- **Prompt Fotográfico:** *"Revuelto casero de dados de papa dorada con espinacas salteadas y huevos cremosos ligados con manteca recién servido."*

### ↘️ Inferior Derecho — Huevos al Plato con Salsa Criolla de Tomate y Puré (`plate_cat_224`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Huevos cocidos en salsa casera de tomate con cebolla y pimentón, servidos junto a puré de papas casero suave.
- **Prompt Fotográfico:** *"Huevos al plato cocidos en salsa criolla de tomate casero y cebolla rehogada, acompañados de puré de papas casero plano."*

> [!NOTE] Prompt consolidado para generar el Lote 56 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Huevos revueltos tiernos con dados dorados de zucchini y hebras de queso derretido, servidos junto a porción plana de arroz blanco.
- Cuadrante Superior Derecho: Omelette dorado esponjoso con queso fundido en su interior, servido junto a rodajas de tomate asado en sartén y hojas de rúcula fresca.
- Cuadrante Inferior Izquierdo: Revuelto casero de dados de papa dorada con espinacas salteadas y huevos cremosos ligados con manteca recién servido.
- Cuadrante Inferior Derecho: Huevos al plato cocidos en salsa criolla de tomate casero y cebolla rehogada, acompañados de puré de papas casero plano.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 57 (lote_57): Pescados y Conservas al Plato
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Caballa Salteada con Fideos al Verdeo y Aceitunas (`plate_cat_225`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Caballa en Lata (al Natural o Aceite)
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Lomos de caballa sellados en sartén con cebollita de verdeo y aceitunas picadas, servidos sobre fideos al dente con oliva.
- **Prompt Fotográfico:** *"Plato de fideos al dente salteados con lomos dorados de caballa en conserva, hebras de verdeo fresco y rodajitas de aceitunas verdes."*

### ↗️ Superior Derecho — Atún Caliente Salteado con Arroz Blanco y Morrón (`plate_cat_226`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Lomitos de atún rehogados en sartén con tiras de morrón rojo dulce y cebolla, servidos con arroz blanco desgranado.
- **Prompt Fotográfico:** *"Porción de arroz blanco caliente desgranado plano con salteado de trozos de atún al natural y tiras de morrón rojo brillante."*

### ↙️ Inferior Izquierdo — Merluza al Horno con Papas y Cebollas Doradas (`plate_cat_227`)
- **Ingredientes Clave:**
  - **Proteína:** 🐟 Filete de Pescado Blanco (Merluza / Tilapia)
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~18 min | **Servido:** Caliente
- **Descripción Culinaria:** Filete de merluza cocido sobre colchón de rodajas de papa y aros de cebolla caramelizados al horno con aceite de oliva.
- **Prompt Fotográfico:** *"Filete de merluza blanca horneada con limón sobre rodajas doradas de papa al horno y cebolla rehogada dulce con oliva."*

### ↘️ Inferior Derecho — Cazuela Rápida de Caballa con Choclo y Morrón (`plate_cat_228`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Caballa en Lata (al Natural o Aceite)
  - **Carbohidrato:** 🌽 Choclo / Maíz Desgranado
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Lomos de caballa cocidos en cacerola con granos de choclo amarillo, tiras de morrón rojo y un hilo de aceite de oliva.
- **Prompt Fotográfico:** *"Plato hondo con lomos desmenuzados de caballa salteados con granos tiernos de choclo amarillo y morrón en tiras con oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 57 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Plato de fideos al dente salteados con lomos dorados de caballa en conserva, hebras de verdeo fresco y rodajitas de aceitunas verdes.
- Cuadrante Superior Derecho: Porción de arroz blanco caliente desgranado plano con salteado de trozos de atún al natural y tiras de morrón rojo brillante.
- Cuadrante Inferior Izquierdo: Filete de merluza blanca horneada con limón sobre rodajas doradas de papa al horno y cebolla rehogada dulce con oliva.
- Cuadrante Inferior Derecho: Plato hondo con lomos desmenuzados de caballa salteados con granos tiernos de choclo amarillo y morrón en tiras con oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 58 (lote_58): Cortes Tradicionales a la Plancha
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Bife de Cuadril con Calabaza Asada y Choclo (`plate_cat_229`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** 🌽 Choclo / Maíz Desgranado
  - **Vegetales:** 🎃 Zapallo / Calabaza / Anco
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Churrasco vacuno sellado a la plancha de hierro con gajos de calabaza asada dulce y granos de choclo salteados con oliva.
- **Prompt Fotográfico:** *"Bife vacuno jugoso dorado a la plancha de hierro, acompañado de trozos de calabaza asada dulce y granos sueltos de choclo salteado."*

### ↗️ Superior Derecho — Palomita Vuelta y Vuelta con Puré de Batatas (`plate_cat_230`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Palomita en Bifes
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Bifecitos finos de palomita a la plancha con limón, servidos con puré rústico de batata con manteca y hojas de rúcula fresca.
- **Prompt Fotográfico:** *"Bifes finos de palomita vacuna sellados al fuego vivo, acompañados de puré plano de batata dulce ligado con manteca y rúcula."*

### ↙️ Inferior Izquierdo — Tira de Asado a la Plancha con Ensalada Criolla Mixta (`plate_cat_231`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Tira de Asado
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula) + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~18 min | **Servido:** Caliente
- **Descripción Culinaria:** Corte de asado con hueso dorado a la plancha de hierro, acompañado de ensalada fresca de lechuga criolla, tomate y cebolla con oliva.
- **Prompt Fotográfico:** *"Tira de asado jugosa con hueso dorada a la plancha, servida al lado de ensalada fresca de lechuga troceada y rodajas de tomate con oliva."*

### ↘️ Inferior Derecho — Tortuguita en Bifes con Fideos al Pesto de Rúcula (`plate_cat_232`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Tortuguita en Bifes
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Bifecitos tiernos de tortuguita sellados en sartén, acompañados de fideos al dente salteados con rúcula fresca y queso rallado.
- **Prompt Fotográfico:** *"Bifecitos delgados de tortuguita vacuna sellados a la sartén, acompañados de fideos al dente salteados con rúcula verde y queso sardo."*

> [!NOTE] Prompt consolidado para generar el Lote 58 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Bife vacuno jugoso dorado a la plancha de hierro, acompañado de trozos de calabaza asada dulce y granos sueltos de choclo salteado.
- Cuadrante Superior Derecho: Bifes finos de palomita vacuna sellados al fuego vivo, acompañados de puré plano de batata dulce ligado con manteca y rúcula.
- Cuadrante Inferior Izquierdo: Tira de asado jugosa con hueso dorada a la plancha, servida al lado de ensalada fresca de lechuga troceada y rodajas de tomate con oliva.
- Cuadrante Inferior Derecho: Bifecitos delgados de tortuguita vacuna sellados a la sartén, acompañados de fideos al dente salteados con rúcula verde y queso sardo.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 59 (lote_59): Salteados y Woks Proteicos
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Wok de Pollo con Chauchas Tiernas y Semillas de Sésamo (`plate_cat_233`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🫛 Chauchas al Vapor o Salteadas + 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Tiras doradas de pechuga salteadas al wok con chauchas verdes crujientes, morrón rojo y semillas de sésamo sin harinas.
- **Prompt Fotográfico:** *"Salteado brillante al wok de tiras de pollo doradas con chauchas verdes cortadas al bies, morrón rojo y lluvia de sésamo tostado."*

### ↗️ Superior Derecho — Picadillo de Carne Molida con Berenjenas y Arroz (`plate_cat_234`)
- **Ingredientes Clave:**
  - **Proteína:** 🥘 Carne Picada / Molida
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🍆 Berenjena a la Plancha o Asada
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Carne picada sofrita con dados tiernos de berenjena dorada y cebolla, servida junto a porción plana de arroz blanco.
- **Prompt Fotográfico:** *"Picadillo casero de carne molida dorada en sartén con cubos tiernos de berenjena y cebolla, acompañado de arroz blanco plano."*

### ↙️ Inferior Izquierdo — Salteado de Cerdo con Batatas Asadas y Verdeo (`plate_cat_235`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Costillita / Bife de Cerdo
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Tiras de bife de cerdo selladas al wok con cebolla de verdeo fresca, acompañadas de rodajas de batata doradas al horno.
- **Prompt Fotográfico:** *"Tiras doradas de carne de cerdo salteadas en wok caliente con cebollita de verdeo, servidas junto a rodajas de batata asada dulce."*

### ↘️ Inferior Derecho — Tiras de Bife con Coliflor Salteada y Zanahorias (Low-Carb) (`plate_cat_236`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥦 Coliflor al Vapor o Salteada + 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Bife vacuno cortado en tiras y sellado a fuego vivo, acompañado de ramilletes de coliflor dorada y bastones de zanahoria tierna.
- **Prompt Fotográfico:** *"Tiras de bife vacuno selladas a la sartén con pimienta, acompañadas de coliflor dorada crujiente y bastoncitos de zanahoria con oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 59 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Salteado brillante al wok de tiras de pollo doradas con chauchas verdes cortadas al bies, morrón rojo y lluvia de sésamo tostado.
- Cuadrante Superior Derecho: Picadillo casero de carne molida dorada en sartén con cubos tiernos de berenjena y cebolla, acompañado de arroz blanco plano.
- Cuadrante Inferior Izquierdo: Tiras doradas de carne de cerdo salteadas en wok caliente con cebollita de verdeo, servidas junto a rodajas de batata asada dulce.
- Cuadrante Inferior Derecho: Tiras de bife vacuno selladas a la sartén con pimienta, acompañadas de coliflor dorada crujiente y bastoncitos de zanahoria con oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 60 (lote_60): Bowls Nutritivos de Avena Fría
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Avena Fría con Atún al Natural, Tomate y Huevo Duro (`plate_cat_237`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** 🥣 Avena (Arrollada)
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Base fresca de avena arrollada hidratada en frío con lomitos de atún, daditos de tomate fresco y cuartos de huevo duro con oliva.
- **Prompt Fotográfico:** *"Bowl fresco con base de avena arrollada hidratada en frío, acompañada de lomos de atún claro, dados de tomate fresco y huevo duro picado."*

### ↗️ Superior Derecho — Bowl de Avena con Palta, Hojas Verdes y Semillas (`plate_cat_238`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** 🥣 Avena (Arrollada)
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🥑 Palta / Aguacate
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Avena hidratada con trozos de huevo duro, hojas frescas de rúcula, gajos de palta madura y semillas de sésamo tostadas.
- **Prompt Fotográfico:** *"Bowl nutritivo de avena arrollada fría con gajos de palta madura fresca, hojas de rúcula verde, huevo duro y semillas con oliva."*

### ↙️ Inferior Izquierdo — Avena Fría con Pollo Desmenuzado, Pepino y Limón (`plate_cat_239`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🥣 Avena (Arrollada)
  - **Vegetales:** 🥒 Pepino en Rodajas
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Avena remojada suave con hebras de pechuga cocida fría, rodajitas de pepino crocante y aderezo fresco de limón y oliva.
- **Prompt Fotográfico:** *"Plato hondo de avena arrollada tierna fría con hebras de pollo desmenuzado, rodajas finas de pepino y aderezo de limón y oliva."*

### ↘️ Inferior Derecho — Bowl de Avena con Queso Port Salut, Remolacha y Nueces (`plate_cat_240`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** 🥣 Avena (Arrollada)
  - **Vegetales:** 🥗 Remolacha (Rallada o Hervida)
  - **Grasa:** 🌰 Frutos Secos (Nueces / Almendras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Avena arrollada hidratada con cubitos de queso fresco blanco, dados de remolacha cocida dulce y nueces partidas tostadas.
- **Prompt Fotográfico:** *"Bowl fresco con base de avena arrollada fría, dados de remolacha cocida dulce, cubos de queso port salut y nueces partidas con oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 60 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Bowl fresco con base de avena arrollada hidratada en frío, acompañada de lomos de atún claro, dados de tomate fresco y huevo duro picado.
- Cuadrante Superior Derecho: Bowl nutritivo de avena arrollada fría con gajos de palta madura fresca, hojas de rúcula verde, huevo duro y semillas con oliva.
- Cuadrante Inferior Izquierdo: Plato hondo de avena arrollada tierna fría con hebras de pollo desmenuzado, rodajas finas de pepino y aderezo de limón y oliva.
- Cuadrante Inferior Derecho: Bowl fresco con base de avena arrollada fría, dados de remolacha cocida dulce, cubos de queso port salut y nueces partidas con oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 61 (lote_61): Cenas Low-Carb de Fuego Vivo
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Suprema con Salteado de Repollo Blanco y Champiñones (`plate_cat_241`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥬 Repollo (Blanco o Colorado) + 🍄 Hongos / Champiñones Salteados
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Pechuga grillada al limón servida sobre un salteado caliente de finas tiras de repollo blanco y champiñones con oliva.
- **Prompt Fotográfico:** *"Suprema de pechuga dorada y jugosa con limón, servida sobre salteado caliente de repollo en tiras y champiñones dorados con oliva."*

### ↗️ Superior Derecho — Bife a la Plancha con Hojas Verdes, Rabanitos y Huevo Duro (`plate_cat_242`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula) + 🥗 Rabanitos en Rodajas
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Churrasco jugoso sellado a la plancha de hierro, acompañado de ensalada fresca de lechuga, rodajas de rabanito y huevo duro.
- **Prompt Fotográfico:** *"Bife de carne vacuna con marcas de plancha, servido al lado de ensalada fresca de hojas verdes, rodajas de rabanito y huevo duro."*

### ↙️ Inferior Izquierdo — Bondiola Sellada con Rodajas de Calabaza Asada y Rúcula (`plate_cat_243`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bondiola o Solomillo de Cerdo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🎃 Zapallo / Calabaza / Anco + 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Medallones de bondiola dorados a fuego vivo, acompañados de trozos tiernos de calabaza asada dulce y rúcula fresca con oliva.
- **Prompt Fotográfico:** *"Medallones de bondiola de cerdo dorados a la plancha, servidos con trozos de calabaza asada tierna dulce y hojas de rúcula fresca."*

### ↘️ Inferior Derecho — Merluza a la Plancha con Wok de Zucchini y Morrón (`plate_cat_244`)
- **Ingredientes Clave:**
  - **Proteína:** 🐟 Filete de Pescado Blanco (Merluza / Tilapia)
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥒 Zucchini / Zapallito a la Plancha + 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Filete de merluza dorada vuelta y vuelta con limón, acompañado de dados de zucchini y tiras de morrón salteados con oliva.
- **Prompt Fotográfico:** *"Filete de merluza dorada a la plancha con limón, servido junto a salteado de zucchini tierno y tiras de morrón rojo con oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 61 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Suprema de pechuga dorada y jugosa con limón, servida sobre salteado caliente de repollo en tiras y champiñones dorados con oliva.
- Cuadrante Superior Derecho: Bife de carne vacuna con marcas de plancha, servido al lado de ensalada fresca de hojas verdes, rodajas de rabanito y huevo duro.
- Cuadrante Inferior Izquierdo: Medallones de bondiola de cerdo dorados a la plancha, servidos con trozos de calabaza asada tierna dulce y hojas de rúcula fresca.
- Cuadrante Inferior Derecho: Filete de merluza dorada a la plancha con limón, servido junto a salteado de zucchini tierno y tiras de morrón rojo con oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 62 (lote_62): Pastas Caseras y Salsas Livianas
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Fideos al Verdeo con Bocados de Pollo Dorado (`plate_cat_245`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🥛 Crema de Leche
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Pasta seca al dente salteada en salsa suave de crema con trocitos de pechuga de pollo dorada y cebolla de verdeo picada.
- **Prompt Fotográfico:** *"Plato de fideos al dente salteados con dados dorados de pollo y abundante cebollita de verdeo en salsa suave de crema de leche."*

### ↗️ Superior Derecho — Tirabuzones a la Manteca con Queso Sardo y Espinaca (`plate_cat_246`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Fideos tirabuzón salteados a la sartén con manteca derretida, hojas de espinaca tierna y queso sardo rallado recién molido.
- **Prompt Fotográfico:** *"Plato de fideos tirabuzón salteados a la manteca con hojas verdes de espinaca cocida y lluvia de queso sardo rallado."*

### ↙️ Inferior Izquierdo — Fideos con Picadillo Criollo de Carne y Tomate (`plate_cat_247`)
- **Ingredientes Clave:**
  - **Proteína:** 🥘 Carne Picada / Molida
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Pasta seca con salteado rápido de carne picada, morrón rojo dulce y cebolla con un toque de pimentón y aceite de oliva.
- **Prompt Fotográfico:** *"Plato de fideos al dente con sofrito criollo de carne molida dorada, cubitos de morrón rojo y cebolla con aceite de oliva."*

### ↘️ Inferior Derecho — Pasta con Salteado de Champiñones a la Crema (`plate_cat_248`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🍄 Hongos / Champiñones Salteados
  - **Grasa:** 🥛 Crema de Leche
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Fideos cortos al dente salteados con láminas de champiñones dorados, huevo revuelto cremoso y un toque de crema de leche.
- **Prompt Fotográfico:** *"Plato de fideos al dente salteados con champiñones en láminas jugosas, crema de leche suave y pimienta negra recién molida."*

> [!NOTE] Prompt consolidado para generar el Lote 62 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Plato de fideos al dente salteados con dados dorados de pollo y abundante cebollita de verdeo en salsa suave de crema de leche.
- Cuadrante Superior Derecho: Plato de fideos tirabuzón salteados a la manteca con hojas verdes de espinaca cocida y lluvia de queso sardo rallado.
- Cuadrante Inferior Izquierdo: Plato de fideos al dente con sofrito criollo de carne molida dorada, cubitos de morrón rojo y cebolla con aceite de oliva.
- Cuadrante Inferior Derecho: Plato de fideos al dente salteados con champiñones en láminas jugosas, crema de leche suave y pimienta negra recién molida.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 63 (lote_63): Olla Criolla y Cacerolas Calientes
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Guisito de Arroz con Carne Picada, Zanahoria y Morrón (`plate_cat_249`)
- **Ingredientes Clave:**
  - **Proteína:** 🥘 Carne Picada / Molida
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🥕 Zanahoria Rallada / Cocida + 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~20 min | **Servido:** Caliente
- **Descripción Culinaria:** Arroz cocido en cacerola con carne picada sofrita, rodajitas de zanahoria dulce y morrón rojo con caldo casero.
- **Prompt Fotográfico:** *"Plato hondo de guisito casero de arroz con carne picada sofrita, daditos de zanahoria blanda y morrón en caldo sabroso."*

### ↗️ Superior Derecho — Cazuela de Pollo con Batatas Dulces y Choclo (`plate_cat_250`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pata-Muslo de Pollo
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~25 min | **Servido:** Caliente
- **Descripción Culinaria:** Pata-muslo de pollo estofada en cacerola con cubos tiernos de batata dulce, granos de choclo amarillo y cebolla dorada.
- **Prompt Fotográfico:** *"Plato hondo con porción de pollo tierno cocido en cacerola con dados de batata dulce blanda, choclo en grano y cebolla rehogada."*

### ↙️ Inferior Izquierdo — Estofado de Cerdo con Papas y Cebollas Caramelizadas (`plate_cat_251`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Costillita / Bife de Cerdo
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~25 min | **Servido:** Caliente
- **Descripción Culinaria:** Cubos de carne de cerdo sellados y estofados a fuego lento con papas tiernas y cebollas caramelizadas con pimentón.
- **Prompt Fotográfico:** *"Cazuela casera con trozos de cerdo tiernos estofados con cubos de papa cocida blanda y abundante cebolla dorada dulce."*

### ↘️ Inferior Derecho — Lentejas Estofadas con Bifecitos de Palomita y Calabaza (`plate_cat_252`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Palomita en Bifes
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🎃 Zapallo / Calabaza / Anco
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~25 min | **Servido:** Caliente
- **Descripción Culinaria:** Lentejas tiernas en cacerola con tiras de palomita vacuna selladas al fuego y dados dulces de calabaza cocida con pimentón.
- **Prompt Fotográfico:** *"Plato hondo de lentejas estofadas con tiras tiernas de carne vacuna y cubos de calabaza anaranjada dulce servidas con cuchara."*

> [!NOTE] Prompt consolidado para generar el Lote 63 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Plato hondo de guisito casero de arroz con carne picada sofrita, daditos de zanahoria blanda y morrón en caldo sabroso.
- Cuadrante Superior Derecho: Plato hondo con porción de pollo tierno cocido en cacerola con dados de batata dulce blanda, choclo en grano y cebolla rehogada.
- Cuadrante Inferior Izquierdo: Cazuela casera con trozos de cerdo tiernos estofados con cubos de papa cocida blanda y abundante cebolla dorada dulce.
- Cuadrante Inferior Derecho: Plato hondo de lentejas estofadas con tiras tiernas de carne vacuna y cubos de calabaza anaranjada dulce servidas con cuchara.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 64 (lote_64): Bowls de Pollo y Aves Frías
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Salpicón de Pollo con Lechuga, Tomate y Palta Madura (`plate_cat_253`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula) + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🥑 Palta / Aguacate
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Pechuga de pollo cocida en hebras frías con hojas de lechuga cortada a mano, cubitos de tomate fresco y gajos de palta con oliva.
- **Prompt Fotográfico:** *"Salpicón fresco en plato con hebras de pollo cocido frío, hojas de lechuga fresca, cubos de tomate y trozos de palta madura con oliva."*

### ↗️ Superior Derecho — Ensalada de Pollo con Choclo Desgranado y Tomates Cherry (`plate_cat_254`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🌽 Choclo / Maíz Desgranado
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Bocados de pollo frío con granos tiernos de choclo amarillo desgranado y mitades de tomates cherry con aderezo de limón y oliva.
- **Prompt Fotográfico:** *"Plato de ensalada con trozos de pechuga de pollo fría entremezclados con choclo amarillo dulce y tomates cherry con aceite de oliva."*

### ↙️ Inferior Izquierdo — Pollo Desmenuzado con Remolacha Cocida y Nueces (`plate_cat_255`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥗 Remolacha (Rallada o Hervida)
  - **Grasa:** 🌰 Frutos Secos (Nueces / Almendras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Hebras de pollo frío con dados dulces de remolacha cocida y mitades de nueces crocantes partidas con aceite de oliva virgen.
- **Prompt Fotográfico:** *"Plato hondo de pollo desmenuzado frío mezclado naturalmente con cubos morados de remolacha cocida y trozos de nueces crujientes."*

### ↘️ Inferior Derecho — Bowl de Pollo Grillado con Quinoa Suelta y Pepino (`plate_cat_256`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🌾 Quinoa
  - **Vegetales:** 🥒 Pepino en Rodajas
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Base de quinoa cocida suelta fría con dados de pechuga grillada fría, rodajitas de pepino crujiente y perejil fresco con oliva.
- **Prompt Fotográfico:** *"Bowl fresco con base de quinoa graneada suelta, dados de pollo grillado frío al descuido y rodajas finas de pepino con aceite de oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 64 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Salpicón fresco en plato con hebras de pollo cocido frío, hojas de lechuga fresca, cubos de tomate y trozos de palta madura con oliva.
- Cuadrante Superior Derecho: Plato de ensalada con trozos de pechuga de pollo fría entremezclados con choclo amarillo dulce y tomates cherry con aceite de oliva.
- Cuadrante Inferior Izquierdo: Plato hondo de pollo desmenuzado frío mezclado naturalmente con cubos morados de remolacha cocida y trozos de nueces crujientes.
- Cuadrante Inferior Derecho: Bowl fresco con base de quinoa graneada suelta, dados de pollo grillado frío al descuido y rodajas finas de pepino con aceite de oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 65 (lote_65): Platos Rápidos de Soja y Tofu
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Medallón de Soja Sofrita con Puré de Calabaza (`plate_cat_257`)
- **Ingredientes Clave:**
  - **Proteína:** 🫘 Soja Texturizada Salteada
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🎃 Zapallo / Calabaza / Anco + 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Soja texturizada dorada en sartén con cebollita rehogada dulce, acompañada de puré rústico y plano de calabaza anco con oliva.
- **Prompt Fotográfico:** *"Porción de soja texturizada sofrita dorada con cebolla dulce, servida al lado de puré plano rústico de calabaza anaranjada dulce."*

### ↗️ Superior Derecho — Tofu Crocante con Fideos Salteados al Sésamo (`plate_cat_258`)
- **Ingredientes Clave:**
  - **Proteína:** 🧈 Tofu a la Plancha
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Cubos de tofu dorados y crujientes salteados con fideos secos al dente, tiras de morrón rojo y semillas de sésamo tostadas.
- **Prompt Fotográfico:** *"Plato de fideos al dente salteados con cubos dorados y crocantes de tofu, tiras de morrón y semillas de sésamo con oliva."*

### ↙️ Inferior Izquierdo — Picadillo de Soja con Arroz Blanco y Choclo (`plate_cat_259`)
- **Ingredientes Clave:**
  - **Proteína:** 🫘 Soja Texturizada Salteada
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Soja sofrita con cebolla y pimentón servida con granos de choclo y porción plana de arroz blanco desgranado.
- **Prompt Fotográfico:** *"Picadillo de soja texturizada dorada con cebolla y pimentón, acompañado de porción plana de arroz blanco suelto y choclo."*

### ↘️ Inferior Derecho — Salteado de Tofu con Chauchas Verdes y Batata Asada (`plate_cat_260`)
- **Ingredientes Clave:**
  - **Proteína:** 🧈 Tofu a la Plancha
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🫛 Chauchas al Vapor o Salteadas
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Láminas de tofu a la plancha doradas con limón, acompañadas de chauchas verdes salteadas y rodajas de batata asada dulce.
- **Prompt Fotográfico:** *"Láminas de tofu dorado a la sartén, servidas con chauchas verdes salteadas al dente y rodajas de batata dulce asada con oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 65 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Porción de soja texturizada sofrita dorada con cebolla dulce, servida al lado de puré plano rústico de calabaza anaranjada dulce.
- Cuadrante Superior Derecho: Plato de fideos al dente salteados con cubos dorados y crocantes de tofu, tiras de morrón y semillas de sésamo con oliva.
- Cuadrante Inferior Izquierdo: Picadillo de soja texturizada dorada con cebolla y pimentón, acompañado de porción plana de arroz blanco suelto y choclo.
- Cuadrante Inferior Derecho: Láminas de tofu dorado a la sartén, servidas con chauchas verdes salteadas al dente y rodajas de batata dulce asada con oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 66 (lote_66): Clásicos Porteños al Horno
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Suprema Napolitana con Ensalada de Rúcula y Tomate (`plate_cat_261`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Milanesa (Carne o Pollo)
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula) + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Milanesa de pollo horneada con salsa casera de tomate y queso derretido dorado, servida con ensalada de rúcula fresca.
- **Prompt Fotográfico:** *"Milanesa de pollo napolitana con salsa de tomate y queso gratinado al horno con orégano, servida al lado de ensalada de rúcula y tomate."*

### ↗️ Superior Derecho — Bife a la Criolla con Papas y Cebollas al Horno (`plate_cat_262`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada) + 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~20 min | **Servido:** Caliente
- **Descripción Culinaria:** Bife de carne vacuna cocido a la fuente con rodajas de papa doradas, aros de cebolla y morrones con aceite de oliva.
- **Prompt Fotográfico:** *"Bife vacuno jugoso cocido al horno sobre colchón de papas doradas en rodajas, tiras de morrón y cebolla caramelizada."*

### ↙️ Inferior Izquierdo — Pastel de Papa Criollo con Carne Picada y Huevo (`plate_cat_263`)
- **Ingredientes Clave:**
  - **Proteína:** 🥘 Carne Picada / Molida
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~20 min | **Servido:** Caliente
- **Descripción Culinaria:** Porción de pastel de papas casero al horno con relleno jugoso de carne picada sofrita con cebolla y cubierta de puré dorado con queso.
- **Prompt Fotográfico:** *"Porción de pastel de papas casero dorado al horno con costra de queso gratinado y relleno jugoso de carne picada con cebolla."*

### ↘️ Inferior Derecho — Pata-Muslo al Horno con Papas y Romero (`plate_cat_264`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pata-Muslo de Pollo
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~25 min | **Servido:** Caliente
- **Descripción Culinaria:** Pata-muslo asada con piel crocante dorada al limón y romero, acompañada de dados de papas al horno y cebolla de verdeo.
- **Prompt Fotográfico:** *"Pata-muslo de pollo al horno bien dorada con limón y romero, acompañada de dados de papas doradas crocantes al horno."*

> [!NOTE] Prompt consolidado para generar el Lote 66 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Milanesa de pollo napolitana con salsa de tomate y queso gratinado al horno con orégano, servida al lado de ensalada de rúcula y tomate.
- Cuadrante Superior Derecho: Bife vacuno jugoso cocido al horno sobre colchón de papas doradas en rodajas, tiras de morrón y cebolla caramelizada.
- Cuadrante Inferior Izquierdo: Porción de pastel de papas casero dorado al horno con costra de queso gratinado y relleno jugoso de carne picada con cebolla.
- Cuadrante Inferior Derecho: Pata-muslo de pollo al horno bien dorada con limón y romero, acompañada de dados de papas doradas crocantes al horno.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 67 (lote_67): Ensaladas Verdes Completas
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Ensalada Completa de Hojas Verdes con Pollo, Queso y Nueces (`plate_cat_265`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🌰 Frutos Secos (Nueces / Almendras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Mix abundante de hojas verdes frescas con tiras de pechuga grillada fría, lascas de queso sardo y nueces tostadas.
- **Prompt Fotográfico:** *"Plato de ensalada fresca con hojas de lechuga y rúcula, tiras de pollo grillado frío al desgaire, queso sardo y mitades de nueces con oliva."*

### ↗️ Superior Derecho — Ensalada Tibia de Chauchas, Papa Hervida y Huevo Duro (`plate_cat_266`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🫛 Chauchas al Vapor o Salteadas
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Chauchas verdes tiernas cocidas con dados de papa hervida y cuartos de huevo duro, rociados con aceite de oliva extra virgen.
- **Prompt Fotográfico:** *"Plato de ensalada casera con chauchas verdes tiernas hervidas, cubos de papa blanda y trozos de huevo duro con aceite de oliva."*

### ↙️ Inferior Izquierdo — Carpaccio Tibio de Bife con Rúcula y Queso Sardo (`plate_cat_267`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Frío
- **Descripción Culinaria:** Láminas finas de bife vacuno sellado a la plancha frío, servidas sobre colchón de rúcula fresca con lascas de queso y limón.
- **Prompt Fotográfico:** *"Plato frío con láminas finas de carne vacuna sellada dispuestas sobre colchón de hojas de rúcula silvestre con lascas de queso y oliva."*

### ↘️ Inferior Derecho — Ensalada de Repollo Blanco, Zanahoria Rallada y Atún (`plate_cat_268`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥬 Repollo (Blanco o Colorado) + 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Coleslaw casero de repollo finamente cortado y hebras de zanahoria fresca con lomitos de atún claro y aceite de oliva.
- **Prompt Fotográfico:** *"Ensalada crujiente de repollo blanco en juliana finísima, zanahoria rallada naranja y trozos de atún al natural con aderezo de oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 67 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Plato de ensalada fresca con hojas de lechuga y rúcula, tiras de pollo grillado frío al desgaire, queso sardo y mitades de nueces con oliva.
- Cuadrante Superior Derecho: Plato de ensalada casera con chauchas verdes tiernas hervidas, cubos de papa blanda y trozos de huevo duro con aceite de oliva.
- Cuadrante Inferior Izquierdo: Plato frío con láminas finas de carne vacuna sellada dispuestas sobre colchón de hojas de rúcula silvestre con lascas de queso y oliva.
- Cuadrante Inferior Derecho: Ensalada crujiente de repollo blanco en juliana finísima, zanahoria rallada naranja y trozos de atún al natural con aderezo de oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 68 (lote_68): Guarniciones de Mandioca y Raíces
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Mandioca Hervida con Bife Criollo Encebollado (`plate_cat_269`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** 🪵 Mandioca / Yuca Hervida
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Bife vacuno sellado a la plancha cubierto de cebolla caramelizada dorada, acompañado de trozos tiernos de mandioca hervida.
- **Prompt Fotográfico:** *"Bife de carne vacuna con abundante cebolla dorada por encima, acompañado de trozos rústicos de mandioca hervida blanca con oliva."*

### ↗️ Superior Derecho — Costillita de Cerdo con Puré Mixto de Batata y Calabaza (`plate_cat_270`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Costillita / Bife de Cerdo
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🎃 Zapallo / Calabaza / Anco
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Costillita dorada a la plancha de hierro con limón, servida junto a puré dulce de batata y calabaza anco ligado con manteca.
- **Prompt Fotográfico:** *"Costillita de cerdo dorada con limón, acompañada de porción plana de puré mixto dulce de calabaza y batata anaranjado con manteca."*

### ↙️ Inferior Izquierdo — Cazuela de Carne con Mandioca, Puerro y Pimentón (`plate_cat_271`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Tortuguita en Bifes
  - **Carbohidrato:** 🪵 Mandioca / Yuca Hervida
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~20 min | **Servido:** Caliente
- **Descripción Culinaria:** Dados de tortuguita vacuna cocidos a fuego lento con trozos de mandioca tierna, rodajas de puerro y pimentón criollo.
- **Prompt Fotográfico:** *"Cazuela casera de trozos tiernos de carne vacuna sellados al fuego con mandioca hervida blanda y rodajitas de puerro con pimentón."*

### ↘️ Inferior Derecho — Pechuga al Limón con Mandioca Dorada y Brócoli (`plate_cat_272`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🪵 Mandioca / Yuca Hervida
  - **Vegetales:** 🥦 Brócoli al Vapor
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Suprema de pollo a la plancha con limón, acompañada de trozos de mandioca dorados en sartén y arbolitos verdes de brócoli al vapor.
- **Prompt Fotográfico:** *"Pechuga de pollo dorada con gajo de limón, acompañada de trozos de mandioca dorados en sartén y brócoli al vapor verde brillante."*

> [!NOTE] Prompt consolidado para generar el Lote 68 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Bife de carne vacuna con abundante cebolla dorada por encima, acompañado de trozos rústicos de mandioca hervida blanca con oliva.
- Cuadrante Superior Derecho: Costillita de cerdo dorada con limón, acompañada de porción plana de puré mixto dulce de calabaza y batata anaranjado con manteca.
- Cuadrante Inferior Izquierdo: Cazuela casera de trozos tiernos de carne vacuna sellados al fuego con mandioca hervida blanda y rodajitas de puerro con pimentón.
- Cuadrante Inferior Derecho: Pechuga de pollo dorada con gajo de limón, acompañada de trozos de mandioca dorados en sartén y brócoli al vapor verde brillante.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 69 (lote_69): Cenas Ligeras Rápidas sin Harinas
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Merluza al Vapor con Brócoli y Aceite de Oliva (Low-Carb) (`plate_cat_273`)
- **Ingredientes Clave:**
  - **Proteína:** 🐟 Filete de Pescado Blanco (Merluza / Tilapia)
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥦 Brócoli al Vapor + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Filete de pescado blanco cocido al vapor suavemente con limón, acompañado de arbolitos verdes de brócoli y rodajas de tomate.
- **Prompt Fotográfico:** *"Filete de merluza blanca al vapor con gajo de limón y perejil, acompañado de brócoli verde al vapor y rodajas de tomate fresco con oliva."*

### ↗️ Superior Derecho — Huevos Revueltos con Tomates Asados y Queso Sardo (Low-Carb) (`plate_cat_274`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Caliente
- **Descripción Culinaria:** Huevos revueltos esponjosos salteados a la sartén con manteca, servidos con mitades de tomate asado dulce y queso rallado.
- **Prompt Fotográfico:** *"Huevos revueltos esponjosos y cremosos salteados en sartén, acompañados de tomates asados con orégano y lluvia de queso sardo."*

### ↙️ Inferior Izquierdo — Pechuga Grillada con Ensalada de Rabanitos y Rúcula (Low-Carb) (`plate_cat_275`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥗 Rabanitos en Rodajas + 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Pechuga de pollo dorada a la plancha de hierro con limón, servida con rodajitas crocantes de rabanitos frescos y hojas de rúcula.
- **Prompt Fotográfico:** *"Suprema de pollo a la plancha con marcas doradas, servida al lado de ensalada fresca de rodajas de rabanito y hojas de rúcula con oliva."*

### ↘️ Inferior Derecho — Tofu a la Plancha con Espinacas Salteadas y Semillas (Low-Carb) (`plate_cat_276`)
- **Ingredientes Clave:**
  - **Proteína:** 🧈 Tofu a la Plancha
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Láminas doradas de tofu a la sartén, acompañadas de hojas de espinaca tierna salteadas con manteca y semillas de sésamo tostadas.
- **Prompt Fotográfico:** *"Láminas doradas y crocantes de tofu a la plancha, servidas junto a espinacas salteadas brillantes y mix de semillas tostadas con oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 69 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Filete de merluza blanca al vapor con gajo de limón y perejil, acompañado de brócoli verde al vapor y rodajas de tomate fresco con oliva.
- Cuadrante Superior Derecho: Huevos revueltos esponjosos y cremosos salteados en sartén, acompañados de tomates asados con orégano y lluvia de queso sardo.
- Cuadrante Inferior Izquierdo: Suprema de pollo a la plancha con marcas doradas, servida al lado de ensalada fresca de rodajas de rabanito y hojas de rúcula con oliva.
- Cuadrante Inferior Derecho: Láminas doradas y crocantes de tofu a la plancha, servidas junto a espinacas salteadas brillantes y mix de semillas tostadas con oliva.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

## Lote 70 (lote_70): Menú Balanceado Final
- **Estado:** ⏳ Pendiente de generación
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Milanesa de Carne con Puré Mixto de Calabaza y Batata (`plate_cat_277`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Milanesa (Carne o Pollo)
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🎃 Zapallo / Calabaza / Anco
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Milanesa de carne dorada crocante con limón, servida con porción plana y suave de puré mixto de batata y calabaza dulce.
- **Prompt Fotográfico:** *"Milanesa de carne vacuna dorada y crujiente con gajo de limón, acompañada de puré plano mixto de calabaza y batata anaranjado brillante."*

### ↗️ Superior Derecho — Fideos al Dente con Atún al Natural y Tomates Cherry (`plate_cat_278`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Fideos secos al dente salteados en sartén con lomitos de atún al natural, mitades de tomates cherry jugosos y aceite de oliva virgen.
- **Prompt Fotográfico:** *"Plato de fideos al dente salteados con lomos desmenuzados de atún al natural, tomates cherry cortados al medio y perejil fresco con oliva."*

### ↙️ Inferior Izquierdo — Cazuela de Pollo con Arroz Amarillo, Morrón y Verdeo (`plate_cat_279`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pata-Muslo de Pollo
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde) + 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~25 min | **Servido:** Caliente
- **Descripción Culinaria:** Pata-muslo de pollo cocida a la cacerola con arroz blanco sazonado, tiras de morrón rojo y cebollita de verdeo fresca.
- **Prompt Fotográfico:** *"Cazuela casera servida en plato con trozos de pollo jugoso cocidos con arroz amarillo suave, tiras de morrón y verdeo picado."*

### ↘️ Inferior Derecho — Ensalada Completa de Lentejas Frías con Huevo Duro y Palta (`plate_cat_280`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🥑 Palta / Aguacate
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Lentejas cocidas firmes frías mezcladas con cubos de tomate fresco, gajos de palta madura y trozos de huevo duro con aceite de oliva.
- **Prompt Fotográfico:** *"Bowl de ensalada fresca de lentejas cocidas firmes con trozos rústicos de huevo duro, dados de tomate fresco y gajos de palta madura."*

> [!NOTE] Prompt consolidado para generar el Lote 70 (Grilla 2x2)
```text
Genera una fotografía cenital de comida casera cotidiana real (authentic homemade weeknight food) en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato casero terminado, servido de forma casual y sin pretensiones en plato de loza común:
- Cuadrante Superior Izquierdo: Milanesa de carne vacuna dorada y crujiente con gajo de limón, acompañada de puré plano mixto de calabaza y batata anaranjado brillante.
- Cuadrante Superior Derecho: Plato de fideos al dente salteados con lomos desmenuzados de atún al natural, tomates cherry cortados al medio y perejil fresco con oliva.
- Cuadrante Inferior Izquierdo: Cazuela casera servida en plato con trozos de pollo jugoso cocidos con arroz amarillo suave, tiras de morrón y verdeo picado.
- Cuadrante Inferior Derecho: Bowl de ensalada fresca de lentejas cocidas firmes con trozos rústicos de huevo duro, dados de tomate fresco y gajos de palta madura.
Estilo fotográfico obligatorio: Toma cenital directa estricta a 90 grados (top-down 90° flat lay overhead shot), cámara completamente perpendicular mirando directamente hacia abajo sobre el plato entero, sin inclinación ni perspectiva a 45 grados. Estilo de comida casera real de todos los días (unpretentious homemade food): arroz servido suelto y esparcido de forma plana e irregular con cuchara (PROHIBIDO terminantemente: forma de bola, domo, cilindro, molde o bocha de helado); puré de papas casero rústico aplastado de forma despareja y plana con tenedor (PROHIBIDO terminantemente: flores de puré, rosetas, espirales concéntricas, manga pastelera o copetes redondos); ensaladas simples mezcladas naturalmente (PROHIBIDO abanicos de lechuga o arreglos de restaurante gourmet); comida apetitosa, rica y simple, recién servida en la mesa de casa. Solo el plato redondo centrado sobre la mesa, sin tenedores, cuchillos ni servilletas en los costados del plato, sin bordes negros y sin texto superpuesto.
```

---

