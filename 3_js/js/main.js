/*====================================
        Callbacks
======================================

Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan despues de que ocurra algun evento o se complete alguna operacion.
*/

// EJemplo basico callback
function saludar(nombre, callback) {
    console.log(`Hola ${nombre}`);
    callback(); // callback es un nombre generico para definir la funcion que pasamos por el parametro
}

function despedirse() {
    console.log("Chau!");
}

saludar("Abril", despedirse); // Aca pasamos la funcion como argumento
// Hola Abril
// Chau!


// Ejemplo temporizador
setTimeout(() => console.log("Hola despues de 2 segundos"), 2000); // 2000 es la cantidad de milisegundos


/*====================================
    Caracteristicas principales JS
======================================

///////////////////////////////
// 1. Funciones de primer clase

En JavaScript las funciones son fundamentales, son tratadas como "ciudadanas de primer clase" o (first class citizens), esto significa que:

    - Asignarlas a variables
    - Pasarlas como argumentos
    - Retornarlas desde otras funciones
*/

// Asignamos una funcion a una variable
const avisoCallback = function() {
    console.log("Callback ejecutado");
}

// Paso como parametro la funcion
function ejecutarCallback (callback) {
    console.log("Operaciones previas...");
    callback();
}

// Paso como argumento el callback
ejecutarCallback(avisoCallback);
// Callback ejecutado
// Operaciones previas



///////////////////////////////
// 2. Sincronia y Asincronia

// Esta funcion lenta traba el hilo de ejecucion porque es sincronica
function procesoPesado(callback) { 
    console.log("Iniciando proceso pesado");

    // Simulamos un procesamiento pesado
    for (let i = 0; i < 3000; i++) {
        console.log("<- Numero de iteraciones");
    }

    callback(); // Proceso completado

    console.log("Esto se ejecuta despues del callback");
}

/*
procesoPesado(function() {
    console.log("Proceso completado");
});
console.log("Aca quiero ejecutar codigo importante para mi pagina");
*/


// La asincronia nos permite correr en paralelo y sin demorar o trabar al hilo principal de ejecucion
// Resolvemos la funcionalidad de antes con asincronia
function procesoAsincrono(callback) {
    console.log("Iniciando proceso asincrono...");

    // setTimeout es una funcion asincrona
    setTimeout(() => {
        callback(); // Nuestro callback asincrono demorara 3 segundos
    }, 3000);
}


procesoAsincrono(() => console.log("Proceso asincrono completado"));

console.log("Este mensaje se ejecuta de inmediato y no espera al callback asincrono");
// Iniciando proceso asincrono...
// Este mensaje se ejecuta de inmediato y no espera al callback asincrono
// Proceso asincrono completado


//////////////////////////////
// Casos de uso comunes de callbacks

// 1. Temporizadores
setTimeout(() => {
    console.log("Esto tardara 4 segundos");
}, 4000);

// 2. Eventos del DOM
const boton = document.getElementById("boton");
boton.addEventListener("click", function(event) { // Definimos aca el callback
    console.log(`Boton clickeado en el elemento: ${event.target}`);
});

// 3. Metodos de arrays
const numeros = [1, 2, 3, 4, 5];

numeros.forEach((num, indice) => {
    console.log(`Indice: ${indice}, Valor: ${num}`);
});

const duplicados = numeros.map(num => num * 2);
console.log(duplicados);


// 4. Peticiones HTTP (mas adelante)

// 5. Lectura de archivos (Node.js, mas adelante)


