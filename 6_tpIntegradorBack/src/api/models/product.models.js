/*============================
    Modelos producto
============================*/

import connection from "../database/db.js"; // Importo la conexion a la BBDD



////////////////////////////////
// Seleccionar los productos
const selectAllProducts = () => {

    // Optimizacion 2: No seleccionar todo, solo traer las columnas necesarias (mas eficiente en memoria, en red)
    const sql = "SELECT id, name, price, image, active FROM products";
    return connection.query(sql);
}



////////////////////////////////
// Seleccionar los productos
const selectProductById = (id) => {

    // Optimizacion 4: No seleccionar todo, solo traer las columnas necesarias (mas eficiente en memoria, en red)
    const sql = `SELECT id, name, price, image, active FROM products WHERE products.id = ?`;

    // Retorna el resultado de la conexion
    return connection.query(sql, [id]);
}



////////////////////////////////
// Crear producto
const insertNewProduct = (name, image, category, price) => {

    // Los placeholders "?" son una medida de seguridad para prevenir ataques de seguridad informatica como la inyeccion SQL
    const sql = "INSERT INTO products (name, image, category, price) VALUES (?, ?, ?, ?)";
    
    return connection.query(sql, [name, image, category, price]);
}



////////////////////////////////
// Actualizar producto
const updateProduct = (name, image, price, category, active, id) => {

    const sql = "UPDATE products SET name = ?, image = ?, price = ?, category = ?, active = ? WHERE id = ?";
    
    return connection.query(sql, [name, image, price, category, active, id]);
}



////////////////////////////////
// Eliminar producto
const deleteProduct = (id) => {
    const sql = "DELETE FROM products WHERE id = ?";
    
    return connection.query(sql, [id]);
}


export default {
    selectAllProducts,
    selectProductById,
    insertNewProduct,
    updateProduct,
    deleteProduct
}