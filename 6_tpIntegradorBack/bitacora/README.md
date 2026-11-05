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