/*===============
    Imports
===============*/
import express from "express"; // Importamos el framework Express
import environments from "./src/api/config/environments.js"; // Traigo la info de la variables de entorno
import cors from "cors"; // Importamos el middleware CORS
import { loggerUrl } from "./src/api/middlewares/middlewares.js";
import { productRoutes } from "./src/api/routes/index.js";



/*===============
    Config
===============*/
const app = express(); // Crea una instancia de aplicacion de Express con todos sus metodos
const PORT = environments.port;



/*=================
    Middlewares
=================*/
app.use(cors()); // Middleware CORS basico para permitir todas las solicitudes

app.use(express.json()); // Middleware para parsear el JSON recibido en el cuerpo de las solicitudes POST y PUT

app.use(loggerUrl); // Middleware logger para analizar las solicitudes por la consola




/*===============
    Rutas
===============*/
app.get("/", (req, res) => {
    res.send("Hola mundo desde un server de Express.js");
});

// Rutas producto
app.use("/api/products", productRoutes);

// Rutas vistas
// app.use("/dasboard/principal", rutasVistas)

// Rutas login
// app.use("/login", rutasAutenticacion)


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});