/*===============
    Imports
===============*/
import express from "express";
import environments from "./src/api/config/environments.js"; // Traigo la info de la variables de entorno
import connection from "./src/api/database/db.js"; // Importo la conexion a la BBDD


/*===============
    Config
===============*/
const app = express(); // Crea una instancia de aplicacion de Express con todos sus metodos
const PORT = environments.port;


/*===============
    Endpoints
===============*/
app.get("/", (req, res) => {
    res.send("Hola mundo desde un server de Express.js");
});

// GET all products
app.get("/api/products", async (req, res) => {
    const sql = "SELECT * FROM products";
    const [rows, tables] = await connection.query(sql);
    // console.log(rows);

    res.status(200).json({
        payload: rows
    });
});


// GET product by id
app.get("/api/products/:id", async (req, res) => {
    
    // Accedo al valor numerico del parametro de la url
    const id = req.params.id;    
    const sql = `SELECT * FROM products WHERE products.id = ${id}`;
    
    const [rows] = await connection.query(sql);

    res.status(200).json({
        payload: rows
    });
})


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});