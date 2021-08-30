# REACT ⚛️

React es una biblioteca para construir interfaces de usuario.

React no es un framework y una de sus principales características es que no se limita a las web, 
Por ejemplo con React Native podemos crear aplicaciones móviles y con React 360 aplicaciones de realidad virtual.

React es una SPA (single page application), una web dove la mayoría de la interaction con el usuario ocurre en una solo pagina. La nuestra aplicación tendrá un solo fichero HTML, solamente llamado `index.html`, REACT cargara dinámicamente otras pieza de HTML.

## Herramientas para montar una aplicación con REACT

Para el correcto montaje de una aplicación REACT necesitaremos:

- Un *empaquetador* como Webpack o Parcel. Este te permite escribir código modular y empaqutarlo junto en paquetes mas pequeños que optimizan el tiempo de carga.
- Un *compilador* como Babel. Este permite escribir Javascript moderno que aun asi funciona en navegador mas antiguos.

## JSX

```js
const element = <h1>Hello, world!</h1>;
```

Esta sintaxis de etiquetas no es ni un string ni HTML.

Se llama JSX, y es una extensión de la sintaxis de JavaScript. Recomendamos usarlo con React para describir cómo debería ser la interfaz de usuario. JSX puede recordarte a un lenguaje de plantillas, pero viene con todo el poder de JavaScript.

JSX produce “elementos” de React. Exploraremos como renderizarlos en el DOM en la siguiente sección. A continuación puedes encontrar lo básico de JSX que será necesario para empezar.

React no requiere usar JSX, pero es una ayuda visual que la mayoría de los programadores encuentra muy util, esto permite también mensajes de errores y advertencias mas útiles.

## Variables y funciones in JSX

Declaramos una variable llamada `name` y luego la usamos dentro del JSX envolviéndola dentro de llaves:

```js
const name = 'Josh';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Puedes poner cualquier expresión de JavaScript dentro de llaves en JSX. Por ejemplo, 2 + 2, `user.firstName`, o `formatName(user)` son todas expresiones válidas de Javascript.

```js
function formatName(user) {
  return user.firstName + ' ' + user.secondName;
}

const user = {
  firstName: 'Harper',
  pear: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(fruits)}!  
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Dentro de bucles `for` y condiciones `if` podemos utilizar JSX

```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

## Atributos con JSX

Los atributos se pueden especificar como strings:

```js
const element = <div tabIndex="0"></div>;
```

Podemos utilizar llaves para insertar una expression en un attributo

```js
const element = <img src={user.avatarUrl}></img>;
```

⚠️ React DOM usa la convención de nomenclatura camelCase en vez de nombres de atributos HTML. Por ejemplo, class se vuelve className en JSX, y tabindex se vuelve tabIndex.

## JSX previene ataques de inyección

Es seguro insertar datos ingresados por el usuario en JSX:

```js
const title = response.potentiallyMaliciousInput;
// Esto es seguro:
const element = <h1>{title}</h1>;
```

Por defecto, React DOM escapa cualquier valor insertado en JSX antes de renderizarlo. De este modo, se asegura de que nunca se pueda insertar nada que no esté explícitamente escrito en tú aplicación. Todo es convertido en un string antes de ser renderizado. Esto ayuda a prevenir vulnerabilidades XSS (cross-site-scripting).

## JSX representa objetos

Babel compila JSX a llamadas de React.createElement().

Estos dos ejemplos son idénticos:

```js
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
```js
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```