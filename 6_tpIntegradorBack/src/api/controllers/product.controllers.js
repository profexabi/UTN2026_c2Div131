/*============================
    Controladores producto
============================*/

// Temporalmente (antes de seguir modularizando) traemos la conexion a la BBDD
import connection from "../database/db.js"; // Importo la conexion a la BBDD



/////////////////////////
// GET all products
export const getAllProducts = async (req, res) => {

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
}



/////////////////////////
// GET product by id
export const getProductById = async (req, res) => {

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
}



/////////////////////////
// POST product
export const createProduct = async (req, res) => {

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
}



/////////////////////////
// PUT product
export const modifyProduct = async (req, res) => {
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
}



/////////////////////////
// DELETE product
export const removeProduct = async (req, res) => {
    
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
}