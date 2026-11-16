/*============================
    Controladores vistas
============================*/

import productModels from "../models/product.models.js"


//////////////////////
// Vista principal
export const vistaPrincipal = async (req, res) => {

    // Le solicitamos al modelo de productos los productos activos
    const [rows] = await productModels.selectAllProducts();

    res.render("index", {
        title: "Principal",
        about: "Lista de productos",
        listaProductos: rows
    });
}



//////////////////////
// Vista consultar
export const vistaConsultar = (req, res) => {
    res.render("get", {
        title: "Consultar",
        about: "Obtener producto por id"
    });
}



//////////////////////
// Vista crear
export const vistaCrear = (req, res) => {
    res.render("post", {
        title: "Crear",
        about: "Crear producto"
    });
}


//////////////////////
// Vista modificar
export const vistaModificar = (req, res) => {
    res.render("put", {
        title: "Modificar",
        about: "Obtener producto por id"
    });
}



//////////////////////
// Vista eliminar
export const vistaEliminar = (req, res) => {
    res.render("delete", {
        title: "Eliminar",
        about: "Obtener producto por id"
    });
}