console.log("Hola mundo desde Node.js");

// fs (File System ): Modulo que nos permite interactuar con el sistema de archivos. Podremos leer, escribir, actualizar y borrar archivos de forma sencilla
const fs = require("fs");

// readFile es una operacion asincronica para leer archivos con el modulo fs
fs.readFile("archivos/leeme.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Ocurrio un error: ", err);
        return; // Todo lo de abajo de return no se ejecuta y se termina esta funcion
    }

    console.log("Contenido del archivo: ", data);
});


// path: Modulo para trabajar y manipular rutas y directorios de forma segura y comodo

const path = require("path");
const ruta = "Escritorio/Docencia/2026/Cuatri\ 2/UTN2026_c2Div131/4_nodejs/archivos/leeme.txt";

const nombreArchivo = path.basename(ruta);
console.log("El nombre del archivo es: ", nombreArchivo);


// os (Operative System): Modulo que nos permite obtener informacion del sistema operativo
const os = require("os");

const memoriaLibre = os.freemem();
const tipoSistema = os.type();

console.log("Memoria libre: ", memoriaLibre);
console.log("Tipo de sistema: ", tipoSistema);


/*=========================
    Que son los modulos?
===========================

Cada vez que usamos require() estamos "importando" un modulo para que podamos utilizar sus funciones en nuestro archivo actual

Este enfoque nos ayuda a organizar mejor nuestro codigo para evitar que todo este en un archivo y permitiendo poder reutilizar funciones o clases en diferentes partes de nuestro proyecto

saludos.js

    // Defino una funcion basica
    function saludar(nombre) {
            return `Hola, ${nombre}!`;
    }


    // Exportamos la funcion saludar para usarla en otros modulos
    module.exports = saludar; // Sintaxis vieja commonjs
*/

// Traigo la funcion saludar de saludos.js
const saludar = require("./saludos");

console.log(saludar("Luca")); // Hola, Luca!