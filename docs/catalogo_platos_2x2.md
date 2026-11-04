# Catálogo Maestro de Platos 2x2 (Cobertura $ge 80%$)

Este documento contiene la biblioteca oficial de **80 combinaciones gastronómicas cotidianas argentinas**, organizadas en **20 lotes de 4 platos cada uno** para su generación fotográfica en grillas simétricas de 2x2 mediante Inteligencia Artificial.

---

## Métricas del Catálogo
- **Total de Lotes (Imágenes 2x2 a generar):** 20
- **Total de Platos resultantes (recortados 1:1):** 80
- **Distribución por Estilo de Servicio:**
  - 🍲 **Platos Calientes (horno, plancha, wok, guisados):** 60 platos (75%)
  - 🥗 **Platos Fríos (ensaladas, bowls, viandas de verano):** 20 platos (25%)
- **Distribución por Macronutrientes:**
  - 🥔 **Platos con Carbohidrato almidonado:** 65 platos (81.25%)
  - 🥩 **Platos Low-Carb / Cenas Ligeras (Doble vegetal + grasa):** 15 platos (18.75%)

---

## Estructura de Cuadrantes para cada Lote 2x2
Cada imagen generada por la IA debe ser cuadrada (proporción 1:1) y dividirse simétricamente en 4 cuadrantes:
| Cuadrante | Ubicación | Código |
| :--- | :--- | :--- |
| **Cuadrante 1** | Superior Izquierdo | `superior_izq` (Top-Left) |
| **Cuadrante 2** | Superior Derecho | `superior_der` (Top-Right) |
| **Cuadrante 3** | Inferior Izquierdo | `inferior_izq` (Bottom-Left) |
| **Cuadrante 4** | Inferior Derecho | `inferior_der` (Bottom-Right) |

---

## Lote 1 (lote_01): Clásicos Fundacionales Argentinos
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
- **Prompt Fotográfico:** *"Suprema de pechuga de pollo dorada y jugosa con hierbas y rodajas de limón, cubos de calabaza anco asada dulce, brócoli verde brillante al vapor y abanico de láminas de palta fresca."*

### ↙️ Inferior Izquierdo — Merluza al Limón con Arroz y Espinaca (`plate_cat_03`)
- **Ingredientes Clave:**
  - **Proteína:** 🐟 Filete de Pescado Blanco (Merluza / Tilapia)
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Filet de merluza a la plancha con perejil y gajos de limón, acompañado de arroz blanco esponjoso y espinacas tiernas salteadas con oliva.
- **Prompt Fotográfico:** *"Filete de pescado blanco (merluza) a la plancha con perejil fresco y gajo de limón, timbal de arroz blanco esponjoso al vapor, espinacas salteadas al dente con un hilo de aceite de oliva."*

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
Genera una fotografía gastronómica profesional de alta resolución en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato terminado y emplatado con vajilla moderna cerámica e iluminación cálida de estudio:
- Cuadrante Superior Izquierdo: Bife de lomo / churrasco jugoso sellado a la plancha con marcas de cocción, acompañado de puré de papas casero dorado y ensalada fresca de hojas de rúcula y tomates cherry con un chorrito de aceite de oliva virgen.
- Cuadrante Superior Derecho: Suprema de pechuga de pollo dorada y jugosa con hierbas y rodajas de limón, cubos de calabaza anco asada dulce, brócoli verde brillante al vapor y abanico de láminas de palta fresca.
- Cuadrante Inferior Izquierdo: Filete de pescado blanco (merluza) a la plancha con perejil fresco y gajo de limón, timbal de arroz blanco esponjoso al vapor, espinacas salteadas al dente con un hilo de aceite de oliva.
- Cuadrante Inferior Derecho: Huevos revueltos cremosos y esponjosos sobre plato cerámico, acompañados de fideos salteados al wok con tiras finas de morrón rojo, cebolla y zanahoria, terminados con semillas de girasol tostadas.
Estilo: Fotografía editorial cenital a 45 grados, ultra nítida, ingredientes frescos, presentación limpia y apetitosa sin bordes negros ni texto superpuesto.
```

---

## Lote 2 (lote_02): Milanesas y Comidas Caseras Populares
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Milanesa de Carne con Puré y Mixta (`plate_cat_05`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Milanesa (Carne o Pollo)
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Milanesa clásica de nalga/bola de lomo crujiente al horno con puré de papas casero y ensalada mixta de lechuga y tomate.
- **Prompt Fotográfico:** *"Milanesa de carne vacuna dorada y crujiente recién horneada con gajo de limón, porción generosa de puré de papas rústico y ensalada clásica de lechuga criolla y tomate redondo con aceite de oliva."*

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
- **Prompt Fotográfico:** *"Carne picada salteada bien sazonada con cebolla dorada y morrón rojo en cubitos, corona de arroz blanco esponjoso, rodajas de huevo duro y aceitunas verdes brillantes."*

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
Genera una fotografía gastronómica profesional de alta resolución en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato terminado y emplatado con vajilla moderna cerámica e iluminación cálida de estudio:
- Cuadrante Superior Izquierdo: Milanesa de carne vacuna dorada y crujiente recién horneada con gajo de limón, porción generosa de puré de papas rústico y ensalada clásica de lechuga criolla y tomate redondo con aceite de oliva.
- Cuadrante Superior Derecho: Suprema milanesa de pollo dorada al horno, junto a un nido de fideos salteados con manteca fundida y lluvia de queso rallado sardo gratinado, acompañado de rodajas de tomate perita.
- Cuadrante Inferior Izquierdo: Carne picada salteada bien sazonada con cebolla dorada y morrón rojo en cubitos, corona de arroz blanco esponjoso, rodajas de huevo duro y aceitunas verdes brillantes.
- Cuadrante Inferior Derecho: Pata-muslo de pollo asado con piel dorada y crocante con romero y limón, acompañado de gajos de batata asada caramelizada y cebolla dorada al horno con aceite de oliva.
Estilo: Fotografía editorial cenital a 45 grados, ultra nítida, ingredientes frescos, presentación limpia y apetitosa sin bordes negros ni texto superpuesto.
```

---

## Lote 3 (lote_03): Pastas, Guisos y Platos de Olla
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

