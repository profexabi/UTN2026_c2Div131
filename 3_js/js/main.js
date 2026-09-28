/* Ejemplo de metodo del objeto String -> Es un objeto que envuelve el tipo de dato primitivo "string"
A esta funcionalidad de envolver un string adentro de un objeto, se le llama Object Wrappers */
console.log("Hola mundo".length); // 10 (cantidad de caracteres del string)

/*================================
 Almacenamiento de datos en JS
==================================

En JavaScript, almacenar datos implica elegir la estructura adecuada de acuerdo con el tipo de informacion que se quiere guardar y como se desea manipular. JS proporciona varios tipos de estructuras para almacenar datos

    - Variables simples (para valores unicos como numeros y strings)
    - Objetos (para representar datos complejos con propiedades)
    - Arrays (para almacenar una lista ordenada de elementos, idealmente del mismo tipo)
    - Arrays de objetos (para manejar listas de elementos complejos que contienen multiples propiedades)


=============================
    Array de objetos    
=============================

Cuando necesitamos almacenar varias instancias del mismo tipo de entidad (lista de personas, productos, pedidos, etc) lo mas comun es usar un array de objetos.

Un array de objetos es una estructura que permite almacenar multiples objetos,donde cada objeto tiene la misma estructura o contiene atributos similares

Cuando usaremos array de objetos?

    - Cuando necesitamos almacenar multiples instancias de una misma entidad o estructura de datos
    - Cuando planeamos realizar operaciones sobre una lista de elementos como iteraciones, filtrados o agrupaciones
    - Cuando necesitamos aplicar metodos de los arrays como map, filter, reduce, find, etc

    Ejemplos: listado de usuarios de una plataforma, inventario de productos en una tienda, historial de ventas, etc
*/

// Personas es un array de objetos que almacena multiples elementos, cada uno representando a una persona con sus propiedades
let personas = [
    { nombre: "Guillermo", edad: 20, ocupacion: "Desarrollador frontend" },
    { nombre: "Franco", edad: 21, ocupacion: "Desarrollador backend" },
    { nombre: "Jose", edad: 22, ocupacion: "Desarrollador fullstasck" },
];


/*==========================
    Que estructura usar?
============================

Objeto simple: Si solo tenemos una entidad (como configuracion de usuario) o un unico elemento que contiene datos con varias propiedades, un objeto es la mejor opcion. Acceder a propiedades individuales de un objeto es rapido y sencillo

Array simple: Para una lista ordenada de elementos individuales (del mismo tipo) (lista de nombre o identificadores, etc), donde cada elemento no requiere atributos adicionales. En este caso, un array simple de valores primitivos es suficiente. Esto permite manipular la lista con metodos de array como sort, reverse, push, etc

Array de objetos: Cuando tenemos una lista de entidades complejas, cada una con multiples propiedades, un array de objetos es la estructura ideal. Esta configuracion permite realizar operaciones en lote y mantener una coleccion de elementos relacionados de forma organizada


En resumen:

    - Objeto simple: Para una unica entidad
    - Array de valores: Para listas sencillas de datos primitivos
    - Array de objetos: Para colecciones de entidades complejas, ideales para trabjar en conjunto y aplicar transformaciones
*/



