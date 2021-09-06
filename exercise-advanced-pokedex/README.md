## Advanced Pokédex 🎮

En este ejercicio vas a construir tu propia Pokédex!

- Tendremos 2 rutas:
  - `/`
  - `/details/:name`

- Para la primera ruta:
  - Tendremos un `input` y una lista vacía.
  - El `input` filtrará en la lista las coincidencias con el id, el nombre o alguno de los tipos de los pokémon de la lista
  - En caso de que no coincida ninguna búsqueda o que la lista esté vacía, hará la petición de búsqueda a la pokeAPI y mostrará el resultado como si existiese guardándolo en el estado del componente (lista)
  - La búsqueda contra la pokeAPI no debe hacerse inmediatamente estemos escribiendo algo, debe haber un pequeño tiempo de espera para no saturar de peticiones la API externa. Implementa tu propio hook "debounce"
  - Según vayamos obteniendo los pokémon y guardándolos en la lista, se mostrarán como tarjetas con los siguientes datos:
    - Sprite frontal
    - Nombre
    - ID
    - Tipos
  - Cuando hagamos click en alguno, la aplicación nos redirigirá a `/details/:name`

- Para la segunda ruta
  - Debemos mostrar una foto grande del pokémon, además de la información pertinente de la tarjeta sobre la que clickamos (muestra algo más de información que quieras a partir de la información de la pokeAPI)
  - Debe haber algún botón para poder volver a la página anterior (`/`)
  - Cuando volvemos a la página anterior, debe estar la lista con todos los pokémon que teníamos (cuidado dónde tienes guardada la lista de pokémon para no perder la información cuando cambies de ruta)
  - Si accedemos directamente, a través de la barra de direcciones a la ruta actual (`/details/:name`), lo normal es que no tengas la información del pokémon. En este caso, de no existir ninguna información, tráela de la pokeAPI para mostrar el pokémon como si existiera y, si vuelves a la página principal, guarda ese pokémon en la lista.
  - Si, accediendo directamente a esta ruta, la pokeAPI nos devuelve algún error, redirige a la página principal

* Maquétalo bonito, pero sencillo 👾