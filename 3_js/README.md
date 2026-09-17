# JavaScript

### Prox clase
- *Terminar JavaScript III -> Introduccion a las funciones*

## JavaScript III / Scope y ambito, funciones y tipos de funciones
```js

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