/*=================================
 Almacenamiento persistente en JS
===================================

Es una parte fundamental para crear aplicaciones web que recuerden informacion de usuario entre sesiones o durante la navegacion. 

El navegador nos permite guardar informacion mediante las cookies, sesionStorage y localStorage, que son mecanismos para almacenar datos del lado del cliente, pero cada uno tiene un proposito distinto en terminos de persistnecia, capacidad y ambito de acceso


===================
    Cookies
===================

    - Son pequeños fragmentos de informacion que se almacenan en el navegador del usuarios y se envian con cada peticion HTTP al servidor. Son mas antiguas que localStorage y sessionStorage y fueron ampliamente usadas para mantener la sesion del usuario, guardar preferencias, etc

    - Persistencia: Pueden tener una fecha de expiracion especifica, si no se establece, sera eliminada al cerrar la sesion del navegador

    - Envio al servidor: A diferencia de localStorage y sessionStorage, las cookies se envian automaticamente al servidor con cada solicitud HTTP, lo que puede ser util pero tambien puede generar sobrecarga en la red

    - Al igual que localStorage y sessionStorage, estan asociadas a un dominio especifico

    - Uso principal: Autenticacion (tokens y sesion), preferencias del usuario para enviar al servidor, seguimiento (tracking) de actividad en la web


===================
    localStorage
===================

localStorage es una API web que permite almacenar datos de manera persistente en el navegador.

Los datos almacenados en localStorage no tienen una fecha de expiracion, por lo que estaran disponibles incluso despues de que el usuario cierre el navegador o apague la compu

    Uso principal
        - Guardar datos que persistan despues del cierre del navegador
        - Almacenar configuraciones de usuario como temas, carrito de compras, etc

    Caracteristicas
        - Tamaño max 5-10MB por dominio
        - Persistente
        - Accesible solo desde JS, no se envia al servidor
        - Sincrono

    Metodos
        1. Guardar datos: localStorage.setItem(key, value)
        2. Leer datos: localStorage.getItem(key)
        3. Eliminar un dato: localStorage.removeItem(key)
        4. Eliminar todos los datos: localStorage.clear()


=====================
    sessionStorage
=====================

Es una API similar a localStrage, pero con la diferencia de que los datos almacenados en session solo se mantienen disponibles durante la sesion del navegador. Cuando se cierra la pestaña o la ventana, los datos se liminan automaticamente

    Uso principal
        - Guardar datos temporales mientras la pestaña este abierta
        - Informacion de formularios o pasos de navegacion en una misma sesion

    Caracteristicas
        - Tamaño max 5-10MB por dominio
        - Se borra al cerrar la pestaña
        - Accesible solo desde JS, no se envia al servidor
        - Sincrono

    Metodos
        1. Guardar datos: sessionStorage.setItem(key, value)
        2. Leer datos: sessionStorage.getItem(key)
        3. Eliminar un dato: sessionStorage.removeItem(key)
        4. Eliminar todos los datos: sessionStorage.clear()

*/


//
/* Guardamos tema e idioma
// localStorage.setItem("tema", "oscuro");
// localStorage.setItem("idioma", "es");

// Mostrar por consola estos valores
// console.log(`Tema favorito: ${localStorage.getItem("tema")} e idioma: ${localStorage.getItem("idioma")}`);

// Eliminamos idioma
localStorage.removeItem("idioma");

// Eliminamos todo el localStorage
localStorage.clear();
*/

// Array de objetos que representa un carrito de compra
let carrito = [
    { id: 1, nombre: "Pizza", cantidad: 2 },
    { id: 2, nombre: "Fugazzeta", cantidad: 3 },
    { id: 3, nombre: "Birra", cantidad: 4 }
];

/* Ojota! En el localStorage y sessionStorage guardamos los valores como texto plano (string). Por lo que tendremos que transformar a string los tipos de datos que no sean strings

Por tanto, el array de objetos de carrito, tendremos que transformarlo a texto plano JSON, que es basicamente un string ordenado

    - JSON.stringify()  Transforma a texto plano JSON un array de objetos
    - JSON.parse():     Transforma a un array de objetos un JSON
*/

// Guardamos en el navegador el carrito, nuestro array de objetos
//localStorage.setItem("carrito", JSON.stringify(carrito));

// Mostramos el carrito por consola
console.log(localStorage.getItem("carrito"));

// Parseamos nuestro JSON del localStorage
console.table(JSON.parse(localStorage.getItem("carrito")))


// Array de objetos que representa un carrito de compra
let carritoSesion = [
    { id: 1, nombre: "Pollo al spiedo", cantidad: 2 },
    { id: 2, nombre: "Pastafrola", cantidad: 3 },
    { id: 3, nombre: "Fernet", cantidad: 4 }
];

// sessionStorage.setItem("carritoSesion", JSON.stringify(carritoSesion));
console.table(JSON.parse(sessionStorage.getItem("carritoSesion")));




/*============================================================
 Iteracion en arrays, objetos y arrays de objetos en JS
==============================================================

JavaScript ofrece multiples metodos para iterar sobre arrays, cada uno con sus caracteristicas y casos de uso especificos



////////////////////
// for tradicional

    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }

    - Ventajas: Maximo control, podemos usar break y continue
    - Desventajas: Mas verboso (mas dificil de leer)
*/

