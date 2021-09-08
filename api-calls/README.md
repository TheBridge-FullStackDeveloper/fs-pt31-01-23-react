## Pokédex Simple

### Estructura

- `src/index.js`
  - Base del proyecto y punto de montaje general.

- `src/pages`
  - Tendremos todos los componentes que reflejarán las rutas de la aplicación web. Cada ruta será una carpeta, cada subruta una subcarpeta y la ruta `/` será el `index.jsx` dentro de `pages`.

- `src/components`
  - Tendremos todos los componentes de la aplicación que no sean páginas, podrán ser reutilizables o no, pero serán los componentes que se monten en las páginas correspondientes.

- `src/services`
  - En este directorio reside la responsabilidad de tener la configuración de la librería de peticiones y de las definiciones de las peticiones en sí mismas. Dentro habrá varios ficheros y directorios:
    - `index.js`: Crea una copia del objeto axios con una url base para inyectarla como dependencia a las diferentes funciones que compongan los servicios. Se encargará también de pasar directamente el objeto original de axios cuando corresponda.
    - `pokemons`: Directorio donde se ubican todas las funciones que hacen llamadas a la pokeAPI. Estas funciones no se preocupan del cliente que el fichero anterior les inyecta; solo se preocupan de usar el método que necesitan para obtener la información de la API.
    - `helpers`: Directorio con la función o funciones que puedan ayudarnos a hacer el código más corto o evitar escribir lo mismo muchas veces. En este caso tenemos una función para manejo de excepciones en peticiones http (función catcher). Esta función es usada por los servicios del directorio `pokemons`.