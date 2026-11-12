/* Logica para trabajar con archivos y rutas de proyecto (querremos apuntar a una ruta que sirva un css, una imagen)

Usando la sintaxis ESM (type: "module") no podemos usar nativamente __dirname ni __filename, que necesitamos para:

    - Trabajar con rutas absolutas
    - Resolver rutas de archivos estaticos
    - Construir paths para enviar HTML, CSS, imagenes, etc
    - Evitar rutas rotas en produccion

Lo que haremos en este archivo es crear el bloque que reconstruya estas dos utilidades. 
Es decir, cuyando trabajamos con Express.js y plantillas EJS necesitamos

    - Hacer referencia a archivos de plantillas .ejs
    - Servir archivos estativos (CSS, JS, imagenes, etc)
    - Construir rutas confiables independientes del Sistema Operativo

Las rutas absolutas son esenciales para evitar errores cuando la aplicacion se mueve entre directorios o servidores
*/

// Importamos los modulos para trabajar con rutas
import { fileURLToPath } from "url"
import { dirname, join } from "path";

// Obtener el nombre del archivo actual
const __filename = fileURLToPath(import.meta.url);
/* Que hicimos?
    import.meta.url: Proporciona la URL absoluta del modulo actual -> fileURLToPath convierte esta URL a una ruta de sistema
    (file:///ruta/al/archivo        ->      /ruta/al/archivo)
*/

// Obtenemos el directorio del archivo actual
const __dirname = join(dirname(__filename), "../../../"); // Salimos de las carpetas utils, api y src para apuntar a la raiz de nuestro servidor
/* Que hicimos?
    dirname(_filename):     Obtiene el directorio del archivo actual
    join(..., "../../../"): Retrocede 3 niveles en la estructura de directorios para ir a la carpeta raiz de nuestro servidor
*/


// Exportamos el directorio base y la funcion join para construir rutas relativas
export {
    __dirname,
    join
}


/*
- fileURLToPath:    Convierte una URL de archivo (file://) a una ruta del sistema de archivos
- dirname:          Devuelve el directorio padre de una ruta
- join:             Une segmentos de ruta de forma segura


*/