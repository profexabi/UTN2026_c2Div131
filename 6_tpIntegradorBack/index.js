/*===============
    Imports
===============*/
import express from "express"; // Importamos el framework Express
import environments from "./src/api/config/environments.js"; // Traigo la info de la variables de entorno
import cors from "cors"; // Importamos el middleware CORS
import { loggerUrl } from "./src/api/middlewares/middlewares.js";
import { productRoutes } from "./src/api/routes/index.js";
import { join, __dirname } from "./src/api/utils/index.js";



/*===============
    Config
===============*/
const app = express(); // Crea una instancia de aplicacion de Express con todos sus metodos
const PORT = environments.port;
app.set("view engine", "ejs");  // Configuramos EJS como motor de plantillas
app.set("views", join(__dirname, "src/views")); // Apunto a la ruta desde la que se van a servir las vistas .ejs



/*=================
Middlewares
=================*/
app.use(cors()); // Middleware CORS basico para permitir todas las solicitudes

app.use(express.json()); // Middleware para parsear el JSON recibido en el cuerpo de las solicitudes POST y PUT

app.use(loggerUrl); // Middleware logger para analizar las solicitudes por la consola

app.use(express.static(join(__dirname, "src/public"))); // Middleware para servir archivos estaticos
// Ahora podremos ver la imagen del logo desde http://localhost:3000/img/logo.jpg
// Podremos tambien ver nuestro css en la ruta http://localhost:3000/css/styles.css -> esta sera la hoja de estilos que consuma el .ejs



/*===============
    Rutas
===============*/
app.get("/", (req, res) => {
    res.send("Hola mundo desde un server de Express.js");
});

// Rutas producto
// El index.js redirige todas las peticiones de /api/products al archivo de product.routes.js
app.use("/api/products", productRoutes); 

// Rutas vistas
// app.use("/dasboard/principal", rutasVistas)

// TO DO -> Modularizar vistas
app.get("/dashboard/principal", (req, res) => {
    console.log(__dirname);
    console.log(join(__dirname, "src/views"))
    res.render("index");
});

app.get("/dashboard/consultar", (req, res) => {
    res.render("get");
});

app.get("/dashboard/crear", (req, res) => {
    res.render("post");
});

app.get("/dashboard/modificar", (req, res) => {
    res.render("put");
});

app.get("/dashboard/eliminar", (req, res) => {
    res.render("delete");
});

// Rutas login
// app.use("/login", rutasAutenticacion)


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});