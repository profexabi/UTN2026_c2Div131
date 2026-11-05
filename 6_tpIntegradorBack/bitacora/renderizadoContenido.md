El Client Side Rendering (CSR) y el Server Side Rendering (SSR) son dos formas diferentes de generar y mostrar el contenido de una aplicación web. Cuando trabajás con Node.js, Express y EJS, es importante entender sus diferencias para elegir cuál conviene según el proyecto.

## 1. Client Side Rendering (CSR)

En el Client Side Rendering, el servidor envía principalmente un HTML básico, junto con archivos JavaScript y CSS. El navegador ejecuta el JavaScript y construye dinámicamente el contenido de la página.

Frontend Rendering: SSG vs ISG vs SSR vs CSR — When to use which? | by Tapajyoti Bose | Medium

[tapajyoti-bose.medium.com](<https://tapajyoti-bose.medium.com/frontend-rendering-ssg-vs-isg-vs-ssr-vs-csr-when-to-use-which-1bf9f39ff07c?utm_source=chatgpt.com>)

¿Cómo funciona?

1. El usuario solicita una página.
2. Express responde con un HTML básico y archivos JavaScript.
3. El navegador descarga y ejecuta el JavaScript.
4. JavaScript solicita los datos al servidor mediante una API (por ejemplo, `fetch`).
5. El navegador construye y actualiza el contenido del HTML.

Ejemplo con Express:

Servidor (`server.js`):

javascript

```
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/api/usuarios', (req, res) => {
    res.json([
        { nombre: 'Juan' },
        { nombre: 'Pedro' }
    ]);
});

app.listen(3000);
```

HTML (`public/index.html`):

HTMLAjustar líneasCopiar códigoVista previa

```
<!DOCTYPE html>
<html>
<head>
    <title>Usuarios</title>
</head>
<body>
    <h1>Lista de usuarios</h1>
    <ul id="usuarios"></ul>

    <script src="app.js"></script>
</body>
</html>
```

JavaScript (`public/app.js`):

javascript

```
fetch('/api/usuarios')
    .then(response => response.json())
    .then(usuarios => {
        const lista = document.getElementById('usuarios');

        usuarios.forEach(usuario => {
            const li = document.createElement('li');
            li.textContent = usuario.nombre;
            lista.appendChild(li);
        });
    });
```

### Ventajas del CSR

- Mayor interactividad: permite actualizar partes de la página sin recargarla completamente.
- Menor carga del servidor: el navegador se encarga de generar gran parte del HTML.
- Experiencia fluida: las aplicaciones pueden comportarse de manera similar a una aplicación de escritorio.
- Separación entre frontend y backend: el backend puede ofrecer una API y el frontend consumirla.
- Reutilización de API: la misma API puede ser utilizada por una web, una aplicación móvil u otros clientes.

### Desventajas del CSR

- Carga inicial más lenta: el navegador necesita descargar y ejecutar JavaScript antes de mostrar el contenido completo.
- SEO más complicado: los buscadores pueden tener dificultades para indexar contenido que se genera dinámicamente.
- Dependencia de JavaScript: si JavaScript está deshabilitado o falla, la aplicación puede dejar de funcionar correctamente.
- Mayor complejidad en el frontend: hay que administrar estados, eventos, solicitudes HTTP y manipulación del DOM.
- Mayor consumo de recursos del navegador: especialmente en dispositivos con poca capacidad de procesamiento.

## 2. Server Side Rendering (SSR) con Express y EJS

En el Server Side Rendering, el servidor genera el HTML antes de enviarlo al navegador.

Con Express y EJS, el servidor utiliza los datos necesarios para completar una plantilla HTML y devuelve la página ya construida.

Learn Next.js Server Side Rendering by building your own implementation - DEV Community

[dev.to](<https://dev.to/skirianov/learn-nextjs-server-side-rendering-by-building-your-own-implementation-41m8?utm_source=chatgpt.com>)

¿Cómo funciona?

1. El usuario solicita una página.
2. Express recibe la solicitud.
3. El servidor obtiene los datos necesarios (por ejemplo, desde una base de datos).
4. EJS utiliza esos datos para generar el HTML.
5. Express envía el HTML completo al navegador.
6. El navegador muestra directamente el contenido recibido.

Ejemplo con Express y EJS:

Servidor (`server.js`):

javascript

```
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/usuarios', (req, res) => {
    const usuarios = [
        { nombre: 'Juan' },
        { nombre: 'Pedro' }
    ];

    res.render('usuarios', { usuarios });
});

app.listen(3000);
```

Vista (`views/usuarios.ejs`):

HTMLAjustar líneasCopiar códigoVista previa

```
<!DOCTYPE html>
<html>
<head>
    <title>Usuarios</title>
</head>
<body>
    <h1>Lista de usuarios</h1>

    <ul>
        <% usuarios.forEach(usuario => { %>
            <li><%= usuario.nombre %></li>
        <% }); %>
    </ul>
</body>
</html>
```

En este caso, EJS procesa la plantilla y genera el siguiente HTML:

HTMLAjustar líneasCopiar códigoVista previa

```
<h1>Lista de usuarios</h1>

<ul>
    <li>Juan</li>
    <li>Pedro</li>
</ul>
```

El navegador recibe el HTML generado, sin necesitar JavaScript para construir esa lista.

### Ventajas del SSR

- Mejor SEO: los buscadores reciben directamente el contenido HTML generado.
- Carga inicial rápida: el contenido puede mostrarse sin esperar a que se ejecute JavaScript.
- Menor dependencia de JavaScript: las funcionalidades básicas pueden funcionar sin JavaScript.
- Menor complejidad del frontend: buena parte de la lógica se maneja desde el servidor.
- Control centralizado: los datos y la generación de las vistas se administran desde Express.

### Desventajas del SSR

- Mayor trabajo del servidor: debe generar el HTML para cada solicitud.
- Recargas de página: normalmente, al navegar entre páginas se realiza una nueva solicitud al servidor.
- Menor interactividad por defecto: para interacciones dinámicas se necesita agregar JavaScript del lado del cliente.
- Dependencia del servidor: si el servidor tiene problemas, no se pueden generar nuevas páginas.
- Menor separación frontend/backend: las vistas y parte de la lógica de presentación están vinculadas al backend.

## 3. Comparación directa: CSR vs SSR

| Característica | CSR | SSR con Express y EJS |
| --- | --- | --- |
| Generación del HTML | Navegador | Servidor |
| JavaScript | Fundamental | Opcional para contenido inicial |
| Carga inicial | Puede ser más lenta | Generalmente más rápida |
| SEO | Más complejo | Más sencillo |
| Interactividad | Alta | Requiere JavaScript adicional |
| Carga del servidor | Menor generación de HTML | Mayor generación de HTML |
| Complejidad frontend | Mayor | Menor |
| Navegación | Puede evitar recargas | Generalmente recarga la página |
| Ejemplo | React consumiendo una API | Express + EJS |

## 4. ¿Cuándo conviene utilizar cada uno?

AI-Powered Marketing Automation Dashboard: Clean and Minimalist by Robbi Firmansah on Dribbble

Elegir CSR cuando:

- Desarrollás un dashboard administrativo.
- Necesitás muchas interacciones dinámicas.
- Querés separar completamente frontend y backend.
- Tenés una API que será consumida por diferentes aplicaciones.

Always Sort Product Lists by Diversity-Based “Relevance” (24% Don’t) – Baymard

Elegir SSR con Express y EJS cuando:

- Desarrollás un sitio institucional.
- Creás un blog o una página de noticias.
- Necesitás que el contenido sea fácilmente indexable por Google.
- Desarrollás un sistema CRUD (crear, leer, actualizar y eliminar).
- Querés una arquitectura sencilla sin depender de frameworks frontend.

## 5. ¿Se pueden combinar CSR y SSR?

¡Sí\! No son tecnologías excluyentes.

Podés utilizar Express + EJS para generar inicialmente las páginas (SSR) y agregar JavaScript para manejar interacciones específicas (CSR).

Por ejemplo, en un sistema de gestión de productos:

- Express + EJS genera la página con la lista de productos.
- JavaScript permite filtrar productos sin recargar la página.
- `fetch()` permite eliminar un producto mediante una API.
- EJS genera inicialmente el HTML y JavaScript actualiza partes del DOM.

Esta combinación permite aprovechar las ventajas de ambos enfoques.

## 6\. Conclusión

La diferencia fundamental es dónde se genera el HTML:

- CSR: el servidor envía los datos y el navegador construye la interfaz.
- SSR: el servidor construye la interfaz y envía el HTML listo al navegador.

Mi recomendación: si estás trabajando con Node.js y Express, aprender SSR con EJS es una excelente base para comprender cómo funciona el ciclo de petición y respuesta HTTP, cómo se comunican las vistas con el servidor y cómo se generan páginas dinámicas.

Después, aprender CSR te permitirá comprender mejor arquitecturas basadas en React, Vue o Angular.
