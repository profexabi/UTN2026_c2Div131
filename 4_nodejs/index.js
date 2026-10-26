// Creamos un servidor de Node.js con el modulo http que tendremos que importar
const http = require("http"); // Traigo este modulo para poder utilizar sus metodos, que me permitiran crear un servidor

// Creamos el servidor
const servidor = http.createServer((req, res) => {

    // Configurar la respuesta
    res.statusCode = 200; // Codigo 200 indica peticion exitosa

    res.setHeader("Content-Type", "text/plain"); // Indicamos que responderemos con texto

    res.end("Hola mundo desde un servidor Node.js"); // Mensaje que enviamos al cliente
});

// Definimos un puerto y arrancamos el servidor
const puerto = 3000;
servidor.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});

// Detenemos la ejecucion de nuestro servidor en la terminal con Ctrl + C