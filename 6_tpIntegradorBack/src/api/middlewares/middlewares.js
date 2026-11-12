/*=================
    Middlewares
=================*/

// Middleware logger para analizar las solicitudes por la consola
const loggerUrl = (req, res, next) => {
    const fecha = new Date();
    console.log(`[${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}] ${req.method} ${req.url}`);
    next(); // Pasa al siguiente middleware (si lo hay) o a la respuesta
}




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


export {
    loggerUrl,
    validateId,
    validateProduct
}