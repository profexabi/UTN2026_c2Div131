# Características de las APIs REST y diferencias con otros tipos de APIs

## 1. ¿Qué es una API REST?

Una API REST (Representational State Transfer) es una interfaz de programación que permite que dos sistemas o aplicaciones se comuniquen e intercambien información a través de una red, generalmente Internet.

Se basa en el protocolo HTTP y permite realizar operaciones sobre recursos, como usuarios, productos, pedidos o publicaciones.

Por ejemplo, una aplicación de una tienda online puede utilizar una API REST para:

- Consultar los productos disponibles.
- Registrar un nuevo usuario.
- Modificar los datos de un producto.
- Eliminar un pedido.

## 2. Características principales de las APIs REST

1. Utilizan el protocolo HTTP

Se comunican mediante métodos HTTP como GET, POST, PUT, PATCH y DELETE.

2. Están orientadas a recursos

Cada recurso se identifica mediante una URL o endpoint. Por ejemplo: `/usuarios/15`.

3. Comunicación cliente-servidor

El cliente realiza una solicitud y el servidor devuelve una respuesta. Ambos funcionan de manera independiente.

4. No mantienen estado (Stateless)

Cada solicitud debe contener toda la información necesaria para ser procesada. El servidor no necesita recordar solicitudes anteriores del cliente.

5. Intercambio de datos

Generalmente utilizan JSON para enviar y recibir información, aunque también pueden trabajar con XML y otros formatos.

6. Arquitectura en capas

Pueden existir intermediarios entre el cliente y el servidor, como proxies, balanceadores de carga y sistemas de seguridad.

7. Caché

Las respuestas pueden almacenarse temporalmente para evitar solicitudes innecesarias y mejorar el rendimiento.

## 3. Métodos HTTP utilizados por REST

| Método | Función | Ejemplo |
| --- | --- | --- |
| GET | Consultar información | Obtener usuarios |
| POST | Crear información | Registrar un usuario |
| PUT | Reemplazar un recurso | Actualizar un usuario completo |
| PATCH | Modificar parcialmente | Cambiar el email |
| DELETE | Eliminar información | Borrar un usuario |

## 4. ¿En qué se diferencian las APIs REST de otros tipos de APIs?

Existen diferentes estilos y tecnologías para desarrollar APIs. Los más conocidos son REST, SOAP, GraphQL y gRPC.

REST

ArquitecturaČo je REST API a ako funguje? Sprievodca pre začiatočníkov | Skillmea

[skillmea.sk](<https://skillmea.sk/blog/co-je-rest-api?utm_source=chatgpt.com>)

- Utiliza HTTP.
- Trabaja con recursos y endpoints.
- Generalmente intercambia JSON.
- Es sencilla y flexible.

SOAP

ProtocoloSoap vs rest | PPTX

[slideshare.net](<https://www.slideshare.net/slideshow/soap-vs-rest-11864837/11864837?utm_source=chatgpt.com>)

- Es un protocolo de comunicación.
- Utiliza principalmente XML.
- Tiene reglas y estructuras más estrictas.
- Ofrece estándares avanzados de seguridad y transacciones.

GraphQL

Lenguaje de consultaDeep dive into GraphQL: Benefits and applications

[educative.io](<https://www.educative.io/blog/graphql-benefits-and-applications?utm_source=chatgpt.com>)

- Permite solicitar exactamente los datos necesarios.
- Generalmente utiliza un único endpoint.
- Reduce la obtención de datos innecesarios.
- El cliente define qué información necesita.

gRPC

Framework RPCBuilding Your First High-Performance gRPC Server in C#-A Developer’s Complete Guide | by Bhargava Koya - Fullstack .NET Developer | Medium

[medium.com](<https://medium.com/%40bhargavkoya56/building-your-first-high-performance-grpc-server-in-c-a-developers-complete-guide-56c5582cc058?utm_source=chatgpt.com>)

- Utiliza HTTP/2 habitualmente.
- Emplea Protocol Buffers para serializar datos.
- Tiene un alto rendimiento.
- Es muy utilizado en comunicación entre microservicios.

### Cuadro comparativo

| Característica | REST | SOAP | GraphQL | gRPC |
| --- | --- | --- | --- | --- |
| Tipo | Arquitectura | Protocolo | Lenguaje de consulta | Framework RPC |
| Comunicación | HTTP | Varios protocolos | Generalmente HTTP | HTTP/2 |
| Formato | JSON, XML, etc. | XML | JSON habitualmente | Protocol Buffers |
| Flexibilidad | Alta | Más estricta | Muy alta | Alta |
| Rendimiento | Bueno | Variable | Bueno | Muy alto |
| Uso habitual | Aplicaciones web | Sistemas empresariales | Aplicaciones con datos complejos | Microservicios |

## 5. Ejemplo práctico de una API REST

Imaginemos una aplicación que administra usuarios.

Si queremos consultar el usuario con ID 15, realizamos una solicitud:

Solicitud:

http

```http
GET https://miapi.com/usuarios/15
```

Respuesta del servidor:

json

```json
{
  "id": 15,
  "nombre": "Juan",
  "email": "juan@gmail.com"
}
```

Esto significa que el cliente solicita información al servidor y este devuelve los datos del usuario en formato JSON.

## 6. Ventajas y desventajas de REST

Ventajas:

- Es fácil de implementar y comprender.
- Es compatible con muchos lenguajes de programación.
- Permite integrar diferentes sistemas.
- Es flexible y escalable.
- Aprovecha los estándares de HTTP.

Desventajas:

- Puede devolver más información de la necesaria.
- Puede requerir varias solicitudes para obtener datos relacionados.
- Es necesario diseñar correctamente los endpoints.
- No es necesariamente la mejor opción para comunicaciones de muy baja latencia.

## 7\. Conclusión

La principal diferencia de las APIs REST respecto de otras APIs es que siguen un estilo arquitectónico basado en recursos, utilizan los métodos HTTP y mantienen una comunicación sin estado (stateless).

REST se destaca por su simplicidad, flexibilidad y facilidad de integración, por lo que es una de las alternativas más utilizadas para desarrollar aplicaciones web, móviles y sistemas distribuidos.

Una forma sencilla de recordar las diferencias:

- REST: trabaja con recursos.
- SOAP: trabaja con mensajes estructurados XML.
- GraphQL: permite consultar los datos específicos que necesitamos.
- gRPC: permite comunicación eficiente mediante llamadas a procedimientos remotos.
