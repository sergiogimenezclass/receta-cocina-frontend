import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Cargar seed para validar IDs
const seedModule = await import('../js/data/seed.js');
const validComponentIds = new Set(seedModule.INITIAL_SEED.components.map(c => c.id));

export const allNewLotes = [
  // LOTE 41
  {
    lote_id: "lote_41",
    tema: "Clásicos Caseros con Papa y Huevo",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_161",
        cuadrante: "superior_izq",
        nombre: "Tortilla Española Casera con Ensalada Mixta",
        modo: "caliente",
        proteina_id: "comp_prot_8",
        carbo_id: "comp_carb_3",
        vegetal_id: "comp_veg_10",
        vegetal_secundario_id: "comp_veg_1",
        grasa_id: "comp_fat_1",
        tiempo_min: 15,
        descripcion: "Porción dorada y jugosa de tortilla de papas y cebolla, servida junto a ensalada fresca de hojas verdes con aceite de oliva.",
        prompt_cuadrante: "Cuña gruesa y jugosa de tortilla de papas dorada con cebolla caramelizada, servida al lado de una ensalada fresca de hojas de rúcula y lechuga con aceite de oliva.",
        tags: ["tortilla", "papas", "huevo", "cebolla", "rucula", "ensalada"]
      },
      {
        id: "plate_cat_162",
        cuadrante: "superior_der",
        nombre: "Revuelto Gramajo Porteño Clásico",
        modo: "caliente",
        proteina_id: "comp_prot_8",
        carbo_id: "comp_carb_3",
        vegetal_id: "comp_veg_10",
        vegetal_secundario_id: "comp_veg_13",
        grasa_id: "comp_fat_7",
        tiempo_min: 12,
        descripcion: "Papas pay doradas salteadas en sartén con huevos revueltos cremosos, cebollita rehogada y verdeo fresco con manteca.",
        prompt_cuadrante: "Porción generosa de revuelto gramajo casero con papas pay doradas y crocantes, huevos revueltos cremosos y lluvia de cebollita de verdeo fresca.",
        tags: ["gramajo", "papas", "huevo", "revuelto", "manteca", "verdeo"]
      },
      {
        id: "plate_cat_163",
        cuadrante: "inferior_izq",
        nombre: "Bife a la Plancha con Papas al Horno y Tomates Asados",
        modo: "caliente",
        proteina_id: "comp_prot_3",
        carbo_id: "comp_carb_3",
        vegetal_id: "comp_veg_2",
        grasa_id: "comp_fat_1",
        tiempo_min: 15,
        descripcion: "Churrasco jugoso sellado en plancha de hierro con dados de papas doradas al romero y rodajas de tomate asadas.",
        prompt_cuadrante: "Bife de carne vacuna sellado con marcas de plancha, acompañado de dados de papas doradas al horno y mitades de tomate asado con orégano y oliva.",
        tags: ["bife", "carne", "papas", "tomate", "oliva"]
      },
      {
        id: "plate_cat_164",
        cuadrante: "inferior_der",
        nombre: "Omelette Dorado con Queso Port Salut y Puré Rústico",
        modo: "caliente",
        proteina_id: "comp_prot_8",
        carbo_id: "comp_carb_3",
        vegetal_id: "comp_veg_7",
        grasa_id: "comp_fat_6",
        tiempo_min: 12,
        descripcion: "Omelette esponjoso relleno de queso port salut derretido, acompañado de puré de papas casero suave y hojas de espinaca.",
        prompt_cuadrante: "Omelette dorado doblado con queso derretido en su interior, servido junto a porción plana de puré de papas casero y espinacas salteadas.",
        tags: ["omelette", "huevo", "queso", "pure", "papa", "espinaca"]
      }
    ]
  },

  // LOTE 42
  {
    lote_id: "lote_42",
    tema: "Suprema de Pollo en Variaciones Rápidas",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_165",
        cuadrante: "superior_izq",
        nombre: "Suprema al Verdeo con Puré de Papas",
        modo: "caliente",
        proteina_id: "comp_prot_1",
        carbo_id: "comp_carb_3",
        vegetal_id: "comp_veg_13",
        grasa_id: "comp_fat_8",
        tiempo_min: 15,
        descripcion: "Pechuga de pollo sellada a la sartén en salsa cremosa de cebollas de verdeo y puerro, acompañada de puré de papas casero.",
        prompt_cuadrante: "Suprema de pollo dorada bañada en salsa cremosa de abundante cebollita de verdeo, servida al lado de puré de papas casero plano con manteca.",
        tags: ["pollo", "suprema", "verdeo", "crema", "pure", "papas"]
      },
      {
        id: "plate_cat_166",
        cuadrante: "superior_der",
        nombre: "Suprema con Champiñones y Arroz Blanco",
        modo: "caliente",
        proteina_id: "comp_prot_1",
        carbo_id: "comp_carb_1",
        vegetal_id: "comp_veg_3",
        grasa_id: "comp_fat_7",
        tiempo_min: 15,
        descripcion: "Tiras doradas de suprema salteadas con láminas de champiñones a la manteca, servidas junto a arroz blanco desgranado.",
        prompt_cuadrante: "Bocados de pechuga de pollo dorada salteados con champiñones en láminas jugosas, acompañados de porción plana de arroz blanco suelto.",
        tags: ["pollo", "champinon", "arroz", "manteca"]
      },
      {
        id: "plate_cat_167",
        cuadrante: "inferior_izq",
        nombre: "Suprema a la Plancha con Batatas Asadas y Rúcula",
        modo: "caliente",
        proteina_id: "comp_prot_1",
        carbo_id: "comp_carb_4",
        vegetal_id: "comp_veg_1",
        grasa_id: "comp_fat_1",
        tiempo_min: 15,
        descripcion: "Suprema sellada al limón con rodajas de batata caramelizadas al horno y hojas frescas de rúcula con oliva.",
        prompt_cuadrante: "Filete grueso de pechuga grillada con limón, acompañado de rodajas de batata dulce doradas al horno y ensaladita de rúcula con oliva.",
        tags: ["pollo", "batata", "rucula", "oliva", "limon"]
      },
      {
        id: "plate_cat_168",
        cuadrante: "inferior_der",
        nombre: "Suprema Grillada con Chauchas al Vapor y Tomates Cherry (Low-Carb)",
        modo: "caliente",
        proteina_id: "comp_prot_1",
        carbo_id: null,
        vegetal_id: "comp_veg_19",
        vegetal_secundario_id: "comp_veg_2",
        grasa_id: "comp_fat_1",
        tiempo_min: 12,
        descripcion: "Pechuga a la plancha con limón y orégano, servida sin harinas con chauchas tiernas salteadas y tomatitos cherry dulces.",
        prompt_cuadrante: "Pechuga de pollo jugosa grillada con limón, acompañada de chauchas verdes al vapor salteadas con aceite de oliva y tomates cherry salteados.",
        tags: ["pollo", "chauchas", "tomate", "lowcarb", "oliva"]
      }
    ]
  },

  // LOTE 43
  {
    lote_id: "lote_43",
    tema: "Cortes Vacunos de Sartén y Cacerola",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_169",
        cuadrante: "superior_izq",
        nombre: "Tortuguita Estofada en Salsa Roja con Fideos",
        modo: "caliente",
        proteina_id: "comp_prot_6",
        carbo_id: "comp_carb_2",
        vegetal_id: "comp_veg_2",
        vegetal_secundario_id: "comp_veg_10",
        grasa_id: "comp_fat_6",
        tiempo_min: 20,
        descripcion: "Bocados tiernos de tortuguita cocidos a fuego lento en salsa casera de tomate con cebolla, servidos sobre fideos al dente con queso rallado.",
        prompt_cuadrante: "Plato de fideos al dente cubiertos con estofado casero de trozos tiernos de tortuguita vacuna en salsa roja espesa y queso rallado.",
        tags: ["tortuguita", "estofado", "fideos", "tomate", "queso"]
      },
      {
        id: "plate_cat_170",
        cuadrante: "superior_der",
        nombre: "Palomita en Salsa Criolla con Mandioca Hervida",
        modo: "caliente",
        proteina_id: "comp_prot_7",
        carbo_id: "comp_carb_7",
        vegetal_id: "comp_veg_11",
        vegetal_secundario_id: "comp_veg_10",
        grasa_id: "comp_fat_1",
        tiempo_min: 18,
        descripcion: "Bifecitos de palomita rehogados con morrón rojo y cebolla criolla, servidos con trozos rústicos de mandioca hervida al vapor.",
        prompt_cuadrante: "Bifecitos de palomita vacuna jugosos con salsa criolla de morrones y cebolla dorada, acompañados de mandioca hervida blanca con oliva.",
        tags: ["palomita", "mandioca", "morron", "cebolla", "oliva"]
      },
      {
        id: "plate_cat_171",
        cuadrante: "inferior_izq",
        nombre: "Churrasco con Morrones Asados y Papas al Horno",
        modo: "caliente",
        proteina_id: "comp_prot_3",
        carbo_id: "comp_carb_3",
        vegetal_id: "comp_veg_11",
        grasa_id: "comp_fat_1",
        tiempo_min: 15,
        descripcion: "Bife vacuno sellado a la plancha con tiras dulces de morrón asado y papas doradas al horno con oliva.",
        prompt_cuadrante: "Churrasco vacuno dorado a la plancha de hierro, servido con tiras tiernas de morrón rojo asado y dados de papa dorada al horno.",
        tags: ["churrasco", "bife", "morron", "papa", "oliva"]
      },
      {
        id: "plate_cat_172",
        cuadrante: "inferior_der",
        nombre: "Bife Magro con Ensalada Caprese Tibia (Low-Carb)",
        modo: "caliente",
        proteina_id: "comp_prot_3",
        carbo_id: null,
        vegetal_id: "comp_veg_2",
        vegetal_secundario_id: "comp_veg_1",
        grasa_id: "comp_fat_6",
        tiempo_min: 12,
        descripcion: "Bife a la plancha servido sin almidón con rodajas de tomate asado, hojas de rúcula y lascas de queso sardo.",
        prompt_cuadrante: "Bife de carne vacuna a la plancha con marcas de fuego, acompañado de rodajas de tomate asado caliente, hojas de rúcula fresca y queso rallado.",
        tags: ["bife", "tomate", "rucula", "queso", "lowcarb"]
      }
    ]
  },

  // LOTE 44
  {
    lote_id: "lote_44",
    tema: "Pescados Rápidos al Horno y Sartén",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_173",
        cuadrante: "superior_izq",
        nombre: "Merluza a la Provenzal con Batatas Doradas",
        modo: "caliente",
        proteina_id: "comp_prot_10",
        carbo_id: "comp_carb_4",
        vegetal_id: "comp_veg_13",
        grasa_id: "comp_fat_1",
        tiempo_min: 15,
        descripcion: "Filete de merluza salteado con ajo, perejil y verdeo, acompañado de rodajas de batata doradas a la sartén con oliva.",
        prompt_cuadrante: "Filete de merluza dorada a la provenzal con cebollita de verdeo y perejil fresco, servido con rodajas de batata dulce doradas.",
        tags: ["merluza", "pescado", "batata", "verdeo", "oliva"]
      },
      {
        id: "plate_cat_174",
        cuadrante: "superior_der",
        nombre: "Cazuela de Pescado con Arroz, Choclo y Morrón",
        modo: "caliente",
        proteina_id: "comp_prot_10",
        carbo_id: "comp_carb_1",
        vegetal_id: "comp_veg_11",
        vegetal_secundario_id: "comp_veg_10",
        grasa_id: "comp_fat_1",
        tiempo_min: 18,
        descripcion: "Trozos de pescado blanco cocidos en cacerola con arroz blanco, granos de choclo y sofrito de morrón y cebolla.",
        prompt_cuadrante: "Plato hondo de cazuela casera con trozos de pescado blanco tierno, arroz amarillo suave, granos de choclo y tiras de morrón rojo.",
        tags: ["merluza", "cazuela", "arroz", "choclo", "morron"]
      },
      {
        id: "plate_cat_175",
        cuadrante: "inferior_izq",
        nombre: "Merluza Gratinada con Espinaca y Puré de Papas",
        modo: "caliente",
        proteina_id: "comp_prot_10",
        carbo_id: "comp_carb_3",
        vegetal_id: "comp_veg_7",
        grasa_id: "comp_fat_6",
        tiempo_min: 15,
        descripcion: "Filete de merluza horneado con queso sardo fundido por encima, acompañado de espinacas a la manteca y puré de papas.",
        prompt_cuadrante: "Filete de merluza con costra dorada de queso gratinado al horno, servido al lado de puré de papas rústico y espinacas salteadas.",
        tags: ["merluza", "queso", "espinaca", "pure", "papa"]
      },
      {
        id: "plate_cat_176",
        cuadrante: "inferior_der",
        nombre: "Filete de Pescado con Wok de Vegetales (Low-Carb)",
        modo: "caliente",
        proteina_id: "comp_prot_10",
        carbo_id: null,
        vegetal_id: "comp_veg_8",
        grasa_id: "comp_fat_1",
        tiempo_min: 12,
        descripcion: "Merluza dorada vuelta y vuelta en sartén con limón, servida sobre salteado de vegetales mixtos al dente sin harinas.",
        prompt_cuadrante: "Filete de merluza blanca dorado a la plancha con limón, servido sobre abundante salteado caliente de vegetales mixtos en juliana con oliva.",
        tags: ["merluza", "pescado", "wok", "vegetales", "lowcarb"]
      }
    ]
  },

  // LOTE 45
  {
    lote_id: "lote_45",
    tema: "Platos de Cerdo Dorados",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_177",
        cuadrante: "superior_izq",
        nombre: "Bondiola de Cerdo a la Mostaza con Papas Doradas",
        modo: "caliente",
        proteina_id: "comp_prot_15",
        carbo_id: "comp_carb_3",
        vegetal_id: "comp_veg_10",
        grasa_id: "comp_fat_8",
        tiempo_min: 18,
        descripcion: "Medallones de bondiola dorados en sartén con cebollas caramelizadas y salsa suave de crema, acompañados de papas al horno.",
        prompt_cuadrante: "Medallones de bondiola de cerdo dorados con salsa suave de crema y cebolla, servidos al lado de dados de papas doradas al horno.",
        tags: ["bondiola", "cerdo", "papas", "crema", "cebolla"]
      },
      {
        id: "plate_cat_178",
        cuadrante: "superior_der",
        nombre: "Costillita de Cerdo con Puré de Batata y Verdeo",
        modo: "caliente",
        proteina_id: "comp_prot_12",
        carbo_id: "comp_carb_4",
        vegetal_id: "comp_veg_13",
        grasa_id: "comp_fat_7",
        tiempo_min: 15,
        descripcion: "Costillita dorada a la plancha de hierro con limón, servida con puré de batata anaranjado con manteca y cebollita de verdeo.",
        prompt_cuadrante: "Costillita de cerdo dorada a la plancha con limón, acompañada de puré rústico plano de batata dulce y cebollita de verdeo picada.",
        tags: ["costillita", "cerdo", "batata", "pure", "verdeo", "manteca"]
      },
      {
        id: "plate_cat_179",
        cuadrante: "inferior_izq",
        nombre: "Salteado de Cerdo con Arroz Blanco y Choclo",
        modo: "caliente",
        proteina_id: "comp_prot_12",
        carbo_id: "comp_carb_1",
        vegetal_id: "comp_veg_11",
        grasa_id: "comp_fat_1",
        tiempo_min: 15,
        descripcion: "Tiras de cerdo selladas en sartén caliente con morrón rojo dulce y granos de choclo, servidas con porción plana de arroz blanco.",
        prompt_cuadrante: "Tiras doradas de carne de cerdo salteadas con morrón rojo y granos de choclo, servidas junto a porción de arroz blanco desgranado plano.",
        tags: ["cerdo", "arroz", "choclo", "morron", "oliva"]
      },
      {
        id: "plate_cat_180",
        cuadrante: "inferior_der",
        nombre: "Medallones de Cerdo con Ensalada Tibia de Repollo y Zanahoria (Low-Carb)",
        modo: "caliente",
        proteina_id: "comp_prot_15",
        carbo_id: null,
        vegetal_id: "comp_veg_15",
        vegetal_secundario_id: "comp_veg_4",
        grasa_id: "comp_fat_1",
        tiempo_min: 12,
        descripcion: "Bondiola de cerdo sellada vuelta y vuelta con ensalada caliente de repollo blanco salteado y zanahoria con aceite de oliva.",
        prompt_cuadrante: "Medallones de bondiola dorados a la plancha con limón, servidos sobre abundante salteado caliente de finas tiras de repollo y zanahoria.",
        tags: ["bondiola", "cerdo", "repollo", "zanahoria", "lowcarb"]
      }
    ]
  },

  // LOTE 46
  {
    lote_id: "lote_46",
    tema: "Olla Reconfortante y Guisados Secos",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_181",
        cuadrante: "superior_izq",
        nombre: "Guisito de Lentejas con Carne Picada y Calabaza",
        modo: "caliente",
        proteina_id: "comp_prot_4",
        carbo_id: "comp_carb_6",
        vegetal_id: "comp_veg_9",
        vegetal_secundario_id: "comp_veg_10",
        grasa_id: "comp_fat_1",
        tiempo_min: 25,
        descripcion: "Lentejas tiernas cocidas en cacerola con carne picada sofrita, dados de calabaza dulce y cebolla caramelizada servidas con cuchara.",
        prompt_cuadrante: "Plato hondo de guiso casero de lentejas tiernas con carne picada sofrita, dados blandos de calabaza anaranjada y cebolla dorada.",
        tags: ["lentejas", "carne picada", "calabaza", "guiso", "cebolla"]
      },
      {
        id: "plate_cat_182",
        cuadrante: "superior_der",
        nombre: "Cazuela de Arroz con Pollo, Puerro y Morrón",
        modo: "caliente",
        proteina_id: "comp_prot_2",
        carbo_id: "comp_carb_1",
        vegetal_id: "comp_veg_13",
        vegetal_secundario_id: "comp_veg_11",
        grasa_id: "comp_fat_1",
        tiempo_min: 25,
        descripcion: "Pollo a la cacerola estofado con arroz blanco en caldo casero, rodajitas de puerro y tiras de morrón rojo.",
        prompt_cuadrante: "Cazuela casera servida en plato con trozos de pollo tierno cocidos junto a arroz blanco en caldo suave con puerro y morrón.",
        tags: ["pollo", "arroz", "puerro", "morron", "cazuela"]
      },
      {
        id: "plate_cat_183",
        cuadrante: "inferior_izq",
        nombre: "Porotos Blancos con Bondiola Estofada y Zanahoria",
        modo: "caliente",
        proteina_id: "comp_prot_15",
        carbo_id: "comp_carb_6",
        vegetal_id: "comp_veg_4",
        grasa_id: "comp_fat_1",
        tiempo_min: 20,
        descripcion: "Porotos alubia blancos cocidos con cubos de bondiola dorada, rodajas de zanahoria dulce y una pizca de pimentón dulce.",
        prompt_cuadrante: "Plato hondo de porotos alubia blancos guisados con trozos tiernos de bondiola de cerdo dorada y rodajas de zanahoria con oliva.",
        tags: ["porotos", "bondiola", "zanahoria", "legumbres", "guiso"]
      },
      {
        id: "plate_cat_184",
        cuadrante: "inferior_der",
        nombre: "Estofado de Palomita con Papas y Choclo",
        modo: "caliente",
        proteina_id: "comp_prot_7",
        carbo_id: "comp_carb_3",
        vegetal_id: "comp_veg_10",
        grasa_id: "comp_fat_1",
        tiempo_min: 25,
        descripcion: "Carne vacuna de palomita estofada a fuego lento con cubos de papa tierna, granos de choclo y cebolla rehogada.",
        prompt_cuadrante: "Plato hondo de estofado criollo con trozos tiernos de palomita vacuna, papas cocidas blandas y choclo desgranado con pimentón.",
        tags: ["palomita", "papas", "choclo", "estofado", "carne"]
      }
    ]
  },

  // LOTE 47
  {
    lote_id: "lote_47",
    tema: "Pastas Simples y Gratinadas",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_185",
        cuadrante: "superior_izq",
        nombre: "Fideos con Salsa Bolognesa Casera y Queso Sardo",
        modo: "caliente",
        proteina_id: "comp_prot_4",
        carbo_id: "comp_carb_2",
        vegetal_id: "comp_veg_2",
        vegetal_secundario_id: "comp_veg_10",
        grasa_id: "comp_fat_6",
        tiempo_min: 15,
        descripcion: "Fideos secos al dente con salsa bolognesa casera de carne picada y tomate con cebolla, espolvoreados con queso sardo rallado.",
        prompt_cuadrante: "Plato de fideos al dente cubiertos con abundante salsa boloñesa casera de carne picada sofrita con tomate y queso sardo rallado.",
        tags: ["fideos", "pasta", "carne picada", "bolognesa", "tomate", "queso"]
      },
      {
        id: "plate_cat_186",
        cuadrante: "superior_der",
        nombre: "Tirabuzones con Pollo Dorado y Brócoli al Oliva",
        modo: "caliente",
        proteina_id: "comp_prot_1",
        carbo_id: "comp_carb_2",
        vegetal_id: "comp_veg_5",
        grasa_id: "comp_fat_1",
        tiempo_min: 15,
        descripcion: "Fideos tirabuzón salteados en sartén con daditos de pechuga de pollo dorada y arbolitos verdes de brócoli al oliva.",
        prompt_cuadrante: "Plato de fideos tirabuzón salteados al dente con dados de pollo dorado y arbolitos verdes de brócoli cocidos con aceite de oliva.",
        tags: ["fideos", "pollo", "brocoli", "oliva", "pasta"]
      },
      {
        id: "plate_cat_187",
        cuadrante: "inferior_izq",
        nombre: "Fideos con Caballa en Salsa Criolla y Aceitunas",
        modo: "caliente",
        proteina_id: "comp_prot_17",
        carbo_id: "comp_carb_2",
        vegetal_id: "comp_veg_11",
        grasa_id: "comp_fat_3",
        tiempo_min: 12,
        descripcion: "Pasta seca salteada con lomos de caballa en conserva, salsa tibia de morrones y rodajitas de aceitunas negras.",
        prompt_cuadrante: "Plato de fideos al dente salteados con lomos desmenuzados de caballa en conserva, tiras de morrón y aceitunas negras picadas.",
        tags: ["fideos", "caballa", "morron", "aceitunas", "pasta"]
      },
      {
        id: "plate_cat_188",
        cuadrante: "inferior_der",
        nombre: "Pasta Gratinada con Espinacas, Queso Port Salut y Parmesano",
        modo: "caliente",
        proteina_id: "comp_prot_16",
        carbo_id: "comp_carb_2",
        vegetal_id: "comp_veg_7",
        grasa_id: "comp_fat_6",
        tiempo_min: 15,
        descripcion: "Fideos cortos al horno con espinacas salteadas a la manteca, cubiertos con dados de queso port salut y costra dorada de parmesano.",
        prompt_cuadrante: "Fuente individual de fideos gratinados al horno con espinacas tiernas, queso port salut fundido y costra dorada de queso rallado.",
        tags: ["fideos", "queso", "espinaca", "gratinado", "parmesano"]
      }
    ]
  },

  // LOTE 48
  {
    lote_id: "lote_48",
    tema: "Cenas Livianas de Sartén Low-Carb",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_189",
        cuadrante: "superior_izq",
        nombre: "Bife de Cuadril con Salteado de Hongos y Zucchini",
        modo: "caliente",
        proteina_id: "comp_prot_3",
        carbo_id: null,
        vegetal_id: "comp_veg_3",
        vegetal_secundario_id: "comp_veg_6",
        grasa_id: "comp_fat_1",
        tiempo_min: 12,
        descripcion: "Bife vacuno sellado a la plancha con marcas de fuego, servido con champiñones en láminas y dados de zucchini salteados con oliva.",
        prompt_cuadrante: "Bife de carne vacuna dorado a la plancha de hierro, acompañado de champiñones salteados y rodajas de zucchini tierno con oliva.",
        tags: ["bife", "hongos", "zucchini", "lowcarb", "oliva"]
      },
      {
        id: "plate_cat_190",
        cuadrante: "superior_der",
        nombre: "Omelette de Espinaca con Palta y Ensalada de Tomate",
        modo: "caliente",
        proteina_id: "comp_prot_8",
        carbo_id: null,
        vegetal_id: "comp_veg_7",
        vegetal_secundario_id: "comp_veg_2",
        grasa_id: "comp_fat_2",
        tiempo_min: 10,
        descripcion: "Omelette esponjoso con espinacas picadas, servido con rodajas de tomate fresco y gajos de palta madura con oliva.",
        prompt_cuadrante: "Omelette dorado relleno de espinaca salteada, acompañado al costado por rodajas de tomate fresco y gajos de palta con oliva.",
        tags: ["omelette", "huevo", "espinaca", "palta", "tomate", "lowcarb"]
      },
      {
        id: "plate_cat_191",
        cuadrante: "inferior_izq",
        nombre: "Suprema con Salteado de Coliflor y Morrón Rojo",
        modo: "caliente",
        proteina_id: "comp_prot_1",
        carbo_id: null,
        vegetal_id: "comp_veg_18",
        vegetal_secundario_id: "comp_veg_11",
        grasa_id: "comp_fat_1",
        tiempo_min: 12,
        descripcion: "Pechuga grillada al limón servida con ramilletes de coliflor salteada dorada a la sartén y tiras de morrón rojo.",
        prompt_cuadrante: "Suprema de pollo a la plancha dorada con limón, acompañada de coliflor salteada crujiente y tiras de morrón rojo dulce con oliva.",
        tags: ["pollo", "coliflor", "morron", "lowcarb", "oliva"]
      },
      {
        id: "plate_cat_192",
        cuadrante: "inferior_der",
        nombre: "Pata-Muslo al Horno con Berenjenas y Tomate Asado",
        modo: "caliente",
        proteina_id: "comp_prot_2",
        carbo_id: null,
        vegetal_id: "comp_veg_12",
        vegetal_secundario_id: "comp_veg_2",
        grasa_id: "comp_fat_1",
        tiempo_min: 20,
        descripcion: "Pata-muslo dorada crocante al horno, acompañada de rodajas de berenjena asada con orégano y mitades de tomate asado.",
        prompt_cuadrante: "Pata-muslo de pollo al horno bien crocante, servida con rodajas de berenjena asada y tomates al horno dorados con aceite de oliva.",
        tags: ["pollo", "berenjena", "tomate", "lowcarb", "oliva"]
      }
    ]
  },

  // LOTE 49
  {
    lote_id: "lote_49",
    tema: "Vegetarianos y Proteína Vegetal Caliente",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_193",
        cuadrante: "superior_izq",
        nombre: "Tofu Marinado Crocante con Arroz Blanco y Brócoli",
        modo: "caliente",
        proteina_id: "comp_prot_13",
        carbo_id: "comp_carb_1",
        vegetal_id: "comp_veg_5",
        grasa_id: "comp_fat_5",
        tiempo_min: 15,
        descripcion: "Cubos de tofu dorado crocante salteados con semillas de sésamo, servidos junto a arroz blanco suelto y brócoli al vapor.",
        prompt_cuadrante: "Cubos de tofu bien dorados y crocantes con semillas de sésamo tostadas, servidos junto a porción plana de arroz blanco y brócoli verde.",
        tags: ["tofu", "arroz", "brocoli", "sesamo", "vegetariano"]
      },
      {
        id: "plate_cat_194",
        cuadrante: "superior_der",
        nombre: "Cazuela de Soja Sofrita con Mandioca y Verdeo",
        modo: "caliente",
        proteina_id: "comp_prot_18",
        carbo_id: "comp_carb_7",
        vegetal_id: "comp_veg_13",
        grasa_id: "comp_fat_1",
        tiempo_min: 15,
        descripcion: "Soja texturizada dorada en sartén con pimentón y cebolla de verdeo, servida con trozos de mandioca hervida tierna con oliva.",
        prompt_cuadrante: "Cazuela de soja texturizada sofrita con cebollita de verdeo y pimentón, acompañada de trozos rústicos de mandioca hervida blanca.",
        tags: ["soja", "mandioca", "verdeo", "vegetariano", "oliva"]
      },
      {
        id: "plate_cat_195",
        cuadrante: "inferior_izq",
        nombre: "Avena Salada Cremosa con Champiñones y Queso Sardo",
        modo: "caliente",
        proteina_id: "comp_prot_16",
        carbo_id: "comp_carb_9",
        vegetal_id: "comp_veg_3",
        grasa_id: "comp_fat_6",
        tiempo_min: 10,
        descripcion: "Plato hondo de avena arrollada caliente y cremosa ligada con manteca y queso sardo, con champiñones salteados por encima.",
        prompt_cuadrante: "Plato hondo de avena salada caliente y cremosa con queso rallado, coronada con láminas de champiñones salteados dorados.",
        tags: ["avena", "queso", "champinon", "cremoso", "vegetariano"]
      },
      {
        id: "plate_cat_196",
        cuadrante: "inferior_der",
        nombre: "Revuelto de Tofu con Espinacas y Semillas (Low-Carb)",
        modo: "caliente",
        proteina_id: "comp_prot_13",
        carbo_id: null,
        vegetal_id: "comp_veg_7",
        vegetal_secundario_id: "comp_veg_10",
        grasa_id: "comp_fat_5",
        tiempo_min: 10,
        descripcion: "Tofu desmenuzado salteado en sartén caliente con hojas de espinaca, cebolla rehogada y mix de semillas tostadas sin harinas.",
        prompt_cuadrante: "Salteado caliente de tofu desmenuzado dorado con espinacas tiernas, cebolla rehogada dulce y semillas de sésamo con oliva.",
        tags: ["tofu", "espinaca", "semillas", "cebolla", "lowcarb"]
      }
    ]
  },

  // LOTE 50
  {
    lote_id: "lote_50",
    tema: "Platos Rápidos con Choclo y Mandioca",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_197",
        cuadrante: "superior_izq",
        nombre: "Picadillo de Carne con Choclo Cremoso y Puré de Calabaza",
        modo: "caliente",
        proteina_id: "comp_prot_4",
        carbo_id: "comp_carb_5",
        vegetal_id: "comp_veg_9",
        grasa_id: "comp_fat_7",
        tiempo_min: 15,
        descripcion: "Carne picada sofrita con cebolla y choclo amarillo desgranado a la manteca, servida con puré suave de calabaza anco.",
        prompt_cuadrante: "Picadillo casero de carne molida sofrita con granos de choclo dulce a la manteca, acompañado de puré plano de calabaza anaranjada.",
        tags: ["carne picada", "choclo", "calabaza", "pure", "manteca"]
      },
      {
        id: "plate_cat_198",
        cuadrante: "superior_der",
        nombre: "Mandioca Salteada con Huevos Revueltos y Verdeo",
        modo: "caliente",
        proteina_id: "comp_prot_8",
        carbo_id: "comp_carb_7",
        vegetal_id: "comp_veg_13",
        grasa_id: "comp_fat_7",
        tiempo_min: 12,
        descripcion: "Cubos de mandioca cocida salteados en sartén con manteca hasta dorar, mezclados con huevos revueltos cremosos y verdeo fresco.",
        prompt_cuadrante: "Revuelto casero de mandioca en cubos dorados en sartén con huevos revueltos esponjosos y abundante cebollita de verdeo.",
        tags: ["mandioca", "huevo", "revuelto", "verdeo", "manteca"]
      },
      {
        id: "plate_cat_199",
        cuadrante: "inferior_izq",
        nombre: "Pechuga Grillada con Mandioca Dorada y Tomate Asado",
        modo: "caliente",
        proteina_id: "comp_prot_1",
        carbo_id: "comp_carb_7",
        vegetal_id: "comp_veg_2",
        grasa_id: "comp_fat_1",
        tiempo_min: 15,
        descripcion: "Suprema de pollo a la plancha de hierro con gajo de limón, acompañada de mandioca dorada a la sartén y tomate asado.",
        prompt_cuadrante: "Pechuga de pollo dorada a la plancha con limón, servida con trozos de mandioca dorados y rodajas de tomate asado con orégano y oliva.",
        tags: ["pollo", "mandioca", "tomate", "oliva", "limon"]
      },
      {
        id: "plate_cat_200",
        cuadrante: "inferior_der",
        nombre: "Bondiola Sellada con Salteado de Choclo y Morrón",
        modo: "caliente",
        proteina_id: "comp_prot_15",
        carbo_id: "comp_carb_5",
        vegetal_id: "comp_veg_11",
        grasa_id: "comp_fat_1",
        tiempo_min: 15,
        descripcion: "Medallón de bondiola jugoso sellado al fuego vivo, servido con salteado caliente de granos de choclo dulce y morrón rojo en tiras.",
        prompt_cuadrante: "Medallón de bondiola de cerdo dorado a la plancha con limón, acompañado de salteado de choclo amarillo desgranado y tiras de morrón rojo.",
        tags: ["bondiola", "cerdo", "choclo", "morron", "oliva"]
      }
    ]
  },

  // LOTE 51
  {
    lote_id: "lote_51",
    tema: "Ensaladas Frías de Legumbres",
    tipo: "frio",
    platos: [
      {
        id: "plate_cat_201",
        cuadrante: "superior_izq",
        nombre: "Ensalada de Lentejas con Huevo Duro, Tomate y Cebollita",
        modo: "frio",
        proteina_id: "comp_prot_9",
        carbo_id: "comp_carb_6",
        vegetal_id: "comp_veg_2",
        vegetal_secundario_id: "comp_veg_13",
        grasa_id: "comp_fat_1",
        tiempo_min: 5,
        descripcion: "Lentejas cocidas firmes mezcladas con daditos de tomate fresco, cebolla de verdeo picada y cuartos de huevo duro con oliva.",
        prompt_cuadrante: "Ensalada casera de lentejas cocidas firmes entremezcladas con trozos de tomate fresco, cebollita de verdeo y huevo duro picado con aceite de oliva.",
        tags: ["lentejas", "huevo", "tomate", "verdeo", "ensalada", "frio"]
      },
      {
        id: "plate_cat_202",
        cuadrante: "superior_der",
        nombre: "Porotos Blancos con Atún al Natural, Rúcula y Aceitunas",
        modo: "frio",
        proteina_id: "comp_prot_11",
        carbo_id: "comp_carb_6",
        vegetal_id: "comp_veg_1",
        grasa_id: "comp_fat_3",
        tiempo_min: 5,
        descripcion: "Porotos alubia blancos tiernos con lomos de atún desmenuzado, hojas de rúcula silvestre y aceitunas negras con oliva.",
        prompt_cuadrante: "Plato hondo de porotos alubia blancos entremezclados con trozos de atún al natural, hojas verdes de rúcula y aceitunas negras.",
        tags: ["porotos", "atun", "rucula", "aceitunas", "frio"]
      },
      {
        id: "plate_cat_203",
        cuadrante: "inferior_izq",
        nombre: "Salpicón de Porotos con Pollo Desmenuzado y Zanahoria",
        modo: "frio",
        proteina_id: "comp_prot_1",
        carbo_id: "comp_carb_6",
        vegetal_id: "comp_veg_4",
        grasa_id: "comp_fat_1",
        tiempo_min: 5,
        descripcion: "Hebras de pollo frío desmenuzado con porotos blancos cocidos, zanahoria rallada fresca y perejil picado con oliva.",
        prompt_cuadrante: "Salpicón casero frío de pollo desmenuzado mezclado naturalmente con porotos blancos tiernos y zanahoria rallada con aceite de oliva.",
        tags: ["porotos", "pollo", "zanahoria", "salpicon", "frio"]
      },
      {
        id: "plate_cat_204",
        cuadrante: "inferior_der",
        nombre: "Ensalada de Lentejas con Queso Port Salut y Pepino",
        modo: "frio",
        proteina_id: "comp_prot_16",
        carbo_id: "comp_carb_6",
        vegetal_id: "comp_veg_16",
        grasa_id: "comp_fat_1",
        tiempo_min: 5,
        descripcion: "Lentejas cocidas frías con dados tiernos de queso port salut, rodajas finas de pepino crocante y aderezo de limón y oliva.",
        prompt_cuadrante: "Bowl de lentejas cocidas frías entremezcladas con cubos de queso port salut blanco, rodajas de pepino fresco y aceite de oliva virgen.",
        tags: ["lentejas", "queso", "pepino", "ensalada", "frio"]
      }
    ]
  },

  // LOTE 52
  {
    lote_id: "lote_52",
    tema: "Bowls de Quinoa y Granos Fríos",
    tipo: "frio",
    platos: [
      {
        id: "plate_cat_205",
        cuadrante: "superior_izq",
        nombre: "Quinoa Fría con Palta Madura, Pepino y Semillas",
        modo: "frio",
        proteina_id: "comp_prot_9",
        carbo_id: "comp_carb_8",
        vegetal_id: "comp_veg_16",
        grasa_id: "comp_fat_2",
        tiempo_min: 5,
        descripcion: "Base de quinoa cocida suelta fría con trozos de huevo duro, rodajas de pepino y gajos de palta con semillas de sésamo.",
        prompt_cuadrante: "Bowl de quinoa cocida suelta fría con gajos de palta madura, rodajitas de pepino crocante, huevo duro picado y semillas tostadas con oliva.",
        tags: ["quinoa", "palta", "pepino", "huevo", "semillas", "frio"]
      },
      {
        id: "plate_cat_206",
        cuadrante: "superior_der",
        nombre: "Bowl de Quinoa con Pollo Grillado Frío y Tomates Cherry",
        modo: "frio",
        proteina_id: "comp_prot_1",
        carbo_id: "comp_carb_8",
        vegetal_id: "comp_veg_2",
        grasa_id: "comp_fat_1",
        tiempo_min: 5,
        descripcion: "Quinoa cocida fría con dados de pechuga grillada fría, mitades de tomates cherry jugosos y hojas de albahaca con oliva.",
        prompt_cuadrante: "Bowl frío con base de quinoa graneada, trozos de pechuga de pollo grillada fría al descuido y tomates cherry cortados al medio con oliva.",
        tags: ["quinoa", "pollo", "tomate", "cherry", "frio"]
      },
      {
        id: "plate_cat_207",
        cuadrante: "inferior_izq",
        nombre: "Ensalada de Quinoa con Atún Claro y Choclo Desgranado",
        modo: "frio",
        proteina_id: "comp_prot_11",
        carbo_id: "comp_carb_8",
        vegetal_id: "comp_veg_11",
        grasa_id: "comp_fat_1",
        tiempo_min: 5,
        descripcion: "Quinoa cocida suave con lomos de atún al natural, granos de choclo amarillo y cubitos de morrón rojo dulce.",
        prompt_cuadrante: "Plato hondo de ensalada fresca de quinoa cocida suelta con lomitos de atún, granos de choclo amarillo y daditos de morrón rojo.",
        tags: ["quinoa", "atun", "choclo", "morron", "frio"]
      },
      {
        id: "plate_cat_208",
        cuadrante: "inferior_der",
        nombre: "Quinoa con Remolacha Cocida, Rúcula y Frutos Secos",
        modo: "frio",
        proteina_id: "comp_prot_16",
        carbo_id: "comp_carb_8",
        vegetal_id: "comp_veg_14",
        vegetal_secundario_id: "comp_veg_1",
        grasa_id: "comp_fat_4",
        tiempo_min: 5,
        descripcion: "Quinoa teñida con dados de remolacha cocida dulce, hojas frescas de rúcula, cubitos de queso fresco y nueces partidas.",
        prompt_cuadrante: "Bowl colorido con base de quinoa suelta, cubos de remolacha cocida teñida de morado, hojas de rúcula y nueces picadas con queso fresco.",
        tags: ["quinoa", "remolacha", "rucula", "nueces", "queso", "frio"]
      }
    ]
  },

  // LOTE 53
  {
    lote_id: "lote_53",
    tema: "Ensaladas de Pasta Fría",
    tipo: "frio",
    platos: [
      {
        id: "plate_cat_209",
        cuadrante: "superior_izq",
        nombre: "Pasta Fría con Pollo Grillado, Hojas Verdes y Tomate",
        modo: "frio",
        proteina_id: "comp_prot_1",
        carbo_id: "comp_carb_2",
        vegetal_id: "comp_veg_1",
        vegetal_secundario_id: "comp_veg_2",
        grasa_id: "comp_fat_1",
        tiempo_min: 5,
        descripcion: "Fideos tirabuzón fríos al dente con tiras de pollo grillado frío, hojas de lechuga cortada a mano y dados de tomate con oliva.",
        prompt_cuadrante: "Ensalada de fideos espirales fríos al dente mezclados con tiras de pollo grillado frío, hojas de lechuga troceada y cubitos de tomate fresco.",
        tags: ["fideos", "pasta", "pollo", "lechuga", "tomate", "frio"]
      },
      {
        id: "plate_cat_210",
        cuadrante: "superior_der",
        nombre: "Ensalada Primaveral de Fideos con Huevo Duro y Zanahoria",
        modo: "frio",
        proteina_id: "comp_prot_9",
        carbo_id: "comp_carb_2",
        vegetal_id: "comp_veg_4",
        grasa_id: "comp_fat_1",
        tiempo_min: 5,
        descripcion: "Fideos cortos al dente fríos entremezclados con trozos de huevo duro, hebras de zanahoria rallada fresca y perejil con oliva.",
        prompt_cuadrante: "Plato de ensalada de fideos tirabuzón fríos totalmente revueltos con trocitos de huevo duro picado, zanahoria rallada fina y aceite de oliva.",
        tags: ["fideos", "huevo", "zanahoria", "pasta", "frio"]
      },
      {
        id: "plate_cat_211",
        cuadrante: "inferior_izq",
        nombre: "Pasta Fría con Atún, Choclo Dulce y Aceitunas Negras",
        modo: "frio",
        proteina_id: "comp_prot_11",
        carbo_id: "comp_carb_2",
        vegetal_id: "comp_veg_11",
        grasa_id: "comp_fat_3",
        tiempo_min: 5,
        descripcion: "Fideos cortos con lomitos de atún al natural, granos tiernos de choclo, tiritas de morrón y rodajas de aceitunas negras.",
        prompt_cuadrante: "Ensalada de pasta fría con fideos cortos al dente, trozos de atún al natural, granos de choclo amarillo y aceitunas negras dispersas.",
        tags: ["fideos", "atun", "choclo", "aceitunas", "frio"]
      },
      {
        id: "plate_cat_212",
        cuadrante: "inferior_der",
        nombre: "Fideos Cortos con Queso Port Salut, Pepino y Tomate Cherry",
        modo: "frio",
        proteina_id: "comp_prot_16",
        carbo_id: "comp_carb_2",
        vegetal_id: "comp_veg_16",
        vegetal_secundario_id: "comp_veg_2",
        grasa_id: "comp_fat_1",
        tiempo_min: 5,
        descripcion: "Fideos secos fríos con cubos tiernos de queso port salut, rodajitas de pepino crujiente y tomatitos cherry con aceite de oliva.",
        prompt_cuadrante: "Plato hondo de ensalada fresca de fideos fríos mezclados con dados blancos de queso port salut, pepino en rodajas finas y tomates cherry.",
        tags: ["fideos", "queso", "pepino", "tomate", "frio"]
      }
    ]
  },

  // LOTE 54
  {
    lote_id: "lote_54",
    tema: "Bowls de Arroz Frío y Viandas",
    tipo: "frio",
    platos: [
      {
        id: "plate_cat_213",
        cuadrante: "superior_izq",
        nombre: "Arroz Primavera Frío con Pollo Desmenuzado y Zanahoria",
        modo: "frio",
        proteina_id: "comp_prot_1",
        carbo_id: "comp_carb_1",
        vegetal_id: "comp_veg_4",
        grasa_id: "comp_fat_1",
        tiempo_min: 5,
        descripcion: "Arroz blanco suelto frío mezclado de forma natural con hebras de pollo cocido, zanahoria rallada dulce y aceite de oliva virgen.",
        prompt_cuadrante: "Plato de arroz blanco frío suelto y desgranado plano con hebras de pollo cocido desmenuzado, zanahoria rallada fresca y oliva (sin molde).",
        tags: ["arroz", "pollo", "zanahoria", "primavera", "frio"]
      },
      {
        id: "plate_cat_214",
        cuadrante: "superior_der",
        nombre: "Arroz con Caballa, Tomate Jugoso y Palta Madura",
        modo: "frio",
        proteina_id: "comp_prot_17",
        carbo_id: "comp_carb_1",
        vegetal_id: "comp_veg_2",
        grasa_id: "comp_fat_2",
        tiempo_min: 5,
        descripcion: "Arroz blanco desgranado frío con trozos de caballa en conserva, dados de tomate fresco y gajos cremosos de palta con limón.",
        prompt_cuadrante: "Bowl de arroz blanco frío plano entremezclado con trozos de caballa en conserva, dados de tomate jugoso y trozos de palta fresca.",
        tags: ["arroz", "caballa", "tomate", "palta", "frio"]
      },
      {
        id: "plate_cat_215",
        cuadrante: "inferior_izq",
        nombre: "Ensalada de Arroz con Huevo Duro, Chauchas y Aceitunas",
        modo: "frio",
        proteina_id: "comp_prot_9",
        carbo_id: "comp_carb_1",
        vegetal_id: "comp_veg_19",
        grasa_id: "comp_fat_3",
        tiempo_min: 5,
        descripcion: "Arroz blanco frío suelto mezclado con trozos de huevo duro, chauchas verdes hervidas cortadas al bies y aceitunas verdes.",
        prompt_cuadrante: "Plato de ensalada fresca de arroz blanco cocido suelto con trozos de chauchas verdes tiernas, huevo duro picado rústico y aceitunas verdes.",
        tags: ["arroz", "huevo", "chauchas", "aceitunas", "frio"]
      },
      {
        id: "plate_cat_216",
        cuadrante: "inferior_der",
        nombre: "Bowl de Arroz Frío con Tofu Marinado, Pepino y Sésamo",
        modo: "frio",
        proteina_id: "comp_prot_13",
        carbo_id: "comp_carb_1",
        vegetal_id: "comp_veg_16",
        grasa_id: "comp_fat_5",
        tiempo_min: 5,
        descripcion: "Base plana de arroz blanco frío con cubitos de tofu marinado, rodajitas crujientes de pepino y lluvia de semillas de sésamo tostadas.",
        prompt_cuadrante: "Bowl fresco con base de arroz blanco suelto plano, cubos de tofu marinado en limón, rodajas finas de pepino y semillas de sésamo con oliva.",
        tags: ["arroz", "tofu", "pepino", "sesamo", "frio"]
      }
    ]
  },

  // LOTE 55
  {
    lote_id: "lote_55",
    tema: "Ensaladas de Raíces y Verano",
    tipo: "frio",
    platos: [
      {
        id: "plate_cat_217",
        cuadrante: "superior_izq",
        nombre: "Ensalada Colorida de Remolacha y Zanahoria con Huevo Duro",
        modo: "frio",
        proteina_id: "comp_prot_9",
        carbo_id: null,
        vegetal_id: "comp_veg_14",
        vegetal_secundario_id: "comp_veg_4",
        grasa_id: "comp_fat_1",
        tiempo_min: 5,
        descripcion: "Dados dulces de remolacha hervida y hebras de zanahoria fresca con cuartos de huevo duro y un chorrito de aceite de oliva.",
        prompt_cuadrante: "Plato de ensalada con dados de remolacha cocida violeta brillante, hebras de zanahoria rallada naranja y cuartos de huevo duro con oliva.",
        tags: ["remolacha", "zanahoria", "huevo", "ensalada", "frio", "lowcarb"]
      },
      {
        id: "plate_cat_218",
        cuadrante: "superior_der",
        nombre: "Salpicón Vacuno con Papas Rústicas y Cebolla de Verdeo",
        modo: "frio",
        proteina_id: "comp_prot_7",
        carbo_id: "comp_carb_3",
        vegetal_id: "comp_veg_13",
        grasa_id: "comp_fat_1",
        tiempo_min: 5,
        descripcion: "Tiras de palomita vacuna cocida desmenuzada fría con cubos de papa hervida, abundante cebolla de verdeo y aceite de oliva virgen.",
        prompt_cuadrante: "Salpicón criollo frío de carne vacuna en hebras mezclado naturalmente con cubos de papa hervida tierna y cebollita de verdeo fresca.",
        tags: ["salpicon", "palomita", "papas", "verdeo", "carne", "frio"]
      },
      {
        id: "plate_cat_219",
        cuadrante: "inferior_izq",
        nombre: "Remolacha Tibia con Queso Port Salut y Nueces Tostadas",
        modo: "frio",
        proteina_id: "comp_prot_16",
        carbo_id: null,
        vegetal_id: "comp_veg_14",
        grasa_id: "comp_fat_4",
        tiempo_min: 5,
        descripcion: "Dados de remolacha cocida dulce con cubos tiernos de queso port salut blanco y mitades de nueces crocantes tostadas con oliva.",
        prompt_cuadrante: "Plato hondo con dados de remolacha cocida dulce, cubos blancos de queso port salut fresco y trozos de nueces partidas crujientes.",
        tags: ["remolacha", "queso", "nueces", "frio", "lowcarb"]
      },
      {
        id: "plate_cat_220",
        cuadrante: "inferior_der",
        nombre: "Ensalada Rusa Casera con Lomos de Atún y Aceitunas",
        modo: "frio",
        proteina_id: "comp_prot_11",
        carbo_id: "comp_carb_3",
        vegetal_id: "comp_veg_4",
        grasa_id: "comp_fat_3",
        tiempo_min: 5,
        descripcion: "Clásica ensalada rusa de papas y zanahorias hervidas en cubitos con mayonesa u oliva, servida con lomitos de atún y aceitunas verdes.",
        prompt_cuadrante: "Porción rústica de ensalada rusa servida a un costado con cuchara, acompañada al lado con lomos de atún claro y aceitunas verdes.",
        tags: ["ensalada rusa", "papas", "zanahoria", "atun", "aceitunas", "frio"]
      }
    ]
  },

  // LOTE 56
  {
    lote_id: "lote_56",
    tema: "Platos Rápidos con Quesos y Huevos",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_221",
        cuadrante: "superior_izq",
        nombre: "Revuelto de Zucchini con Queso Port Salut y Arroz",
        modo: "caliente",
        proteina_id: "comp_prot_8",
        carbo_id: "comp_carb_1",
        vegetal_id: "comp_veg_6",
        grasa_id: "comp_fat_6",
        tiempo_min: 12,
        descripcion: "Dados de zucchini salteados en sartén con huevos revueltos esponjosos y queso port salut fundido, servidos con arroz blanco plano.",
        prompt_cuadrante: "Huevos revueltos tiernos con dados dorados de zucchini y hebras de queso derretido, servidos junto a porción plana de arroz blanco.",
        tags: ["revuelto", "huevo", "zucchini", "queso", "arroz"]
      },
      {
        id: "plate_cat_222",
        cuadrante: "superior_der",
        nombre: "Omelette de Queso con Rúcula y Tomate Asado (Low-Carb)",
        modo: "caliente",
        proteina_id: "comp_prot_8",
        carbo_id: null,
        vegetal_id: "comp_veg_2",
        vegetal_secundario_id: "comp_veg_1",
        grasa_id: "comp_fat_6",
        tiempo_min: 10,
        descripcion: "Omelette dorado relleno con abundante queso derretido, acompañado de rodajas de tomate asado caliente y hojas de rúcula.",
        prompt_cuadrante: "Omelette dorado esponjoso con queso fundido en su interior, servido junto a rodajas de tomate asado en sartén y hojas de rúcula fresca.",
        tags: ["omelette", "huevo", "queso", "tomate", "rucula", "lowcarb"]
      },
      {
        id: "plate_cat_223",
        cuadrante: "inferior_izq",
        nombre: "Revuelto de Acelga y Papas con Huevo a la Manteca",
        modo: "caliente",
        proteina_id: "comp_prot_8",
        carbo_id: "comp_carb_3",
        vegetal_id: "comp_veg_7",
        grasa_id: "comp_fat_7",
        tiempo_min: 12,
        descripcion: "Cubos de papa tierna dorada en sartén con hojas picadas de acelga o espinaca tierna y huevos revueltos a la manteca.",
        prompt_cuadrante: "Revuelto casero de dados de papa dorada con espinacas salteadas y huevos cremosos ligados con manteca recién servido.",
        tags: ["revuelto", "papa", "espinaca", "huevo", "manteca"]
      },
      {
        id: "plate_cat_224",
        cuadrante: "inferior_der",
        nombre: "Huevos al Plato con Salsa Criolla de Tomate y Puré",
        modo: "caliente",
        proteina_id: "comp_prot_8",
        carbo_id: "comp_carb_3",
        vegetal_id: "comp_veg_2",
        grasa_id: "comp_fat_1",
        tiempo_min: 12,
        descripcion: "Huevos cocidos en salsa casera de tomate con cebolla y pimentón, servidos junto a puré de papas casero suave.",
        prompt_cuadrante: "Huevos al plato cocidos en salsa criolla de tomate casero y cebolla rehogada, acompañados de puré de papas casero plano.",
        tags: ["huevos", "tomate", "pure", "papa", "oliva"]
      }
    ]
  },

  // LOTE 57
  {
    lote_id: "lote_57",
    tema: "Pescados y Conservas al Plato",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_225",
        cuadrante: "superior_izq",
        nombre: "Caballa Salteada con Fideos al Verdeo y Aceitunas",
        modo: "caliente",
        proteina_id: "comp_prot_17",
        carbo_id: "comp_carb_2",
        vegetal_id: "comp_veg_13",
        grasa_id: "comp_fat_3",
        tiempo_min: 12,
        descripcion: "Lomos de caballa sellados en sartén con cebollita de verdeo y aceitunas picadas, servidos sobre fideos al dente con oliva.",
        prompt_cuadrante: "Plato de fideos al dente salteados con lomos dorados de caballa en conserva, hebras de verdeo fresco y rodajitas de aceitunas verdes.",
        tags: ["caballa", "fideos", "verdeo", "aceitunas", "pescado"]
      },
      {
        id: "plate_cat_226",
        cuadrante: "superior_der",
        nombre: "Atún Caliente Salteado con Arroz Blanco y Morrón",
        modo: "caliente",
        proteina_id: "comp_prot_11",
        carbo_id: "comp_carb_1",
        vegetal_id: "comp_veg_11",
        grasa_id: "comp_fat_1",
        tiempo_min: 10,
        descripcion: "Lomitos de atún rehogados en sartén con tiras de morrón rojo dulce y cebolla, servidos con arroz blanco desgranado.",
        prompt_cuadrante: "Porción de arroz blanco caliente desgranado plano con salteado de trozos de atún al natural y tiras de morrón rojo brillante.",
        tags: ["atun", "arroz", "morron", "oliva"]
      },
      {
        id: "plate_cat_227",
        cuadrante: "inferior_izq",
        nombre: "Merluza al Horno con Papas y Cebollas Doradas",
        modo: "caliente",
        proteina_id: "comp_prot_10",
        carbo_id: "comp_carb_3",
        vegetal_id: "comp_veg_10",
        grasa_id: "comp_fat_1",
        tiempo_min: 18,
        descripcion: "Filete de merluza cocido sobre colchón de rodajas de papa y aros de cebolla caramelizados al horno con aceite de oliva.",
        prompt_cuadrante: "Filete de merluza blanca horneada con limón sobre rodajas doradas de papa al horno y cebolla rehogada dulce con oliva.",
        tags: ["merluza", "papas", "cebolla", "horno", "oliva"]
      },
      {
        id: "plate_cat_228",
        cuadrante: "inferior_der",
        nombre: "Cazuela Rápida de Caballa con Choclo y Morrón",
        modo: "caliente",
        proteina_id: "comp_prot_17",
        carbo_id: "comp_carb_5",
        vegetal_id: "comp_veg_11",
        grasa_id: "comp_fat_1",
        tiempo_min: 12,
        descripcion: "Lomos de caballa cocidos en cacerola con granos de choclo amarillo, tiras de morrón rojo y un hilo de aceite de oliva.",
        prompt_cuadrante: "Plato hondo con lomos desmenuzados de caballa salteados con granos tiernos de choclo amarillo y morrón en tiras con oliva.",
        tags: ["caballa", "choclo", "morron", "cazuela", "oliva"]
      }
    ]
  },

  // LOTE 58
  {
    lote_id: "lote_58",
    tema: "Cortes Tradicionales a la Plancha",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_229",
        cuadrante: "superior_izq",
        nombre: "Bife de Cuadril con Calabaza Asada y Choclo",
        modo: "caliente",
        proteina_id: "comp_prot_3",
        carbo_id: "comp_carb_5",
        vegetal_id: "comp_veg_9",
        grasa_id: "comp_fat_1",
        tiempo_min: 15,
        descripcion: "Churrasco vacuno sellado a la plancha de hierro con gajos de calabaza asada dulce y granos de choclo salteados con oliva.",
        prompt_cuadrante: "Bife vacuno jugoso dorado a la plancha de hierro, acompañado de trozos de calabaza asada dulce y granos sueltos de choclo salteado.",
        tags: ["bife", "carne", "calabaza", "choclo", "oliva"]
      },
      {
        id: "plate_cat_230",
        cuadrante: "superior_der",
        nombre: "Palomita Vuelta y Vuelta con Puré de Batatas",
        modo: "caliente",
        proteina_id: "comp_prot_7",
        carbo_id: "comp_carb_4",
        vegetal_id: "comp_veg_1",
        grasa_id: "comp_fat_7",
        tiempo_min: 12,
        descripcion: "Bifecitos finos de palomita a la plancha con limón, servidos con puré rústico de batata con manteca y hojas de rúcula fresca.",
        prompt_cuadrante: "Bifes finos de palomita vacuna sellados al fuego vivo, acompañados de puré plano de batata dulce ligado con manteca y rúcula.",
        tags: ["palomita", "batata", "pure", "rucula", "manteca"]
      },
      {
        id: "plate_cat_231",
        cuadrante: "inferior_izq",
        nombre: "Tira de Asado a la Plancha con Ensalada Criolla Mixta",
        modo: "caliente",
        proteina_id: "comp_prot_5",
        carbo_id: null,
        vegetal_id: "comp_veg_1",
        vegetal_secundario_id: "comp_veg_2",
        grasa_id: "comp_fat_1",
        tiempo_min: 18,
        descripcion: "Corte de asado con hueso dorado a la plancha de hierro, acompañado de ensalada fresca de lechuga criolla, tomate y cebolla con oliva.",
        prompt_cuadrante: "Tira de asado jugosa con hueso dorada a la plancha, servida al lado de ensalada fresca de lechuga troceada y rodajas de tomate con oliva.",
        tags: ["asado", "carne", "lechuga", "tomate", "lowcarb"]
      },
      {
        id: "plate_cat_232",
        cuadrante: "inferior_der",
        nombre: "Tortuguita en Bifes con Fideos al Pesto de Rúcula",
        modo: "caliente",
        proteina_id: "comp_prot_6",
        carbo_id: "comp_carb_2",
        vegetal_id: "comp_veg_1",
        grasa_id: "comp_fat_6",
        tiempo_min: 12,
        descripcion: "Bifecitos tiernos de tortuguita sellados en sartén, acompañados de fideos al dente salteados con rúcula fresca y queso rallado.",
        prompt_cuadrante: "Bifecitos delgados de tortuguita vacuna sellados a la sartén, acompañados de fideos al dente salteados con rúcula verde y queso sardo.",
        tags: ["tortuguita", "fideos", "rucula", "queso", "carne"]
      }
    ]
  },

  // LOTE 59
  {
    lote_id: "lote_59",
    tema: "Salteados y Woks Proteicos",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_233",
        cuadrante: "superior_izq",
        nombre: "Wok de Pollo con Chauchas Tiernas y Semillas de Sésamo",
        modo: "caliente",
        proteina_id: "comp_prot_1",
        carbo_id: null,
        vegetal_id: "comp_veg_19",
        vegetal_secundario_id: "comp_veg_11",
        grasa_id: "comp_fat_5",
        tiempo_min: 12,
        descripcion: "Tiras doradas de pechuga salteadas al wok con chauchas verdes crujientes, morrón rojo y semillas de sésamo sin harinas.",
        prompt_cuadrante: "Salteado brillante al wok de tiras de pollo doradas con chauchas verdes cortadas al bies, morrón rojo y lluvia de sésamo tostado.",
        tags: ["pollo", "chauchas", "morron", "sesamo", "wok", "lowcarb"]
      },
      {
        id: "plate_cat_234",
        cuadrante: "superior_der",
        nombre: "Picadillo de Carne Molida con Berenjenas y Arroz",
        modo: "caliente",
        proteina_id: "comp_prot_4",
        carbo_id: "comp_carb_1",
        vegetal_id: "comp_veg_12",
        grasa_id: "comp_fat_1",
        tiempo_min: 15,
        descripcion: "Carne picada sofrita con dados tiernos de berenjena dorada y cebolla, servida junto a porción plana de arroz blanco.",
        prompt_cuadrante: "Picadillo casero de carne molida dorada en sartén con cubos tiernos de berenjena y cebolla, acompañado de arroz blanco plano.",
        tags: ["carne picada", "berenjena", "arroz", "oliva"]
      },
      {
        id: "plate_cat_235",
        cuadrante: "inferior_izq",
        nombre: "Salteado de Cerdo con Batatas Asadas y Verdeo",
        modo: "caliente",
        proteina_id: "comp_prot_12",
        carbo_id: "comp_carb_4",
        vegetal_id: "comp_veg_13",
        grasa_id: "comp_fat_1",
        tiempo_min: 15,
        descripcion: "Tiras de bife de cerdo selladas al wok con cebolla de verdeo fresca, acompañadas de rodajas de batata doradas al horno.",
        prompt_cuadrante: "Tiras doradas de carne de cerdo salteadas en wok caliente con cebollita de verdeo, servidas junto a rodajas de batata asada dulce.",
        tags: ["cerdo", "batata", "verdeo", "wok", "oliva"]
      },
      {
        id: "plate_cat_236",
        cuadrante: "inferior_der",
        nombre: "Tiras de Bife con Coliflor Salteada y Zanahorias (Low-Carb)",
        modo: "caliente",
        proteina_id: "comp_prot_3",
        carbo_id: null,
        vegetal_id: "comp_veg_18",
        vegetal_secundario_id: "comp_veg_4",
        grasa_id: "comp_fat_1",
        tiempo_min: 12,
        descripcion: "Bife vacuno cortado en tiras y sellado a fuego vivo, acompañado de ramilletes de coliflor dorada y bastones de zanahoria tierna.",
        prompt_cuadrante: "Tiras de bife vacuno selladas a la sartén con pimienta, acompañadas de coliflor dorada crujiente y bastoncitos de zanahoria con oliva.",
        tags: ["bife", "coliflor", "zanahoria", "lowcarb", "oliva"]
      }
    ]
  },

  // LOTE 60
  {
    lote_id: "lote_60",
    tema: "Bowls Nutritivos de Avena Fría",
    tipo: "frio",
    platos: [
      {
        id: "plate_cat_237",
        cuadrante: "superior_izq",
        nombre: "Avena Fría con Atún al Natural, Tomate y Huevo Duro",
        modo: "frio",
        proteina_id: "comp_prot_11",
        carbo_id: "comp_carb_9",
        vegetal_id: "comp_veg_2",
        grasa_id: "comp_fat_1",
        tiempo_min: 5,
        descripcion: "Base fresca de avena arrollada hidratada en frío con lomitos de atún, daditos de tomate fresco y cuartos de huevo duro con oliva.",
        prompt_cuadrante: "Bowl fresco con base de avena arrollada hidratada en frío, acompañada de lomos de atún claro, dados de tomate fresco y huevo duro picado.",
        tags: ["avena", "atun", "tomate", "huevo", "bowl", "frio"]
      },
      {
        id: "plate_cat_238",
        cuadrante: "superior_der",
        nombre: "Bowl de Avena con Palta, Hojas Verdes y Semillas",
        modo: "frio",
        proteina_id: "comp_prot_9",
        carbo_id: "comp_carb_9",
        vegetal_id: "comp_veg_1",
        grasa_id: "comp_fat_2",
        tiempo_min: 5,
        descripcion: "Avena hidratada con trozos de huevo duro, hojas frescas de rúcula, gajos de palta madura y semillas de sésamo tostadas.",
        prompt_cuadrante: "Bowl nutritivo de avena arrollada fría con gajos de palta madura fresca, hojas de rúcula verde, huevo duro y semillas con oliva.",
        tags: ["avena", "palta", "rucula", "semillas", "frio"]
      },
      {
        id: "plate_cat_239",
        cuadrante: "inferior_izq",
        nombre: "Avena Fría con Pollo Desmenuzado, Pepino y Limón",
        modo: "frio",
        proteina_id: "comp_prot_1",
        carbo_id: "comp_carb_9",
        vegetal_id: "comp_veg_16",
        grasa_id: "comp_fat_1",
        tiempo_min: 5,
        descripcion: "Avena remojada suave con hebras de pechuga cocida fría, rodajitas de pepino crocante y aderezo fresco de limón y oliva.",
        prompt_cuadrante: "Plato hondo de avena arrollada tierna fría con hebras de pollo desmenuzado, rodajas finas de pepino y aderezo de limón y oliva.",
        tags: ["avena", "pollo", "pepino", "frio"]
      },
      {
        id: "plate_cat_240",
        cuadrante: "inferior_der",
        nombre: "Bowl de Avena con Queso Port Salut, Remolacha y Nueces",
        modo: "frio",
        proteina_id: "comp_prot_16",
        carbo_id: "comp_carb_9",
        vegetal_id: "comp_veg_14",
        grasa_id: "comp_fat_4",
        tiempo_min: 5,
        descripcion: "Avena arrollada hidratada con cubitos de queso fresco blanco, dados de remolacha cocida dulce y nueces partidas tostadas.",
        prompt_cuadrante: "Bowl fresco con base de avena arrollada fría, dados de remolacha cocida dulce, cubos de queso port salut y nueces partidas con oliva.",
        tags: ["avena", "queso", "remolacha", "nueces", "frio"]
      }
    ]
  },

  // LOTE 61
  {
    lote_id: "lote_61",
    tema: "Cenas Low-Carb de Fuego Vivo",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_241",
        cuadrante: "superior_izq",
        nombre: "Suprema con Salteado de Repollo Blanco y Champiñones",
        modo: "caliente",
        proteina_id: "comp_prot_1",
        carbo_id: null,
        vegetal_id: "comp_veg_15",
        vegetal_secundario_id: "comp_veg_3",
        grasa_id: "comp_fat_1",
        tiempo_min: 12,
        descripcion: "Pechuga grillada al limón servida sobre un salteado caliente de finas tiras de repollo blanco y champiñones con oliva.",
        prompt_cuadrante: "Suprema de pechuga dorada y jugosa con limón, servida sobre salteado caliente de repollo en tiras y champiñones dorados con oliva.",
        tags: ["pollo", "repollo", "champinon", "lowcarb", "oliva"]
      },
      {
        id: "plate_cat_242",
        cuadrante: "superior_der",
        nombre: "Bife a la Plancha con Hojas Verdes, Rabanitos y Huevo Duro",
        modo: "caliente",
        proteina_id: "comp_prot_3",
        carbo_id: null,
        vegetal_id: "comp_veg_1",
        vegetal_secundario_id: "comp_veg_17",
        grasa_id: "comp_fat_1",
        tiempo_min: 12,
        descripcion: "Churrasco jugoso sellado a la plancha de hierro, acompañado de ensalada fresca de lechuga, rodajas de rabanito y huevo duro.",
        prompt_cuadrante: "Bife de carne vacuna con marcas de plancha, servido al lado de ensalada fresca de hojas verdes, rodajas de rabanito y huevo duro.",
        tags: ["bife", "lechuga", "rabanito", "huevo", "lowcarb"]
      },
      {
        id: "plate_cat_243",
        cuadrante: "inferior_izq",
        nombre: "Bondiola Sellada con Rodajas de Calabaza Asada y Rúcula",
        modo: "caliente",
        proteina_id: "comp_prot_15",
        carbo_id: null,
        vegetal_id: "comp_veg_9",
        vegetal_secundario_id: "comp_veg_1",
        grasa_id: "comp_fat_1",
        tiempo_min: 15,
        descripcion: "Medallones de bondiola dorados a fuego vivo, acompañados de trozos tiernos de calabaza asada dulce y rúcula fresca con oliva.",
        prompt_cuadrante: "Medallones de bondiola de cerdo dorados a la plancha, servidos con trozos de calabaza asada tierna dulce y hojas de rúcula fresca.",
        tags: ["bondiola", "calabaza", "rucula", "lowcarb", "oliva"]
      },
      {
        id: "plate_cat_244",
        cuadrante: "inferior_der",
        nombre: "Merluza a la Plancha con Wok de Zucchini y Morrón",
        modo: "caliente",
        proteina_id: "comp_prot_10",
        carbo_id: null,
        vegetal_id: "comp_veg_6",
        vegetal_secundario_id: "comp_veg_11",
        grasa_id: "comp_fat_1",
        tiempo_min: 12,
        descripcion: "Filete de merluza dorada vuelta y vuelta con limón, acompañado de dados de zucchini y tiras de morrón salteados con oliva.",
        prompt_cuadrante: "Filete de merluza dorada a la plancha con limón, servido junto a salteado de zucchini tierno y tiras de morrón rojo con oliva.",
        tags: ["merluza", "zucchini", "morron", "lowcarb", "oliva"]
      }
    ]
  },

  // LOTE 62
  {
    lote_id: "lote_62",
    tema: "Pastas Caseras y Salsas Livianas",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_245",
        cuadrante: "superior_izq",
        nombre: "Fideos al Verdeo con Bocados de Pollo Dorado",
        modo: "caliente",
        proteina_id: "comp_prot_1",
        carbo_id: "comp_carb_2",
        vegetal_id: "comp_veg_13",
        grasa_id: "comp_fat_8",
        tiempo_min: 15,
        descripcion: "Pasta seca al dente salteada en salsa suave de crema con trocitos de pechuga de pollo dorada y cebolla de verdeo picada.",
        prompt_cuadrante: "Plato de fideos al dente salteados con dados dorados de pollo y abundante cebollita de verdeo en salsa suave de crema de leche.",
        tags: ["fideos", "pollo", "verdeo", "crema", "pasta"]
      },
      {
        id: "plate_cat_246",
        cuadrante: "superior_der",
        nombre: "Tirabuzones a la Manteca con Queso Sardo y Espinaca",
        modo: "caliente",
        proteina_id: "comp_prot_16",
        carbo_id: "comp_carb_2",
        vegetal_id: "comp_veg_7",
        grasa_id: "comp_fat_7",
        tiempo_min: 12,
        descripcion: "Fideos tirabuzón salteados a la sartén con manteca derretida, hojas de espinaca tierna y queso sardo rallado recién molido.",
        prompt_cuadrante: "Plato de fideos tirabuzón salteados a la manteca con hojas verdes de espinaca cocida y lluvia de queso sardo rallado.",
        tags: ["fideos", "manteca", "queso", "espinaca", "pasta"]
      },
      {
        id: "plate_cat_247",
        cuadrante: "inferior_izq",
        nombre: "Fideos con Picadillo Criollo de Carne y Tomate",
        modo: "caliente",
        proteina_id: "comp_prot_4",
        carbo_id: "comp_carb_2",
        vegetal_id: "comp_veg_11",
        grasa_id: "comp_fat_1",
        tiempo_min: 15,
        descripcion: "Pasta seca con salteado rápido de carne picada, morrón rojo dulce y cebolla con un toque de pimentón y aceite de oliva.",
        prompt_cuadrante: "Plato de fideos al dente con sofrito criollo de carne molida dorada, cubitos de morrón rojo y cebolla con aceite de oliva.",
        tags: ["fideos", "carne picada", "morron", "pasta", "oliva"]
      },
      {
        id: "plate_cat_248",
        cuadrante: "inferior_der",
        nombre: "Pasta con Salteado de Champiñones a la Crema",
        modo: "caliente",
        proteina_id: "comp_prot_8",
        carbo_id: "comp_carb_2",
        vegetal_id: "comp_veg_3",
        grasa_id: "comp_fat_8",
        tiempo_min: 12,
        descripcion: "Fideos cortos al dente salteados con láminas de champiñones dorados, huevo revuelto cremoso y un toque de crema de leche.",
        prompt_cuadrante: "Plato de fideos al dente salteados con champiñones en láminas jugosas, crema de leche suave y pimienta negra recién molida.",
        tags: ["fideos", "champinon", "crema", "pasta"]
      }
    ]
  },

  // LOTE 63
  {
    lote_id: "lote_63",
    tema: "Olla Criolla y Cacerolas Calientes",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_249",
        cuadrante: "superior_izq",
        nombre: "Guisito de Arroz con Carne Picada, Zanahoria y Morrón",
        modo: "caliente",
        proteina_id: "comp_prot_4",
        carbo_id: "comp_carb_1",
        vegetal_id: "comp_veg_4",
        vegetal_secundario_id: "comp_veg_11",
        grasa_id: "comp_fat_1",
        tiempo_min: 20,
        descripcion: "Arroz cocido en cacerola con carne picada sofrita, rodajitas de zanahoria dulce y morrón rojo con caldo casero.",
        prompt_cuadrante: "Plato hondo de guisito casero de arroz con carne picada sofrita, daditos de zanahoria blanda y morrón en caldo sabroso.",
        tags: ["guiso", "arroz", "carne picada", "zanahoria", "morron"]
      },
      {
        id: "plate_cat_250",
        cuadrante: "superior_der",
        nombre: "Cazuela de Pollo con Batatas Dulces y Choclo",
        modo: "caliente",
        proteina_id: "comp_prot_2",
        carbo_id: "comp_carb_4",
        vegetal_id: "comp_veg_10",
        grasa_id: "comp_fat_1",
        tiempo_min: 25,
        descripcion: "Pata-muslo de pollo estofada en cacerola con cubos tiernos de batata dulce, granos de choclo amarillo y cebolla dorada.",
        prompt_cuadrante: "Plato hondo con porción de pollo tierno cocido en cacerola con dados de batata dulce blanda, choclo en grano y cebolla rehogada.",
        tags: ["pollo", "batata", "choclo", "cazuela", "estofado"]
      },
      {
        id: "plate_cat_251",
        cuadrante: "inferior_izq",
        nombre: "Estofado de Cerdo con Papas y Cebollas Caramelizadas",
        modo: "caliente",
        proteina_id: "comp_prot_12",
        carbo_id: "comp_carb_3",
        vegetal_id: "comp_veg_10",
        grasa_id: "comp_fat_1",
        tiempo_min: 25,
        descripcion: "Cubos de carne de cerdo sellados y estofados a fuego lento con papas tiernas y cebollas caramelizadas con pimentón.",
        prompt_cuadrante: "Cazuela casera con trozos de cerdo tiernos estofados con cubos de papa cocida blanda y abundante cebolla dorada dulce.",
        tags: ["cerdo", "papas", "cebolla", "estofado"]
      },
      {
        id: "plate_cat_252",
        cuadrante: "inferior_der",
        nombre: "Lentejas Estofadas con Bifecitos de Palomita y Calabaza",
        modo: "caliente",
        proteina_id: "comp_prot_7",
        carbo_id: "comp_carb_6",
        vegetal_id: "comp_veg_9",
        grasa_id: "comp_fat_1",
        tiempo_min: 25,
        descripcion: "Lentejas tiernas en cacerola con tiras de palomita vacuna selladas al fuego y dados dulces de calabaza cocida con pimentón.",
        prompt_cuadrante: "Plato hondo de lentejas estofadas con tiras tiernas de carne vacuna y cubos de calabaza anaranjada dulce servidas con cuchara.",
        tags: ["lentejas", "palomita", "calabaza", "guiso", "carne"]
      }
    ]
  },

  // LOTE 64
  {
    lote_id: "lote_64",
    tema: "Bowls de Pollo y Aves Frías",
    tipo: "frio",
    platos: [
      {
        id: "plate_cat_253",
        cuadrante: "superior_izq",
        nombre: "Salpicón de Pollo con Lechuga, Tomate y Palta Madura",
        modo: "frio",
        proteina_id: "comp_prot_1",
        carbo_id: null,
        vegetal_id: "comp_veg_1",
        vegetal_secundario_id: "comp_veg_2",
        grasa_id: "comp_fat_2",
        tiempo_min: 5,
        descripcion: "Pechuga de pollo cocida en hebras frías con hojas de lechuga cortada a mano, cubitos de tomate fresco y gajos de palta con oliva.",
        prompt_cuadrante: "Salpicón fresco en plato con hebras de pollo cocido frío, hojas de lechuga fresca, cubos de tomate y trozos de palta madura con oliva.",
        tags: ["pollo", "lechuga", "tomate", "palta", "frio", "lowcarb"]
      },
      {
        id: "plate_cat_254",
        cuadrante: "superior_der",
        nombre: "Ensalada de Pollo con Choclo Desgranado y Tomates Cherry",
        modo: "frio",
        proteina_id: "comp_prot_1",
        carbo_id: "comp_carb_5",
        vegetal_id: "comp_veg_2",
        grasa_id: "comp_fat_1",
        tiempo_min: 5,
        descripcion: "Bocados de pollo frío con granos tiernos de choclo amarillo desgranado y mitades de tomates cherry con aderezo de limón y oliva.",
        prompt_cuadrante: "Plato de ensalada con trozos de pechuga de pollo fría entremezclados con choclo amarillo dulce y tomates cherry con aceite de oliva.",
        tags: ["pollo", "choclo", "tomate", "cherry", "frio"]
      },
      {
        id: "plate_cat_255",
        cuadrante: "inferior_izq",
        nombre: "Pollo Desmenuzado con Remolacha Cocida y Nueces",
        modo: "frio",
        proteina_id: "comp_prot_1",
        carbo_id: null,
        vegetal_id: "comp_veg_14",
        grasa_id: "comp_fat_4",
        tiempo_min: 5,
        descripcion: "Hebras de pollo frío con dados dulces de remolacha cocida y mitades de nueces crocantes partidas con aceite de oliva virgen.",
        prompt_cuadrante: "Plato hondo de pollo desmenuzado frío mezclado naturalmente con cubos morados de remolacha cocida y trozos de nueces crujientes.",
        tags: ["pollo", "remolacha", "nueces", "frio", "lowcarb"]
      },
      {
        id: "plate_cat_256",
        cuadrante: "inferior_der",
        nombre: "Bowl de Pollo Grillado con Quinoa Suelta y Pepino",
        modo: "frio",
        proteina_id: "comp_prot_1",
        carbo_id: "comp_carb_8",
        vegetal_id: "comp_veg_16",
        grasa_id: "comp_fat_1",
        tiempo_min: 5,
        descripcion: "Base de quinoa cocida suelta fría con dados de pechuga grillada fría, rodajitas de pepino crujiente y perejil fresco con oliva.",
        prompt_cuadrante: "Bowl fresco con base de quinoa graneada suelta, dados de pollo grillado frío al descuido y rodajas finas de pepino con aceite de oliva.",
        tags: ["pollo", "quinoa", "pepino", "frio"]
      }
    ]
  },

  // LOTE 65
  {
    lote_id: "lote_65",
    tema: "Platos Rápidos de Soja y Tofu",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_257",
        cuadrante: "superior_izq",
        nombre: "Medallón de Soja Sofrita con Puré de Calabaza",
        modo: "caliente",
        proteina_id: "comp_prot_18",
        carbo_id: null,
        vegetal_id: "comp_veg_9",
        vegetal_secundario_id: "comp_veg_10",
        grasa_id: "comp_fat_1",
        tiempo_min: 15,
        descripcion: "Soja texturizada dorada en sartén con cebollita rehogada dulce, acompañada de puré rústico y plano de calabaza anco con oliva.",
        prompt_cuadrante: "Porción de soja texturizada sofrita dorada con cebolla dulce, servida al lado de puré plano rústico de calabaza anaranjada dulce.",
        tags: ["soja", "calabaza", "cebolla", "vegetariano", "lowcarb"]
      },
      {
        id: "plate_cat_258",
        cuadrante: "superior_der",
        nombre: "Tofu Crocante con Fideos Salteados al Sésamo",
        modo: "caliente",
        proteina_id: "comp_prot_13",
        carbo_id: "comp_carb_2",
        vegetal_id: "comp_veg_11",
        grasa_id: "comp_fat_5",
        tiempo_min: 12,
        descripcion: "Cubos de tofu dorados y crujientes salteados con fideos secos al dente, tiras de morrón rojo y semillas de sésamo tostadas.",
        prompt_cuadrante: "Plato de fideos al dente salteados con cubos dorados y crocantes de tofu, tiras de morrón y semillas de sésamo con oliva.",
        tags: ["tofu", "fideos", "morron", "sesamo", "vegetariano"]
      },
      {
        id: "plate_cat_259",
        cuadrante: "inferior_izq",
        nombre: "Picadillo de Soja con Arroz Blanco y Choclo",
        modo: "caliente",
        proteina_id: "comp_prot_18",
        carbo_id: "comp_carb_1",
        vegetal_id: "comp_veg_10",
        grasa_id: "comp_fat_1",
        tiempo_min: 15,
        descripcion: "Soja sofrita con cebolla y pimentón servida con granos de choclo y porción plana de arroz blanco desgranado.",
        prompt_cuadrante: "Picadillo de soja texturizada dorada con cebolla y pimentón, acompañado de porción plana de arroz blanco suelto y choclo.",
        tags: ["soja", "arroz", "choclo", "cebolla", "vegetariano"]
      },
      {
        id: "plate_cat_260",
        cuadrante: "inferior_der",
        nombre: "Salteado de Tofu con Chauchas Verdes y Batata Asada",
        modo: "caliente",
        proteina_id: "comp_prot_13",
        carbo_id: "comp_carb_4",
        vegetal_id: "comp_veg_19",
        grasa_id: "comp_fat_1",
        tiempo_min: 15,
        descripcion: "Láminas de tofu a la plancha doradas con limón, acompañadas de chauchas verdes salteadas y rodajas de batata asada dulce.",
        prompt_cuadrante: "Láminas de tofu dorado a la sartén, servidas con chauchas verdes salteadas al dente y rodajas de batata dulce asada con oliva.",
        tags: ["tofu", "chauchas", "batata", "vegetariano", "oliva"]
      }
    ]
  },

  // LOTE 66
  {
    lote_id: "lote_66",
    tema: "Clásicos Porteños al Horno",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_261",
        cuadrante: "superior_izq",
        nombre: "Suprema Napolitana con Ensalada de Rúcula y Tomate",
        modo: "caliente",
        proteina_id: "comp_prot_14",
        carbo_id: null,
        vegetal_id: "comp_veg_1",
        vegetal_secundario_id: "comp_veg_2",
        grasa_id: "comp_fat_6",
        tiempo_min: 15,
        descripcion: "Milanesa de pollo horneada con salsa casera de tomate y queso derretido dorado, servida con ensalada de rúcula fresca.",
        prompt_cuadrante: "Milanesa de pollo napolitana con salsa de tomate y queso gratinado al horno con orégano, servida al lado de ensalada de rúcula y tomate.",
        tags: ["milanesa", "napolitana", "queso", "rucula", "tomate", "lowcarb"]
      },
      {
        id: "plate_cat_262",
        cuadrante: "superior_der",
        nombre: "Bife a la Criolla con Papas y Cebollas al Horno",
        modo: "caliente",
        proteina_id: "comp_prot_3",
        carbo_id: "comp_carb_3",
        vegetal_id: "comp_veg_10",
        vegetal_secundario_id: "comp_veg_11",
        grasa_id: "comp_fat_1",
        tiempo_min: 20,
        descripcion: "Bife de carne vacuna cocido a la fuente con rodajas de papa doradas, aros de cebolla y morrones con aceite de oliva.",
        prompt_cuadrante: "Bife vacuno jugoso cocido al horno sobre colchón de papas doradas en rodajas, tiras de morrón y cebolla caramelizada.",
        tags: ["bife", "papas", "cebolla", "morron", "horno"]
      },
      {
        id: "plate_cat_263",
        cuadrante: "inferior_izq",
        nombre: "Pastel de Papa Criollo con Carne Picada y Huevo",
        modo: "caliente",
        proteina_id: "comp_prot_4",
        carbo_id: "comp_carb_3",
        vegetal_id: "comp_veg_10",
        grasa_id: "comp_fat_6",
        tiempo_min: 20,
        descripcion: "Porción de pastel de papas casero al horno con relleno jugoso de carne picada sofrita con cebolla y cubierta de puré dorado con queso.",
        prompt_cuadrante: "Porción de pastel de papas casero dorado al horno con costra de queso gratinado y relleno jugoso de carne picada con cebolla.",
        tags: ["pastel de papas", "carne picada", "papas", "queso", "horno"]
      },
      {
        id: "plate_cat_264",
        cuadrante: "inferior_der",
        nombre: "Pata-Muslo al Horno con Papas y Romero",
        modo: "caliente",
        proteina_id: "comp_prot_2",
        carbo_id: "comp_carb_3",
        vegetal_id: "comp_veg_13",
        grasa_id: "comp_fat_1",
        tiempo_min: 25,
        descripcion: "Pata-muslo asada con piel crocante dorada al limón y romero, acompañada de dados de papas al horno y cebolla de verdeo.",
        prompt_cuadrante: "Pata-muslo de pollo al horno bien dorada con limón y romero, acompañada de dados de papas doradas crocantes al horno.",
        tags: ["pollo", "papas", "horno", "romero", "oliva"]
      }
    ]
  },

  // LOTE 67
  {
    lote_id: "lote_67",
    tema: "Ensaladas Verdes Completas",
    tipo: "frio",
    platos: [
      {
        id: "plate_cat_265",
        cuadrante: "superior_izq",
        nombre: "Ensalada Completa de Hojas Verdes con Pollo, Queso y Nueces",
        modo: "frio",
        proteina_id: "comp_prot_1",
        carbo_id: null,
        vegetal_id: "comp_veg_1",
        grasa_id: "comp_fat_4",
        tiempo_min: 5,
        descripcion: "Mix abundante de hojas verdes frescas con tiras de pechuga grillada fría, lascas de queso sardo y nueces tostadas.",
        prompt_cuadrante: "Plato de ensalada fresca con hojas de lechuga y rúcula, tiras de pollo grillado frío al desgaire, queso sardo y mitades de nueces con oliva.",
        tags: ["pollo", "rucula", "lechuga", "queso", "nueces", "frio", "lowcarb"]
      },
      {
        id: "plate_cat_266",
        cuadrante: "superior_der",
        nombre: "Ensalada Tibia de Chauchas, Papa Hervida y Huevo Duro",
        modo: "frio",
        proteina_id: "comp_prot_9",
        carbo_id: "comp_carb_3",
        vegetal_id: "comp_veg_19",
        grasa_id: "comp_fat_1",
        tiempo_min: 5,
        descripcion: "Chauchas verdes tiernas cocidas con dados de papa hervida y cuartos de huevo duro, rociados con aceite de oliva extra virgen.",
        prompt_cuadrante: "Plato de ensalada casera con chauchas verdes tiernas hervidas, cubos de papa blanda y trozos de huevo duro con aceite de oliva.",
        tags: ["chauchas", "papa", "huevo", "ensalada", "frio"]
      },
      {
        id: "plate_cat_267",
        cuadrante: "inferior_izq",
        nombre: "Carpaccio Tibio de Bife con Rúcula y Queso Sardo",
        modo: "frio",
        proteina_id: "comp_prot_3",
        carbo_id: null,
        vegetal_id: "comp_veg_1",
        grasa_id: "comp_fat_6",
        tiempo_min: 8,
        descripcion: "Láminas finas de bife vacuno sellado a la plancha frío, servidas sobre colchón de rúcula fresca con lascas de queso y limón.",
        prompt_cuadrante: "Plato frío con láminas finas de carne vacuna sellada dispuestas sobre colchón de hojas de rúcula silvestre con lascas de queso y oliva.",
        tags: ["bife", "carne", "rucula", "queso", "frio", "lowcarb"]
      },
      {
        id: "plate_cat_268",
        cuadrante: "inferior_der",
        nombre: "Ensalada de Repollo Blanco, Zanahoria Rallada y Atún",
        modo: "frio",
        proteina_id: "comp_prot_11",
        carbo_id: null,
        vegetal_id: "comp_veg_15",
        vegetal_secundario_id: "comp_veg_4",
        grasa_id: "comp_fat_1",
        tiempo_min: 5,
        descripcion: "Coleslaw casero de repollo finamente cortado y hebras de zanahoria fresca con lomitos de atún claro y aceite de oliva.",
        prompt_cuadrante: "Ensalada crujiente de repollo blanco en juliana finísima, zanahoria rallada naranja y trozos de atún al natural con aderezo de oliva.",
        tags: ["repollo", "zanahoria", "atun", "frio", "lowcarb"]
      }
    ]
  },

  // LOTE 68
  {
    lote_id: "lote_68",
    tema: "Guarniciones de Mandioca y Raíces",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_269",
        cuadrante: "superior_izq",
        nombre: "Mandioca Hervida con Bife Criollo Encebollado",
        modo: "caliente",
        proteina_id: "comp_prot_3",
        carbo_id: "comp_carb_7",
        vegetal_id: "comp_veg_10",
        grasa_id: "comp_fat_1",
        tiempo_min: 15,
        descripcion: "Bife vacuno sellado a la plancha cubierto de cebolla caramelizada dorada, acompañado de trozos tiernos de mandioca hervida.",
        prompt_cuadrante: "Bife de carne vacuna con abundante cebolla dorada por encima, acompañado de trozos rústicos de mandioca hervida blanca con oliva.",
        tags: ["bife", "mandioca", "cebolla", "carne", "oliva"]
      },
      {
        id: "plate_cat_270",
        cuadrante: "superior_der",
        nombre: "Costillita de Cerdo con Puré Mixto de Batata y Calabaza",
        modo: "caliente",
        proteina_id: "comp_prot_12",
        carbo_id: "comp_carb_4",
        vegetal_id: "comp_veg_9",
        grasa_id: "comp_fat_7",
        tiempo_min: 15,
        descripcion: "Costillita dorada a la plancha de hierro con limón, servida junto a puré dulce de batata y calabaza anco ligado con manteca.",
        prompt_cuadrante: "Costillita de cerdo dorada con limón, acompañada de porción plana de puré mixto dulce de calabaza y batata anaranjado con manteca.",
        tags: ["costillita", "cerdo", "batata", "calabaza", "pure", "manteca"]
      },
      {
        id: "plate_cat_271",
        cuadrante: "inferior_izq",
        nombre: "Cazuela de Carne con Mandioca, Puerro y Pimentón",
        modo: "caliente",
        proteina_id: "comp_prot_6",
        carbo_id: "comp_carb_7",
        vegetal_id: "comp_veg_13",
        grasa_id: "comp_fat_1",
        tiempo_min: 20,
        descripcion: "Dados de tortuguita vacuna cocidos a fuego lento con trozos de mandioca tierna, rodajas de puerro y pimentón criollo.",
        prompt_cuadrante: "Cazuela casera de trozos tiernos de carne vacuna sellados al fuego con mandioca hervida blanda y rodajitas de puerro con pimentón.",
        tags: ["tortuguita", "mandioca", "puerro", "cazuela", "carne"]
      },
      {
        id: "plate_cat_272",
        cuadrante: "inferior_der",
        nombre: "Pechuga al Limón con Mandioca Dorada y Brócoli",
        modo: "caliente",
        proteina_id: "comp_prot_1",
        carbo_id: "comp_carb_7",
        vegetal_id: "comp_veg_5",
        grasa_id: "comp_fat_1",
        tiempo_min: 15,
        descripcion: "Suprema de pollo a la plancha con limón, acompañada de trozos de mandioca dorados en sartén y arbolitos verdes de brócoli al vapor.",
        prompt_cuadrante: "Pechuga de pollo dorada con gajo de limón, acompañada de trozos de mandioca dorados en sartén y brócoli al vapor verde brillante.",
        tags: ["pollo", "mandioca", "brocoli", "oliva", "limon"]
      }
    ]
  },

  // LOTE 69
  {
    lote_id: "lote_69",
    tema: "Cenas Ligeras Rápidas sin Harinas",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_273",
        cuadrante: "superior_izq",
        nombre: "Merluza al Vapor con Brócoli y Aceite de Oliva (Low-Carb)",
        modo: "caliente",
        proteina_id: "comp_prot_10",
        carbo_id: null,
        vegetal_id: "comp_veg_5",
        vegetal_secundario_id: "comp_veg_2",
        grasa_id: "comp_fat_1",
        tiempo_min: 10,
        descripcion: "Filete de pescado blanco cocido al vapor suavemente con limón, acompañado de arbolitos verdes de brócoli y rodajas de tomate.",
        prompt_cuadrante: "Filete de merluza blanca al vapor con gajo de limón y perejil, acompañado de brócoli verde al vapor y rodajas de tomate fresco con oliva.",
        tags: ["merluza", "brocoli", "tomate", "lowcarb", "oliva"]
      },
      {
        id: "plate_cat_274",
        cuadrante: "superior_der",
        nombre: "Huevos Revueltos con Tomates Asados y Queso Sardo (Low-Carb)",
        modo: "caliente",
        proteina_id: "comp_prot_8",
        carbo_id: null,
        vegetal_id: "comp_veg_2",
        grasa_id: "comp_fat_6",
        tiempo_min: 8,
        descripcion: "Huevos revueltos esponjosos salteados a la sartén con manteca, servidos con mitades de tomate asado dulce y queso rallado.",
        prompt_cuadrante: "Huevos revueltos esponjosos y cremosos salteados en sartén, acompañados de tomates asados con orégano y lluvia de queso sardo.",
        tags: ["huevo", "revuelto", "tomate", "queso", "lowcarb"]
      },
      {
        id: "plate_cat_275",
        cuadrante: "inferior_izq",
        nombre: "Pechuga Grillada con Ensalada de Rabanitos y Rúcula (Low-Carb)",
        modo: "caliente",
        proteina_id: "comp_prot_1",
        carbo_id: null,
        vegetal_id: "comp_veg_17",
        vegetal_secundario_id: "comp_veg_1",
        grasa_id: "comp_fat_1",
        tiempo_min: 12,
        descripcion: "Pechuga de pollo dorada a la plancha de hierro con limón, servida con rodajitas crocantes de rabanitos frescos y hojas de rúcula.",
        prompt_cuadrante: "Suprema de pollo a la plancha con marcas doradas, servida al lado de ensalada fresca de rodajas de rabanito y hojas de rúcula con oliva.",
        tags: ["pollo", "rabanito", "rucula", "lowcarb", "oliva"]
      },
      {
        id: "plate_cat_276",
        cuadrante: "inferior_der",
        nombre: "Tofu a la Plancha con Espinacas Salteadas y Semillas (Low-Carb)",
        modo: "caliente",
        proteina_id: "comp_prot_13",
        carbo_id: null,
        vegetal_id: "comp_veg_7",
        grasa_id: "comp_fat_5",
        tiempo_min: 10,
        descripcion: "Láminas doradas de tofu a la sartén, acompañadas de hojas de espinaca tierna salteadas con manteca y semillas de sésamo tostadas.",
        prompt_cuadrante: "Láminas doradas y crocantes de tofu a la plancha, servidas junto a espinacas salteadas brillantes y mix de semillas tostadas con oliva.",
        tags: ["tofu", "espinaca", "semillas", "lowcarb", "vegetariano"]
      }
    ]
  },

  // LOTE 70
  {
    lote_id: "lote_70",
    tema: "Menú Balanceado Final",
    tipo: "caliente",
    platos: [
      {
        id: "plate_cat_277",
        cuadrante: "superior_izq",
        nombre: "Milanesa de Carne con Puré Mixto de Calabaza y Batata",
        modo: "caliente",
        proteina_id: "comp_prot_14",
        carbo_id: "comp_carb_4",
        vegetal_id: "comp_veg_9",
        grasa_id: "comp_fat_7",
        tiempo_min: 15,
        descripcion: "Milanesa de carne dorada crocante con limón, servida con porción plana y suave de puré mixto de batata y calabaza dulce.",
        prompt_cuadrante: "Milanesa de carne vacuna dorada y crujiente con gajo de limón, acompañada de puré plano mixto de calabaza y batata anaranjado brillante.",
        tags: ["milanesa", "carne", "batata", "calabaza", "pure", "manteca"]
      },
      {
        id: "plate_cat_278",
        cuadrante: "superior_der",
        nombre: "Fideos al Dente con Atún al Natural y Tomates Cherry",
        modo: "caliente",
        proteina_id: "comp_prot_11",
        carbo_id: "comp_carb_2",
        vegetal_id: "comp_veg_2",
        grasa_id: "comp_fat_1",
        tiempo_min: 12,
        descripcion: "Fideos secos al dente salteados en sartén con lomitos de atún al natural, mitades de tomates cherry jugosos y aceite de oliva virgen.",
        prompt_cuadrante: "Plato de fideos al dente salteados con lomos desmenuzados de atún al natural, tomates cherry cortados al medio y perejil fresco con oliva.",
        tags: ["fideos", "atun", "tomate", "pasta", "oliva"]
      },
      {
        id: "plate_cat_279",
        cuadrante: "inferior_izq",
        nombre: "Cazuela de Pollo con Arroz Amarillo, Morrón y Verdeo",
        modo: "caliente",
        proteina_id: "comp_prot_2",
        carbo_id: "comp_carb_1",
        vegetal_id: "comp_veg_11",
        vegetal_secundario_id: "comp_veg_13",
        grasa_id: "comp_fat_1",
        tiempo_min: 25,
        descripcion: "Pata-muslo de pollo cocida a la cacerola con arroz blanco sazonado, tiras de morrón rojo y cebollita de verdeo fresca.",
        prompt_cuadrante: "Cazuela casera servida en plato con trozos de pollo jugoso cocidos con arroz amarillo suave, tiras de morrón y verdeo picado.",
        tags: ["pollo", "arroz", "morron", "verdeo", "cazuela"]
      },
      {
        id: "plate_cat_280",
        cuadrante: "inferior_der",
        nombre: "Ensalada Completa de Lentejas Frías con Huevo Duro y Palta",
        modo: "frio",
        proteina_id: "comp_prot_9",
        carbo_id: "comp_carb_6",
        vegetal_id: "comp_veg_2",
        grasa_id: "comp_fat_2",
        tiempo_min: 5,
        descripcion: "Lentejas cocidas firmes frías mezcladas con cubos de tomate fresco, gajos de palta madura y trozos de huevo duro con aceite de oliva.",
        prompt_cuadrante: "Bowl de ensalada fresca de lentejas cocidas firmes con trozos rústicos de huevo duro, dados de tomate fresco y gajos de palta madura.",
        tags: ["lentejas", "huevo", "palta", "tomate", "ensalada", "frio"]
      }
    ]
  }
];

