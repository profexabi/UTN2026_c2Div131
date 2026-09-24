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