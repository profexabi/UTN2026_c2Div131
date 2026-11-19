# Login

## 1 / En que consiste un login?
- **Vista** EJS del formulario `login.ejs`
- **Endpoint** que maneje los datos recibidos de este formulario EJS
- Cuando hagamos login, creemos una nueva **sesion** para que Express recuerden quienes somos (usuarios autenticados) en cada peticion

1. Un login es una VISTA, un formulario a traves del cual podemos escribir unos datos, como email y password, que nos permitiran acceder a ciertas vistas o recursos protegidos

2. Este formulario hara una peticion POST a un endpoint que recibira este email y password

3. Si el password y el email existen, creamos una sesion y redirigimos al dashboard con `res.redirect("/dashboard/principal)`



## 2 / Como vamos a enviar los datos desde un `<form>` sin JS?
Vamos a hacer el envio de datos con `<form>` nativo de HTML! 
Hasta ahora veniamos enviando informacion con JavaScript, pasando FormData -> Objeto literal -> JSON -> Enviando JSON con fetch 
El middleware `app.use(express.json());` parseaba el JSON del cuerpo de la peticion para que en el endpoint recibieramos los datos como un objeto JS

Ahora haremos el envio nativo de los formularios HTML, aca **los datos NO se envian con JSON** se envian con un tipo de formato llamado `application/x-www-form-urlencoded`, de manera que necesitaremos otro tipo de middleware para parsear estos datos.

#### Entendiendo el `application/x-www-form-urlencoded`
Por defecto, los formularios HTML envían los datos codificados como **application/x-www-form-urlencoded**. Este formato trata los datos como texto, sustituyendo los espacios por el símbolo **+** y convirtiendo los caracteres especiales en secuencias de escape, separando los pares nombre/valor con **&** y usando **=** para unir el nombre con el valor.

Para enviar **archivos** o datos binarios que no sean ASCII, es necesario cambiar este comportamiento nativo utilizando el atributo `enctype="multipart/form-data"` en la etiqueta `<form>`, ya que el formato predeterminado no es eficiente para este tipo de contenido.



## 3 / [express-session](https://www.npmjs.com/package/express-session)

```sh
npm i express-session
```

**Es un middleware que permite que Express recuerde datos entre peticiones**

Como HTTP es un protocolo sin estado (stateless), Express no sabe quienes somos entre una ruta y otra, cada peticion se hace como si fuera la primera.

Entonces cuando el usuario inicia sesion, necesitamos guardar algo asi
```js
req.session.user = {
    id: 12,
    name: "Juan"
}
```

Luego en cualquier request futura, se comprobara si existe un usuario en la sesion
```js
if (!req.session.user) {
    return res.redirect("/login")
}
```


Sin sesiones no hay forma de saber si el usuario esta logueado, por eso es que existe `express-session`. Pero esta sesiones deberemos protegerlas con una contraseña

## 4 / Necesitamos ponerle un password a nuestra sesion
Vamos a crear una clave privada! Hay un monton de [generadores de passwords](https://secretkeygen.vercel.app/)

Esta clave privada es fundamental porque Express la usa para firmar la cookie de sesion, y evita que alguien

- falsifique una sesion
- la modifique
- robe una identidad

Esta la almacenaceremos en el `.env`
```
SESSION_KEY="3333adf27e190142418d4ee10ad3a0e4"
```

exportamos esta clave desde el `environments.js`
```js
session_key: process.env.SESSION_KEY
```

#### Ahora en nuestro `index.js` traemos estos datos y hacemos el middleware para crear la sesion
```js
import session from "express-session";
import environments from "./src/api/config/environments.js";

const { port, session_key } = environments;

app.use(express.urlencoded({extended: true})); // Parseamos el urlencoded enviando con los <form> HTML

// Middleware de sesion
app.use(session({
    secret: session_key,
    resave: false, // Evita guardar la sesion si no hubo cambios
    saveUninitialized: true // No guarda sesiones vacias
}));
```


#### Comprendiendo el `express.urlencoded({extended:true})`
En Express, cuando escribís:

```js
app.use(express.urlencoded({ extended: true }));
```

La propiedad `extended: true` indica qué tipo de datos puede interpretar Express cuando recibe información enviada mediante formularios HTML (`application/x-www-form-urlencoded`).

La diferencia es la siguiente:

### `extended: false`

Utiliza el parser simple (`querystring`).

Permite interpretar datos básicos, como strings:

```js
{
  nombre: "Juan",
  edad: "25"
}
```

### `extended: true`

Utiliza el parser `qs`, que permite interpretar estructuras más complejas, como objetos y arrays anidados.

Por ejemplo, si recibís:

```text
usuario[nombre]=Juan&usuario[edad]=25
```

Express lo interpreta como:

```js
{
  usuario: {
    nombre: "Juan",
    edad: "25"
  }
}
```

También permite interpretar arrays:


```text
colores[]=rojo&colores[]=azul
```

Resultado:


```js
{
  colores: ["rojo", "azul"]
}
```

### En resumen

- `extended: false`: permite interpretar datos simples.
- `extended: true`: permite interpretar objetos y arrays anidados.

¿Cuál conviene usar?

Generalmente se utiliza `extended: true` porque ofrece más flexibilidad para procesar formularios complejos.

Ojo: esto es independiente de `express.json()`, que se utiliza para procesar datos enviados en formato JSON.




## 5 / Creamos el middleware para proteger las rutas y verificar que por cada peticion exista un usuario en la sesion
```js
// Middleware de ruta para proteger las rutas (las vistas del dashboard)
const requireLogin = (req, res, next) => {
    // Si no existe usuario en la sesion, redirigimos a la pantalla login
    if (!req.session.user) {
        return res.redirect("/login")
    }
}
```

Protegemos las rutas de las vistas del panel admin con este middleware en `view.routes.js`
```js
import { requireLogin } from "../middlewares/middlewares.js";

// Vista principal
router.get("/principal", requireLogin, vistaPrincipal);

// Vista consultar
router.get("/consultar", requireLogin, vistaConsultar);

// Vista crear
router.get("/crear", requireLogin, vistaCrear)

// Vista modificar
router.get("/modificar", requireLogin, vistaModificar)

// Vista eliminar
router.get("/eliminar", requireLogin, vistaEliminar);
```


## 6 / Creamos la vista de nuestro formulario `login.ejs`
```html
<%- include("partials/head.ejs") %>

<main>
    <h3 class="centrado"> <%= about %> </h3>

    <form class="form-login" action="">

        <label for="emailUser">Email</label>
        <input type="email" name="email" id="emailUser" required>

        <label for="passwordUser">Password</label>
        <input type="password" name="password" id="passwordUser" required>

        <input type="submit" value="Login">

    </form>

    <div></div>
</main>

<%- include("partials/footer.ejs") %>
```

---

## 7 / Creamos el endpoint que reciba los datos de este formulario
```js

```


---

## 8 / Hacemos logout (form + endpoint)

---

## 9 / Agregamos [bcrypt](https://www.npmjs.com/package/bcrypt)
1. Crear usuarios desde el formulario
2. Incorporar `bcrypt` a la creacion de usuarios (hasheamos el password)
3. Comparar el password hasheado cuando hacemos login