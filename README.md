# 🥬 Antirecetario: de la interfaz a una aplicación interactiva

En este proyecto vamos a transformar una interfaz de diseño en una aplicación para combinar alimentos, guardar platos y organizar comidas durante la semana.

La propuesta visual se llama **Mercado Vivo**: una interfaz clara, cálida y cotidiana, con superficies blancas, acentos azules y referencias visuales a ingredientes frescos. El objetivo del curso es aprender a construir el comportamiento de la aplicación con JavaScript, en pasos pequeños y comprobables.

Hay dos caminos posibles:

- Usar la maqueta y los estilos existentes para concentrarse en JavaScript.
- Empezar por la estructura HTML y el diseño CSS, y sumar las interacciones después.

En ambos casos, trabajen con **baby steps**: una funcionalidad pequeña por vez, probándola antes de continuar.

## Las tres partes del proyecto

```text
┌──────────────────────────────────────────────────────────────┐
│ HTML (index.html)     → estructura general y navegación      │
│ CSS (css/)             → diseño Mercado Vivo y componentes   │
│ JavaScript (js/)       → estado, eventos y comportamiento    │
└──────────────────────────────────────────────────────────────┘
```

La aplicación usa JavaScript Vanilla con módulos ES. Cada módulo tiene una responsabilidad concreta y la persistencia se concentra en un servicio para que los componentes no tengan que manipular `localStorage` directamente.

## Archivos principales

```text
recetas-cocina/
├── index.html
├── css/
│   ├── main.css
│   ├── components.css
│   └── glassmorphism.css
└── js/
    ├── app.js
    ├── components/
    │   ├── assembler.js
    │   ├── library.js
    │   ├── planner.js
    │   └── settings.js
    ├── data/seed.js
    ├── services/storage.js
    └── utils/toast.js
```

`index.html` carga el punto de entrada como módulo:

```html
<script type="module" src="js/app.js"></script>
```

Como se usan módulos ES, abran el proyecto mediante un servidor local y no como archivo `file://`. Por ejemplo, desde la carpeta del proyecto:

```bash
python -m http.server 8000
```

Luego visiten `http://localhost:8000`.

## ¿Qué hace la aplicación terminada?

- Navega entre Constructor de Platos, Plan Semanal, Biblioteca y Ajustes sin recargar la página.
- Permite seleccionar varios alimentos en cuatro categorías y alternar entre preparaciones calientes y frías.
- Sugiere selecciones a partir de los ingredientes escritos por la persona.
- Genera tres pasos editables para preparar el plato y permite guardarlo.
- Permite crear, filtrar y eliminar alimentos; también muestra y elimina platos guardados.
- Organiza platos en almuerzos y cenas, con desayuno y merienda opcionales para cada día.
- Guarda los datos en `localStorage`, permite exportarlos a JSON y restaurar los datos iniciales.
- Permite guardar y probar claves de Gemini y Stability AI; se pueden usar para generar imágenes de platos.

La aplicación no necesita cantidades, porciones ni cálculos nutricionales para cumplir estos objetivos. No agreguen calorías, gramos, límites de cantidades ni alertas nutricionales.

## Cómo trabajar con los prompts

No le pidan a la IA que construya toda la aplicación de una vez. Copien un prompt, revisen los cambios, prueben la interacción y recién después pasen al siguiente.

Antes del primer prompt, compartan `index.html`, los estilos existentes y la estructura actual de archivos. En los siguientes pasos, incluyan también los archivos JavaScript que ya fueron creando. Si ya existe código, pidan que lo extienda en lugar de reemplazarlo.

### Reglas para todos los pasos

- Usar JavaScript Vanilla y módulos ES; no agregar frameworks ni dependencias.
- Conservar el diseño, los nombres de clases y los atributos existentes siempre que sea posible.
- Mantener cada comportamiento dentro del componente o servicio correspondiente.
- No agregar porciones, gramos, calorías ni mensajes relacionados con cantidades nutricionales.
- Explicar los conceptos nuevos con comentarios breves y claros.
- Al terminar cada paso, indicar qué archivos cambió y cómo comprobar el resultado manualmente.

## Prompt 1: inicializar la aplicación y navegar entre pestañas

```text
Quiero conectar la interfaz de Antirecetario con JavaScript Vanilla usando módulos ES.

Revisá index.html y la estructura del proyecto. Usá js/app.js como punto de entrada y conservá los cuatro paneles existentes: #assembler, #planner, #library y #settings.

Implementá una clase App que inicialice los componentes y conecte los botones .nav-tab con los paneles .tab-pane. Al cambiar de pestaña, actualizá la clase active del botón y del panel correspondiente, sin recargar la página.

No cambies el diseño ni agregues funcionalidades de alimentos todavía. Conservá los módulos separados. Explicá con comentarios breves qué hacen los imports, la clase App y los eventos.
```

