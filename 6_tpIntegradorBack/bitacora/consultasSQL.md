# Para que sirven los placeholders?
Los placeholders (`?`) previenen principalmente los ataques de SQL Injection (inyección SQL).

### ¿Qué es SQL Injection?

Es un ataque en el que un usuario malintencionado introduce código SQL en un campo de entrada para modificar la consulta original y acceder, alterar o eliminar información de la base de datos.

### Ejemplo sin placeholders (inseguro)

javascript

```
const sql = `SELECT * FROM products WHERE products.id = ${id}`;
const [rows] = await connection.query(sql);
```

Si un atacante proporciona como `id`:

sql

```
1 OR 1=1
```

La consulta resultante sería:

sql

```
SELECT * FROM products WHERE products.id = 1 OR 1=1
```

Como `1=1` siempre es verdadero, podría devolver todos los productos.

### Ejemplo con placeholders (seguro)

javascript

```
const sql = "SELECT * FROM products WHERE products.id = ?";
const [rows] = await connection.query(sql, [id]);
```

En este caso, el valor de `id` se envía separado de la estructura de la consulta SQL.

Si el atacante proporciona:

sql

```
1 OR 1=1
```

La base de datos lo interpreta como un valor, no como código SQL ejecutable.

### ¿Qué ventajas ofrecen los placeholders?

- Previenen SQL Injection: evitan que los datos ingresados se interpreten como instrucciones SQL.
- Separan datos de instrucciones: el usuario no puede modificar la estructura de la consulta mediante sus valores.
- Mejoran la seguridad: reducen el riesgo de accesos no autorizados y modificaciones maliciosas en la base de datos.
- Facilitan el mantenimiento: permiten reutilizar consultas con diferentes valores.

En resumen: los placeholders son una de las principales medidas de protección contra SQL Injection. Es una buena práctica utilizarlos siempre que se incorporen valores dinámicos en una consulta SQL.

Una aclaración importante: los placeholders protegen los valores, pero no sirven para parametrizar nombres de tablas o columnas (por ejemplo, `ORDER BY ?`). Esos elementos deben validarse mediante listas de valores permitidos.
