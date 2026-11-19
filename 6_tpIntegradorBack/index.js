/*===============
    Imports
===============*/
import express from "express"; // Importamos el framework Express
import environments from "./src/api/config/environments.js"; // Traigo la info de la variables de entorno
import cors from "cors"; // Importamos el middleware CORS
import { loggerUrl } from "./src/api/middlewares/middlewares.js";
import { authRoutes, productRoutes, userRoutes, viewRoutes } from "./src/api/routes/index.js";
import { join, __dirname } from "./src/api/utils/index.js";
import session from "express-session";



/*===============
    Config
===============*/
const app = express(); // Crea una instancia de aplicacion de Express con todos sus metodos
const { port, session_key } = environments;
const PORT = port;
app.set("view engine", "ejs");  // Configuramos EJS como motor de plantillas
app.set("views", join(__dirname, "src/views")); // Apunto a la ruta desde la que se van a servir las vistas .ejs



/*=================
    Middlewares
=================*/
app.use(cors()); // Middleware CORS basico para permitir todas las solicitudes

app.use(express.json()); // Middleware para parsear el JSON recibido en el cuerpo de las solicitudes POST y PUT

app.use(express.urlencoded({extended: true})); // Middleware para parsear los datos que le envia el <form> HTML

app.use(loggerUrl); // Middleware logger para analizar las solicitudes por la consola

app.use(express.static(join(__dirname, "src/public"))); // Middleware para servir archivos estaticos
// Ahora podremos ver la imagen del logo desde http://localhost:3000/img/logo.jpg
// Podremos tambien ver nuestro css en la ruta http://localhost:3000/css/styles.css -> esta sera la hoja de estilos que consuma el .ejs

app.use(session({
    secret: session_key, // Le pasamos la contraseña que protege la sesion
    resave: false, // Evita guardar la sesion si no hubo cambios
    saveUninitialized: true // No guarda sesiones vacias
}));


/*===============
    Rutas
===============*/
app.get("/", (req, res) => {
    res.send("Hola mundo desde un server de Express.js");
});

// Rutas producto
// El index.js redirige todas las peticiones de /api/products al archivo de product.routes.js
app.use("/api/products", productRoutes);

// Rutas de usuario
app.use("/api/users", userRoutes);

// Rutas vistas
app.use("/dashboard", viewRoutes);

// Rutas autenticacion
app.use("/", authRoutes);




app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});