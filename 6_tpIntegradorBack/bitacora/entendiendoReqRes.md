# Que puede enviar el `<form>` HTML por defecto?
El formulario HTML nativo (`<form>`) permite realizar peticiones HTTP mediante el atributo `method`.

Tiene soporte nativo para dos métodos HTTP:

- GET: envía los datos del formulario como parámetros en la URL (query string).
- POST: envía los datos en el cuerpo (body) de la petición HTTP.

### Ejemplo

GET

HTMLAjustar líneasCopiar códigoVista previa

```
<form action="/usuarios" method="GET">
  <input name="nombre" />
  <button type="submit">Enviar</button>
</form>
```

Genera una petición similar a:

http

```
GET /usuarios?nombre=Juan HTTP/1.1
```

POST

HTMLAjustar líneasCopiar códigoVista previa

```
<form action="/usuarios" method="POST">
  <input name="nombre" />
  <button type="submit">Enviar</button>
</form>
```

Genera una petición similar a:

http

```
POST /usuarios HTTP/1.1
Content-Type: application/x-www-form-urlencoded

nombre=Juan
```

### ¿Y PUT, PATCH o DELETE?

El formulario HTML nativo no permite configurar directamente esos métodos mediante `method`.

| Método | Soporte nativo |
| --- | --- |
| GET | Sí |
| POST | Sí |
| PUT | No |
| PATCH | No |
| DELETE | No |
| OPTIONS | No |

### ¿Cómo utilizar PUT, PATCH o DELETE?

Necesitás JavaScript mediante `fetch()`:

javascript

```
fetch("/usuarios/123", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    nombre: "Juan"
  })
});
```

Dato adicional: algunos frameworks permiten simular `PUT`, `PATCH` y `DELETE` mediante `POST` y un parámetro especial, como `_method=DELETE`. Esto se conoce como HTTP method override.


---


# 1 / Comprendiendo el objeto `req` en los endpoints
En Express.js, el objeto `req` (request) representa la solicitud HTTP que el cliente le envía al servidor. Contiene toda la información que llega desde el cliente, por ejemplo, desde un navegador o desde Postman.

Cuando creás un endpoint, Express te proporciona `req` y `res`:

javascript

```
app.get('/usuarios/:id', (req, res) => {
    console.log(req.params.id);
    res.send('Usuario solicitado');
});
```

- `req`: contiene la información de la petición que llegó al servidor.
- `res`: se utiliza para enviar una respuesta al cliente.

## ¿Qué información podés obtener de `req`?

Estas son las propiedades más importantes:

| Propiedad | ¿Qué obtiene? | Ejemplo |
| --- | --- | --- |
| `req.params` | Parámetros de la URL | `/usuarios/5` → `id = 5` |
| `req.query` | Parámetros de consulta | `/usuarios?edad=20` → `edad = 20` |
| `req.body` | Datos enviados en el cuerpo | `{ "nombre": "Juan" }` |
| `req.headers` | Encabezados HTTP | Tipo de contenido o token |
| `req.method` | Método HTTP utilizado | `GET`, `POST`, `PUT`, `DELETE` |
| `req.url` | URL solicitada | `/usuarios/5` |

## Ejemplo práctico

Imaginá que un cliente hace esta petición:

http

```
POST /usuarios/10?activo=true
Content-Type: application/json

{
  "nombre": "Juan",
  "edad": 25
}
```

Tu endpoint podría ser:

javascript

```
app.use(express.json());

app.post('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const activo = req.query.activo;
    const datos = req.body;

    console.log(id);             // "10"
    console.log(activo);         // "true"
    console.log(datos.nombre);   // "Juan"
    console.log(datos.edad);     // 25

    res.json({ mensaje: 'Usuario recibido' });
});
```

En este caso, `req` te permite acceder a toda la información que el cliente envió.

