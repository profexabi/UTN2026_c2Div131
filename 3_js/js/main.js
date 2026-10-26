/*========================================
    Herramientas de JS para asincronia
========================================*/

/*  1. Callbacks: Funcion que se pasa como argumento para ejecutarse despues de completar una operacion

    function leerArchivo(nombre, callback) {
        // Simula lectura
        setTimeout(() => {
            callback(`Contenido de ${nombre}`)
        )})
    }

    - Tienen el problema de anidarse en exceso y provocar un callback hell


    2. Promises: Objeto que representa un valor que puede estar disponible ahora, mas adelante o nunca (resultado de una operacion asincrona). Tiene 3 estados:

        - (en proceso) pending
        - (completada) fulfilled
        - (rechazada) rejected

    fetch: Es una web API que realiza solicitudes HTTP y DEVUELVE UNA PROMESA    


    La asincronia es fundamental en JavaScript donde operaciones como:

        - Llamadas a APIs externas
        - Acceso a archivos
        - Animaciones
        - Eventos de usuario

    No deben bloquear el flujo del programa.
*/

const contenedorInfo = document.getElementById("contenedorInfo");
console.log("Operacion sincrona 1");

function obtenerUsuarios() {
    // 1. Estamos estableciendo una conexion HTTP (HTTP Request GET) con el servidor que nos brinda JSON en esta URL
    fetch("https://jsonplaceholder.typicode.com/users") // mientras esto se realiza, esta pending
    
    // cuando el estado pending termine exitosamente -> fulfilled, paso a ejecutar el codigo del then()
    // 2. Cuando recibo la respuesta HTTP correcta del servidor, con el JSON en el body de la response, entonces...
    .then(response => {
        console.log(response); // Aca chusmeo la HTTP Response, el JSON esta en el body, y tb recibo otros datos
        /*
        Response {
            body: (...)
            bodyUsed: true
            headers: Headers {}
            ok: true
            redirected: false
            status: 200
            statusText: ""
            type: "cors"
            url: "https://jsonplaceholder.typicode.com/users"
        }*/

        // El parseo tarda en realizarse y es asincronico, por eso los datos parseados los recibire en el siguiente then()
        return response.json(); // Realizo el parseo del JSON y lo devuelvo (parseo -> operacion asincronica)
    })
    
    // 3. Cuando recibo el contenido parseado del body (linea 33), lo muestro en el objeto data
    .then(data => { // Aca ya tengo el JSON parseado como array de objetos
        console.table(data);

        let listaUsuarios = `
        <h4>Estos datos se generan dinamicamente con info que obtengo de internet (de una API REST)</h4>
        <ul>
        `;

        data.forEach(user => {
            listaUsuarios += `<li>${user.email}</li>`
        });

        listaUsuarios += "</ul>";

        contenedorInfo.innerHTML = listaUsuarios;
    })

    .catch(error => console.error(error));
}

// obtenerUsuarios();

console.log("Operacion sincrona 2");



/*====================
    fetch
======================

fetch es una API Web que permite realizar peticiones HTTP de forma asincronica usando promesas.
Forma parte de las APIs Web proporcionadas por el navegador, no del lenguaje JavaScript en si
Viene a reemplazar al viejo y complejo XMLHttpRequest

    - Devuelve un objeto Promise que se resuelve con un objeto Response
    - Usa el estandar HTTP: metodos como GET, POST, PUT y DELETE (etc)
    - Funciona muy bien con async/await
    - Es mas limpio y moderno que XMLHttpRequest
    - Soporta CORS, headers, envio de JSON y mas

/////////////
// Sintaxis

- url:      string, la URL a la que queremos hacer una solicitud (Por defecto hace peticiones GET)
- options:  objeto, (opcional) que especifica configuracion adicional como metodo, cabeceras, cuerpo, etc

    fetch(url, options)
        .then(response => {
            // Respuesta cruda del servidor    
        })
        .then(data => {
            // La informacion parseada que nos entrega la respuesta en body    
        })
        .catch(error => {
            // Error de red o fallo total
        })


//////////////////////////
// El objeto Response

La promesa devuelta por fetch() se resuelve con un objeto Response que representa la respuesta HTTP del servidor
    
    .ok -> booleano (true si status esta entre 200 y 299)
    .status -> codigo HTTP (ej 200, 404, 500)
    .statusText -> texto del estado ("OK", "Not Found", "Internal Server Error")
    .headers -> cabeceras HTTP de la respuesta
    .json(), .text(), .blob(), etc metodos para leer el contenido de la respuesta


///////////////////////
// Manejo de errores

fetch solo reachaza la promesa en errores de red reales (sin internet, servidor caido)
NO rechaza en codigos de error HTTP (404, 500, etc), por eso debemos revisar response.ok

////////////////////////
// Cuando usamos fetch?

- Consumir APIs REST (obtener datos de usuarios, productos, etc)
- Enviar formularios con POST
- Cargar contenido dinamico
- Interacciones cliente-servidor en tiempo real, junto con WebSockets
*/



