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
var lenguaje = "JavaScript";
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


*/