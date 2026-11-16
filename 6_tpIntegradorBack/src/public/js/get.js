const contenedorProductos = document.getElementById("contenedor-productos");
const getProductForm = document.getElementById("getProductForm");
const urlBase = "http://localhost:3000";


// Optimizacion 1: Mostramos el mensaje de error visualmente
function mostrarError(message) {
    contenedorProductos.innerHTML = `        
                <p class="mensaje error">${message}</p>
            `;
}

getProductForm.addEventListener("submit", async event => {
    event.preventDefault(); // Evitamos el envio por defecto del formulario

    // Cuando hay un solo valor en un evento, como el idProd, podemos extraerlo asi
    const idProd = event.target.idProd.value.trim(); // form de evento + id del input + valor del id + trim() limpiar espacios

    // Optimizacion 2: Verificamos si hay un id antes de mandarlo
    if (!idProd) {
        return mostrarError("Ingresa un id valido");
    }


    try {
        const response = await fetch(`${urlBase}/api/products/${idProd}`);
        console.log(response);

        const data = await response.json();

        // Optimizacion 3: Filtramos errores 400 o 500
        if (!response.ok) {
            return mostrarError(data.message);
            // el return hace que esta funcion termine
        }

        const producto = data.payload[0];

        renderizarProducto(producto);

    } catch (error) {
        console.error("Error al hacer la solicitud: ", error);
        mostrarError("Fallo la conexion con el servidor");
    }
});

function renderizarProducto(producto) {
    console.table(producto);

    let htmlProducto = `
                <ul class="listados-container">
                    <li class="li-listados">
                        <img src="${producto.image}" alt="${producto.name}" class="img-listados">
                    </li>
                    <li class="li-listados">
                        Id: ${producto.id} / Nombre: ${producto.name} / <strong>Precio: $${producto.price}</strong>
                    </li>
                </ul>
            `;

    contenedorProductos.innerHTML = htmlProducto;
}