const contenedorProductos = document.getElementById("contenedor-productos");
const getProductForm = document.getElementById("getProductForm");
const urlBase = "http://localhost:3000";

// Optimizacion 1: Mostramos el mensaje de exito/error visualmente
function mostrarMensaje(type, message) {
    contenedorProductos.innerHTML = `        
                <p class="mensaje ${type}">${message}</p>
            `;
}


getProductForm.addEventListener("submit", async event => {
    event.preventDefault(); // Evitamos el envio por defecto del formulario

    // Cuando hay un solo valor en un evento, como el idProd, podemos extraerlo asi
    const idProd = event.target.idProd.value.trim(); // form de evento + id del input + valor del id + trim() limpiar espacios
    console.log(idProd);

    // Optimizacion 2: Verificamos si hay un id antes de mandarlo
    if (!idProd) {
        return mostrarMensaje("error", "Ingresa un id valido");
    }


    try {
        const response = await fetch(`${urlBase}/api/products/${idProd}`);
        console.log(response);

        // Convierto a objeto JS este JSON
        // {"payload":[{"id":28,"name":"fernet buhero negro","image":"https://canillalibre.uy/wp-content/uploads/2023/05/buhero-fernet.png","category":"drink","price":"7000.00","active":1}]}
        const data = await response.json();


        // Optimizacion 3: Filtramos errores 400 o 500
        if (!response.ok) {
            return mostrarMensaje("error", data.message);
            // el return hace que esta funcion termine
        }

        const producto = data.payload[0];

        renderizarProducto(producto);

    } catch (error) {
        console.error("Error al hacer la solicitud: ", error);
        mostrarMensaje("error", "Error al enviar la informacion");
    }
});

function renderizarProducto(producto) {
    console.table(producto);
    /*
    {
        active: 1
        category: "drink"
        id: 28
        image: "https://canillalibre.uy/wp-content/uploads/2023/05/buhero-fernet.png"
        name: "fernet buhero negro"
        price: "7000.00"
    }
    */

    let htmlProducto = `
                <ul class="listados-container">
                    <li class="li-listados">
                        <img src="${producto.image}" alt="${producto.name}" class="img-listados">
                    </li>
                    <li class="li-listados">
                        Id: ${producto.id} / Nombre: ${producto.name} / <strong>Precio: $${producto.price}</strong>
                    </li>
                    <li class="li-listados">
                        <button id="btn-eliminar">Eliminar</button>
                    </li>
                </ul>
            `;

    contenedorProductos.innerHTML = htmlProducto;

    const btnEliminar = document.getElementById("btn-eliminar");

    btnEliminar.addEventListener("click", () => {

        const confirmacion = confirm("Querés eliminar este producto?");

        if (!confirmacion) {
            alert("Eliminacion cancelada");

        } else {
            eliminarProducto(producto.id);
        }
    });
}


async function eliminarProducto(id) {

    try {
        const response = await fetch(`${urlBase}/api/products/${id}`, {
            method: "DELETE"
        });

        console.log(response);

        const data = await response.json();


        // Optimizacion 3: Filtramos errores 400 o 500
        if (!response.ok) {
            return mostrarMensaje("error", data.message);
            // el return hace que esta funcion termine
        }

        mostrarMensaje("exito", data.message);
        console.log(data.message);

    } catch (error) {
        console.error("Error al eliminar un producto: ", error);
        mostrarMensaje("error", "Error al enviar la informacion");
    }
}