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

/*======================
    Modulo http
========================

Modulo fundamental para trabajar con servidores y manejar peticiones HTTP, es la base de cualquier aplicacion web en Node.js
Que hicimos arriba?

    1. Importamos el modulo http: Esto nos da acceso a todas las funcionalidades necesarias para crear un servidor
    2. Crear un servidor: Utilizamos el metodo http.createServer para definir un servidor que escuche las solicitudes de los clientes y les responda
    3. Respuesta del servidor: El servidor siempre respondera con el mensaje "Hola mundo desde un servidor Node.js"
    4. Escuchar en un puerto: El servidor se ejecuta en el puerto 3000 (puede ser cualquier puerto libre) y muestra un mensaje en la consola cuando esta listo
*/