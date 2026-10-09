/**
 * Seed inicial de datos para Antirecetario
 * Clasificados por las 4 categorías clave de macronutrientes.
 */
export const INITIAL_SEED = {
  components: [
    // PROTEÍNAS
    {
      id: "comp_prot_1",
      nombre: "Pechuga de Pollo",
      categoria: "Proteina",
      tiempo_preparacion_min: 12,
      metodo_coccion: "Plancha a fuego medio con sal y pimienta",
      icono: "🍗",
      porcion_base: "150g",
      en_despensa: true
    },
    {
      id: "comp_prot_2",
      nombre: "Bife de Magro",
      categoria: "Proteina",
      tiempo_preparacion_min: 10,
      metodo_coccion: "Plancha muy caliente 4 min por lado",
      icono: "🥩",
      porcion_base: "180g",
      en_despensa: true
    },
    {
      id: "comp_prot_3",
      nombre: "Huevos Revueltos / Pasados",
      categoria: "Proteina",
      tiempo_preparacion_min: 5,
      metodo_coccion: "Sartén antiadherente a fuego bajo",
      icono: "🥚",
      porcion_base: "3 unidades",
      en_despensa: true
    },
    {
      id: "comp_prot_4",
      nombre: "Tofu a la Plancha",
      categoria: "Proteina",
      tiempo_preparacion_min: 8,
      metodo_coccion: "Dorar en cubos con salsa de soya",
      icono: "🧈",
      porcion_base: "160g",
      en_despensa: false
    },
    {
      id: "comp_prot_5",
      nombre: "Lomo de Salmón / Atún",
      categoria: "Proteina",
      tiempo_preparacion_min: 9,
      metodo_coccion: "Sellado rápido a la plancha",
      icono: "🐟",
      porcion_base: "150g",
      en_despensa: false
    },

    // VEGETALES
    {
      id: "comp_veg_1",
      nombre: "Brócoli al Vapor",
      categoria: "Vegetal",
      tiempo_preparacion_min: 8,
      metodo_coccion: "Cocinar al vapor o hervir 6 min",
      icono: "🥦",
      porcion_base: "150g",
      en_despensa: true
    },
    {
      id: "comp_veg_2",
      nombre: "Rúcula y Tomate Cherry",
      categoria: "Vegetal",
      tiempo_preparacion_min: 3,
      metodo_coccion: "Crudo en ensalada fresca",
      icono: "🥗",
      porcion_base: "1 bowl",
      en_despensa: true
    },
    {
      id: "comp_veg_3",
      nombre: "Zucchini a la Plancha",
      categoria: "Vegetal",
      tiempo_preparacion_min: 6,
      metodo_coccion: "Rodajas a la plancha con orégano",
      icono: "🥒",
      porcion_base: "1 unidad grande",
      en_despensa: true
    },
    {
      id: "comp_veg_4",
      nombre: "Espinaca Salteada",
      categoria: "Vegetal",
      tiempo_preparacion_min: 4,
      metodo_coccion: "Saltear rápido con ajo en sartén",
      icono: "🥬",
      porcion_base: "150g",
      en_despensa: false
    },
    {
      id: "comp_veg_5",
      nombre: "Wok de Vegetales Mixtos",
      categoria: "Vegetal",
      tiempo_preparacion_min: 10,
      metodo_coccion: "Salteado a fuego fuerte (zucchini, morrón, cebolla y berenjena con soya)",
      icono: "🥘",
      porcion_base: "1 bowl (200g)",
      en_despensa: true
    },

    // CARBOHIDRATOS
    {
      id: "comp_carb_1",
      nombre: "Papa al Horno / Hervida",
      categoria: "Carbohidrato",
      tiempo_preparacion_min: 18,
      metodo_coccion: "Hervir en cubos o al horno con romero",
      icono: "🥔",
      porcion_base: "150g (Ajustable por actividad)",
      en_despensa: true
    },
    {
      id: "comp_carb_2",
      nombre: "Arroz Integral / Blanco",
      categoria: "Carbohidrato",
      tiempo_preparacion_min: 15,
      metodo_coccion: "Hervir a fuego lento 2x1 agua",
      icono: "🍚",
      porcion_base: "120g cocido (Ajustable)",
      en_despensa: true
    },
    {
      id: "comp_carb_3",
      nombre: "Camote / Batata Asada",
      categoria: "Carbohidrato",
      tiempo_preparacion_min: 20,
      metodo_coccion: "Horno a 200°C en gajos dorados",
      icono: "🍠",
      porcion_base: "160g (Ajustable)",
      en_despensa: true
    },
    {
      id: "comp_carb_4",
      nombre: "Quinoa Graneada",
      categoria: "Carbohidrato",
      tiempo_preparacion_min: 12,
      metodo_coccion: "Lavar y hervir 10 min",
      icono: "🌾",
      porcion_base: "110g (Ajustable)",
      en_despensa: false
    },

    // GRASAS
    {
      id: "comp_fat_1",
      nombre: "Aceite de Oliva Extra Virgen",
      categoria: "Grasa",
      tiempo_preparacion_min: 1,
      metodo_coccion: "Agregar crudo al emplatar",
      icono: "🫒",
      porcion_base: "1 cucharada (15ml)",
      en_despensa: true
    },
    {
      id: "comp_fat_2",
      nombre: "Palta / Aguacate",
      categoria: "Grasa",
      tiempo_preparacion_min: 2,
      metodo_coccion: "Cortar en láminas o pisado",
      icono: "🥑",
      porcion_base: "1/2 unidad",
      en_despensa: true
    },
    {
      id: "comp_fat_3",
      nombre: "Frutos Secos Tostados",
      categoria: "Grasa",
      tiempo_preparacion_min: 2,
      metodo_coccion: "Tostar suavemente 2 min o servir directo",
      icono: "🥜",
      porcion_base: "30g (Nueces/Almendras)",
      en_despensa: false
    },
    {
      id: "comp_fat_4",
      nombre: "Semillas de Chía / Girasol",
      categoria: "Grasa",
      tiempo_preparacion_min: 1,
      metodo_coccion: "Espolvorear sobre el plato terminado",
      icono: "🌻",
      porcion_base: "1 cucharada",
      en_despensa: true
    }
  ],

  plates: [
    {
      id: "plate_demo_1",
      nombre: "Bowl Potencia Post-Entreno",
      "actividad_recomendada": "Intenso",
      proteina_id: "comp_prot_1",
      vegetal_id: "comp_veg_1",
      carbo_id: "comp_carb_1",
      grasa_id: "comp_fat_1",
      pasos: [
        "Plancha pechuga de pollo 12 min a fuego medio hasta dorar.",
        "Hervir papa en cubos y brócoli al vapor durante 15 y 8 min.",
        "Servir juntos en bowl y aderezar con 1 cda de aceite de oliva."
      ],
      creado_en: new Date().toISOString()
    },
    {
      id: "plate_demo_2",
      nombre: "Ensalada Proteica Keto / Rest Day",
      "actividad_recomendada": "Descanso",
      proteina_id: "comp_prot_3",
      vegetal_id: "comp_veg_2",
      carbo_id: "comp_carb_4",
      grasa_id: "comp_fat_2",
      pasos: [
        "Hacer huevos pasados por agua o revueltos en 5 minutos.",
        "Mezclar rúcula fresca con tomates cherry y quinoa fría.",
        "Coronar con 1/2 palta laminada y semillas al gusto."
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
