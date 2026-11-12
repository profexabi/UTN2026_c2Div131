# Diccionario de conceptos basicos

## Que es un endpoint?
Un endpoint es una combinacion de tres cosas
- Una ruta
- Un verbo HTTP (o accion HTTP, sea GET, POST, PUT, DELETE)
- Una logica

Es la combinacion entre un verbo, una ruta y la logica al detectar esta peticion en esta ruta 

`GET`	+	`/posts`	+ logica para obtener posts
`GET`	+	`/posts/1`	+ logica para obtener post con id 1
`PUT`	+	`/posts`	+ logica para modificar un posteo


---

## Que son las APIs?
Las APIs son basicamente funciones y herramientas con las que podemos interactuar con algo. Es un concepto muy amplio y abstracto, por eso es tan complicado de definir

- APIs Web: Funciones y herramientas que el navegador nos entrega para interactuar con el navegador
- APIs de Sistema Operativo: En Android, por ejemplo, si queremos usar la vibracion, el GPS, las notificaciones, clipboard, etc. Android nos proporcionara estas funcionalidades, y para acceder a ellas, usaremos las APIs de Android

Otro tipo de APIs muy comunes en el desarrollo web son las APIs REST (Restful API)
Las APIs REST son un tipo de API que se caracteriza por ser basicamente un puente entre una pagina web y una BBDD.
Es la aplicacion servidor la que crea estos puentes a traves de los endpoints

Los endpoints son tal como dice el nombre, puntos finales de informacion, pueden ser puntos de entrada de datos (endpoint que atiendan peticiones POST, PUT, etc) o puntos de salida de datos (GET)

### Caracteristicas de REST
- Usamos el protocolo HTTP
- Usamos JSON
- Es stateless, es decir, sin estado (no tiene memoria entre peticiones, por eso necesitamos las cookies)

---

## Recordando como se comunican dos computadoras en internet
- La arquitectura cliente-servidor consiste en una computadora cliente que le hace peticiones a una computadora servidor (servidor como proceso o tambien servidor fisico)
- La comunicacion en internet se produce por 3 protocolos, IP, TCP, HTTP
- El protocolo HTTP define el formato de las peticiones que hace el cliente (HTTP Request) y el formato de las respuestas que le da el servidor (HTTP Response)

## Que son los middlewares?
- **Son funciones que se ejecutan entre la peticion y la respuesta**, concretamente despues de que la aplicacion reciba una peticion y antes de que procese una respuesta
- Por eso el `next()` es tan importante, porque da paso al siguiente middleware o a que se procese la respuesta. Pero la conexion HTTP no termina hasta que no procesa una respuesta

## MVC (Modelo Vista Controlador / Model View Controller)
- Es un patron de arquitectura de software muy utilizado para organizar el codigo y separar las responsabilidades de la logica pesada de nuestra app
- Su objetivo es mejorar la escalabilidad, mantenimiento y reutilizacion de codigo para no tener todo en un solo archivo
- Es basicamente una estructura u orden para de organizar nuestro codigo

---

# Que es refactorizar?
**Refactorizar** (o *refactoring*) es una técnica de ingeniería de software que consiste en **reestructurar el código fuente sin modificar su comportamiento externo**. El objetivo principal es mejorar la **legibilidad, mantenibilidad y claridad** del código, facilitando su lectura y futura modificación, sin añadir nuevas funcionalidades ni corregir errores específicos.

Durante este proceso, los desarrolladores aplican cambios pequeños y disciplinados, como:

*   Renombrar variables o métodos para mayor claridad.
*   Eliminar código duplicado o no utilizado.
*   Dividir funciones largas en bloques más pequeños.
*   Simplificar estructuras de control complejas.

La refactorización es fundamental para reducir la **deuda técnica** y asegurar que el software sea escalable y robusto a largo plazo, actuando como un "limpieza" interna que prepara el terreno para el desarrollo futuro.


