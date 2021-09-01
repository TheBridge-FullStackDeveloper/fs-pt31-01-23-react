# To do List

En este ejercicio iremos creando una to do list con REACT

## Primera iteración

Instalar las dependencias con `npm i`

Para arrancar el servidor:

```sh
npm run start
```

## Segunda iteración

Crear un input para poder añadir las tareas a la lista.

💡 Pista: puedes utilizar el evento `onKeyDown`

## Tercera iteración

Crear la función que actualize el estado al momento de pulsar `Enter` u otra tecla a vuestra elección.

💡 Pista: En el estado tendremos las diferentes tareas de la lista, por eso el estado puede ser un array

## Cuarta iteración

Dibujar en el DOM la lista de tareas.

## Bonus

- Añade funcionalidad para poder tachar o eliminar las tareas.
💡 Pista: Para esta iteración el estado debería ser un array de objectos, podría ser algo así:

```js
{
  description: 'Tarea',
  isDone: false,
  _id: 1,
}
```
- Prueba a cambiar el `onKeyDown` con un botón a la cual tenemos que hacer click cada fez que queremos inserir un elemento

- Divide el código en componentes