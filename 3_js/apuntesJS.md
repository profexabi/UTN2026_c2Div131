# Entendiendo `Map`
Tiene sentido **si querés usar distintos tipos de valores como claves**. La particularidad de `Map` en JavaScript es que sus claves **no tienen que ser strings**.

 En tu ejemplo:

```
const mapa = new Map();

mapa.set(123, "ID");
mapa.set(true, "activo");
```

 estás creando dos asociaciones:

```
123  → "ID"
true → "activo"
```

 Y después podés hacer:

```
mapa.get(123);  // "ID"
mapa.get(true); // "activo"
```

 ### ¿Por qué no un objeto?

 Con un objeto:

```
const obj = {};

obj[123] = "ID";
obj[true] = "activo";
```

 JavaScript convierte esas claves a strings:

```
obj["123"];
obj["true"];
```

 En cambio, `Map` **conserva el tipo de la clave**:

```
mapa.get(123);   // busca la clave número 123
mapa.get("123"); // busca otra clave distinta → undefined
```

 También podés usar objetos como claves:

```
const usuario = { nombre: "Juan" };

const mapa = new Map();

mapa.set(usuario, "administrador");

mapa.get(usuario); // "administrador"
```

 Eso es algo que un objeto común no hace de la misma manera.

 ### Pero tu ejemplo concreto...

 Si solamente tenés:

```
mapa.set(123, "ID");
mapa.set(true, "activo");
```

 no hay una ventaja particularmente útil: es más bien un ejemplo para mostrar que **`Map` permite claves de distintos tipos**.

 Un caso más realista sería:

```
const usuarios = new Map();

usuarios.set(123, { nombre: "Juan" });
usuarios.set(456, { nombre: "Ana" });

usuarios.get(123);
// { nombre: "Juan" }
```

 Ahí `Map` tiene bastante más sentido: usás el ID numérico como clave y recuperás rápidamente la información asociada.

---

# `JavaScript` vs `TypeScript`
typescript vs javascript

**TypeScript** es un superconjunto tipado estáticamente de **JavaScript** que añade seguridad de tipos y herramientas avanzadas, mientras que **JavaScript** es un lenguaje dinámico interpretado directamente por el navegador. La diferencia principal radica en **cuándo se detectan los errores**: TypeScript los captura en tiempo de compilación, mientras que JavaScript lo hace en tiempo de ejecución.

### Comparativa Clave

| Característica | JavaScript | TypeScript |
| :--- | :--- | :--- |
| **Tipado** | Dinámico | Estático (opcional) |
| **Detección de Errores** | Tiempo de ejecución | Tiempo de compilación |
| **Rendimiento** | Nativo | Identico en ejecución (se compila a JS) |
| **Curva de Aprendizaje** | Baja | Más alta (requiere aprender tipos) |
| **Ideal Para** | Prototipos rápidos, scripts pequeños | Aplicaciones grandes, mantenimiento a largo plazo |

**Recomendación de uso:**
*   Elige **JavaScript** para proyectos pequeños, scripts simples o cuando la velocidad de desarrollo inicial es prioritaria sobre la escalabilidad.
*   Elige **TypeScript** para aplicaciones empresariales, equipos grandes o proyectos que requieren mantenimiento prolongado, ya que facilita el **refactorizado seguro** y mejora la **autocompletación** y documentación del código.

**Nota importante:** TypeScript no reemplaza a JavaScript; se compila en JavaScript estándar. Por ello, se recomienda aprender primero los fundamentos de **JavaScript** antes de pasar a TypeScript.


---



# Valores `truthy` y `falsy` en JavaScript
En JavaScript, un valor **falsy** es aquel que se evalúa como `false` en un contexto booleano (`if`, `||`, `&&`, etc.). Solo existen **7 valores falsy**:

| Valor | Tipo |
|---|---|
| `false` | boolean |
| `0`, `-0`, `0n` | number / bigint |
| `""` (cadena vacía) | string |
| `null` | object (especial) |
| `undefined` | undefined |
| `NaN` | number |

**Todo lo demás es truthy**, incluyendo:

- `"0"`, `"false"` (strings no vacías)
- `[]`, `{}` (arrays y objetos, incluso vacíos)
- `function(){}`, `true`, `Infinity`, `-Infinity`

```javascript
// Falsy
Boolean(false);     // false
Boolean(0);         // false
Boolean(-0);        // false
Boolean(0n);        // false
Boolean("");        // false
Boolean(null);      // false
Boolean(undefined); // false
Boolean(NaN);       // false

// Truthy (sorpresas comunes)
Boolean("0");       // true  ← string, no número
Boolean("false");   // true  ← string, no boolean
Boolean([]);        // true  ← array vacío
Boolean({});        // true  ← objeto vacío
Boolean(() => {});  // true  ← función
```

La clave: memoriza la lista corta de **falsy** y todo lo que no esté ahí es **truthy**.