/*===========================
    Ventajas y desventajas
=============================

    Ventajas:
        
        - Simplicidad: Facil de entender para operaciones simples
        
        - Universalidad: Compatbible con todos los navegadores
        
        - Flexibilidad: Permiten crear codigo reutilizable

    Desventajas:

        - Callback hell: Anidamiento excesivo que dificulta la lectura
        https://www.reddit.com/r/ProgrammerHumor/comments/27yykv/indent_hadouken/#lightbox

        - Manejo de errores: Complicado con callbacks anidados
        
        - Flujo de control: Dificil de seguir con operaciones complejas


===============================
    Ejemplo de callback hell
===============================

// Ejemplo de callback hell
function procesoCompleto(callback) {

    paso1(function(error, resultado1) {

        if (error) return callback(error);

        paso2(resultado1, function(error, resultado2) {

                if (error) return callback(error);

                paso3(resultado2, function(error, resultado3) {

                    if (error) return callback(error);

                    paso4(resultado3, function(error, resultadoFinal) {
                        if (error) return callback(error);

                        callback(null, resultadoFinal);
                });
            });
        });
    });
}


===============================
    Alternativas modernas
===============================

Para evitar el callback hell, se desarrollaron alternativas como

    - Promesas: .then().catch()
    - Async/Await: Sintaxis mas limpia y legible


// Mismo ejemplo con Async/Await
async function procesoCompleto() {
    try {
        const resultado1 = await paso1();
        const resultado2 = await paso2(resultado1);
        const resultado3 = await paso3(resultado2);
        const resultadoFinal = await paso4(resultado3);
        return resultadoFinal;

    } catch (error) {
        console.error('Error:', error);
    }
}


Los callbacks son clave en JavaScript y se usan muchisimo, se usan extensivamente para

    - Manejar eventos del usuario
    - Operaciones asincronas
    - Temporizadores
    -Procesamiento de datos
    - Comunicacion con servidores

Aunque las promesas y async/await ofrecen alternativas mas modernas, entender los callbacks es fundamental para comenzar a entender JavaScript en profundidad y poder trabajar sin problema
*/


/*===========================
    Callbacks y HOF
=============================

Callbacks: 
    - Es una funcion que pasamos como argumento a otra funcion y que sera llamada en algun momento momento dentro de esa funcion. 
    - Es basicamente pasar una funcion como argumento a otra funcion


HOF (High Order Functions): Es una funcion que cumple al menos una de estas dos condiciones:

    1. Recibe una o mas funciones como argumentos (map, filter, reduce)
    2. Devuelve una funcion como resultado

Ejemplos de HOF
    forEach()
    map()
    filter()
    reduce()
    sort()
    find()


En resumen:

    - Callback es la funcion pasada como argumento
    - HOF es la funcion que recibe o devuelve funciones
    - Estan relacionadas pero no son equivalentes: un callback es usado dentro de una HOF, pero no todas las HOF usan callbacks explicitamente, porque pueden devolver funciones en lugar de recibirlas. O recibir un callback y devolver una funcion


Ventajas tecnicas
   - Reduccion de codigo repetitivo
   - Mayor legibilidad y expresividad
   - Podemos encadenar operaciones como map().filter().reduce()
*/

// HOF caso 1, recibe una funcion
const cuadrados = numeros.map(n => n * n); // map es una HOF porque recibe un callback como argumento

// HOF caso 2, devuelve una funcion
function multiplicador(factor) {
    return function(x) {
        return x * factor;
    }
}

const duplicar = multiplicador(2);
console.log(duplicar(5)); // 10


// Ejemplo de encadenamiento
const usuarios = [
    {nombre: "Luca", edad: 25},
    {nombre: "Valentino", edad: 20},
    {nombre: "Tomas", edad: 30},
];

const mayoresDe21 = usuarios
    .filter(user => user.edad > 21)
    .map(user => user.nombre);

console.log(mayoresDe21);




/*===========================
    Destructuring
=============================

El destructuring o desestructuracion es una sintaxis que nos permite extraer valores de arrays o propiedades de objetos y asignarlos a variables de forma concisa.

Es una forma de "descomponer" estructuras de datos como arrays y objetos en variables individuales sin acceder manualmente a cada elemento o propiedad

    - Mejora la legibilidad del codigo
    - Facilita el acceso rapido a datos de estructuras complejas
    - Reduce la verbosidad (menos lineas para obtener lo mismo)
*/

// Array sin destructuring
const nums = [1, 2, 3];
const prim = nums[0];
const seg = nums[1];

// Array con destructuring
const [uno, dos] = nums;
console.log(uno, dos); // 1 2


// Objeto sin destructuring
const persona = { nombre: "Thiago", edad: 22 };
const nomb = persona.nombre;
const anios = persona.edad;

// Objeto con destructuring
const { nombre, edad } = persona;
console.log(nombre, edad); // Thiago 22


// Destructuring de arrays con valores omitidos
const [primero, , tercero] = [10, 20, 30];
console.log(primero, tercero); // 10 30


// Rest operator en array
const [a, ...resto] = [1, 2, 3, 4];
console.log(a); // 1
console.log(resto); //  [2, 3, 4]

// Rest operator en objeto
const {apodo, ...otros} = {apodo: "Santi", edad: 40, pais: "Argentina"};
console.log(apodo); // Santi
console.log(otros); // {edad: 40, pais: 'Argentina'}



