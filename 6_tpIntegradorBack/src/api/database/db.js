// Importamos el modulos mysql2 en modo promesas para poder hacer peticiones asincronas a la BBDD
import mysql2 from "mysql2/promise"; // Asi podremos usar asnyc...await

// Importamos la informacion de la conexion a la BBDD
import environments from "../config/environments.js";

// Extraemos el objeto database de environments
const { database } = environments;

// Creamos una conexion (un grupo / pool de conexiones) a la BBDD
const connection = mysql2.createPool({
    host: database.host,
    database: database.name,
    user: database.user,
    password: database.password
});

export default connection;

/*=======================
    Pool de conexiones
=========================

Un pool de conexiones es un conjunto de conexiones activas y reutilizables a la base de datos. En lugar de abrir y cerrar una nueva conexión cada vez que haces una consulta, el pool:

    Mantiene abiertas varias conexiones.
    Las reutiliza para distintas consultas.
    El rendimiento y eficiencia del servidor.
    Controla cuántas conexiones pueden usarse al mismo tiempo.

Ventajas del Pool:

    Evita crear y destruir conexiones constantemente.
    Reduce la carga en la base de datos.
    Mejora la velocidad y capacidad de respuesta de la app.
*/