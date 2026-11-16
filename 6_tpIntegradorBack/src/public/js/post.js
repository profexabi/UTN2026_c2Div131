const contenedorProductos = document.getElementById("contenedor-productos");
const createProductForm = document.getElementById("createProductForm");
const urlBase = "http://localhost:3000";


// Optimizacion 1: Mostramos el mensaje de exito/error visualmente
function mostrarMensaje(type, message) {
    contenedorProductos.innerHTML = `        
                <p class="mensaje ${type}">${message}</p>
            `;
}


// Para mostrar la posible lista de errores, cada uno como un parrafo
function mostrarListaErrores(array) {
    let htmlErrores = "";

    array.forEach(error => {
        htmlErrores += `<p class="mensaje error">${error}</p>`;
    });

    contenedorProductos.innerHTML = htmlErrores;
}


// Optimizacion 2: Hacemos una validacion previa de los datos del <form> en el cliente
function validarFormulario(data) {
    const errores = []; // Igual que el middleware, creamos un array vacio de errores

    // Verificamos que mandamos todos los campos
    if (!data.name || !data.image || !data.price || !data.category) {
        errores.push("Faltan campos requeridos");
    }

    // Validamos el campo nombre
    if (!data.name || data.name.trim().length < 2) {
        errores.push("El nombre debe tener al menos 2 caracteres");
    }

    // Validamos el campo image
    if (!data.image) {
        errores.push("Debe incluirse una imagen");
    }

    // Validamos el campo precio
    if (typeof data.price !== "number" || data.price <= 0) {
        errores.push("El precio debe ser un numero mayor a 0");
    }

    // Validamos el campo category
    if (!data.category) {
        errores.push("Debe seleccionar una categoria")
    }

    return errores;
}



createProductForm.addEventListener("submit", async event => {

    event.preventDefault(); // Evitamos el envio por defecto del <form>

    // Obtenemos la data del formulario
    const formData = new FormData(event.target);
    console.log(formData); // FormData(4) { category → "food", image → "urlImagen", name → "Cono papas fritas", price → "123" }

    // Transformamos este objeto nativo del <form> en un objeto literal JS
    const formObj = Object.fromEntries(formData.entries());

    // Optimizacion 3: Cambiamos algunos datos del formulario
    formObj.price = Number(formObj.price); // Convertimos el precio en un numero para poder validarlo como tal
    formObj.name = formObj.name.trim();
    console.log(formObj);

    // El objeto con la info del formulario se lo paso a la funcion para validar los campos
    const errores = validarFormulario(formObj);

    console.log(errores);

    // Si hay errores, mostramos mensaje de error y terminamos aca, no hacemos la peticion
    if (errores.length > 0) {
        return mostrarListaErrores(errores);
    }

    try {
        const response = await fetch(`${urlBase}/api/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formObj)
        });

        // Mostramos por consola la respuesta cruda del servidor
        console.log(response);

        // Parseamos el JSON del body de la response para poder acceder al valor de message
        const data = await response.json();

        // Optimizacion 4: Filtramos errores 400 o 500
        if (!response.ok) {
            return mostrarMensaje("error", data.message);
        }

        let mensajeExito = `${data.message} con id ${data.productId}`;
        mostrarMensaje("exito", mensajeExito); // Producto creado exitosamente


    } catch (error) {
        console.error("Error al hacer la solicitud: ", error);
        mostrarMensaje("error", "Error al enviar la informacion");
    }
})