# Movie SPA - Prueba Tecnica

## Ver Demo en Vivo aqui: https://ivancarbajalg.github.io/Movie-SPA/

## Tecnologias Utilizadas
- **Vanilla JavaScript (ES6+)**: Uso de módulos, async/await y manipulación del DOM.
- **OMDb API**: Consumo de datos cinematograficos.
- **CSS3**: Diseño responsivo mediante Grid y Flexbox.
- **LocalStorage**: Persistencia de datos para la seccion de favoritos.

## Decisiones Técnicas
- **Modularidad**: Se separó la lógica en `api.js` (servicios), `storage.js` (persistencia) y `main.js` (controlador de la UI).
- **Optimizacion de API**: Se implementó una doble llamada a la API; una para la búsqueda general y otra específica mediante `imdbID` para obtener géneros y sinopsis detalladas, cumpliendo con los requisitos de la prueba.
- **Deep Copy**: En la Actividad #2 se utilizo `structuredClone` para garantizar la inmutabilidad de los datos originales.

## Cómo ejecutar el proyecto
Debido al uso de módulos de ES6, el proyecto debe ejecutarse en un servidor local:
1. Abrir la carpeta en VS Code.
2. Usar la extensión **Live Server** o ejecutar `npx serve` en la terminal.
3. Para la Actividad 2: Ejecutar `node jsonActivity2.js`.(Se requiere tener antes instalado node.js)

## Extras
El contenido de la variable **API_KEY** puede cambiar con el tiempo, debe asegurarse que este valda el key.
- La variable tiene la ubicacion *MOVIE SPA/src/api.js*