### Comprobar

- Cada pestaña muestra el panel correcto.
- El botón activo coincide con el panel visible.
- La navegación no recarga la página y la consola no muestra errores.

## Prompt 2: crear el servicio de datos y persistir en el navegador

```text
Quiero agregar persistencia local a Antirecetario, sin conectar todavía un servidor.

Revisá js/data/seed.js y creá o completá js/services/storage.js como única capa que accede a localStorage. Al iniciar por primera vez, cargá los datos iniciales de componentes, platos y plan semanal. Si ya hay datos guardados, respetalos.

Implementá funciones asíncronas para leer y guardar componentes, platos y plan semanal, eliminar componentes y platos, actualizar un día del plan y restaurar los datos iniciales. Guardá cada colección como JSON y maneja colecciones vacías sin romper la aplicación.

No guardes porciones, gramos, calorías ni cálculos nutricionales. No cambies el diseño. Explicá con comentarios qué hacen JSON.stringify, JSON.parse y localStorage.
```

### Comprobar

- Los datos iniciales aparecen al abrir el proyecto por primera vez.
- Un cambio guardado sigue presente al recargar la página.
- Reiniciar los datos vuelve a cargar el seed.

## Prompt 3: construir el selector de alimentos y el resumen del plato

```text
Quiero implementar el Constructor de Platos en js/components/assembler.js usando el servicio storage.

Mostrá los alimentos agrupados en Proteínas, Vegetales, Carbohidratos y Grasas. Al hacer clic en una tarjeta, debe alternar su selección sin borrar las selecciones de otros alimentos de la misma categoría. Reflejá visualmente cada selección y actualizá el resumen fijo del plato.

Agregá los controles Caliente y Frío. Al elegir uno, actualizá el estado visual y usá ese modo al proponer el nombre y los pasos iniciales del plato. Mantené el estado durante los re-renderizados del componente.

Conservá el diseño claro existente. No calcules ni muestres cantidades, porciones, gramos, calorías o alertas. Explicá con comentarios cómo se relacionan el estado del componente, render() y bindEvents().
```

### Comprobar

- Se pueden seleccionar y quitar varios alimentos.
- Las selecciones de las cuatro categorías se mantienen al alternar el modo.
- El resumen y el estado visual se actualizan juntos.

## Prompt 4: sugerir alimentos a partir de texto y editar los pasos

```text
Extendé el Constructor de Platos existente con dos funciones pequeñas.

Primero, conectá el formulario #formAutoSelectIngredients. Al enviar texto como “pollo, 2 papas, morrón y palta”, buscá coincidencias con los nombres y las descripciones de los componentes existentes y seleccioná los alimentos que coincidan. La cantidad escrita por la persona no debe convertirse en una porción ni mostrarse como una cantidad; solo usá los nombres de ingredientes para encontrar coincidencias. Mostrá un mensaje breve con los resultados y conservá el texto del campo.

Segundo, completá los tres campos de pasos editables. Proponé instrucciones a partir de los alimentos y del modo Caliente o Frío; al modificar un campo, mantené el texto personalizado aunque el componente se vuelva a renderizar.

Usá funciones pequeñas y fáciles de seguir. No agregues llamadas de IA para esta búsqueda. No incorpores porciones, gramos, calorías ni avisos nutricionales.
```

### Comprobar

- El envío del formulario no recarga la página.
- Se seleccionan los componentes reconocidos y se informa si no hubo coincidencias.
- Los pasos se pueden editar y no se pierden al cambiar selecciones.

## Prompt 5: guardar platos y administrar la biblioteca

```text
Implementá el guardado de platos y las funciones básicas de la Biblioteca, respetando los módulos actuales.

En js/components/assembler.js, conectá el botón Guardar Plato. Guardá el nombre, los IDs seleccionados de cada categoría, los tres pasos, la imagen si existe y la fecha de creación mediante storage.savePlate. Si falta alguna categoría o el nombre está vacío, explicá qué falta con el sistema de mensajes existente. En js/components/library.js, mostrá todos los alimentos guardados en cada plato, incluso si hay más de uno por categoría. Después de guardar, confirmá el resultado.

En js/components/library.js, mostrá los componentes y los platos guardados. Agregá filtros por categoría, un formulario para crear un alimento con nombre, categoría, tiempo de preparación, método, descripción e ícono, y acciones para eliminar componentes o platos con confirmación.

Después de cada operación, volvé a renderizar la sección y conectá de nuevo sus eventos. Conservá el HTML y los estilos existentes. No agregues porciones, cantidades, gramos ni calorías a los datos o las tarjetas.
```

### Comprobar

- Un plato guardado aparece en la biblioteca después de cambiar de pestaña o recargar.
- Los filtros muestran únicamente la categoría elegida.
- Se pueden crear y eliminar alimentos y platos.

