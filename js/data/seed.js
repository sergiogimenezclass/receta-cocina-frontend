/**
 * Seed inicial de datos para Antirecetario
 * Clasificados por las 4 categorías clave de macronutrientes.
 */
export const INITIAL_SEED = {
  components: [
    // PROTEÍNAS
    {
      id: "comp_prot_1",
      nombre: "Pechuga / Suprema de Pollo",
      categoria: "Proteina",
      tiempo_preparacion_min: 10,
      metodo_coccion: "Plancha o sartén a fuego medio hasta dorar",
      icono: "🍗"
    },
    {
      id: "comp_prot_2",
      nombre: "Pata-Muslo de Pollo",
      categoria: "Proteina",
      tiempo_preparacion_min: 25,
      metodo_coccion: "Sartén tapada o al horno hasta dorar",
      icono: "🍗"
    },
    {
      id: "comp_prot_3",
      nombre: "Bife / Churrasco Magro",
      categoria: "Proteina",
      tiempo_preparacion_min: 6,
      metodo_coccion: "Plancha muy caliente 3-4 min por lado",
      icono: "🥩"
    },
    {
      id: "comp_prot_4",
      nombre: "Carne Picada / Molida",
      categoria: "Proteina",
      tiempo_preparacion_min: 8,
      metodo_coccion: "Salteada en sartén o wok desgranada",
      icono: "🥘"
    },
    {
      id: "comp_prot_5",
      nombre: "Tira de Asado",
      categoria: "Proteina",
      tiempo_preparacion_min: 35,
      metodo_coccion: "A la parrilla, plancha gruesa o al horno",
      icono: "🥩"
    },
    {
      id: "comp_prot_6",
      nombre: "Tortuguita en Bifes",
      categoria: "Proteina",
      tiempo_preparacion_min: 8,
      metodo_coccion: "Bifecitos finos a la plancha vuelta y vuelta",
      icono: "🥩"
    },
    {
      id: "comp_prot_7",
      nombre: "Palomita en Bifes",
      categoria: "Proteina",
      tiempo_preparacion_min: 10,
      metodo_coccion: "Bifecitos a la plancha o sartén caliente",
      icono: "🥩"
    },
    {
      id: "comp_prot_8",
      nombre: "Huevos Revueltos",
      categoria: "Proteina",
      tiempo_preparacion_min: 3,
      metodo_coccion: "Sartén antiadherente a fuego bajo con pizca de sal",
      icono: "🍳"
    },
    {
      id: "comp_prot_9",
      nombre: "Huevo Duro / Cocido",
      categoria: "Proteina",
      tiempo_preparacion_min: 10,
      metodo_coccion: "Hervir en agua (ideal frío para ensaladas o viandas)",
      icono: "🥚"
    },
    {
      id: "comp_prot_10",
      nombre: "Filete de Pescado Blanco (Merluza / Tilapia)",
      categoria: "Proteina",
      tiempo_preparacion_min: 7,
      metodo_coccion: "Plancha caliente con limón y orégano",
      icono: "🐟"
    },
    {
      id: "comp_prot_11",
      nombre: "Atún al Natural (Lata)",
      categoria: "Proteina",
      tiempo_preparacion_min: 0,
      metodo_coccion: "Escurrir de la lata y servir directo",
      icono: "🥫"
    },
    {
      id: "comp_prot_12",
      nombre: "Costillita / Bife de Cerdo",
      categoria: "Proteina",
      tiempo_preparacion_min: 10,
      metodo_coccion: "Plancha bien caliente dorada de ambos lados",
      icono: "🥩"
    },
    {
      id: "comp_prot_13",
      nombre: "Tofu a la Plancha",
      categoria: "Proteina",
      tiempo_preparacion_min: 6,
      metodo_coccion: "Dorar en cubos con salsa de soja",
      icono: "🧈"
    },
    {
      id: "comp_prot_14",
      nombre: "Milanesa (Carne o Pollo)",
      categoria: "Proteina",
      tiempo_preparacion_min: 12,
      metodo_coccion: "Al horno en asadera aceitada o a la sartén",
      icono: "🥩"
    },
    {
      id: "comp_prot_15",
      nombre: "Bondiola o Solomillo de Cerdo",
      categoria: "Proteina",
      tiempo_preparacion_min: 10,
      metodo_coccion: "En bifes a la plancha caliente con limón o mostaza",
      icono: "🥩"
    },
    {
      id: "comp_prot_16",
      nombre: "Queso Fresco / Port Salut / Ricota",
      categoria: "Proteina",
      tiempo_preparacion_min: 1,
      metodo_coccion: "En cubos para ensalada o gratinado sobre vegetales",
      icono: "🧀"
    },
    {
      id: "comp_prot_17",
      nombre: "Caballa en Lata (al Natural o Aceite)",
      categoria: "Proteina",
      tiempo_preparacion_min: 0,
      metodo_coccion: "Escurrir de la lata y servir directo en ensalada",
      icono: "🥫"
    },
    {
      id: "comp_prot_18",
      nombre: "Soja Texturizada Salteada",
      categoria: "Proteina",
      tiempo_preparacion_min: 8,
      metodo_coccion: "Hidratar en agua tibia y dorar en sartén con condimentos",
      icono: "🫘"
    },
    {
      id: "comp_prot_19",
      nombre: "Bife de Hígado Encebollado",
      categoria: "Proteina",
      tiempo_preparacion_min: 6,
      metodo_coccion: "Plancha bien caliente 2-3 min por lado con orégano y cebolla",
      icono: "🥩"
    },

    // VEGETALES
    {
      id: "comp_veg_1",
      nombre: "Hojas Verdes (Lechuga / Rúcula)",
      categoria: "Vegetal",
      tiempo_preparacion_min: 1,
      metodo_coccion: "Lavar, secar y servir fresco en ensalada",
      icono: "🥗"
    },
    {
      id: "comp_veg_2",
      nombre: "Tomate en Rodajas / Cubos",
      categoria: "Vegetal",
      tiempo_preparacion_min: 1,
      metodo_coccion: "Cortar al plato crudo con sal, o sellado a la plancha",
      icono: "🍅"
    },
    {
      id: "comp_veg_3",
      nombre: "Hongos / Champiñones Salteados",
      categoria: "Vegetal",
      tiempo_preparacion_min: 5,
      metodo_coccion: "Saltear en sartén caliente con ajo y perejil",
      icono: "🍄"
    },
    {
      id: "comp_veg_4",
      nombre: "Zanahoria Rallada / Cocida",
      categoria: "Vegetal",
      tiempo_preparacion_min: 2,
      metodo_coccion: "Rallada fresca o hervida en cubos al vapor",
      icono: "🥕"
    },
    {
      id: "comp_veg_5",
      nombre: "Brócoli al Vapor",
      categoria: "Vegetal",
      tiempo_preparacion_min: 6,
      metodo_coccion: "Vapor o microondas 5-6 min",
      icono: "🥦"
    },
    {
      id: "comp_veg_6",
      nombre: "Zucchini / Zapallito a la Plancha",
      categoria: "Vegetal",
      tiempo_preparacion_min: 5,
      metodo_coccion: "Rodajas finas a la plancha con hierbas",
      icono: "🥒"
    },
    {
      id: "comp_veg_7",
      nombre: "Espinaca o Acelga Salteada",
      categoria: "Vegetal",
      tiempo_preparacion_min: 3,
      metodo_coccion: "Saltear rápido en sartén con ajo",
      icono: "🥬"
    },
    {
      id: "comp_veg_8",
      nombre: "Wok de Vegetales Mixtos",
      categoria: "Vegetal",
      tiempo_preparacion_min: 8,
      metodo_coccion: "Salteado a fuego fuerte (cebolla, morrón y zucchini)",
      icono: "🥘"
    },
    {
      id: "comp_veg_9",
      nombre: "Zapallo / Calabaza / Anco",
      categoria: "Vegetal",
      tiempo_preparacion_min: 18,
      metodo_coccion: "Hervido en cubos para puré o al horno",
      icono: "🎃"
    },
    {
      id: "comp_veg_10",
      nombre: "Cebolla (Salteada / Dorada)",
      categoria: "Vegetal",
      tiempo_preparacion_min: 5,
      metodo_coccion: "Cortar en pluma o juliana y dorar a fuego medio",
      icono: "🧅"
    },
    {
      id: "comp_veg_11",
      nombre: "Morrón / Pimiento (Rojo o Verde)",
      categoria: "Vegetal",
      tiempo_preparacion_min: 5,
      metodo_coccion: "Salteado en tiras, asado a la plancha o en ensalada",
      icono: "🫑"
    },
    {
      id: "comp_veg_12",
      nombre: "Berenjena a la Plancha o Asada",
      categoria: "Vegetal",
      tiempo_preparacion_min: 8,
      metodo_coccion: "En rodajas doradas a la sartén o al horno con orégano",
      icono: "🍆"
    },
    {
      id: "comp_veg_13",
      nombre: "Cebolla de Verdeo y Puerro",
      categoria: "Vegetal",
      tiempo_preparacion_min: 4,
      metodo_coccion: "Salteado rápido en sartén o picado fino",
      icono: "🧅"
    },
    {
      id: "comp_veg_14",
      nombre: "Remolacha (Rallada o Hervida)",
      categoria: "Vegetal",
      tiempo_preparacion_min: 2,
      metodo_coccion: "Rallada fresca en ensalada o hervida en cubos",
      icono: "🥗"
    },
    {
      id: "comp_veg_15",
      nombre: "Repollo (Blanco o Colorado)",
      categoria: "Vegetal",
      tiempo_preparacion_min: 2,
      metodo_coccion: "Cortado fino en ensalada crujiente o salteado al wok",
      icono: "🥬"
    },
    {
      id: "comp_veg_16",
      nombre: "Pepino en Rodajas",
      categoria: "Vegetal",
      tiempo_preparacion_min: 1,
      metodo_coccion: "Lavar, cortar en rodajas finas y servir fresco",
      icono: "🥒"
    },
    {
      id: "comp_veg_17",
      nombre: "Rabanitos en Rodajas",
      categoria: "Vegetal",
      tiempo_preparacion_min: 1,
      metodo_coccion: "Lavar, laminar fino para ensalada fresca y crocante",
      icono: "🥗"
    },
    {
      id: "comp_veg_18",
      nombre: "Coliflor al Vapor o Salteada",
      categoria: "Vegetal",
      tiempo_preparacion_min: 7,
      metodo_coccion: "En ramilletes al vapor o dorada en sartén",
      icono: "🥦"
    },
    {
      id: "comp_veg_19",
      nombre: "Chauchas al Vapor o Salteadas",
      categoria: "Vegetal",
      tiempo_preparacion_min: 6,
      metodo_coccion: "Hervidas al dente con oliva o salteadas con ajo",
      icono: "🫛"
    },

    // CARBOHIDRATOS
    {
      id: "comp_carb_1",
      nombre: "Arroz (Blanco o Integral)",
      categoria: "Carbohidrato",
      tiempo_preparacion_min: 12,
      metodo_coccion: "Hervir en agua o usar arroz cocido previo",
      icono: "🍚"
    },
    {
      id: "comp_carb_2",
      nombre: "Fideos / Pasta",
      categoria: "Carbohidrato",
      tiempo_preparacion_min: 8,
      metodo_coccion: "Hervir en agua abundante con sal al dente",
      icono: "🍝"
    },
    {
      id: "comp_carb_3",
      nombre: "Papa (Hervida o al Horno)",
      categoria: "Carbohidrato",
      tiempo_preparacion_min: 15,
      metodo_coccion: "Cubos hervidos, al microondas o al horno",
      icono: "🥔"
    },
    {
      id: "comp_carb_4",
      nombre: "Batata / Camote Asado",
      categoria: "Carbohidrato",
      tiempo_preparacion_min: 15,
      metodo_coccion: "Rodajas a la plancha o cubos al horno",
      icono: "🍠"
    },
    {
      id: "comp_carb_5",
      nombre: "Choclo / Maíz Desgranado",
      categoria: "Carbohidrato",
      tiempo_preparacion_min: 3,
      metodo_coccion: "De lata escurrido o hervido rápido 3 min",
      icono: "🌽"
    },
    {
      id: "comp_carb_6",
      nombre: "Legumbres (Lentejas o Porotos cocidos)",
      categoria: "Carbohidrato",
      tiempo_preparacion_min: 2,
      metodo_coccion: "De lata o cocidas, escurrir y calentar",
      icono: "🫘"
    },
    {
      id: "comp_carb_7",
      nombre: "Mandioca / Yuca Hervida",
      categoria: "Carbohidrato",
      tiempo_preparacion_min: 20,
      metodo_coccion: "Hervir en agua con sal hasta que tiernice",
      icono: "🪵"
    },
    {
      id: "comp_carb_8",
      nombre: "Quinoa",
      categoria: "Carbohidrato",
      tiempo_preparacion_min: 10,
      metodo_coccion: "Lavar y hervir 10 min a fuego bajo",
      icono: "🌾"
    },
    {
      id: "comp_carb_9",
      nombre: "Avena (Arrollada)",
      categoria: "Carbohidrato",
      tiempo_preparacion_min: 2,
      metodo_coccion: "Cocinar 2 min en líquido caliente o consumir directa",
      icono: "🥣"
    },

    // GRASAS
    {
      id: "comp_fat_1",
      nombre: "Aceite de Oliva Extra Virgen",
      categoria: "Grasa",
      tiempo_preparacion_min: 0,
      metodo_coccion: "Agregar crudo al emplatar",
      icono: "🫒"
    },
    {
      id: "comp_fat_2",
      nombre: "Palta / Aguacate",
      categoria: "Grasa",
      tiempo_preparacion_min: 1,
      metodo_coccion: "Cortar en láminas o pisada con limón",
      icono: "🥑"
    },
    {
      id: "comp_fat_3",
      nombre: "Aceitunas (Verdes o Negras)",
      categoria: "Grasa",
      tiempo_preparacion_min: 0,
      metodo_coccion: "Directo del frasco al plato",
      icono: "🫒"
    },
    {
      id: "comp_fat_4",
      nombre: "Frutos Secos (Nueces / Almendras)",
      categoria: "Grasa",
      tiempo_preparacion_min: 0,
      metodo_coccion: "Servir crudos o apenas tostados para crocancia",
      icono: "🌰"
    },
    {
      id: "comp_fat_5",
      nombre: "Semillas (Chía, Girasol o Sésamo)",
      categoria: "Grasa",
      tiempo_preparacion_min: 0,
      metodo_coccion: "Espolvorear sobre el plato terminado",
      icono: "🌻"
    },
    {
      id: "comp_fat_6",
      nombre: "Queso Rallado / Semiduro (Parmesano / Sardo)",
      categoria: "Grasa",
      tiempo_preparacion_min: 0,
      metodo_coccion: "Rallar directo sobre el plato terminado",
      icono: "🧀"
    },
    {
      id: "comp_fat_7",
      nombre: "Manteca",
      categoria: "Grasa",
      tiempo_preparacion_min: 1,
      metodo_coccion: "Fundir en sartén para dorar o mezclar en caliente",
      icono: "🧈"
    },
    {
      id: "comp_fat_8",
      nombre: "Crema de Leche",
      categoria: "Grasa",
      tiempo_preparacion_min: 2,
      metodo_coccion: "Agregar a la sartén para ligar una salsa o en frío",
      icono: "🥛"
    }
  ],

  plates: [
    {
      id: "plate_demo_1",
      nombre: "Bowl Potencia Post-Entreno",
      proteina_id: "comp_prot_1",
      vegetal_id: "comp_veg_5",
      carbo_id: "comp_carb_3",
      grasa_id: "comp_fat_1",
      pasos: [
        "Plancha pechuga de pollo 10 min a fuego medio hasta dorar.",
        "Hervir papa en cubos y brócoli al vapor durante 15 y 6 min.",
        "Servir juntos en bowl y aderezar con 1 cda de aceite de oliva."
      ],
      creado_en: new Date().toISOString()
    },
    {
      id: "plate_demo_2",
      nombre: "Ensalada Proteica Fresca / Rest Day",
      proteina_id: "comp_prot_8",
      vegetal_id: "comp_veg_1",
      carbo_id: "comp_carb_8",
      grasa_id: "comp_fat_2",
      pasos: [
        "Hacer huevos revueltos en sartén en 3 minutos.",
        "Mezclar hojas verdes frescas y quinoa cocida en bowl frío.",
        "Coronar con 1/2 palta laminada al gusto."
      ],
      creado_en: new Date().toISOString()
    }
  ],

  weeklyPlan: {
    lunes: { actividad: "Intenso", almuerzo_id: "plate_demo_1", cena_id: null },
    martes: { actividad: "Moderado", almuerzo_id: null, cena_id: "plate_demo_2" },
    miercoles: { actividad: "Descanso", almuerzo_id: "plate_demo_2", cena_id: null },
    jueves: { actividad: "Intenso", almuerzo_id: "plate_demo_1", cena_id: null },
    viernes: { actividad: "Moderado", almuerzo_id: null, cena_id: null },
    sabado: { actividad: "Descanso", almuerzo_id: null, cena_id: null },
    domingo: { actividad: "Descanso", almuerzo_id: null, cena_id: null }
  }
};