### ↙️ Inferior Izquierdo — Pastel de Papas Individual Gratinado (`plate_cat_11`)
- **Ingredientes Clave:**
  - **Proteína:** 🥘 Carne Picada / Molida
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~20 min | **Servido:** Caliente
- **Descripción Culinaria:** Porción de pastel de papas con base jugosa de carne picada con cebolla y aceitunas, cubierta con puré de papas dorado y gratinado.
- **Prompt Fotográfico:** *"Porción cuadrada servida de pastel de papas tradicional: base espesa y jugosa de carne molida sazonada con cebolla dorada y aceitunas, coronada por puré de papas con costra gratinada al horno."*

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
Genera una fotografía gastronómica profesional de alta resolución en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato terminado y emplatado con vajilla moderna cerámica e iluminación cálida de estudio:
- Cuadrante Superior Izquierdo: Plato hondo de fideos spaghetti al dente con salsa tuco boloñesa casera con abundante carne picada magra, tomate fresco reducido, hojas de laurel y abundante lluvia de queso parmesano rallado.
- Cuadrante Superior Derecho: Cazuela de barro humeante con guiso express de lentejas tiernas, carne picada salteada, rodajas de zanahoria naranja, morrón rojo en cubitos y un toque de pimentón dulce con aceite de oliva.
- Cuadrante Inferior Izquierdo: Porción cuadrada servida de pastel de papas tradicional: base espesa y jugosa de carne molida sazonada con cebolla dorada y aceitunas, coronada por puré de papas con costra gratinada al horno.
- Cuadrante Inferior Derecho: Plato hondo de guisado criollo con porotos blancos tiernos, trozos dorados y jugosos de bondiola de cerdo, cubos de zapallo anco color naranja intenso y perejil fresco picado.
Estilo: Fotografía editorial cenital a 45 grados, ultra nítida, ingredientes frescos, presentación limpia y apetitosa sin bordes negros ni texto superpuesto.
```

---

## Lote 4 (lote_04): Cortes Vacunos Cotidianos a la Plancha y Olla
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Tortuguita en Bifes a la Criolla con Arroz (`plate_cat_13`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Tortuguita en Bifes
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde) + 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Bifecitos finos de tortuguita sellados a la plancha con cebolla y morrón salteados, servidos con arroz blanco al vapor.
- **Prompt Fotográfico:** *"Bifecitos finos de carne vacuna (tortuguita) dorados a la plancha cubiertos de salteado criollo de cebolla en juliana y tiras de morrón rojo, con timbal de arroz blanco al vapor."*

### ↗️ Superior Derecho — Palomita en Bifes con Puré de Batata y Ensalada (`plate_cat_14`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Palomita en Bifes
  - **Carbohidrato:** 🍠 Batata / Camote Asado
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Bifecitos tiernos de palomita vuelta y vuelta a fuego vivo con puré cremoso de batata y hojas de rúcula.
- **Prompt Fotográfico:** *"Bifes delgados de palomita a la plancha con costra dorada, acompañados de puré suave de batata asada y bouquet de hojas frescas de rúcula con aceite de oliva extra virgen."*

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
Genera una fotografía gastronómica profesional de alta resolución en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato terminado y emplatado con vajilla moderna cerámica e iluminación cálida de estudio:
- Cuadrante Superior Izquierdo: Bifecitos finos de carne vacuna (tortuguita) dorados a la plancha cubiertos de salteado criollo de cebolla en juliana y tiras de morrón rojo, con timbal de arroz blanco al vapor.
- Cuadrante Superior Derecho: Bifes delgados de palomita a la plancha con costra dorada, acompañados de puré suave de batata asada y bouquet de hojas frescas de rúcula con aceite de oliva extra virgen.
- Cuadrante Inferior Izquierdo: Bife de hígado vacuno tierno y jugoso cubierto de abundantes aros de cebolla dorada caramelizada, servido con puré de papas rústico emulsionado con manteca derretida.
- Cuadrante Inferior Derecho: Tira de asado con hueso bien marcada y dorada a la plancha, servida junto a una porción de clásica ensalada rusa (cubitos de papa y zanahoria) decorada con aceitunas verdes enteras.
Estilo: Fotografía editorial cenital a 45 grados, ultra nítida, ingredientes frescos, presentación limpia y apetitosa sin bordes negros ni texto superpuesto.
```

---

## Lote 5 (lote_05): Cerdo y Aves con Guarniciones Variadas
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
Genera una fotografía gastronómica profesional de alta resolución en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato terminado y emplatado con vajilla moderna cerámica e iluminación cálida de estudio:
- Cuadrante Superior Izquierdo: Costillita de cerdo dorada a la plancha con limón, acompañada de rodajas de batata asada dulce y espinacas tiernas salteadas con aceite de oliva extra virgen.
- Cuadrante Superior Derecho: Medallones gruesos de bondiola de cerdo sellados con costra caramelizada, porción de choclo amarillo desgranado salteado con manteca y tiras de morrón rojo asado dulce.
- Cuadrante Inferior Izquierdo: Pechuga de pollo a la plancha dorada en filetes, servida con arroz blanco salteado con abundante cebolla de verdeo en rodajitas y bastones de zanahoria brillante al oliva.
- Cuadrante Inferior Derecho: Pata-muslo de pollo al horno dorado al orégano y limón, acompañado de trozos suaves de mandioca hervida blanca aderezados con aceite de oliva y perejil picado, junto a hojas verdes.
Estilo: Fotografía editorial cenital a 45 grados, ultra nítida, ingredientes frescos, presentación limpia y apetitosa sin bordes negros ni texto superpuesto.
```

---

## Lote 6 (lote_06): Pescados y Conservas al Plato Caliente
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
- **Prompt Fotográfico:** *"Filete de pescado blanco merluza tierno y dorado, servido sobre un colorido wok de vegetales en juliana (zucchini, morrón rojo y cebolla) con porción de arroz blanco esponjoso."*

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
Genera una fotografía gastronómica profesional de alta resolución en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato terminado y emplatado con vajilla moderna cerámica e iluminación cálida de estudio:
- Cuadrante Superior Izquierdo: Filetes de merluza blanca dorados a la plancha con rodajas de limón y perejil, acompañados de puré de papas casero suave y rodajas de tomate fresco condimentadas con aceite de oliva.
- Cuadrante Superior Derecho: Filete de pescado blanco merluza tierno y dorado, servido sobre un colorido wok de vegetales en juliana (zucchini, morrón rojo y cebolla) con porción de arroz blanco esponjoso.
- Cuadrante Inferior Izquierdo: Plato de fideos al dente salteados en sartén con trozos de atún en lomo, tomates en cubos dorados, aceitunas negras en rodajas y hojitas de albahaca fresca.
- Cuadrante Inferior Derecho: Lomos tiernos de caballa salteados en sartén caliente con papas cocidas en cubos, lluvia de cebolla de verdeo en rodajas finas y pizca de pimentón ahumado con aceite de oliva.
Estilo: Fotografía editorial cenital a 45 grados, ultra nítida, ingredientes frescos, presentación limpia y apetitosa sin bordes negros ni texto superpuesto.
```

---

