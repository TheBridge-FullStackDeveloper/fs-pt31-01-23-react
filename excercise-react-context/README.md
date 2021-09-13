# Excersice react context - countries 🌍

En este ejercicio tendrás que crear una aplicación en React que permita listar todas las naciones que nos devuelve la API de restcountries.eu.

Esta aplicación va a tener dos páginas: El index `/` y el detalle de una nación en `/details`

Las informaciones tendrán que ser guardadas y compartidas con el React context

Instalar las dependencias con `npm i`

- Crear un servicio para hacer peticiones a 👉 `https://restcountries.eu/rest/v2/all`
- Guardar en el context la respuesta de la petición
- Crear una página index en el path `/` donde vamos a listar todas las naciones que hemos conseguido con la petición, en la lista hay que mostrar el `name` de la nación y `flag`
- Crear una página `/detail` para mostrar estos detalles: `name`, `flag`, `capital`, `region`, `languages` and `currencies`
  