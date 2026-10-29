/*===============
    Imports
===============*/
import express from "express";

const app = express(); // Crea una instancia de aplicacion de Express con todos sus metodos

const PORT = 3000; // hardcodeamos el puerto hasta que lo leamos del .env


/*===============
    Endpoints
===============*/
app.get("/", (req, res) => {
    res.send("Hola mundo desde un server de Express.js");
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})