## Lote 7 (lote_07): Huevos y Omelettes Rápidos de Almuerzo y Cena
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
Genera una fotografía gastronómica profesional de alta resolución en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato terminado y emplatado con vajilla moderna cerámica e iluminación cálida de estudio:
- Cuadrante Superior Izquierdo: Omelette esponjoso dorado doblado a la mitad con queso fresco derretido en su interior, acompañado de dados de batata asada dorada y tomates cherry con aceite de oliva.
- Cuadrante Superior Derecho: Bowl tibio con huevos revueltos cremosos montados sobre avena salada cocida, champiñones dorados en rodajas a la sartén y gajos de palta madura con pimienta negra recién molida.
- Cuadrante Inferior Izquierdo: Plato hondo de clásico Revuelto Gramajo porteño: huevos revueltos húmedos y cremosos combinados con papas en bastones delgados dorados y cebolla salteada a la manteca fundida.
- Cuadrante Inferior Derecho: Triángulo grueso servido de tortilla de acelga y espinaca verde intenso con papas picadas, cubierta con queso rallado dorado y ensalada de rodajas de tomate con orégano.
Estilo: Fotografía editorial cenital a 45 grados, ultra nítida, ingredientes frescos, presentación limpia y apetitosa sin bordes negros ni texto superpuesto.
```

---

## Lote 8 (lote_08): Vegetales Rellenos y Platos Gratinados
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
- **Prompt Fotográfico:** *"Láminas gruesas de berenjena asada a la napolitana cubiertas con salsa de tomate casera y abundante queso fresco fundido con orégano, servidas junto a puré de papas casero."*

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
Genera una fotografía gastronómica profesional de alta resolución en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato terminado y emplatado con vajilla moderna cerámica e iluminación cálida de estudio:
- Cuadrante Superior Izquierdo: Zapallitos redondos cortados a la mitad y rellenos con carne picada jugosa, arroz blanco y cebollita, cubiertos de queso rallado gratinado dorado burbujeante.
- Cuadrante Superior Derecho: Media calabaza asada caramelizada ahuecada y rellena de pechuga de pollo desmenuzada, granos de choclo amarillo dulce y queso sardo rallado dorado al horno.
- Cuadrante Inferior Izquierdo: Láminas gruesas de berenjena asada a la napolitana cubiertas con salsa de tomate casera y abundante queso fresco fundido con orégano, servidas junto a puré de papas casero.
- Cuadrante Inferior Derecho: Medio morrón rojo grande asado al horno relleno con carne picada bien condimentada, arroz blanco y queso derretido dorado, con cebollita de verdeo fresca encima.
Estilo: Fotografía editorial cenital a 45 grados, ultra nítida, ingredientes frescos, presentación limpia y apetitosa sin bordes negros ni texto superpuesto.
```

---