/*====================
    async/await
======================

async/await es una manera mas sencilla de trabajar con promesas, es una facilitad sintactica o una manera mas simple de escribir algo (syntactic sugar)

Introducida en ECMAScript 2017 (ES8) que permite escribir codigo asincrono con una sintaxis similar al codigo sincrono
El objetivo es hacer el manejo de la asincronia mas legible, estructurado y facil de depurar

    - La palabra clave async se usa para declarar una funcion asincronica la cual siempre devuelve una promesa
    - La palabra clave await se usa para PAUSAR la ejecucion de la funcion async hasta que la promesa sea  
        - resuelta -> fulfilled
        - rechazada -> rejected

    - await espera que fetch devuelve una promesa resuelta antes de continuar
    - el codigo despues de await NO SE EJECUTA hasta que la promesa es resuelta


//////////////
// Ventajas
    - Mas legible y secuencial
        - Menor manejo de errores con try...catch
    - Ideal para flujos largos y complejos de asincronia



//////////////
// Que pasa internamente en el await?

Cuando usamos await, JavaScript:

    1. Evalua la expresion que devuelve una promesa
    2. Suspende la ejecucion de la funcion hasta que la promesa se resuelva o se rechace
    3. Si se resuelve, se continua con el valor
    4. Si se rechaza, lanza un error que puede ser atrapado por try...catch

    - await bloquea la ejecucion dentro de la funcion async, no bloquea el hilo principal
    - las funcionees async siempre devuelven una promesa
    - await tambien puede usarse con funciones que no retornan promesas
*/

async function obtenerUsers() {

    // Con la estructura try...catch puedo manejar errores. En try escribo todo el codigo (que podria fallar)
    try {
        // El codigo se detendra en el await esperando que el fetch devuelva una HTTP response exitosamente
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
        console.log(response);
        // Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/users', redirected: false, status: 200, ok: true, …}
    
        // El codigo se detendra en el await esperando parsear el JSON que esta dentro de response
        const data = await response.json();
        
        // Ahora ya puedo trabajar con mis datos de la API parseados
        console.table(data);

    } catch(error) {
        console.error("Error en la operacion", error);
    }
    
}

obtenerUsers();



/*====================
    try...catch
======================

try...catch es una estructura de control utilizada para capturar y manejar errores que ocurren durante la ejecucion de bloques de codigo.
Esta tecnica forma parte del manejo de excepciones en JavaScript

Su objetivo es evitar que errores inesperados detengan la ejecucion del programa y en su lugar permitir manejar dichos errores de forma controlada

    try {
        // Bloque de codigo que puede lanzar errores

    } catch (error) {
        // Codigo para manejar el error 
    }


    Opcionalmente podemos agregar un bloque finally

    
    try {
        // Bloque de codigo que puede lanzar errores

    } catch (error) {
        // Codigo para manejar el error 

    } finally {
        // Codigo que se ejecuta siempre con o sin error 
    }


//////////////////////////////////////////
// Que tipo de erorres puede capturar?

try...catch captura errores de tiempo de ejecucion (runtime) como:

    - Acceso a variables no definidas
    - Llamadas a funciones inexistentes
    - Errores lanzados con throw
    - Problemas en funciones como JSON.parse()

    - NO captura errores de sintaxis porque estos impiden que el codigo se ejecuta



/////////////////////////////////
// Como funciona internamente?

    1. El bloque try se ejecuta normalmente
    2. Si ocurre un error dentro del try, se detiene inmediatamente la ejecucion y pasa al bloque catch
    3. El objeto de error (por convencion error, e, err) contiene informacion como
        .name: tipo de error (TypeError, ReferenceError, etc)
        .message: mensaje descriptivo
    4. El bloque finally, si existe, siempre se ejecuta




/////////////////////////////////
// No usar try...catch en exceso

    - Podemos ocultar errores reales si no se maneja correctamente
    - Tiene costo de rendimiento, especialmente en bucles
    - Es mejor usarlo en secciones donde hay riesgo real de error (I/O, parsing, red, etc)

    1. No atrapemos errores que no podemos manejar
    2. Usemos try...catch solo donde esperemos errores (como al parsear datos o hacer llamadas a APIs)
    3. Usar finally para cerrar recursos, limpiar o terminar tareas (conexiones, indicadores de carga, etc)
    4. Siempre proporcionar informacion util en el error (e.message)
*/

try {
    const resultado = 10 / 0;  // No se puede dividir entre 0 en matematicas
    console.log(resultado); // Infinity (en si no es un error)

    throw new Error("Error personalizado, no se puede dividir entre 0 che!");

} catch (error) {
    console.log("Ocurrio un error:\n", error.message);
}