---

# Que tipo de datos soporta JSON?
JSON soporta exactamente **seis tipos de datos**:

*   **Strings (Cadenas):** Secuencias de texto entre comillas dobles, permitiendo caracteres de escape.
*   **Numbers (Números):** Enteros o decimales (punto flotante), con o sin signo; **no** se usan comillas.
*   **Booleanos:** Valores lógicos estrictos: `true` o `false`.
*   **Null:** Representa un valor vacío o nulo explícito.
*   **Arrays (Arreglos):** Listas ordenadas de valores entre corchetes `[]`, que pueden contener cualquier tipo JSON válido.
*   **Objects (Objetos):** Colecciones de pares clave-valor entre llaves `{}`, donde las claves deben ser strings únicos.

Es crucial notar que JSON **no soporta** tipos avanzados como fechas, funciones o binarios nativos; estos deben representarse como **strings**. Además, valores como `undefined`, `NaN` o `Infinity` no son válidos en el formato estándar.


---


# Diferencia entre `affectedRows` y `changedRows`
La diferencia entre `affectedRows` y `changedRows` está en qué consideran una fila afectada por un UPDATE en MySQL.

Aunque parecen lo mismo, tienen comportamientos diferentes.

## 1. `affectedRows`

Indica cuántas filas coincidieron con la consulta y fueron afectadas por la operación.

En un `UPDATE`, MySQL normalmente cuenta las filas que realmente cambiaron, aunque este comportamiento puede variar según la configuración del cliente.

## 2. `changedRows`

Indica cuántas filas cambiaron realmente su contenido.

Es decir, si el nuevo valor es igual al valor que ya tenía la columna, esa fila no cuenta como modificada.

## 3. Ejemplo práctico

Imaginemos que tenemos este producto en nuestra base de datos:

js

```js
{
    id: 1,
    name: "Teclado",
    price: 100,
    category: "Perifericos"
}
```

Ahora hacemos un UPDATE:

sql

```sql
UPDATE products
SET name = 'Teclado',
    price = 100,
    category = 'Perifericos'
WHERE id = 1;
```

¿Qué ocurre?

La fila existe y coincide con el `WHERE`, pero no hemos cambiado ningún dato.

| Propiedad | Resultado |
| --- | --- |
| `affectedRows` | 1 |
| `changedRows` | 0 |

Ahora imaginemos que cambiamos el precio:

sql

```sql
UPDATE products
SET price = 150
WHERE id = 1;
```

| Propiedad | Resultado |
| --- | --- |
| `affectedRows` | 1 |
| `changedRows` | 1 |

## 4. ¿Qué deberías utilizar en tu endpoint?

En tu caso, tienes esto:

js

```js
if (result.changedRows === 0) {
    return res.status(404).json({
        message: "No se actualizo el producto"
    });
}
```

Hay un pequeño problema: estás mezclando dos situaciones diferentes:

- El producto no existe.
- El producto existe, pero el usuario envió exactamente los mismos datos.

Si utilizas `changedRows`, ambas situaciones pueden terminar devolviendo un `404`.

Mi recomendación es utilizar `affectedRows` para comprobar si el producto existe.

js

```js
if (result.affectedRows === 0) {
    return res.status(404).json({
        message: "Producto no encontrado"
    });
}
```

Así consigues lo siguiente:

- `affectedRows === 0`: no existe ningún producto con ese ID.
- `affectedRows === 1`: el producto existe, independientemente de si sus datos cambiaron.

Recomendación Para un endpoint REST `PUT`, esta segunda opción suele ser más apropiada: si el producto existe y la petición es válida, puedes responder `200 OK` aunque los datos sean idénticos.

Un detalle importante: si quieres saber si hubo cambios reales, utiliza `changedRows`. Si quieres saber si el registro existe y fue encontrado por el UPDATE, utiliza `affectedRows`.
