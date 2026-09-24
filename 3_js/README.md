# JavaScript

### Prox clase
- JavaScript V

---

### *Como ejecuta las instrucciones JavaScript internamente?*
**JavaScript internamente “lee” el código antes de ejecutarlo**, realizando un proceso en dos fases:

**1. Fase de compilación** (o creación del contexto)
Antes de ejecutar línea por línea, el motor de JavaScript analiza todo el código. En esta etapa:

- Registra variables y funciones.
- Determina el alcance (scope).
- Prepara el entorno de ejecución.


**2. Fase de ejecución**
Recién después ejecuta el código en orden.


---

## JavaScript IV / Introduccion a Arrays, metodos de strings y arrays
*Ejercicios sugeridos del Campus hasta JavaScript Ejercicios Tercera Parte*

En JavaScript, los arrays y objetos son estructuras de datos fundamentales. 
- Los arrays se utilizan para almacenar una lista ordenada de elementos
- Los objetos son ideales para almacenar datos con propiedades clave-valor

Cuando usar cada uno?
- **Usaremos arrays**: Cuando necesitemos almacenar una lista de elementos (idealmente comunes, como una lista de nombres)

- **Usaremos objetos**: Cuando tengamos datos estructurados que pueden agruparse en propiedades clave-valor (como los atributos de una persona o las especificaciones de un producto)

#### EXTRA
Otras estructuras de datos utiles

