# Introduccion a backend

# [Node.js](https://nodejs.org/es)

#### TODO -> Repasar objetos globales en Node.js

## Bases conceptuales del backend

El desarrollo backend se refiere a la parte no visible de una aplicacion o sitio web, es decir, el motor que hace que funcione toda la logica del lado del servidor

Mientras que el frontend es lo que el usuario ve y con lo que interactua, el backend se encarga de procesar solicitudes, manejar BBDD y ejecutar logica de negocio (logica pesada de nuestra app)

### Que es un servidor?
- Una computadora muy grande que esta alojada en un datacenter?
- Un proceso que esta todo el rato escuchando peticiones?

Para entender al servidor como PROCESO, tenemos que volver al clasico `addEventListener`
```js
const boton = document.getElementById("boton");

// Le asigno a mi boton un escuchador de eventos -> Basicamente un PROCESO en continua ejecucion que realiza determinadas operaciones a partir de detectar o escuchar una accion realizada sobre ese elemento
boton.addEventListener("click", (event) => {
    console.log("Hiciste click en el elemento: ": event.target);
});

// Ahora pasaremos de escuchar acciones a peticiones
// ACCION -> PETICION
```

Un servidor hace algo muy parecido, es un PROCESO en continua ejecucion que realiza determinadas operaciones a partir de detectar ya no una accion sobre un elemento (o la pagina), sino a partir de detectar una PETICION HTTP

### Que es un CRUD?
Es basicamente una aplicacion que hace operaciones con una Base de datos:

- Create (Crear nuevo registros en una base de datos) -> POST
- Read (Leer registros en una BBDD) -> GET
- Update (Modificar registros en una BBDD) -> PUT
- Delete (Eliminar registros en una BBDD) -> DELETE

---

# [Conceptos fundamentales de la Web](https://www.youtube.com/watch?v=l6oF_RpBf64)
La comunicacion en la web se asienta en la comunicacion entre dos computadoras

1. **Cliente (navegador web)**: Esta computadora hace peticiones HTTP -> http request a un servidor
2. **Servidor (proceso permanente)** Parecido al addEventListener -> Es un proceso en ejecucion constante que esta esperando solicitudes HTTP (HTTP Request) y devuelve respuestas HTTP (HTTP Response)

---

## AJAX (JavaScript Asincrono y XML) 
*Hoy lo tendriamos que llamar AJAJ! Porque usamos JavaScript Asincronico con JSON*. Quedo el nombre historico AJAX.
**AJAX** (Asynchronous JavaScript and XML) es una técnica de desarrollo web que permite actualizar partes específicas de una página HTML sin recargar la página completa, mejorando la interactividad y la velocidad. Se basa en la comunicación asíncrona entre el navegador y el servidor mediante la moderna API **Fetch**.

El funcionamiento implica que JavaScript crea una solicitud en segundo plano; el servidor procesa los datos (típicamente en formato **JSON** o XML) y los devuelve, permitiendo que el navegador actualice el contenido dinámicamente mientras la página permanece responsive.

Existen tres formas principales de implementar AJAX en JavaScript moderno:

### 1. Fetch API (Recomendado)
Es la forma moderna y nativa de realizar peticiones HTTP, basada en promesas.