// Ejemplo array simple
let frutas = ["manzana", "banana", "naranja"];

// Queremos recorrer todo el bucle y detenerlo cuando empiece el string por "ban"
for (let i = 0; i < frutas.length; i++) {
    if (frutas[i].startsWith("ban")) {
        console.log(frutas[i]); // banana
        break;
    }
}


// Ejemplo con array de objetos
let productos = [
    { id: 1, nombre: "televisor", precio: 1500000},
    { id: 2, nombre: "pava electrica", precio: 50000},
    { id: 3, nombre: "microondas", precio: 150000},
    { id: 4, nombre: "tostadora", precio: 40000},
]

let productosCaros = [];

// Filtramos productos baratos < 60000
for (let i = 0; i < productos.length; i++) {
    /*
    console.log(productos[i]); // {id: 1, nombre: 'televisor', precio: 1500000 }
    console.log(productos[i].precio);
    */
   
   if (productos[i].precio > 60000) {
    productosCaros.push(productos[i]);
   }
}

console.table(productosCaros);


/*//////////////////
// forEach()

    array.forEach((elemento, indice, arrayOriginal) => {
        console.log(elemento, indice)
    })

    - Ventajas: Sintaxis limpia, no necesita contador
    - Desventajas: Mas lento, no se puede romper el bucle (break)
*/

// Ejemplo array simple
let colores = ["rojo", "verde", "azul"];

colores.forEach(color => console.log(color));
// rojo
// verde
// azul

// Exactamente la misma funcion de arriba pero sin la sintaxis de flecha
colores.forEach(function(color) {
    console.log(color);
});
// rojo
// verde
// azul


let numeros = [1, 2, 3, 4, 5];
let dobles = [];

// Guardamos en el array vacio todos los valores duplicados de numeros
numeros.forEach(num => dobles.push(num * 2));
console.log(dobles); [2, 4, 6, 8, 10]


// Ejemplo array de objetos
let estudiantes = [
    { nombre: "Manuel", nota: 8 },
    { nombre: "Xabi", nota: 3 },
    { nombre: "Nahuel", nota: 7 },
    { nombre: "Federico", nota: 4 },
    { nombre: "Santiago", nota: 10 }
];

// Vamos a recorrer el array de estudiantes y agregarle la condicion de aprobado: true o aprobado false si la nota es superior a 6
estudiantes.forEach(e => {
    e.aprobado = e.nota >= 6;
});

/*
estudiantes.forEach(function(e) {
    e.aprobado = e.nota >= 9;
})
*/
console.table(estudiantes);


/*//////////////////
// map()

    const nuevosValores = array.map(elemento => elemento * 2);

    - Proposito: Transformar cada elemento
    - Retorna: Nuevo array con los resultados
*/

// let numeros = [1, 2, 3, 4, 5];
let cuadrados = numeros.map(num => num * num);


/* // Mismo resultado que arriba sin la comodidad de la funcion flecha
let cuadradosDos = numeros.map(function(num) {
    return num * num
})*/

console.log(cuadrados); // [1, 4, 9, 16, 25]



let numerosDobles = numeros.map(num => num * 2);
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(numerosDobles); // [2, 4, 6, 8, 10]


// Crear un nuevo array con un mensaje por cada edad "Tengo x años"
let edades = [20, 25, 30, 35];
let saludoEdades = edades.map(edad => `Tengo ${edad} años`); // return implicito
// let saludoEdades = edades.map(edad => "Tengo " + edad + " años");
console.log(saludoEdades);

/*
let estudiantes = [
    { nombre: "Manuel", nota: 8 },
    { nombre: "Xabi", nota: 3 },
    { nombre: "Nahuel", nota: 7 },
    { nombre: "Federico", nota: 4 },
    { nombre: "Santiago", nota: 10 }
];*/

// Con map crearemos un nuevo array con los nombres de los estudiantes
/* Estos metodos me ahorran tener que hacer:
    - la declaracion del array vacio
    - la iteracion por separado
    - la condicion y de cumplirse la condicion
    - el pusheo de ese valor en el nuevo array
    - todo esto lo hago en una sola linea
*/
let nombresEstudiantes = estudiantes.map(est => est.nombre);
console.log(nombresEstudiantes); // ['Manuel', 'Xabi', 'Nahuel', 'Federico', 'Santiago']