- [Map](https://www.w3schools.com/js/js_maps.asp): Coleccion de pares clave-valor donde las claves pueden ser de cualquier tipo, incluso objetos o funciones
```js
const mapa = new Map();
mapa.set(123, "ID");
mapa.set(true, "activo");
```

- [Set](https://www.w3schools.com/js/js_sets.asp): Un `Set` es una coleccion de valores unicos, no permite valores duplicados
```js
const conjunto = new Set([1, 2, 2, 3]);
conjunto.add(4);
console.log(conjunto); // Set(4) {1, 2, 3, 4}
```

**JavaScript "envuelve" en objetos los tipos de datos primitivos como strings o numeros, es decir los trata como objetos otorgandoles metodos (Object Wrappers)**

```js
/*=====================
    Arrays en JS
=======================

Un array es una lista ordenada de elementos, donde cada uno tiene una posicion o indice.

Los arrays en JS son muy flexibles: pueden contener cualquier tipo de datos (numeros, cadenas, booleanos, otros arrays, objetos, funciones, etc) y los elementos no tienen que ser del mismo tipo
*/

let frutas = ["manzana", "banana", "naranja"];
console.log(frutas[0]); // manzana
console.log(frutas[2]); // naranja


/*=====================
    Objetos en JS
=======================

Un objeto es una coleccion de pares clave-valor. 

Las claves son strings que identifican a cada valor, lo cual permite un acceso rapido y estructurado a los datos. Los objetos son utiles cuando deseas representar la entidad con multiples propiedades
*/

// Creacion literal de objeto
let persona = {
    nombre: "Santiago",
    edad: 21,
    ciudad: "Quilmes"
}

// Podemos acceder a las propiedades de un objeto mediante dos notaciones: notacion de punto y notacion de corchete

// Notacion de punto
console.log(persona.nombre); // Santiago

// Notacion de corchete
console.log(persona["ciudad"]); // Quilmes

// Agregando una propiedad
persona.pais = "El tricampeon, papa";

// Eliminar propiedad
delete persona.edad;

console.log(persona)

// Metodos de objetos: funciones almacenadas en una propiedad
let perro = {
    nombre: "Firulais",
    ladrar: function() {
        console.log("Guau!");
    }
}

perro.ladrar(); // Guau!




/*===============================
    Metodos de Strings en JS
===============================*/

// 1. length: Devuelve la longitud del string
console.log("Hola".length); // 4

// 2. chartAt(index): Devuelve el caracter en la posicion especificada
console.log("Hola".charAt(1)); // o

// 3. concat(str1, str2): Concatena strings
console.log("Hola".concat(" ", "mundo")); // Hola mundo

// 4. includes(substring): Devuelve true si el substring esta en el string
console.log("JavaScript".includes("Script")); // true (ojota, es case-sensitive)

// 5. startsWith(substring) o endsWith(substring): Devuelve true si el string comienza o termina con el substring
console.log("Hola mundo".startsWith("Hola")); // true

// 6. indexOf(substring): Devuelve el indice de la primera aparicion del substring
// lastIndexOf(substring): Devuelve el indice de la ultima aparicion del substring
console.log("banana".indexOf("a")); // 1

// 7. replace(searchValue, newValue): Reemplaza una parte del string
console.log("Hola mundo".replace("mundo", "Div 334")); // Hola Div 334

// 8. replaceAll(searchValue, newValue): Reemplaza TODAS las apariciones
console.log("1, 2, 3, 4, 5".replaceAll(", ", ";")); // 1;2;3;4;5

// 9. toLowerCase(): Convierte a minusculas
console.log("HOLA".toLowerCase()); // hola

// 10. toUpperCase(): Convierte a mayusculas
console.log("holi".toUpperCase()); // HOLI

// 11. trim(): Elimina el espacioen blanco al comienzo Y al final
// trimStart() y trimEnd(): Eliminan espacios al comienzo O al final
console.log("   Hola    ".trim()); // Hola

// 12. slice(start, end): Extrae parte del string
console.log("JavaScript".slice(0, 4)); // Java
console.log("JavaScript".slice(-6)); // Script

// 13. substring(start, end): Similar a slice, pero NO acepta negativos
console.log("JavaScript".substring(4, 10)); // Script

// 14. split(separator): Divide el string en un array
console.log("rojo,verde,azul".split(",")); // ['rojo', 'verde', 'azul']
console.log("Hola".split("")); // ['H', 'o', 'l', 'a']


// 15. repeat(count): Repite el string
console.log("Ji".repeat(3)); // JiJiJi

// 16. match(regex): Devuelve coincidencias con una expresion regular
console.log("abc123".match(/\d+/g)); // ['123']




/*===============================
    Metodos de Arrays en JS
===============================*/

// 1. length: Devuelve la longitud del array
console.log([1, 2, 3].length); // 3

// 2. push(element): AGREGA un elemento AL FINAL de array
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// 3. pop(): ELIMINA el ULTIMO elemento y lo devuelve
console.log(arr.pop()); // 4
console.log(arr); // [1, 2, 3]

// 4. unshift(element): AGREGA un elemento al INICIO del array
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]

// 5. shift(): ELIMINA el PRIMER elemento y lo devuelve
console.log(arr.shift()); // 0
console.log(arr); // [1, 2, 3]

// 6. concat(array): Concatena arrays
console.log([1, 2, 3].concat([4, 5, 6])); // [1, 2, 3, 4, 5, 6]

// 7. join(separator): Une los elementos en un string
console.log([1, 2, 3].join('-')); // "1-2-3"


// 8. slice(start, end): Extrae una copia parcial del array
console.log([1, 2, 3, 4].slice(1, 3)); // [2, 3]

// 9. splice(start, deleteCount, ...items): Modifica el array in situ, puede borrar y agrega
let arrayDos = [1, 2, 3, 4, 5, 6];
arrayDos.splice(1, 2, "dos", "tres")
console.log(arrayDos); // [1, 'dos', 'tres', 4, 5, 6]

// 10. indexOf(element): Devuelve la primera posicion del elemento o -1
console.log([1, 2, 3].indexOf(2)); // 1

// 11. lastIndexOf(element): Devuelve la ULTIMA posicion del elemento
console.log([1, 2, 3, 2].lastIndexOf(2)); // 3

// 12. includes(element): Devuelve true si el elemento existe
console.log([1, 2, 3].includes(2)); // true
```

---


## JavaScript III / Scope y ambito, funciones y tipos de funciones
```js
/*==========================
    Scope (Ambito)
============================

El scope o ambito en JS se refiere al contexto en el cual las variables y las funciones son accesibles y pueden ser referenciadas. Entender el scope es clave para escribir codigo claro y sin errores. Existen distintos tipos de Scope


    1. Global Scope (Ambito global)
        - Las variables declaradas fuera de cualquier funcion o bloque tienen alcance global y son accesibles desde cualquier parte del codigo (var, let y const)

        - Extra: Las variables "var" globales se adjuntan al objeto window

    2. Local Scope / Function Scope (Ambito local o Ambito de funcion)
        - Las variables declaradas dentro de una funcion solo son accesibles dentro de esa funcion. Estas variables por tanto tienen un ambito local

    3. Block Scope (Ambito de bloque)
        - A partir de ES6 (JavaScript 2015), las nuevas variables let y const tienen alcance de bloque. Es decir, solo son accesibles dentro de las llaves { } (if, for, etc)
*/


/////////////////////////
// Ejemplo global scope
let global = "Soy una variable global";

function mostrarGlobal() {
    console.log(global);
}

mostrarGlobal(); // Soy una variable global
console.log(global); // Soy una variable global



//////////////////////////
// Ejemplo de local scope o function scope (var)
function mostrarLocal() {
    var localVar = "Soy una variable local";
    console.log(localVar);
}

mostrarLocal(); // Soy una variable local
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined



////////////////////////
// Ejemplo block scope
if (true) {
    let bloqueLet = "Soy una variable de bloque";
    console.log(bloqueLet);
}

// console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined



/* =================================
    Function Scope vs Block Scope
====================================

    - Function Scope: Las variables declaradas con var tienen ambito de funcion. Por lo que si se declaran dentro de una funcion, no son accesibles fuera de esa funcion, pero NO estan limitadas por bloques -> { }

    - Block Scope: Las variables declaradas con let y const estan limitadas por el bloque en el que se declaran
*/
    
// Alcance de funcion (se puede acceder a variables de un bloque { })
function scopeFunction() {
    if (true) { // Bloque limitado por llaves
        var funcionVar = "Soy una var de funcion";
    }
    console.log(funcionVar); // Soy una var de funcion
}

scopeFunction();


// Alcance de bloque
function scopeBloque() {
    if (true) {
        let letBloque = "Soy de bloque";
        const constBloque = "Soy de bloque tambien";

        console.log(letBloque);
        console.log(constBloque);
    }

    // console.log(letBloque); // Uncaught ReferenceError: letBloque is not defined
    // console.log(constBloque); // Uncaught ReferenceError: constBloque is not defined
}

scopeBloque();



/* =================================
        Hoisting (Elevacion)
====================================

Las declaraciones de variables y funciones en JS se mueven "hacia arriba" de su contexto de ejecucion (scope).
Solo las declaraciones son elevadas, no las inicializaciones.

    - Variables con var: Se elevan y se inicializan con "undefined"

    - Variables con let y const: Se elevan pero NO se inicializan, lo que lleva a un error si se accede antes de la declaracion
*/

console.log(elevadaVar); // undefined
var elevadaVar = "Soy una var elevada"; // Declaracion
console.log(elevadaVar); // Soy una var elevada


// console.log(variableLet); // Uncaught ReferenceError: Cannot access 'variableLet' before initialization
let variableLet = "Soy una variable let";
console.log(variableLet); // Soy una variable let



/*====================================
 Diferencias entre var, let y const
======================================

    ///////////
    // var
        -  Tiene ambito de funcion, por lo que esta disponible en todo momento dentro de la funcion sin limitarse por las llaves { }

        - Permite la redeclaracion y la reasignacion


    ///////////
    // let
        -  Tiene ambito de bloque, es decir, se declara dentro de una llaves { } y solo esta disponible dentro de ese bloque

        - NO permite la redeclaracion pero si la reasignacion

    
    ///////////
    // const
        -  Tiene ambito de bloque, es decir, se declara dentro de una llaves { } y solo esta disponible dentro de ese bloque

        - NO permite la redeclaracion y tampoco la reasignacion

    ===========================
        Diferencias clave
    ===========================

    - let y const aparecieron en el estandar ES6 (2015) para mejorar el ambito (alcance/scope) de las variables y reducir la probabilidad de anulaciones accidentales de variables

    - tanto let como const NO permiten la elevacion mientras que var si

    - EXTRA: Tecnicamente let y const SI tienen hoisting pero estan en la TDZ (Temporal Dead Zone) hasta su inicializacion

    - const asegura que el valor de la variable permanece CONSTante mientras que let permite la reasignacion. Ojo! objetos y arrays si pueden modificarse (porque no modificamos su espacio en memoria)


    ===========================
        Buenas practicas
    ===========================

    - Usar const para variables de solo lectura como constantes 
    - Usar let para variables que puedan cambiar con el tiempo
    - Siempre evitar var debido a su ambito de funcion (Scope) y su elevacion (Hoisting) que puede dar lugar a conflictos y bugs
*/


// Ejemplo de redeclaracion: var si lo permite, let y const no
var lenguaje = "ECMAScript";
console.log(lenguaje);
var lenguaje = "JavaScript"; // Redeclaramos una variable con var y no da error
console.log(lenguaje);

let x = 10;
x = 20; // Reasignacion (si afecta a la posicion en memoria de la variable)
// let x = 30; // Redeclaracion -> let y const no lo permiten
console.log(x);


const obj = { nombre: "Manuel" };
obj.nombre = "Facundo"; // Esto NO altera la posicion en memoria del objeto 
// obj = {}; // main.js:167 Uncaught TypeError: Assignment to constant variable.
console.log(obj);



/*==========================
    Funciones en JS
============================

Una funcion es un bloque de codigo reutilizable que se puede ejecutar cuando se llama por su nombre
Las funciones son fundamentales para la modularidad y la reutilizacion del codigo

    - Facilitan la organizacion del codigo
    - Permiten la reutilizacion
    - Mejoran la legibilidad y el mantenimiento
*/


// 1. Funcion declarada: La forma mas comun de declarar una funcion en JavaScript usando la palabra clave function
function sumaSimple() {
    let resultado = 5 + 3;
    console.log("El resultado es: ", resultado);
}

sumaSimple();

// Añadimos parametros a la funcion para poder reutilizar esta funcion cuantas veces querramos
// Los parametros son variables que aceptan valores cuando se les llama
function sumar(a, b) { 
    return a + b; // Retorno un valor con la keyword return
}

// Los argumentos son los valores que le pasamos a la funcion cuando la llamamos
console.log(sumar(6, 7)); // 13 (como la funcion retorna un valor, necesito ponerla dentro de un console.log)


/*==============================
    Tipos de funciones en JS
================================



=======================
1. Funcion declarada / Named function o Basic function
=======================

Es la declaracion basica de JavaScript, usa la keyword function

    Se recomienda para funciones con nombre o cuando se necesite hoisting.
    Las funciones declaradas con la keyword function se pueden elevar a la parte superior de su ambito, es decir, del scope que las contiene. Por lo que podemos llamar a la funcion antes de ser declarada
*/

saludar(); // Hola mundo

function saludar() {
    console.log("Hola mundo");
}



/*=====================
2. Funcion expresada / Function expression
=======================

    Es la funcion dentro de una variable

    Son utiles para funciones anonimas, para cuando se quiere controlar donde va a estar disponible la funcion o para cuando va a ser usada como argumento para otra funcion
*/

const saludarExpresada = function() {
    console.log("Hola mundo desde una funcion expresada");
}

saludarExpresada(); // Hola mundo desde una funcion expresada



/*=====================
3. Funcion anonimas / Anonymous function
=======================

    Las funciones anonimas son funciones que se definen sin un nombre identificador, compotandose como expresiones que se asignan a variables o se pasan como argumentos a otras funciones.
    No tienen hositing y se usan principalmente para callbacks o manejadores de eventos.
*/

setTimeout(function() {
    console.log("Hola mundo desde una funcion anonima en un temporizador");
}, 2000); // Hola mundo desde una funcion anonima en un temporizador (tarda 2 segs)




/*=====================
4. Funcion flecha / Arrow function
=======================

    Son especialmente utiles para escribir funciones de una linea.
    No tienen su propio this y siempre son anonimas
*/

const sumarFlecha = (a, b) => a + b;
console.log(sumarFlecha(4, 5)); // 9




/*=====================
5. Funcion de metodos / Method function
=======================

    Son las funciones definidas dentro de un objeto o clase
*/

const persona = {
    nombre: "Manuel",
    saludar() {
        console.log(`Hola! Me llamo ${this.nombre}`);
        // console.log(`Hola! Me llamo ${nombre}`); // Uncaught ReferenceError: nombre is not defined
    }
}

persona.saludar(); // Hola! Me llamo Manuel




/*=====================
6. Funcion de constructor / Constructor function
=======================

    Se usan para crear objetos, se invocan usando la keyword new
*/

function Usuario(nombre, id) {
    this.nombre = nombre;
    this.id = id;
}

const franco = new Usuario("Franco", 12345);
console.log(franco.id); // 12345




/*=====================
7. Expresion de funcion ejecutada inmediatamente / IIFE - Immediately Invoked Function Expressions
=======================

    Las IIFE son funciones que se ejecutan inmediatamente despues de haberse definido
*/

(function() {
    console.log("Holi! Soy una IIFE que se ejecuta al toque!");
})(); // Holi! Soy una IIFE que se ejecuta al toque!




/*=====================
8. Funcion generadora / Generator function
=======================

    Son un tipo especial de funciones que sirven como una fabrica de iteradores. Es decir, pausan su ejecucion y continuan mas tarde.
    Se definen usando la expresion function*
*/




/*=====================
9. Funcion de orden superior / HOF - High Order Functions
=======================

    Las HOF nos permiten usar otras funciones como parametros para devolver funciones como resultado.
    Ejemplos de estas funciones son map(), filter(), reduce(), forEach(), every() y some()
    (Las veremos en JavaScript V y JavaScript VII)
*/



/*=====================
10. Funcion asincronica / Async Function
=======================

    Se declaran con la keyword async y devuelven un objeto Promise que representa la terminacion o fracaso de una operacion asincrona

    Se usa el operador await para esperar la operacion asincronica
*/




/*=====================================
    6 tipos de funciones flecha en JS
=====================================*/

// 1. Sin parametros: Si la funcion no lleva parametros, se pueden usar parentesis vacias
const saludarFlecha = () => console.log("Hola mundo desde una funcion flecha");
saludarFlecha(); // Hola mundo desde una funcion flecha


// 2. Un solo parametro: Si hay un solo parametro, las parentesis son opcionales
const cuadrado = x => x * x; // El return esta implicito (return x * x)
console.log(cuadrado(4)); // 16


// 3. Mas de un parametro: En este caso las parentesis son obligatorias
const restar = (a, b) => a - b;
console.log(restar(5, 2)); // 3


// 4. Mas de una instruccion en la funcion: Si el cuerpo de la funcion tiene mas de una instruccion, necesitamos usar {} y return si queremos devolver un valor
const saludarPersona = nombre => {
    const saludo = `Holis, ${nombre}`;
    return saludo;
}

console.log(saludarPersona("Juan")); // Holis, Juan


// 5. Devolviendo un objeto: Para devolver un objeto literal, debe estar envuelto en parentesis para que no se confunda con el cuerpo de la funcion
const creaPersona = (nombre, edad) => ({nombre: nombre, edad: edad});
console.log(creaPersona("Guillermo", 30));


// 6. Funciones de order superior y callbacks: Las funciones de flecha son especialmente populares cuando se usan como callbacks
const numeros = [1, 2, 3, 4, 5];
const duplicar = numeros.map(num => num * 2);
console.log(duplicar); // [2, 4, 6, 8, 10]
```


---


## JavaScript II / Control de Flujo, Estructuras de Control, Condicionales y Bucles I
- [Halt & Catch Fire instruccion](https://es.wikipedia.org/wiki/Halt_and_Catch_Fire)
- [Halt & Catch Fire serie](https://es.wikipedia.org/wiki/Halt_and_Catch_Fire_(serie_de_televisi%C3%B3n))
```js
/*==========================
    Control de flujo
============================

El control de flujo en JavaScript determina como se ejecutan las instrucciones de un programa. Al diseñar un programa es importante establecer que partes del codigo se ejecutan y bajo que condiciones.

En JS esto se logra mediante estructuras de control que permiten ejecutar secuencias de codigo basadas en decisiones, repeticiones o condiciones especificas. Existen varios tipos de estructuras de control en JS

    1. Condicionales
        - if, else if, else
        - Operadores logicos: &&, ||, !
        - Operadores ternarios

    2. Bucles
        - for, while, do..while

    3. Control de flujo avanzado
        - break
        - continue
        - switch
*/

// Ejemplos if, else if, else: 
let numero = 0;
// Encontrar numero positivo y negativo
if (numero > 0) {
    console.log("El numero es positivo");
} else if (numero < 0) {
    console.log("El numero es negativo");
} else {
    console.log("El numero es cero");
}

// Verificar mayor de edad, menor de edad o edad invalida
// let edad = parseInt(prompt("Introduci una edad:"));
let edad = 20;
console.log(`Tenes ${edad} años`);
console.log(typeof edad);
console.log(18);

if (edad >= 18) {
    console.log("Sos mayor de edad");

} else if (edad < 18 && edad > 0) {

    console.log("Sos menor de edad");
} else {

    console.log("Edad invalida");
}


/*========================
    Operadores logicos
==========================

AND (&&):   Ambas condiciones deben ser verdaderas
OR  (||):   Al menos una condicion debe ser verdadera
NOT (!):    Niega el valor de una condicion, es el operador de negacion logica

El operador ! invierte el valor booleano de una expresion. Si la expresion es true, se convierte en false y viceversa.
*/

// Tiene o no permiso para manejar
let tieneLicencia = true;
// let edad = 20;

if (tieneLicencia && edad >= 18) {
    console.log("Podes manejar, anda a comprar un juguito");
}

if (!tieneLicencia || edad < 18) {
    console.log("No podes manejar, tocara ir en bici");
}

// Ejemplo de reasignacion de valor con variables
let nombre = "Kevin"; // Asignamos un valor a la variable
nombre = "Leandro Paredes"; // Reasignamos un valor a esa variable

// Ejemplo de toggle o conmutador
let estado = true;

function alternarEstado() {
    // Invertir el valor de estado
    estado = !estado; // estado (sea cual fuere su valor, es igual a su contrario)
    console.log(`Nuevo estado: ${estado}`);
}

alternarEstado(); // Nuevo estado: false
alternarEstado(); // Nuevo estado: true
alternarEstado(); // Nuevo estado: false

/* ! nos permite verificar variables falsy

En JS, los valores "falsy" son aquellos que devuelve "false" en un contexto booleano como una codicional if

    false               ->	boolean
    0, -0, 0n           ->	number / bigint
    "" (cadena vacía)   ->	string
    null                ->	object (especial)
    undefined           ->	undefined
    NaN	                ->   number
*/

let valor1 = 0; // 0 es un valor falsy
let valor2 = "Hola"; // Una cadena no vacia es un valor truthy

console.log(!valor1); // true (0 es falsy asi que se convierte en true)
console.log(!valor2); // false (Una cadena no vacia es truthy asi que se convierte en false)


/*========================
    Operador ternario
==========================

El operador ternario es una forma mas compacta de escribir una condicion if...else

    if (edad >= 18) {
        console.log("Sos mayor de edad");
    } else {
        console.log("Sos menor de edad");
    }

    termina siendo

    let mensaje = (edad >= 18) ? "Sos mayor de edad" : "Sos menor de edad";
    console.log(mensaje);
*/

// Mensaje para verificar temperatura
let temperatura = 18;
let mensaje;

mensaje = (temperatura >= 25) ? "Hace calor! Da para abrir una birrita" : "Hace un chiflete de la gran flauta!";

console.log(mensaje);


/*========================
    Bucle for clasico
==========================

Se usa cuando se conoce de antemano el numero de iteraciones

    for (inicializacion; condicion; incremento) {
        // Codigo a ejecutar en cada iteracion
    }
*/

for (let i = 0; i < 5; i++) {
    console.log(`Iteracion: ${i}`);
    // (...)
    // Al terminar de ejecutarse el codigo, se produce el incremento i++
}
/*
Iteracion: 0 
Iteracion: 1 
Iteracion: 2
Iteracion: 3
Iteracion: 4
*/


// Bucle for anidado para producir una tabla basica del 3
for (let i = 1; i <= 3; i++) {

    console.log(`Tabla del ${i}`);
    
    for (let j = 1; j < 4; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }

    // Al terminar la instruccion, se produce el incremento
}

/*
Tabla del 1
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3

Tabla del 2
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6

Tabla del 3
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
*/


// Ejercicio sugerido: Hagan la tabla del 10 completa y a mano



/*========================
    Bucle while
==========================

Ejecuta el bloque de codigo mientras la condicion sea verdadera

    while (condicion) {
        // Codigo a ejecutar mientras la condicion sea verdadera
    }
*/

let i = 0; // Inicializacion
while (i < 5) { // Condicion
    console.log("Iteracion while: ", i);
    i++; // Incremento
}


/*========================
    Bucle do ... while
==========================

Similar al whilte, pero la condicion se evalua despues de ejecutar el bloque de codigo, lo que garantiza que el codigo se ejecutara al menos una vez

    do {
        // Codigo a ejecutar mientras la condicion sea verdadera
    }
    while (condicion);
*/

let j = 0; // Inicializacion

do {
    console.log("Iteracion do while: ", j);
    j++; // Incremento

} while (j < 5); // Condicion



/*================================
    Control de flujo avanzado
==================================

    break: Se usa para salir inmediatamente de un bucle o estructura de control

    continue: Salta a la siguiente iteracion del bucle, omitiendo el codigo restante dentro del bucle para esa iteracion

    switch: Otra estructura de control que permite evaluar una expresion y ejecutar el bloque de codigo correspondiente al caso que coincide
*/

// break: Sale de un bucle o una estructura de control
for (let i = 0; i < 10; i++) {

    if (i === 5) break; // Sale del bucle
    console.log("Iteracion: ", i);
}


// continue: Salta a la siguiente iteracion del bucle
for (let i = 0; i < 10; i++) {

    if (i % 2 === 0) continue; // Salta las iteraciones pares
    console.log("Numero impar: ", i);
}


/* Switch permite evaluar una expresion y ejecutar el bloque de codigo correspondiente al caso que coincide

    switch (expresion) {
        case 1:
            // Codigo a ejecutar si la expresion es igual a 1
            break;

        case 2:
            // Codigo a ejecutar si la expresion es igual a 2
            break;

        default:
            // Codigo a ejecutar si ninguno de los casos coincide
    }
*/

// Pediremos el dia de la semana y mostraremos si es L-V o Finde
let diaSemana = parseInt(prompt("Introduci dia de la semana"));

switch (diaSemana) {
    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miercoles");
        break;

    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;

    default:
        console.log("Fin de semana");
}
```

---

## JavaScript I / Conceptos elementales, sintaxis basica, variables, tipos de datos y operadores
#### [JavaScript Wikipedia](https://es.wikipedia.org/wiki/JavaScript)
#### [EcmaScript Wikipedia](https://es.wikipedia.org/wiki/ECMAScript)
```js
/*
¿Qué es JavaScript?
JavaScript es un lenguaje de programación utilizado principalmente para crear páginas y aplicaciones web interactivas y dinámicas.
Una página es interactiva cuando responder a las acciones del usuario.
Que una página sea dinámica significa que su contenido o estado puede cambiar.

Ejemplo:

Boton HTML agregar al carrito. (interactividad)

carrito: 0 Productos. 

pasa: 
carrito: 1 Productos.



Cuando desarrollemos una página web, normalmente trabajamos con tres tecnologías:

HTML ---> Define la estructura y contenido
CSS  ---> Define la apariencia y diseño
JS  ----> Define el comportamiento y la lógica


// Comentarios
// En linea

/* comentario
de multiples
lineas


**/

// console.log("Hola mundo");

/**
 DEFER nos va a permitir pegar la etiqueta <script> en el head.
 Le dice al navegador que descargue el archivo JS pero que lo ejecute cuando el HTML haya sido procesado.
*/


// alert('Hola mundo desde alert');

// Prompt nos permite solicitar datos al usuario mediante una ventana emergente.

// prompt('Escribí tu nombre');


// Introducción variables.
// Tres tipos de variables

/* 
var: usado históricamente para declarar variables. NO se utiliza ya que tiene varias limitaciones.
let: Permite declarar variables que pueden cambiar y ser reutilizados.
const: Se utiliza para declarar variables que no se deben reasignar. El valor de un const no puede ser modificado, pero si puede ser modificado en caso de ser un objeto o array.


*/

// Declaración vieja. 
// var nombre = "Manuel";
// console.log(nombre);
// // declaración moderna.
// let edad = 23;
// console.log(edad);
// const pi = 3.1416; 
// console.log(pi);

/* var se dejó de utilizar porque tiene algunos comportamientos que pueden provocar errores díficiles de detectar  */

// Var no respeta los bloques.

// if (true) {
//     var nombre2 = "Juan";
// }

// console.log(nombre);

// Se puede declarar var dos veces.

// var nombre = "Pedro";

// console.log(nombre);

// No se hace en js.
// apellido = "Veliz";

// console.log(apellido);



/* 
Tipos de datos primitivos.
-números(number): Valores numericos.
-cadenas(string): texto encerrado entre comillas dobles o simples.
-booleanos(boolean): true o false.
-null: representar un valor vacío.
-udefined: una variable declarada pero no tiene valor.
-object: representa un objeto. 
*/

// let numero = 60;
// let texto = "Hola DIV131";
// let verdadero = true;
// let vacio = null;
// let indefinido;

// console.log(numero);
// console.log(texto);
// console.log(verdadero);
// console.log(vacio);
// console.log(indefinido);



/* OPERADORES EN JS

Los operadores son simbolos especiales que nos permiten realizar operaciones sobre valores o variables.
Estos operadores pueden ser aritmeticos, de comparación, lógicos, de asignación, de tipo.

*/


// Operadores aritméticos: Se utilizan para realizar matematicas sobre los valores numericos.
// https://www.w3schools.com/js/js_arithmetic.asp

let a = 10;
let b = 30;

// console.log(a + b);
// console.log(b - a);
// console.log(a * b);
// console.log(b / a);
// console.log(b % a);
// console.log(a ** b);

/*
Operadores de asignación:
Asignar valores a las variables.
https://www.w3schools.com/js/js_assignment.asp
*/

let c = 10;

c += 5; // c = c + 5; Ahora c es 15
c -= 2; // c = c - 2; Ahora c es 13

console.log(c);


/* Operadores de comparación:
Se usa para comparar valores entre variables y devuelven un resultado booleano (true o false)

https://www.w3schools.com/js/js_comparisons.asp

la diferencia entre "==" e "==="
"==" Comparar los valores después de hacer una conversión de tipo (si fuera necesario)
"===" Comparar tanto el valor como el tipo sin hacer conversión.

*/

// let d = 5;
// let e = "5";


// console.log(d == e); // true porque compara solo el valor.
// console.log(d === e); // false porque compara tanto el valor como el tipo.

// console.log(d == 5); 

// console.log(d != e); // false compara también los valores.
// console.log(d !== e); // true compara tipo y valor.

/* 
Operadores Lógicos: 
se usan para combinar expresiones booleanas.
https://www.w3schools.com/js/js_assignment.asp
&& signfica "y" o "and"
|| significa "o"
*/



// console.log(f && g); // false porque ambas deben ser true.
// console.log(f || g); // true porque al menos uno es true.
// console.log(!f); // false porque invierte el valor de true.

/* 
Operadores de tipo:
Permiten verificar el tipo de dato.
typeof: devuelve el tipo de dato de una variable.
instanceof: verifica si un objeto es una instancia de una clase.

https://www.w3schools.com/js/js_datatypes.asp
*/



// console.log(typeof(f));
// console.log(typeof(g));
// console.log(typeof(h));


// console.log([] instanceof Array); // true 
// console.log([] instanceof Object); // true. porque los arrays son un tipo especial de objeto en JavaScript

// const frutas = ['manzan', 'pera', 'uva'];

/* 
El array frutas tiene propiedades y métodos.
frutas.length
frutas.push()
*/



// Casos donde los operadores se comportan diferentes.
// operador "+" ya que también el operador funciona para concatenar.


// console.log(25 + 25); // suma.

// console.log("25" + "30"); // Concatenar.

// console.log(10 + "5" + 3); // 1053.

// console.log(10 + 5 + "20"); // 1520.

/*
Para los otros operadores js hace la conversión de manera implícita de tipo string a number.
*/

// console.log("5" - 3);
// console.log("6" / 3);

// js puede convertir booleanos a números en determinadas operaciones.

console.log(true + 1); // 1 + 1 = 2 
console.log(false + 1); // 0 + 1 = 1


/***************************
Próxima clase JAVASCRIPT II
Control de flujo, estructuras de control, condiciones y blucles.
****************************/
```