```javascript
fetch('https://api.ejemplo.com/datos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

---


## Protocolo HTTP
Un conjunto de pasos a seguir para que la comunicacion en internet sea efectiva

- **Determina que formato tienen que tener esas peticiones y respuestas**
- Metodos HTTP que determinan las acciones (GET, POST, PUT, DELETE)
- El servidor nos respondera con codigos de estado

---

## Metodos HTTP
Los métodos HTTP, también conocidos como verbos HTTP, son comandos definidos en el protocolo HTTP que indican al servidor la **acción específica** que se desea realizar sobre un recurso determinado. Permitiendo operaciones como la recuperación, creación, actualización o eliminación de datos.

Los métodos más utilizados en el desarrollo web moderno y en arquitecturas REST son:

*   **GET**: Solicita recursos -> *Obtener todos los productos*
*   **POST**: Crear recursos -> *Crear un nuevo producto*
*   **PUT**: Modifica recursos -> *Modificar un producto*
*   **DELETE**: Borra recursos -> *Eliminar un producto producto*

---

## Codigos de estado HTTP
Los códigos de estado HTTP son respuestas numéricas del servidor que indican el resultado de una solicitud HTTP, clasificadas en cinco categorías según su primer dígito: **1xx** (informativas), **2xx** (éxito), **3xx** (redirecciones), **4xx** (errores del cliente) y **5xx** (errores del servidor).

### Respuestas de Éxito (2xx)
*   **200 OK**: La solicitud se ha completado con éxito.
*   **201 Created**: Se ha creado un nuevo recurso correctamente.
*   **204 No Content**: La solicitud tuvo éxito, pero no hay contenido en la respuesta.

### Redirecciones (3xx)
*   **301 Moved Permanently**: El recurso se ha movido permanentemente a otra URL.
*   **302 Found**: El recurso se ha movido temporalmente.
*   **304 Not Modified**: El recurso no ha cambiado; el cliente puede usar su versión en caché.

### Errores del Cliente (4xx)
*   **400 Bad Request**: La solicitud tiene un error de sintaxis o no se puede interpretar.
*   **401 Unauthorized**: Se requiere autenticación para acceder al recurso.
*   **403 Forbidden**: El servidor entiende la solicitud, pero se deniega el acceso por permisos.
*   **404 Not Found**: El servidor no puede encontrar el recurso solicitado.

### Errores del Servidor (5xx)
*   **500 Internal Server Error**: Error genérico del servidor al procesar la solicitud.
*   **502 Bad Gateway**: El servidor actúa como puerta de enlace y recibió una respuesta inválida.
*   **503 Service Unavailable**: El servidor no está listo para manejar la solicitud (sobrecarga o mantenimiento).


---


# [`Node.js`](https://es.wikipedia.org/wiki/Node.js)

## 1. Desarrollo Backend
El desarrollo backend se refiere a la parte invisible de una aplicacion o sitio web.
Mientras el frontend es lo que el usuario ve e interactua (botones, formularios o textos)
El backend se encarga de procesar solicitudes, manejar BBDD y ejecutar logica de negocio

*Recordemos que un cliente (el frontend) se comunica con el servidor (el backend) gracias a la arquitectura cliente-servidor y al protocolo HTTP que determina como van a ser las peticiones que haga nuestro front y como seran las respuestas que brinde nuestro back*

---


### Para que sirve el backend?
El backend gestiona todo lo que sucede detras de la escena

- **Procesar datos**: Cuando el usuario envia un form o realiza una accion en el front, el back recibe esa informacion y la procesa

- **Acceder a BBDD**: Almacena y recupera datos de una BBDD como cuentas de usuario, productos en una tienda, etc

- **Seguridad**: Protege la informacion sensible, como contraseñas o datos personales

- **Autenticacion y autorizacion**: Gestionamos quien puede acceder a ciertas funcionalidades o areas de la aplicacion

### Por que es importante Node.js en el desarrollo moderno?

- **Velocidad**: Al estar basado en un solo hilo y ser no bloqueante, permite manejar muchas solicitudes simultaneas de manera eficiente

- **Ecosistema**: Tiene una amplia biblioteca de paquetes y herramientas disponibles a traves de npm para integrar nuevas funcionalidades

- **Escalabilidad**: Es ideal para aplicaciones que necesitan crecer rapidamente como plataformas de streaming o redes sociales


---


## Introduccion a `Node.js`

Cuando programamos en JavaScript en el navegador y en `Node.js` el lenguaje es el mismo, lo que cambia es el entorno de ejecucion y las herramientas disponibles.

JavaScript es solamente el lenguaje. Para que el codigo funcione, necesita un entorno que:

- lea el codigo
- lo ejecute
- le proporcione APIs para interactuar con algo

El navegador nos sirve para crear paginas web interactivas y `Node.js` nos permite ejecutar JS afuera del navegador

### [Que es `Node.js`?](https://www.youtube.com/watch?v=SfWPqr04srM)
`Node.js` es un **entorno** que permite ejecutar JavaScript fuera del navegador. Fue creado para usar JavaScript en

- Servidores
- Backend
- Scripts
- Automatizacion
- Herramientas de desarrollo
- APIs
- terminal, etc

Ahora con  no solo vamos a trabajar con la logica de presentacion (la interfaz de la pagina web) sino con la gestion de datos, archivos, bases de datos y demas.


---

### Importacion de modulos y rutas
Entender la diferencia entre la ruta `saludos.js` y `./saludos.js`

La diferencia fundamental radica en cómo el sistema resuelve la ubicación del archivo:

*   **`saludos.js`**: Se interpreta como un **módulo nombrado** o paquete instalado (como los que están en `node_modules`). El entorno de ejecución buscará una biblioteca con ese nombre específico o un archivo `saludos.js` en el directorio raíz de las dependencias, pero no en la carpeta actual del proyecto.
*   **`./saludos.js`**: Se interpreta como una **ruta relativa explícita**. El prefijo `./` indica al sistema que busque el archivo `saludos.js` en el **mismo directorio** donde se encuentra el archivo actual que está realizando la importación.

En resumen, usar `./` asegura que se cargue el archivo local del proyecto, mientras que omitirlo puede llevar a cargar un módulo externo o generar un error si no existe una dependencia instalada con ese nombre.


---


### [`npm`](https://www.npmjs.com/)
Un punto clave en el desarrollo con `Node.js` es [`npm`](https://www.npmjs.com/).
Es el gestor de paquetes que viene integrado con `Node.js` y su proposito es facilitar la instalacion y gestion de bibliotecas y herramientas desarrolladas por la comunidad o por otros desarrolladores.
`npm` nos ahorra tiempo, porque no tenemos que construir todo desde cero, en lugar de eso, podemos aprovechar codigo de terceros que ya esta probado y optimizado.

Por ejemplo, si necesitamos hacer validaciones complejas de datos, en lugar de escribir todo el codigo manualmente, podemos buscar un paquete en `npm` para que lo haga, instalarlo y usarlo en nuestro proyecto `Node.js`
`npm` permite compartir, descargar y actualizar estos paquetes de forma sencilla.

La estructura basica al trabajar con npm consiste en inicializar un archivo `package.json` que es como el "mapa" o "libreto de instrucciones" de nuestro proyecto. Este archivo lista las dependencias que instalamos, los scripts utiles, version de la aplicacion entre otros datos importantes.

Para empezar a usar npm, lo primero que haremos en cualquier proyecto es ejecutar el comando 
```sh
npm init
```
que crea el archivo package.json y nos guia en la configuracion inicial. Despues podemos instalar paquetes con `npm install` y listarlos como dependencias de nuestro proyecto.

### Que podemos construir con `Node.js`?
Antes de `Node.js`, JavaScript solo se usaba en el frontend, pero con esta tecnologia podemos construir aplicaciones completas usando JavaScript en el backend tambien. Algunas de las aplicaciones mas comunes de Node.js son:

- Aplicaciones en tiempo real: Chats o videojuegos en linea que requieren actualizaciones constantes sin recargar la pagina
- APIs REST: Para conectar el frontend de una aplicacion con una BBDD o un servicio de terceros

- Aplicaciones basadas e eventos: `Node.js` es ideal para manejar acciones como notificaciones o procesamiento en segundo plano

### Por que es tan importante `Node.js` en el desarrollo moderno?
- **Velocidad**: Al estar basado en un solo hilo y ser no bloqueante, permite manejar muchas solicitudes simultaneas de forma eficiente.

- **Ecosistema**: Tiene una amplia biblioteca de paquetes y herramientas disponibles a traves de `npm` (Node Package Manager), lo que facilita integrar nuvas funcionalidades

- **Escalabilidad**: Es ieal para aplicaciones que necesitan crecer rapidamente como plataformas de streaming o redes sociales.

---

## Conceptos fundamentales
Mientras que el navegador nos proporciona APIs relacionadas con la web, como `document`, `fetch()`, `alert()`, `localStorage()`.

`Node.js` agrega APIs para el sistema operativo
- `fs` **File System** para leer archivos
- `path` Manejar rutas
- `http`: Modulo HTTP nativo de Node.js para crear servidores
- `os`: **Operative System** informacion del Sistema Operativo
- `process`: Proceso actual


Tanto los navegadores basados en Chromium, como Google Chrome, Brave, etc usan el motor V8.
V8 es el motor de ejecucion de JavaScript, que es el programa que interpreta y ejecuta JavaScript.
Node.js por tanto consiste en
- V8
- APIs de Servidor
- Sistema de modulos
- Herramientas backend

El objeto principal el navegador es `window`.
Mientras que en `Node.js`, el objeto global es `global`.
```js
console.log("Hola mundo desde Node.js");

// Es lo mismo que poner
global.console.log("Hola mundo desde Node.js");
```


---

## Modulos en `Node.js`
Los modulos permiten dividir el codigo en archivos reutilizables.
Sin modulos, todo quedaria en un solo archivo gigante.

`Node.js` usa modulos porque las aplicaciones backend suelen ser enormes:

- rutas
- controladores
- bases de datos
- autenticacion
- middlewares
- servicios
- utilidades

Los modulos ayudan a separar responsabilidades.
**En Node.js importaremos las funcionalides de forma explicita, mientras que el navegador nos las provee sin tener que importar nada**.

Node historicamente tuvo su propio sistema, `CommonJS`
```js
// Opcion 1: Importar modulo fs con la sintaxis vieja CommonJS
// Importamos el modulo File System que nos permite interactuar con el sistema de archivo
const fs = require("fs");

module.exports = coso;
```

Para JavaScript moderno, usamos `ECMAScript Modules`, `ESM` o `ES Modules`, una sintaxis mas moderna
```js
// Opcion 2: Importar modulo fs con la sintaxis moderna ESM
// Importamos el modulo File System que nos permite interactuar con el sistema de archivo
import fs from "fs";

export default coso;
```