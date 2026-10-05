/*=========================================
    Seleccion de elementos en el DOM
===========================================

    - getElementById(): Seleccionar elementos unicos por su id
    - querySelector(): Selecciona el 1er elemento por su selector CSS
    - querySelectorAll(): Selecciona TODOS los elementos por su selector CSS
*/

// getElementById()
const titulo = document.getElementById("titulo");
console.log(titulo); // <h1 id=​"titulo">​JavaScript Div 131​</h1>​
console.log(titulo.textContent); //JavaScript Div 131


// querySelector()
const primerParrafo = document.querySelector(".mensaje");
console.log(primerParrafo.textContent); // Primer parrafo

// querySelectorAll()
const parrafos = document.querySelectorAll(".mensaje");
console.log(parrafos); // Array -> [p.mensaje, p.mensaje]

parrafos.forEach(parrafo => console.log(parrafo.textContent))
// Primer parrafo 
// Segundo parrafo


/*=========================================
    Modificar contenido y atributos
===========================================

    - textContent: Modifica el texto dentro de un elemento
    - innerHTML: Modifica el contenido HTML dentro de un elemento (con acceso a las etiquetas)
    - setAttribute(): Modificamos los atributos de un elmeento
    - style: Permite cambiar el estilo CSS en linea de un elemento
*/

// Cambio el texto al primer parrafo
primerParrafo.textContent = "Nuevo texto desde JavaScript";


// Modificamos el contenido HTML
primerParrafo.innerHTML = "<strong>Nuevo texto en negrita</strong>";


// Modificamos atributos
const boton = document.getElementById("boton");
boton.setAttribute("id", "nuevoId");

// Cambiar el estilo
boton.style.backgroundColor = "#00ff41";
boton.style.padding = "10px";
boton.style.border = "2px solid";
boton.style.borderRadius = "5px";


// Hasta ahora lo mas importante es seleccionar elementos e inyectar codigo HTML con innerHTML


/*=========================================
    Eventos en JavaSCript
===========================================

Los eventos permiten a los desarrolladores detectar interaciones del usuario con la pagina web, como hacer click en un bootn, mover el mouse, escribir en un campo de texto, etc. Los eventos son fundamentales para hacer que la pagina web sea interactiva

Un evento es una señal que se envia cuando ocurre una interaccion o cambio en el documento, como un click o una pulsacion de tecla. JavaSCript permite escuchar estos eventos y ejecutar funciones especificas cuando ocurren

    - Eventos de mouse: click, dblclick, mouseover, mouseout, mousemove
    - Eventos de teclado: keydown, keyup
    - Eventos de formulario: submit, input, focus
    - Eventos de venta: resize, scroll, load, unload
*/

// Le asignamos el evento click a nuestro boton y constantemente estara esperando recibir un click para ejecutar una funcion
boton.addEventListener("click", function() { // Definimos la funcion dentro
    alert("Hiciste click en el boton");
});


// Le asignamos un evento mouseover a nuestro titulo para que salude por consola cuando el mouse se pose sobre este elemento
function saludarConsola() { // Definimos la funcion fuera
    console.log("Holis!");
}

titulo.addEventListener("mouseover", saludarConsola); // Llamamos a nuestra funcion


/*==========================
    El objeto event
============================

El objeto event, llamado en el parametro: "event", "e", etc nos provee de metodos e informacion sobre el evento que fue disparado

Cuando usamos addEventListener, el navegador llama a nuestra funcion manejadora y le pasa como argumento un objeto tipo Event.
Este objeto contiene todos los datos del evento que ocurrio
    - que tecla se presiono
    - que boton hizo click
    - si se uso shift
    - coordenadas del mouse
    - etc

Solo deberiamos incluir event en nuestra funcion si vamos a necesitar usar informacion sobre el evento

keydown: Cuando se presiona una tecla: Para detectar la intencion del usuario
keyup: Cuando se libera una tecla: Para confirmar la accion final

// El keydown me sirve por ejemplo para mapear teclas para un juego o una app
// El keyup me sirve para terminar de leer el valor escrito

Propiedades del keydown, cuando el evento keydown se dispara, se pasa un objeto del tipo KeyboardEvent que contiene propiedades utiles como

    - event.key: Representa el caracter o nombre de la tecla presionada
    - event.code: Codigo fisico de la tecla
    - event.ctrlKey, event.altKey, etc: Indica si se presionaron teclas modificadoras

*/
const entradaTexto = document.getElementById("entradaTexto");

// Escuchamos el evento de pulsacion de tecla
entradaTexto.addEventListener("keyup", event => {
    console.log(`Tecla presionada: ${event.key}`); // 2 (Digit2 o Numpad2)
    console.log(`Codigo de la tecla: ${event.code}`);
    console.log(entradaTexto.value);
});



/*==========================
    Propagacion de Eventos
============================

Cuando ocurre un evento, este se propaga a traves del DOM en dos fases

    - fase de captura (de arriba hacia abajo)
    - fase de burbuja (de abajo hacia arriba)

Podemos detener la propagacion de un evento usando el metodo event.stopPropagation()

Consideremos el siguiente ejemplo

    <div class="entrada" id="padre">
        <button id="hijo">Boton</button>
    </div>
*/

const padre = document.getElementById("padre");
const hijo = document.getElementById("hijo");

// Escuchar el click en el div padre, le asignamos una funcion flecha
padre.addEventListener("click", () => console.log("Se hizo click en el div padre"));

// Escuchar el click en el boton hijo, le asignamos una funcion declarada
hijo.addEventListener("click", function(event) {
    event.stopPropagation(); // Detengo la propagacion
    console.log("Se hizo click en el boton hijo");
});


// event.preventDefault() se utiliza para evitar el comportamiento predeterminado de un elemento, ej evitar el envivo por defecto de un formulario HTML
// Lo ideal es guardar los elementos en variables para hacer el codigo mas prolijo y ordenado, tambien se puede hacer todo de una
document.getElementById("miFormulario").addEventListener("submit", event => {
    event.preventDefault(); // Evito que el formulario HTML se envie
    console.log("Formulario no enviado");
    console.log("Realizando validaciones de datos, etc");
    console.log("(posteriormente...) Enviando informacion");
})