## Prompt 6: organizar el plan semanal

```text
Implementá el Plan Semanal en js/components/planner.js usando js/services/storage.js.

Mostrá una tarjeta para cada día. Cada día tiene almuerzo y cena, y permite agregar o quitar desayuno y merienda como comidas opcionales. En cada espacio, permití asignar un plato guardado o quitar el plato asignado. Los cambios deben guardarse en localStorage y conservarse al recargar.

Si se elimina una comida opcional, quitá también el plato que estuviera asignado a ese espacio. Después de cada cambio, volvé a renderizar el plan y conectá sus eventos.

No agregues cálculos ni metas nutricionales. El plan organiza platos; no necesita porciones, gramos, calorías, objetivos de actividad ni mensajes de nutrición. Conservá el diseño existente y explicá con comentarios cómo se relacionan el día, el tipo de comida y el ID del plato.
```

### Comprobar

- Los siete días aparecen y se pueden editar de forma independiente.
- Desayuno y merienda se pueden agregar y quitar.
- Los platos asignados sobreviven a una recarga de la página.

## Prompt 7: configurar y probar las integraciones de imágenes

```text
Completá la sección de Ajustes en js/components/settings.js y la generación de imágenes en js/components/assembler.js.

En Ajustes, permití guardar las claves de Gemini y Stability AI en el servicio storage, probar cada clave mediante su API y mostrar un estado claro de éxito o error. No muestres la clave completa después de guardarla y no registres claves en la consola.

En el Constructor de Platos, el botón Generar Imagen debe abrir un modal, mostrar el estado de carga y usar los alimentos seleccionados para describir el plato. Si existe una clave válida, solicitá una imagen al proveedor disponible. Si no hay clave o falla la solicitud, mostrá un mensaje comprensible y usá la alternativa visual disponible sin bloquear el resto de la aplicación.

Conservá el diseño y las funciones que ya existen. No agregues generación automática de recetas ni datos nutricionales. Explicá con comentarios el uso de fetch, async/await y try/catch.
```

### Comprobar

- Las claves se guardan y se pueden probar desde Ajustes.
- El modal comunica carga, resultado y error.
- Si la generación falla, se puede cerrar el modal y seguir usando la aplicación.

## Prompt 8: exportar y restaurar datos

```text
Conectá los botones del pie de página en index.html con las funciones del servicio storage.

Al pulsar Exportar Datos, descargá un archivo JSON con la versión, la fecha de exportación, componentes, platos y plan semanal. No incluyas claves de API en el archivo.

Al pulsar Reiniciar Datos Seed, pedí confirmación. Si la persona acepta, restaurá los datos iniciales y recargá la aplicación para que todas las secciones reflejen el cambio.

No modifiques el diseño. Explicá con comentarios qué hacen Blob, URL.createObjectURL y la descarga desde un enlace temporal.
```

### Comprobar

- El JSON descargado contiene las colecciones principales y se puede abrir como texto.
- Las claves de API no aparecen en el archivo exportado.
- Cancelar la confirmación no cambia los datos; aceptar restaura el seed.

## Prompt 9: revisión final

```text
Revisá el proyecto completo como docente de diseño y JavaScript inicial. No agregues funcionalidades nuevas.

Verificá que:
- La navegación entre las cuatro secciones funcione sin recargar.
- La selección de alimentos, el modo Caliente/Frío y los tres pasos sean coherentes.
- Guardar, filtrar y eliminar alimentos y platos funcione.
- El plan semanal guarde las asignaciones y comidas opcionales.
- Los datos persistan al recargar y la exportación no incluya claves de API.
- Los errores de las APIs se presenten sin bloquear el uso de la aplicación.
- No haya calorías, gramos, porciones ni alertas de cantidades nutricionales en el código o la interfaz.
- No haya errores en la consola ni eventos duplicados después de un re-render.

Primero enumerá los problemas encontrados con el archivo correspondiente. Después proponé solamente las correcciones necesarias, en cambios pequeños. Conservá la estética Mercado Vivo y la arquitectura por módulos.
```

## Desafíos opcionales

Cuando las consignas principales funcionen, elijan una mejora por vez:

1. Permitir buscar alimentos por nombre desde la Biblioteca.
2. Permitir editar un alimento existente además de crearlo y eliminarlo.
3. Agregar una vista de detalle para consultar un plato guardado.
4. Permitir cambiar el orden de los pasos antes de guardar.
5. Importar un archivo JSON previamente exportado, validando su estructura antes de reemplazar los datos.

## Idea importante

La versión terminada sirve como referencia, pero el objetivo del curso no es copiar todos los archivos de una vez. El aprendizaje está en construir cada interacción paso a paso, probarla y poder explicar cómo se conectan la interfaz, el estado y los datos guardados.
