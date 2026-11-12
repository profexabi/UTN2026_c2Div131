En Express.js, `Router` es una funcionalidad que permite crear módulos de rutas independientes para organizar mejor los endpoints de una aplicación.

Se utiliza para separar las rutas según su responsabilidad o recurso, evitando concentrar todas las rutas en un único archivo.

### 1. ¿Cómo funciona?

`Router` permite definir rutas y asociarles métodos HTTP, controladores y middlewares, como si fuera una pequeña aplicación Express independiente.

### 2. Ejemplo práctico

users.routes.js

javascript

```javascript
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'Lista de usuarios' });
});

router.get('/:id', (req, res) => {
    res.json({ message: `Usuario ${req.params.id}` });
});

export default router;
```

app.js

javascript

```javascript
import express from 'express';
import usersRouter from './routes/users.routes.js';

const app = express();

app.use('/api/users', usersRouter);

export default app;
```

### 3. ¿Qué resultado obtenemos?

| Método | Endpoint | Función |
| --- | --- | --- |
| GET | `/api/users` | Obtener todos los usuarios |
| GET | `/api/users/15` | Obtener el usuario con ID 15 |

### 4. Ventajas de utilizar Router

- Organización: permite separar las rutas por módulos.
- Reutilización: permite reutilizar routers en diferentes partes de la aplicación.
- Mantenimiento: facilita modificar y mantener los endpoints.
- Escalabilidad: permite agregar nuevas funcionalidades sin sobrecargar el archivo principal.
- Middlewares: permite aplicar middlewares a todas las rutas de un módulo o a rutas específicas.

En conclusión: `Router` es una herramienta de Express.js que permite modularizar y organizar las rutas de una API, haciendo que el código sea más limpio, mantenible y escalable.

Importante: `Router` no es exactamente un middleware, sino un objeto que funciona como un sistema de enrutamiento modular y que puede utilizarse como middleware dentro de una aplicación Express.