// Validación estricta de todos los lotes
let errors = 0;
allNewLotes.forEach(l => {
  l.platos.forEach(p => {
    if (p.proteina_id && !validComponentIds.has(p.proteina_id)) {
      console.error(`ERROR en ${p.id}: proteina_id ${p.proteina_id} inválido`);
      errors++;
    }
    if (p.carbo_id && !validComponentIds.has(p.carbo_id)) {
      console.error(`ERROR en ${p.id}: carbo_id ${p.carbo_id} inválido`);
      errors++;
    }
    if (p.vegetal_id && !validComponentIds.has(p.vegetal_id)) {
      console.error(`ERROR en ${p.id}: vegetal_id ${p.vegetal_id} inválido`);
      errors++;
    }
    if (p.vegetal_secundario_id && !validComponentIds.has(p.vegetal_secundario_id)) {
      console.error(`ERROR en ${p.id}: vegetal_secundario_id ${p.vegetal_secundario_id} inválido`);
      errors++;
    }
    if (p.grasa_id && !validComponentIds.has(p.grasa_id)) {
      console.error(`ERROR en ${p.id}: grasa_id ${p.grasa_id} inválido`);
      errors++;
    }
  });
});

if (errors > 0) {
  console.error(`Validación fallida: ${errors} errores encontrados.`);
  process.exit(1);
} else {
  console.log(`Validación exitosa: ${allNewLotes.length} lotes (120 platos, plate_cat_161 a plate_cat_280) 100% compatibles con seed.js`);
}
