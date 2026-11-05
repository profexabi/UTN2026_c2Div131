/*===============
    Imports
===============*/
import express from "express"; // Importamos el framework Express
import environments from "./src/api/config/environments.js"; // Traigo la info de la variables de entorno
import connection from "./src/api/database/db.js"; // Importo la conexion a la BBDD
import cors from "cors"; // Importamos el middleware CORS



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

// Middleware logger para analizar las solicitudes por la consola
app.use((req, res, next) => {
    const fecha = new Date();
    console.log(`[${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}] ${req.method} ${req.url}`);
    next(); // Pasa al siguiente middleware (si lo hay) o a la respuesta
});

// Middleware (de ruta) para filtrar ids no validos
const validateId = (req, res, next) => {

    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "El id debe ser un numero entero positivo"
        });
    }

    req.id = id;
    next(); // Damos paso al siguiente middleware o a la response
}

// Middleware (de ruta) para validar la informacion de los formularios
const validateProduct = (req, res, next) => {

    const categoriasValidas = ["food", "drink"];
    const errores = [];

    const {name, image, price, category} = req.body;

    // Verificamos que mandamos todos los campos
    if (!name || !image || !price || !category) {
        errores.push("Faltan campos requeridos");
    }

    // Verificamos el campo nombre
    if (typeof name !== "string" || name.trim().length < 2) {
        errores.push("El nombre debe tener al menos 2 caracteres");
    }

    // Verificamos el campo precio
    if (typeof price !== "number" || price <= 0) {
        errores.push("El precio debe ser un numero mayor a 0");
    }

    // No validaremos image porque luego usaremos Multer

    // Verificaremos el campo category
    if(!categoriasValidas.includes(category)) {
        errores.push("Categoria invalida");
    }

    // Si hay algun error en la lista, directamente devolvemos un 400
    if (errores.length > 0) {
        return res.status(400).json({
            message: "Datos invalidos",
            listaErrores: errores
        });
    }

    next(); // Damos paso al siguiente middleware o a la response
}



/*===============
    Endpoints
===============*/
app.get("/", (req, res) => {
    res.send("Hola mundo desde un server de Express.js");
});


// GET all products
app.get("/api/products", async (req, res) => {

    // Optimizacion 1: Manejo de errores con try catch
    try {

        // Optimizacion 2: No seleccionar todo, solo traer las columnas necesarias (mas eficiente en memoria, en red)
        const sql = "SELECT id, name, price, image, active FROM products";
        const [rows, tables] = await connection.query(sql);

        // Optimizacion 3: Respuesta mas limpia con codigo semantico
        if (rows.length === 0) {
            return res.status(404).json({
                message: "No se encontraron productos"
            });
        }
    
        res.status(200).json({
            payload: rows
        });

    } catch (error) {
        console.log("Error obteniendo productos: ", error);

        // Optimizacion 4: Error 500 si fallo la conexion a la BBDD
        res.status(500).json({
            message: "Error interno del servidor"
        });
    }
});


// GET product by id
app.get("/api/products/:id", validateId, async (req, res) => {
    
    // Optimizacion 1: Validamos el id en el middleware (de ruta) validateId

    // Optimizacion 2: Manejo de errores con try catch
    try {
        
        // Optimizacion 4: No seleccionar todo, solo traer las columnas necesarias (mas eficiente en memoria, en red)
        const sql = `SELECT id, name, price, image, active FROM products WHERE products.id = ${req.id}`;

        const [rows] = await connection.query(sql);

        // Optimizacion 5: Devolvemos un codigo 404 para producto no encontrado
        if (rows.length === 0) {
            return res.status(404).json({
                message: `No se encontro producto con id: ${req.id}`
            });
        }

        res.status(200).json({
            payload: rows
        });

    } catch (error) {
        console.log("Error obteniendo productos por id: ", error);

        // Optimizacion 3: Error 500 si fallo la conexion a la BBDD
        res.status(500).json({
            message: "Error interno del servidor"
        });
    }
      
});


// POST product
app.post("/api/products", validateProduct, async (req, res) => {

    // Optimizacion 1: Validamos los datos del form en el middleware (de ruta) validateProduct

    // Optimizacion 2: Manejo de errores con try catch
    try {
        // Hacemos el destructuring de un objeto que parseamos previamente a traves del middleware express.json()
        const { category, image, name, price } = req.body;
    
        // Los placeholders "?" son una medida de seguridad para prevenir ataques de seguridad informatica como la inyeccion SQL
        const sql = "INSERT INTO products (name, image, category, price) VALUES (?, ?, ?, ?)";
    
        const [rows] = await connection.query(sql, [name, image, category, price]);

        console.log(rows);

        res.status(201).json({
            message: "Producto creado exitosamente",
            productId: rows.insertId // Optimizacion 4: Le pasamos el nuevo id del prod
        });

    } catch (error) {
        console.log("Error creando un producto: ", error);

        // Optimizacion 3: Error 500 si fallo la conexion a la BBDD
        res.status(500).json({
            message: "Error interno del servidor"
        });
    }

});


// PUT product
app.put("/api/products", validateProduct, async (req, res) => {
    // Optimizacion 1: Validamos los datos del form en el middleware (de ruta) validateProduct

    // Optimizacion 2: Manejo de errores con try catch
    try {
        // Hacemos el destructuring de un objeto que parseamos previamente a traves del middleware express.json()
        const { category, image, name, price, active, id } = req.body;
    
        const sql = "UPDATE products SET name = ?, image = ?, price = ?, category = ?, active = ? WHERE id = ?";
    
        const [result] = await connection.query(sql, [name, image, price, category, active, id]);
        console.log(result);

        // TO DO, revisar este endpoint
        // Optimizacion 4: Verificamos si realmente se actualizo algo (hay filas afectadas)
        if (result.changedRows === 0) {
            return res.status(404).json({
                message: "No se actualizo el producto"
            });
        }
        
        return res.status(200).json({
            message: "Producto actualizado correctamente"
        });

    } catch (error) {
        console.log("Error creando un producto: ", error);

        // Optimizacion 3: Error 500 si fallo la conexion a la BBDD
        res.status(500).json({
            message: "Error interno del servidor"
        });
    }
});


// DELETE product
app.delete("/api/products/:id", validateId, async (req, res) => {
    
    // Optimizacion 1: Validamos el id en el middleware (de ruta) validateId
    
    // Optimizacion 2: Manejo de errores con try catch
    try {
        const sql = "DELETE FROM products WHERE id = ?";
    
        await connection.query(sql, [req.id]);
    
        res.status(200).json({
            message: `Producto con id ${req.id} eliminado exitosamente`
        });


    } catch (error) {
        console.log("Error eliminando producto: ", error);

        // Optimizacion 3: Error 500 si fallo la conexion a la BBDD
        res.status(500).json({
            message: "Error interno del servidor"
        });
    }

});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});