Importante: para leer el cuerpo de una petición JSON mediante `req.body`, normalmente tenés que configurar `app.use(express.json())`.

## ¿Cómo recordar la diferencia?

- `req.params`: datos que vienen en la ruta.
- `req.query`: datos que vienen después del `?` en la URL.
- `req.body`: datos que se envían en el cuerpo de la petición.
- `res`: lo que el servidor devuelve.

En resumen, `req` sirve para leer e interpretar lo que el cliente le está pidiendo al servidor, para que puedas decidir qué hacer dentro de tu endpoint.


---


# 2 / Entendiendo el objeto `res`
En Express.js, el objeto `res` (response) representa la respuesta que el servidor le envía al cliente después de recibir una petición.

Si `req` sirve para recibir información, `res` sirve para responder.

## 1. ¿Cómo funcionan `req` y `res` juntos?

javascript

```
app.get('/saludo', (req, res) => {
    res.send('¡Hola, mundo!');
});
```

- `req`: contiene la información de la petición que llegó al servidor.
- `res`: permite construir y enviar la respuesta al cliente.

En este ejemplo, cuando alguien visita `/saludo`, el servidor responde con el texto `¡Hola, mundo!`.

## 2. Métodos más importantes de `res`

| Método | ¿Para qué sirve? | Ejemplo |
| --- | --- | --- |
| `res.send()` | Envía texto u otros datos | `res.send('Hola')` |
| `res.json()` | Envía datos en formato JSON | `res.json({ nombre: 'Juan' })` |
| `res.status()` | Establece el código HTTP de respuesta | `res.status(404)` |
| `res.redirect()` | Redirige a otra URL | `res.redirect('/login')` |
| `res.sendStatus()` | Envía un código HTTP con su texto correspondiente | `res.sendStatus(404)` |

Un detalle importante: `res.status()` por sí solo no envía la respuesta. Normalmente se combina con otro método.

Por ejemplo:

javascript

```
res.status(404).json({
    error: 'Usuario no encontrado'
});
```

Esto establece el código HTTP `404` y envía un objeto JSON con el mensaje de error.

## 3. Ejemplo completo de un endpoint

Imaginá que tenés una API que busca usuarios por su ID.

javascript

```
app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;

    if (id === '1') {
        return res.status(200).json({
            id: 1,
            nombre: 'Juan'
        });
    }

    return res.status(404).json({
        error: 'Usuario no encontrado'
    });
});
```

¿Qué sucede?

1. `req.params.id` obtiene el ID de la URL.
2. El `if` comprueba si el ID es `'1'`.
3. Si existe ese usuario, `res.status(200).json(...)` devuelve sus datos.
4. Si no existe, `res.status(404).json(...)` devuelve un error.

El `return` hace que la función termine después de enviar esa respuesta, evitando que el código continúe ejecutándose.

## 4. ¿Qué significan los códigos de estado?

Los códigos HTTP le indican al cliente cómo salió la petición.

- `200 OK`: la petición salió bien.
- `201 Created`: se creó un recurso.
- `400 Bad Request`: la petición tiene datos incorrectos.
- `401 Unauthorized`: falta autenticación válida.
- `403 Forbidden`: el cliente no tiene permiso.
- `404 Not Found`: el recurso no existe.
- `500 Internal Server Error`: ocurrió un error interno del servidor.

## 5. Diferencia entre `req` y `res`

`req` — Request

Lo que llega al servidor.

Por ejemplo: el ID de un usuario, los datos de un formulario o un token.

`res` — Response

Lo que sale del servidor.

Por ejemplo: los datos solicitados, un mensaje de éxito o un error.

Una forma fácil de recordarlo es pensar en una conversación:

- El cliente pregunta: eso llega mediante `req`.
- El servidor procesa la petición.
- El servidor contesta: eso se envía mediante `res`.

En resumen: `req` te permite saber qué pidió el cliente y `res` te permite decidir qué respuesta enviarle.