## Lote 9 (lote_09): Woks y Salteados Rápidos al Fuego Fuerte
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Wok de Pollo con Fideos, Vegetales y Semillas (`plate_cat_33`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥘 Wok de Vegetales Mixtos
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Tiras de pechuga salteadas a fuego fuerte con fideos secos, morrón, cebolla y zanahoria, coronadas con mix de semillas tostadas.
- **Prompt Fotográfico:** *"Wok humeante con tiras doradas de pechuga de pollo mezcladas con fideos al dente, tiras crujientes de morrón rojo, cebolla y zanahoria, espolvoreadas con semillas de sésamo y chía."*

### ↗️ Superior Derecho — Salteado de Carne con Chauchas y Arroz Blanco (`plate_cat_34`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🫛 Chauchas al Vapor o Salteadas + 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Tiras de bife magro salteadas con chauchas verdes tiernas y cebolla en juliana, servidas con arroz blanco.
- **Prompt Fotográfico:** *"Salteado en sartén de tiras jugosas de bife vacuno con chauchas verdes enteras tiernas y cebolla dorada, acompañado de una porción de arroz blanco al vapor con aceite de oliva."*

### ↙️ Inferior Izquierdo — Cerdo Salteado con Zucchini, Hongos y Fideos (`plate_cat_35`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Costillita / Bife de Cerdo
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥒 Zucchini / Zapallito a la Plancha + 🍄 Hongos / Champiñones Salteados
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Tiras de costillita de cerdo doradas con dados de zucchini y champiñones salteados, mezclados con fideos cinta.
- **Prompt Fotográfico:** *"Tiras doradas de carne de cerdo salteadas a fuego vivo con medias lunas de zucchini, láminas de champiñones dorados y fideos cintas con un toque de aceite de oliva."*

### ↘️ Inferior Derecho — Wok de Tofu con Brócoli, Arroz y Sésamo (`plate_cat_36`)
- **Ingredientes Clave:**
  - **Proteína:** 🧈 Tofu a la Plancha
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🥦 Brócoli al Vapor
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Cubos de tofu bien dorados a la plancha con arbolitos de brócoli al vapor, arroz blanco o integral y semillas de sésamo.
- **Prompt Fotográfico:** *"Plato vegetariano con cubos crocantes de tofu dorado a la sartén, arbolitos de brócoli verde brillante al vapor, arroz blanco esponjoso y semillas de sésamo tostadas espolvoreadas."*

> [!NOTE] Prompt consolidado para generar el Lote 9 (Grilla 2x2)
```text
Genera una fotografía gastronómica profesional de alta resolución en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato terminado y emplatado con vajilla moderna cerámica e iluminación cálida de estudio:
- Cuadrante Superior Izquierdo: Wok humeante con tiras doradas de pechuga de pollo mezcladas con fideos al dente, tiras crujientes de morrón rojo, cebolla y zanahoria, espolvoreadas con semillas de sésamo y chía.
- Cuadrante Superior Derecho: Salteado en sartén de tiras jugosas de bife vacuno con chauchas verdes enteras tiernas y cebolla dorada, acompañado de una porción de arroz blanco al vapor con aceite de oliva.
- Cuadrante Inferior Izquierdo: Tiras doradas de carne de cerdo salteadas a fuego vivo con medias lunas de zucchini, láminas de champiñones dorados y fideos cintas con un toque de aceite de oliva.
- Cuadrante Inferior Derecho: Plato vegetariano con cubos crocantes de tofu dorado a la sartén, arbolitos de brócoli verde brillante al vapor, arroz blanco esponjoso y semillas de sésamo tostadas espolvoreadas.
Estilo: Fotografía editorial cenital a 45 grados, ultra nítida, ingredientes frescos, presentación limpia y apetitosa sin bordes negros ni texto superpuesto.
```

---

## Lote 10 (lote_10): Legumbres, Quinoa y Risottos Criollos
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Guiso de Porotos Alubia con Carne y Calabaza (`plate_cat_37`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🎃 Zapallo / Calabaza / Anco
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~20 min | **Servido:** Caliente
- **Descripción Culinaria:** Estofado criollo de porotos alubia tiernos con cubos de carne vacuna magra y dados de calabaza dulce.
- **Prompt Fotográfico:** *"Plato hondo de guisado de porotos alubia blancos en salsa suave y espesa, bocados tiernos de carne vacuna sellada y dados anaranjados de calabaza dulce con aceite de oliva."*

### ↗️ Superior Derecho — Quinoa Caliente con Pollo, Hongos y Puerro (`plate_cat_38`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🌾 Quinoa
  - **Vegetales:** 🍄 Hongos / Champiñones Salteados + 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Bowl tibio de quinoa esponjosa con cubos dorados de pechuga de pollo, champiñones salteados y puerro al oliva.
- **Prompt Fotográfico:** *"Bowl caliente con base de quinoa cocida esponjosa, cubos dorados de pechuga de pollo a la plancha, champiñones salteados en láminas y rodajas finas de puerro pochado con oliva."*

### ↙️ Inferior Izquierdo — Lentejas Estofadas con Huevo Duro y Zanahoria (`plate_cat_39`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Plato nutritivo de lentejas estofadas con rodajas de zanahoria tierna, coronadas con huevo duro en mitades y oliva.
- **Prompt Fotográfico:** *"Lentejas estofadas en salsa espesa con rodajas de zanahoria cocida, coronadas con dos mitades de huevo duro con yema dorada y un toque de pimentón dulce con aceite de oliva."*

### ↘️ Inferior Derecho — Arroz Cremoso con Pollo, Manteca y Queso (`plate_cat_40`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🧈 Manteca
- **Tiempo sugerido:** ⏱️ ~18 min | **Servido:** Caliente
- **Descripción Culinaria:** Arroz cremoso estilo risotto criollo cocinado con pechuga de pollo desmenuzada, cebolla dorada, manteca y queso rallado.
- **Prompt Fotográfico:** *"Arroz cremoso brillante ligado con manteca y queso sardo rallado, con bocados dorados de pechuga de pollo y cebolla rehogada, decorado con perejil fresco picado."*

> [!NOTE] Prompt consolidado para generar el Lote 10 (Grilla 2x2)
```text
Genera una fotografía gastronómica profesional de alta resolución en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato terminado y emplatado con vajilla moderna cerámica e iluminación cálida de estudio:
- Cuadrante Superior Izquierdo: Plato hondo de guisado de porotos alubia blancos en salsa suave y espesa, bocados tiernos de carne vacuna sellada y dados anaranjados de calabaza dulce con aceite de oliva.
- Cuadrante Superior Derecho: Bowl caliente con base de quinoa cocida esponjosa, cubos dorados de pechuga de pollo a la plancha, champiñones salteados en láminas y rodajas finas de puerro pochado con oliva.
- Cuadrante Inferior Izquierdo: Lentejas estofadas en salsa espesa con rodajas de zanahoria cocida, coronadas con dos mitades de huevo duro con yema dorada y un toque de pimentón dulce con aceite de oliva.
- Cuadrante Inferior Derecho: Arroz cremoso brillante ligado con manteca y queso sardo rallado, con bocados dorados de pechuga de pollo y cebolla rehogada, decorado con perejil fresco picado.
Estilo: Fotografía editorial cenital a 45 grados, ultra nítida, ingredientes frescos, presentación limpia y apetitosa sin bordes negros ni texto superpuesto.
```

---

## Lote 11 (lote_11): Pastas y Cereales con Salsas Ligeras
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Fideos con Pollo a la Crema y Champiñones (`plate_cat_41`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🍄 Hongos / Champiñones Salteados
  - **Grasa:** 🥛 Crema de Leche
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Fideos al dente bañados en salsa suave de crema de leche con dados de pollo dorado y champiñones laminados.
- **Prompt Fotográfico:** *"Fideos cintas humeantes cubiertos con salsa cremosa de crema de leche, trozos de pechuga de pollo dorada y abundantes champiñones fileteados con pimienta blanca."*

### ↗️ Superior Derecho — Fideos con Queso Fresco, Espinaca y Nueces (`plate_cat_42`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada
  - **Grasa:** 🌰 Frutos Secos (Nueces / Almendras)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Pasta salteada con hojas de espinaca tierna, cubos de queso cremoso que se funden al servir y nueces picadas crujientes.
- **Prompt Fotográfico:** *"Plato de fideos cortos con hojas de espinaca verde oscuro salteadas, dados de queso fresco blanco semiderretido y trozos de nueces tostadas crujientes."*

### ↙️ Inferior Izquierdo — Avena Salada Caliente con Huevo y Espinaca (`plate_cat_43`)
- **Ingredientes Clave:**
  - **Proteína:** 🍳 Huevos Revueltos
  - **Carbohidrato:** 🥣 Avena (Arrollada)
  - **Vegetales:** 🥬 Espinaca o Acelga Salteada
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Caliente
- **Descripción Culinaria:** Porridge o avena salada caliente cocida con caldo, coronada con huevo revuelto o poché y espinacas al oliva.
- **Prompt Fotográfico:** *"Bowl reconfortante de avena arrollada salada cocida y cremosa, coronada con huevo revuelto tierno, hojas de espinaca salteadas y un hilo de aceite de oliva virgen extra."*

### ↘️ Inferior Derecho — Arroz con Atún a la Crema y Cebolla de Verdeo (`plate_cat_44`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🥛 Crema de Leche
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Arroz blanco caliente salteado con atún desmenuzado, un chorrito de crema de leche y aros verdes de cebollita de verdeo.
- **Prompt Fotográfico:** *"Arroz blanco cremoso salteado en sartén con lomitos de atún claro, suave emulsión de crema de leche y rodajitas verdes brillantes de cebolla de verdeo."*

> [!NOTE] Prompt consolidado para generar el Lote 11 (Grilla 2x2)
```text
Genera una fotografía gastronómica profesional de alta resolución en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato terminado y emplatado con vajilla moderna cerámica e iluminación cálida de estudio:
- Cuadrante Superior Izquierdo: Fideos cintas humeantes cubiertos con salsa cremosa de crema de leche, trozos de pechuga de pollo dorada y abundantes champiñones fileteados con pimienta blanca.
- Cuadrante Superior Derecho: Plato de fideos cortos con hojas de espinaca verde oscuro salteadas, dados de queso fresco blanco semiderretido y trozos de nueces tostadas crujientes.
- Cuadrante Inferior Izquierdo: Bowl reconfortante de avena arrollada salada cocida y cremosa, coronada con huevo revuelto tierno, hojas de espinaca salteadas y un hilo de aceite de oliva virgen extra.
- Cuadrante Inferior Derecho: Arroz blanco cremoso salteado en sartén con lomitos de atún claro, suave emulsión de crema de leche y rodajitas verdes brillantes de cebolla de verdeo.
Estilo: Fotografía editorial cenital a 45 grados, ultra nítida, ingredientes frescos, presentación limpia y apetitosa sin bordes negros ni texto superpuesto.
```

---

## Lote 12 (lote_12): Opciones Vegetarianas y Proteínas Vegetales
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Tofu a la Plancha con Puré de Calabaza y Brócoli (`plate_cat_45`)
- **Ingredientes Clave:**
  - **Proteína:** 🧈 Tofu a la Plancha
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🥦 Brócoli al Vapor + 🎃 Zapallo / Calabaza / Anco
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Láminas gruesas de tofu bien doradas y crocantes con puré mixto de papa y calabaza, más brócoli al vapor.
- **Prompt Fotográfico:** *"Láminas gruesas de tofu dorado crujiente a la plancha con hierbas, porción de puré sedoso de calabaza y papa dorada, y ramilletes de brócoli verde brillante con aceite de oliva."*

### ↗️ Superior Derecho — Fideos con Boloñesa de Soja Texturizada (`plate_cat_46`)
- **Ingredientes Clave:**
  - **Proteína:** 🫘 Soja Texturizada Salteada
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🧅 Cebolla (Salteada / Dorada) + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Fideos al dente con salsa de tomate criolla y soja texturizada sofrita con cebolla y orégano, con queso rallado.
- **Prompt Fotográfico:** *"Nido de fideos al dente cubiertos de salsa boloñesa vegetal de soja texturizada con tomate concentrado, cebolla sofrita y lluvia de queso rallado sardo."*

### ↙️ Inferior Izquierdo — Quinoa Caliente con Tofu, Zucchini y Semillas (`plate_cat_47`)
- **Ingredientes Clave:**
  - **Proteína:** 🧈 Tofu a la Plancha
  - **Carbohidrato:** 🌾 Quinoa
  - **Vegetales:** 🥒 Zucchini / Zapallito a la Plancha
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~12 min | **Servido:** Caliente
- **Descripción Culinaria:** Bowl caliente de quinoa cocida con dados de tofu sellado, rodajas de zucchini a la plancha y semillas de girasol tostadas.
- **Prompt Fotográfico:** *"Bowl tibio de quinoa esponjosa coronada con cubitos de tofu dorado, medias lunas de zucchini salteadas y semillas de girasol tostadas crujientes con oliva."*

### ↘️ Inferior Derecho — Soja Texturizada con Arroz, Morrón y Cebolla (`plate_cat_48`)
- **Ingredientes Clave:**
  - **Proteína:** 🫘 Soja Texturizada Salteada
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🫑 Morrón / Pimiento (Rojo o Verde) + 🧅 Cebolla (Salteada / Dorada)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~15 min | **Servido:** Caliente
- **Descripción Culinaria:** Salteado criollo de soja texturizada hidratada con morrón rojo y cebolla, servida con timbal de arroz blanco.
- **Prompt Fotográfico:** *"Picadillo vegetal de soja texturizada dorada en sartén con cubitos de morrón rojo dulce y cebolla salteada, acompañado de arroz blanco al vapor con aceite de oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 12 (Grilla 2x2)
```text
Genera una fotografía gastronómica profesional de alta resolución en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato terminado y emplatado con vajilla moderna cerámica e iluminación cálida de estudio:
- Cuadrante Superior Izquierdo: Láminas gruesas de tofu dorado crujiente a la plancha con hierbas, porción de puré sedoso de calabaza y papa dorada, y ramilletes de brócoli verde brillante con aceite de oliva.
- Cuadrante Superior Derecho: Nido de fideos al dente cubiertos de salsa boloñesa vegetal de soja texturizada con tomate concentrado, cebolla sofrita y lluvia de queso rallado sardo.
- Cuadrante Inferior Izquierdo: Bowl tibio de quinoa esponjosa coronada con cubitos de tofu dorado, medias lunas de zucchini salteadas y semillas de girasol tostadas crujientes con oliva.
- Cuadrante Inferior Derecho: Picadillo vegetal de soja texturizada dorada en sartén con cubitos de morrón rojo dulce y cebolla salteada, acompañado de arroz blanco al vapor con aceite de oliva.
Estilo: Fotografía editorial cenital a 45 grados, ultra nítida, ingredientes frescos, presentación limpia y apetitosa sin bordes negros ni texto superpuesto.
```

---

## Lote 13 (lote_13): Cenas Ligeras Low-Carb: Carnes y Aves
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
Genera una fotografía gastronómica profesional de alta resolución en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato terminado y emplatado con vajilla moderna cerámica e iluminación cálida de estudio:
- Cuadrante Superior Izquierdo: Bife de carne vacuna a la plancha jugoso con costra dorada, acompañado exclusivamente de una generosa porción de espinacas tiernas salteadas y champiñones dorados al ajillo con aceite de oliva.
- Cuadrante Superior Derecho: Pechuga de pollo dorada jugosa a la plancha con limón, servida junto a arbolitos de brócoli verde brillante y coliflor blanca al vapor bañados con manteca derretida y pimienta negra.
- Cuadrante Inferior Izquierdo: Costillita de cerdo marcada a la plancha bien dorada con gajo de limón, acompañada de láminas asadas de berenjena y rodajas de zucchini a la plancha con aceite de oliva extra virgen.
- Cuadrante Inferior Derecho: Dos medallones gruesos de hamburguesa casera de carne vacuna bien dorados al plato, servidos sobre un colchón de hojas de rúcula fresca con láminas de palta madura y aceite de oliva.
Estilo: Fotografía editorial cenital a 45 grados, ultra nítida, ingredientes frescos, presentación limpia y apetitosa sin bordes negros ni texto superpuesto.
```

---

## Lote 14 (lote_14): Cenas Ligeras Low-Carb: Pescados, Huevos y Tofu
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
Genera una fotografía gastronómica profesional de alta resolución en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato terminado y emplatado con vajilla moderna cerámica e iluminación cálida de estudio:
- Cuadrante Superior Izquierdo: Filete de merluza blanca cocido a la plancha con perejil fresco y limón, acompañado de chauchas verdes tiernas salteadas y dados de calabaza anco asada con aceite de oliva.
- Cuadrante Superior Derecho: Huevos revueltos esponjosos y cremosos salteados en sartén con dados dorados de zucchini tierno y terminados con abundante queso sardo rallado gratinado.
- Cuadrante Inferior Izquierdo: Omelette dorado esponjoso con centro de queso fresco derretido, acompañado de tomates en rodajas asados en sartén y espolvoreado con semillas mixtas tostadas.
- Cuadrante Inferior Derecho: Wok colorido sin fideos ni arroz: cubos de tofu dorado crocante salteados con juliana de vegetales mixtos crocantes y almendras fileteadas tostadas.
Estilo: Fotografía editorial cenital a 45 grados, ultra nítida, ingredientes frescos, presentación limpia y apetitosa sin bordes negros ni texto superpuesto.
```

---

## Lote 15 (lote_15): Cenas Express Low-Carb Cotidianas
- **Modo general:** 🍲 Caliente

### ↖️ Superior Izquierdo — Palomita en Bifes con Ensalada de Repollo y Aceitunas (`plate_cat_57`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Palomita en Bifes
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥬 Repollo (Blanco o Colorado) + 🥗 Rabanitos en Rodajas
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~10 min | **Servido:** Caliente
- **Descripción Culinaria:** Bifecitos de palomita a la plancha servidos con ensalada crujiente de repollo blanco en juliana, rabanitos y aceitunas.
- **Prompt Fotográfico:** *"Bifes delgados de carne de palomita dorados vuelta y vuelta a la plancha, acompañados de ensalada fresca de repollo blanco en tiras finas, rodajas de rabanito y aceitunas verdes."*

### ↗️ Superior Derecho — Tira de Asado con Berenjenas y Morrones Asados (`plate_cat_58`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Tira de Asado
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🍆 Berenjena a la Plancha o Asada + 🫑 Morrón / Pimiento (Rojo o Verde)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~20 min | **Servido:** Caliente
- **Descripción Culinaria:** Costilla de asado crocante a la plancha con berenjena asada ahumada y tiras de morrón quemado al fuego.
- **Prompt Fotográfico:** *"Tira de asado a la plancha bien dorada y jugosa, servida con rodajas de berenjena asada con piel tostada y tiras de morrón rojo asado dulce aderezados con aceite de oliva."*

### ↙️ Inferior Izquierdo — Pata-Muslo al Horno con Coliflor y Tomates Asados (`plate_cat_59`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pata-Muslo de Pollo
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥦 Coliflor al Vapor o Salteada + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~25 min | **Servido:** Caliente
- **Descripción Culinaria:** Presa de pollo asada con piel crujiente, servida con ramilletes de coliflor salteada al orégano y tomates asados.
- **Prompt Fotográfico:** *"Pata-muslo asada al horno bien dorada y crujiente, acompañada de ramilletes de coliflor salteada dorada a la sartén y mitades de tomate asado al orégano con aceite de oliva."*

### ↘️ Inferior Derecho — Atún Caliente con Chauchas al Vapor y Huevo Duro (`plate_cat_60`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🫛 Chauchas al Vapor o Salteadas
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Caliente
- **Descripción Culinaria:** Lomo de atún escurrido salteado tibio con chauchas al vapor y huevo duro en cuartos con aceite de oliva.
- **Prompt Fotográfico:** *"Plato caliente con lomos de atún claro sellados en sartén, chauchas verdes tiernas al vapor y cuartos de huevo duro, todo bañado con aceite de oliva virgen extra y pimienta."*

> [!NOTE] Prompt consolidado para generar el Lote 15 (Grilla 2x2)
```text
Genera una fotografía gastronómica profesional de alta resolución en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato terminado y emplatado con vajilla moderna cerámica e iluminación cálida de estudio:
- Cuadrante Superior Izquierdo: Bifes delgados de carne de palomita dorados vuelta y vuelta a la plancha, acompañados de ensalada fresca de repollo blanco en tiras finas, rodajas de rabanito y aceitunas verdes.
- Cuadrante Superior Derecho: Tira de asado a la plancha bien dorada y jugosa, servida con rodajas de berenjena asada con piel tostada y tiras de morrón rojo asado dulce aderezados con aceite de oliva.
- Cuadrante Inferior Izquierdo: Pata-muslo asada al horno bien dorada y crujiente, acompañada de ramilletes de coliflor salteada dorada a la sartén y mitades de tomate asado al orégano con aceite de oliva.
- Cuadrante Inferior Derecho: Plato caliente con lomos de atún claro sellados en sartén, chauchas verdes tiernas al vapor y cuartos de huevo duro, todo bañado con aceite de oliva virgen extra y pimienta.
Estilo: Fotografía editorial cenital a 45 grados, ultra nítida, ingredientes frescos, presentación limpia y apetitosa sin bordes negros ni texto superpuesto.
```

---

## Lote 16 (lote_16): Ensaladas y Platos Fríos de Atún y Pescado
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Ensalada de Atún con Arroz, Huevo y Aceitunas (`plate_cat_61`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Clásica ensalada veraniega de arroz blanco frío con atún en lomo, dados de tomate fresco, huevo duro picado y aceitunas verdes.
- **Prompt Fotográfico:** *"Bowl fresco de ensalada fría con arroz blanco cocido suelto, trozos generosos de atún al natural, dados de tomate perita maduro, cuartos de huevo duro y aceitunas verdes descarozadas."*

### ↗️ Superior Derecho — Salpicón de Atún con Papas, Zanahoria y Oliva (`plate_cat_62`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🥕 Zanahoria Rallada / Cocida + 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Salpicón frío con cubos de papa hervida fría, zanahoria rallada fresca, hojas de lechuga y lomos de atún aderezados con oliva.
- **Prompt Fotográfico:** *"Plato hondo de salpicón frío con cubos firmes de papa hervida, hebras de zanahoria rallada fresca, hojas de lechuga crocante y lomos de atún con hilo de aceite de oliva."*

### ↙️ Inferior Izquierdo — Ensalada de Caballa con Fideos Fríos y Rúcula (`plate_cat_63`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Caballa en Lata (al Natural o Aceite)
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula) + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Fideos secos fríos (tirabuzón/moñito) con lomos de caballa en conserva, hojas de rúcula fresca y tomates cherry.
- **Prompt Fotográfico:** *"Ensalada de fideos cortos al dente fríos mezclados con lomos enteros de caballa en conserva, hojas frescas de rúcula verde oscura y tomates cherry cortados al medio con oliva."*

### ↘️ Inferior Derecho — Bowl Frío de Arroz con Atún, Choclo y Palta (`plate_cat_64`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** 🌽 Choclo / Maíz Desgranado
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🥑 Palta / Aguacate
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Bowl fresco con base de choclo amarillo desgranado, arroz blanco frío, atún en trozos y abanico de palta con limón.
- **Prompt Fotográfico:** *"Bowl frío moderno con granos de choclo amarillo dulce, lomitos de atún claro, daditos de tomate fresco y abanico de palta cremosa rociada con gotas de limón."*

> [!NOTE] Prompt consolidado para generar el Lote 16 (Grilla 2x2)
```text
Genera una fotografía gastronómica profesional de alta resolución en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato terminado y emplatado con vajilla moderna cerámica e iluminación cálida de estudio:
- Cuadrante Superior Izquierdo: Bowl fresco de ensalada fría con arroz blanco cocido suelto, trozos generosos de atún al natural, dados de tomate perita maduro, cuartos de huevo duro y aceitunas verdes descarozadas.
- Cuadrante Superior Derecho: Plato hondo de salpicón frío con cubos firmes de papa hervida, hebras de zanahoria rallada fresca, hojas de lechuga crocante y lomos de atún con hilo de aceite de oliva.
- Cuadrante Inferior Izquierdo: Ensalada de fideos cortos al dente fríos mezclados con lomos enteros de caballa en conserva, hojas frescas de rúcula verde oscura y tomates cherry cortados al medio con oliva.
- Cuadrante Inferior Derecho: Bowl frío moderno con granos de choclo amarillo dulce, lomitos de atún claro, daditos de tomate fresco y abanico de palta cremosa rociada con gotas de limón.
Estilo: Fotografía editorial cenital a 45 grados, ultra nítida, ingredientes frescos, presentación limpia y apetitosa sin bordes negros ni texto superpuesto.
```

---

## Lote 17 (lote_17): Salpicones de Pollo y Ensaladas de Ave
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Salpicón Criollo de Pollo con Papas y Hojas Verdes (`plate_cat_65`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula) + 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Pechuga de pollo cocida desmenuzada fría con cubos de papa hervida, lechuga crocante y zanahoria rallada al oliva.
- **Prompt Fotográfico:** *"Fuente de ensalada fresca con hebras de pechuga de pollo cocida desmenuzada, dados de papa hervida fría, hojas de lechuga cortada, zanahoria rallada fina y aceite de oliva virgen."*

### ↗️ Superior Derecho — Ensalada Caesar Criolla con Pollo y Parmesano (`plate_cat_66`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🧀 Queso Rallado / Semiduro (Parmesano / Sardo)
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Frío
- **Descripción Culinaria:** Tiras de pechuga dorada fría sobre colchón abundante de hojas verdes, crutones crocantes y lascas de queso sardo/parmesano.
- **Prompt Fotográfico:** *"Ensalada estilo Caesar con hojas de lechuga romana y rúcula, tiras de pechuga de pollo grillada fría, cubitos de crutones tostados dorados y láminas de queso parmesano rallado."*

### ↙️ Inferior Izquierdo — Bowl de Quinoa Fría con Pollo y Pepino (`plate_cat_67`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🌾 Quinoa
  - **Vegetales:** 🥒 Pepino en Rodajas + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Frío
- **Descripción Culinaria:** Quinoa cocida fría con cubos de pollo a la plancha, rodajas finas de pepino refrescante, tomates cherry y oliva.
- **Prompt Fotográfico:** *"Bowl fresco con base de quinoa esponjosa fría, cubos de pechuga de pollo a la plancha, rodajitas finas y crocantes de pepino con piel, tomates cherry y aderezo de aceite de oliva."*

### ↘️ Inferior Derecho — Ensalada de Pollo con Choclo, Remolacha y Nueces (`plate_cat_68`)
- **Ingredientes Clave:**
  - **Proteína:** 🍗 Pechuga / Suprema de Pollo
  - **Carbohidrato:** 🌽 Choclo / Maíz Desgranado
  - **Vegetales:** 🥗 Remolacha (Rallada o Hervida)
  - **Grasa:** 🌰 Frutos Secos (Nueces / Almendras)
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Frío
- **Descripción Culinaria:** Pollo cocido desmenuzado con choclo desgranado dulce, remolacha cocida en cubos y mariposas de nueces crujientes.
- **Prompt Fotográfico:** *"Ensalada multicolor con cubos de pechuga de pollo cocida, granos de choclo amarillo dorado, dados de remolacha cocida de color violeta intenso y trozos de nueces tostadas."*

> [!NOTE] Prompt consolidado para generar el Lote 17 (Grilla 2x2)
```text
Genera una fotografía gastronómica profesional de alta resolución en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato terminado y emplatado con vajilla moderna cerámica e iluminación cálida de estudio:
- Cuadrante Superior Izquierdo: Fuente de ensalada fresca con hebras de pechuga de pollo cocida desmenuzada, dados de papa hervida fría, hojas de lechuga cortada, zanahoria rallada fina y aceite de oliva virgen.
- Cuadrante Superior Derecho: Ensalada estilo Caesar con hojas de lechuga romana y rúcula, tiras de pechuga de pollo grillada fría, cubitos de crutones tostados dorados y láminas de queso parmesano rallado.
- Cuadrante Inferior Izquierdo: Bowl fresco con base de quinoa esponjosa fría, cubos de pechuga de pollo a la plancha, rodajitas finas y crocantes de pepino con piel, tomates cherry y aderezo de aceite de oliva.
- Cuadrante Inferior Derecho: Ensalada multicolor con cubos de pechuga de pollo cocida, granos de choclo amarillo dorado, dados de remolacha cocida de color violeta intenso y trozos de nueces tostadas.
Estilo: Fotografía editorial cenital a 45 grados, ultra nítida, ingredientes frescos, presentación limpia y apetitosa sin bordes negros ni texto superpuesto.
```

---

## Lote 18 (lote_18): Huevos Duros y Ensaladas de Legumbres Frías
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Ensalada de Lentejas Frías con Huevo Duro y Tomate (`plate_cat_69`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos + 🧅 Cebolla de Verdeo y Puerro
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Lentejas cocidas escurridas frías mezcladas con dados de tomate, huevo duro picado y cebolla de verdeo con oliva.
- **Prompt Fotográfico:** *"Bowl de ensalada de lentejas cocidas firmes y frías, tomates en cubitos frescos, cebollita de verdeo picada fina y dos huevos duros cortados en mitades con aceite de oliva."*

### ↗️ Superior Derecho — Ensalada Primavera de Fideos con Huevo y Choclo (`plate_cat_70`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🥕 Zanahoria Rallada / Cocida + 🥦 Brócoli al Vapor
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Fideos secos fríos con trozos de huevo duro, choclo en grano, zanahoria rallada fresca y aceitunas negras.
- **Prompt Fotográfico:** *"Ensalada primaveral de fideos cortos con trozos de huevo duro picado, granos de choclo amarillo, hebras de zanahoria fresca y aceitunas negras enteras."*

### ↙️ Inferior Izquierdo — Ensalada de Porotos Alubia Fríos con Huevo y Perejil (`plate_cat_71`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** 🫘 Legumbres (Lentejas o Porotos cocidos)
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Porotos alubia blancos tiernos fríos con abundante perejil fresco picado, tomate en cubos, huevo duro y aceite de oliva.
- **Prompt Fotográfico:** *"Plato de ensalada fresca de porotos blancos alubia al dente, lluvia de perejil picado, dados de tomate fresco, cuartos de huevo duro y un chorro generoso de aceite de oliva virgen."*

### ↘️ Inferior Derecho — Ensalada de Arroz Frío con Huevo, Chauchas y Palta (`plate_cat_72`)
- **Ingredientes Clave:**
  - **Proteína:** 🥚 Huevo Duro / Cocido
  - **Carbohidrato:** 🍚 Arroz (Blanco o Integral)
  - **Vegetales:** 🫛 Chauchas al Vapor o Salteadas
  - **Grasa:** 🥑 Palta / Aguacate
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Arroz blanco frío suelto con chauchas cocidas tiernas en trocitos, huevo duro picado y cubos de palta fresca.
- **Prompt Fotográfico:** *"Bowl veraniego de arroz blanco frío cocido, chauchas verdes tiernas cortadas al sesgo, trozos de huevo duro con yema firme y dados de palta madura con toque de limón."*

> [!NOTE] Prompt consolidado para generar el Lote 18 (Grilla 2x2)
```text
Genera una fotografía gastronómica profesional de alta resolución en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato terminado y emplatado con vajilla moderna cerámica e iluminación cálida de estudio:
- Cuadrante Superior Izquierdo: Bowl de ensalada de lentejas cocidas firmes y frías, tomates en cubitos frescos, cebollita de verdeo picada fina y dos huevos duros cortados en mitades con aceite de oliva.
- Cuadrante Superior Derecho: Ensalada primaveral de fideos cortos con trozos de huevo duro picado, granos de choclo amarillo, hebras de zanahoria fresca y aceitunas negras enteras.
- Cuadrante Inferior Izquierdo: Plato de ensalada fresca de porotos blancos alubia al dente, lluvia de perejil picado, dados de tomate fresco, cuartos de huevo duro y un chorro generoso de aceite de oliva virgen.
- Cuadrante Inferior Derecho: Bowl veraniego de arroz blanco frío cocido, chauchas verdes tiernas cortadas al sesgo, trozos de huevo duro con yema firme y dados de palta madura con toque de limón.
Estilo: Fotografía editorial cenital a 45 grados, ultra nítida, ingredientes frescos, presentación limpia y apetitosa sin bordes negros ni texto superpuesto.
```

---

## Lote 19 (lote_19): Quesos Frescos, Caprese y Ensaladas Livianas
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Ensalada Caprese Criolla con Queso Fresco y Rúcula (`plate_cat_73`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos + 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Rodajas gruesas de tomate maduro con láminas de queso fresco o port salut, hojas de rúcula y aceite de oliva extra virgen.
- **Prompt Fotográfico:** *"Plato plano con clásica ensalada Caprese: rodajas intercaladas de tomate perita maduro y queso fresco cremoso blanco, coronadas por hojas verdes de rúcula y aceite de oliva extra virgen."*

### ↗️ Superior Derecho — Ensalada Fresca de Ricota con Remolacha y Nueces (`plate_cat_74`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** *(Sin carbohidrato / Low-Carb)*
  - **Vegetales:** 🥗 Remolacha (Rallada o Hervida) + 🥗 Hojas Verdes (Lechuga / Rúcula)
  - **Grasa:** 🌰 Frutos Secos (Nueces / Almendras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Copos de ricota fresca sobre colchón de rúcula, dados de remolacha cocida dulce y nueces picadas crujientes.
- **Prompt Fotográfico:** *"Ensalada gourmet fresca con hojas de rúcula, dados de remolacha cocida dulce de color borravino, porciones suaves de ricota fresca blanca y mitades de nueces crocantes."*

### ↙️ Inferior Izquierdo — Pasta Fría con Dados de Queso, Tomate y Aceitunas (`plate_cat_75`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** 🍝 Fideos / Pasta
  - **Vegetales:** 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Fideos fríos al dente con dados de queso port salut/tybo, tomatitos en cuartos, aceitunas negras y albahaca fresca.
- **Prompt Fotográfico:** *"Bowl de ensalada de pasta fría con fideos tirabuzón, cubos firmes de queso semiduro, tomates cherry cortados al medio, aceitunas negras y hojitas de albahaca fresca con aceite de oliva."*

### ↘️ Inferior Derecho — Bowl de Quinoa con Queso Port Salut, Pepino y Semillas (`plate_cat_76`)
- **Ingredientes Clave:**
  - **Proteína:** 🧀 Queso Fresco / Port Salut / Ricota
  - **Carbohidrato:** 🌾 Quinoa
  - **Vegetales:** 🥒 Pepino en Rodajas + 🥗 Rabanitos en Rodajas
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Frío
- **Descripción Culinaria:** Quinoa fría con cubitos de queso port salut, rodajas finas de pepino, rabanitos crocantes y mix de semillas de chía.
- **Prompt Fotográfico:** *"Bowl saludable con base de quinoa fría suelta, dados blancos de queso port salut fresco, rodajas delgadas de pepino y rabanitos rosados, espolvoreado con semillas de sésamo y chía."*

> [!NOTE] Prompt consolidado para generar el Lote 19 (Grilla 2x2)
```text
Genera una fotografía gastronómica profesional de alta resolución en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato terminado y emplatado con vajilla moderna cerámica e iluminación cálida de estudio:
- Cuadrante Superior Izquierdo: Plato plano con clásica ensalada Caprese: rodajas intercaladas de tomate perita maduro y queso fresco cremoso blanco, coronadas por hojas verdes de rúcula y aceite de oliva extra virgen.
- Cuadrante Superior Derecho: Ensalada gourmet fresca con hojas de rúcula, dados de remolacha cocida dulce de color borravino, porciones suaves de ricota fresca blanca y mitades de nueces crocantes.
- Cuadrante Inferior Izquierdo: Bowl de ensalada de pasta fría con fideos tirabuzón, cubos firmes de queso semiduro, tomates cherry cortados al medio, aceitunas negras y hojitas de albahaca fresca con aceite de oliva.
- Cuadrante Inferior Derecho: Bowl saludable con base de quinoa fría suelta, dados blancos de queso port salut fresco, rodajas delgadas de pepino y rabanitos rosados, espolvoreado con semillas de sésamo y chía.
Estilo: Fotografía editorial cenital a 45 grados, ultra nítida, ingredientes frescos, presentación limpia y apetitosa sin bordes negros ni texto superpuesto.
```

---

## Lote 20 (lote_20): Viandas Prácticas y Bowls Nutritivos de Verano
- **Modo general:** 🥗 Frío

### ↖️ Superior Izquierdo — Salpicón de Carne Fría con Papas y Hojas Verdes (`plate_cat_77`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Bife / Churrasco Magro
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🥗 Hojas Verdes (Lechuga / Rúcula) + 🍅 Tomate en Rodajas / Cubos
  - **Grasa:** 🫒 Aceite de Oliva Extra Virgen
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Tiras frías de bife o carne asada cocida con dados de papa hervida, hojas de lechuga crocante, tomate y oliva.
- **Prompt Fotográfico:** *"Plato de salpicón criollo tradicional con tiras delgadas de carne vacuna cocida fría, dados de papa cocida al dente, hojas de lechuga fresca y tomate cortado con aceite de oliva virgen."*

### ↗️ Superior Derecho — Ensalada Rusa con Tiras de Milanesa Fría (`plate_cat_78`)
- **Ingredientes Clave:**
  - **Proteína:** 🥩 Milanesa (Carne o Pollo)
  - **Carbohidrato:** 🥔 Papa (Hervida o al Horno)
  - **Vegetales:** 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🫒 Aceitunas (Verdes o Negras)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Clásica ensalada rusa de papa y zanahoria con tiras crujientes de milanesa fría y aceitunas verdes.
- **Prompt Fotográfico:** *"Porción de ensalada rusa tradicional con cubitos de papa y zanahoria, coronada con tiras de milanesa dorada crujiente fría cortada al bies y aceitunas verdes brillantes."*

### ↙️ Inferior Izquierdo — Bowl Detox de Tofu Frío con Quinoa y Repollo (`plate_cat_79`)
- **Ingredientes Clave:**
  - **Proteína:** 🧈 Tofu a la Plancha
  - **Carbohidrato:** 🌾 Quinoa
  - **Vegetales:** 🥬 Repollo (Blanco o Colorado) + 🥒 Pepino en Rodajas
  - **Grasa:** 🥑 Palta / Aguacate
- **Tiempo sugerido:** ⏱️ ~8 min | **Servido:** Frío
- **Descripción Culinaria:** Tofu firme frío marinado en limón sobre quinoa cocida, juliana fina de repollo colorado, pepino y palta.
- **Prompt Fotográfico:** *"Bowl fresco con base de quinoa suelta, cubos de tofu blanco marinado, repollo colorado cortado en juliana finísima, rodajas de pepino y gajos de palta madura con oliva."*

### ↘️ Inferior Derecho — Ensalada de Avena Remojada con Atún y Zanahoria (`plate_cat_80`)
- **Ingredientes Clave:**
  - **Proteína:** 🥫 Atún al Natural (Lata)
  - **Carbohidrato:** 🥣 Avena (Arrollada)
  - **Vegetales:** 🥕 Zanahoria Rallada / Cocida
  - **Grasa:** 🌻 Semillas (Chía, Girasol o Sésamo)
- **Tiempo sugerido:** ⏱️ ~5 min | **Servido:** Frío
- **Descripción Culinaria:** Base fresca de avena arrollada hidratada con agua o caldo frío, lomitos de atún al natural, zanahoria rallada y semillas.
- **Prompt Fotográfico:** *"Bowl nutritivo de avena arrollada tierna hidratada en frío, cubierta con lomitos de atún claro, hebras de zanahoria fresca y semillas de girasol y sésamo tostadas con oliva."*

> [!NOTE] Prompt consolidado para generar el Lote 20 (Grilla 2x2)
```text
Genera una fotografía gastronómica profesional de alta resolución en formato cuadrado 1:1, dividida estrictamente en una grilla simétrica de 4 CUADRANTES (2x2). Cada cuadrante muestra un plato terminado y emplatado con vajilla moderna cerámica e iluminación cálida de estudio:
- Cuadrante Superior Izquierdo: Plato de salpicón criollo tradicional con tiras delgadas de carne vacuna cocida fría, dados de papa cocida al dente, hojas de lechuga fresca y tomate cortado con aceite de oliva virgen.
- Cuadrante Superior Derecho: Porción de ensalada rusa tradicional con cubitos de papa y zanahoria, coronada con tiras de milanesa dorada crujiente fría cortada al bies y aceitunas verdes brillantes.
- Cuadrante Inferior Izquierdo: Bowl fresco con base de quinoa suelta, cubos de tofu blanco marinado, repollo colorado cortado en juliana finísima, rodajas de pepino y gajos de palta madura con oliva.
- Cuadrante Inferior Derecho: Bowl nutritivo de avena arrollada tierna hidratada en frío, cubierta con lomitos de atún claro, hebras de zanahoria fresca y semillas de girasol y sésamo tostadas con oliva.
Estilo: Fotografía editorial cenital a 45 grados, ultra nítida, ingredientes frescos, presentación limpia y apetitosa sin bordes negros ni texto superpuesto.
```

---