/*===========================
    Spread Operator
=============================

El spread operator (operador de propagacion) "..." es una sintaxis introducida en ES6 (2015) que permite descomponer elementos iterables (arrays, strings y objetos) en elementos individuales.

Su comportamiento varia segun el contexto en que se use, pero su funcion principal es copiar, combinar o expandir estructuras de datos de manera eficiente.

El spread operator trabaja a nivel de valores individuales, extrayendo cada elemento de un iterable y colocandolo en el contexto donde se usa.

Cuando el interprete de JavaScript (navegador o Node.js) encuentra ...iterable, automaticamente

    1. Convierte el iterable en una secuencia de valores individuales
    2. Propaga (spread) esos valores en el nuevo contexto (array, objeto, llamada a funcion)
    3. No modifica el original (es inmutable por defecto)


Que nos permite el spread operator?
    - Manipulacion de arrays, copiando y concatenando
    - Combinacion de objetos
    - Paso de argumentos a funciones
*/

// Concatenacion de arrays -> mas eficiente que concat()
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4]

// Convierte strings en arrays -> nos saltamos el split("")
const str = "Hola";
const chars = [...str];
console.log(chars); // ['H', 'o', 'l', 'a']

// Copiamos objetos -> Copia superficial
const obj1 = {a: 1, b: 2};
const obj2 = {...obj1};
console.log(obj2); // {a: 1, b: 2}

// EXTRA TO DO -> Repasar copia superficial

// Combinacion de objetos
const defaults = { tema: "oscuro", fontSize: 18 };
const userSettings = { fontSize: 22 };
const finalConfig = {...defaults, ...userSettings};
console.log(finalConfig); // {tema: 'oscuro', fontSize: 22}

// Spread operator en funciones
function sum(a, b, c) {
    return a + b + c;
}

const numer = [1, 2, 3];

// Pasamos argumentos desde un array
console.log(sum(...numer)); // 6


// Rest parameters
function logArgs(first, ...rest) {
    console.log(first); // a
    console.log(rest); // ['b', 'c']
}

logArgs("a", "b", "c");



/*===========================
    Funciones anidadas
=============================

Una funcion anidada es simplemente una funcion definida dentro de otra funcion.

    - Se declara dentro de otra funcion
    - Tiene acceso a todas las variables y parametros de su funcion extenra
    - Puede ser utilizada para organizar mejor el codigo, modularizar la logica o crear closures


Consideraciones a tener en cuenta
    - Las funciones anidadas no estan disponibles fuera del scope donde se definen a menos que se retornen o expongan explicamente
    - Demasiadas funciones anidadas pueden dificultar la legibilidad si no estan bien organidas

En resumen
    - Son funciones declaradas dentro de otras funciones
    - Acceden a variabels de su funcion externa (scope lexico)
    - Las funciones son privadas al bloque donde se definen
    - Usos comunes: modularizacion, privacidad y logica auxiliar interna
*/

// Ejemplo basico
function saludar(nombre) {
    function construirMensaje() {
        return `Hola ${nombre}`; // Tiene acceso a nombre, aunque no se defina aca, gracias al scope lexico
    }

    return construirMensaje();
}

// Las funciones anidadas heredan el entorno lexico (lexical scope) de la funcion que las contiene. Esto significa que pueden acceder a las variables de laf ucnion externa, pero no al reves

function externa() {

    let mensaje = "Hola desde fuera";

    function interna() {
        console.log(mensaje);
    }

    interna();
}

externa(); // Hola desde fuera


///////////////////
// Usos comunes

// 1. Organizacion del codigo: En lugar de escribir una gran funcion, se pueden definir sub-funciones internas para modularizar la logica
function procesarTexto(texto) {
    function limpiar(t) {
        return t.trim().toLowerCase();
    }

    function contarPalabras(t) {
        return t.split(/\s+/).length;
    }

    const limpio = limpiar(texto);
    return contarPalabras(limpio);
}

console.log(procesarTexto("Hola desde JavaScript VII")); // 4


// 2. Funcione shelper privadas: Las funciones internas no son accesibles desde fuera, lo cual simula privacidad
function crearUsuario(nombre) {
    function validarNombre(n) {
        return typeof n === "string" && n.length > 2
    }

    if (!validarNombre(nombre)) {
        throw new Error("Nombre no valido")
    }

    return nombre;
}


// TO DO -> Continuar con Web APIs