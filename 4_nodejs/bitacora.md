# Que es el hipertexto en HTML y HTTP?
La palabra hipertexto aparece en HTML y HTTP, pero ambos tienen funciones diferentes. Vamos a verlo de forma sencilla.

## 1. ¿Qué significa hipertexto?

El hipertexto es un texto que contiene enlaces (links) que permiten ir a otra página, documento o sección con solo hacer clic.

Por ejemplo, si estás leyendo una página y aparece un texto azul que dice «Más información», al hacer clic podés abrir otra página. Eso es un enlace de hipertexto.

## 2. ¿Qué significa HTML?

HTML significa HyperText Markup Language, que en español es Lenguaje de Marcado de Hipertexto.

Es el lenguaje que se utiliza para estructurar el contenido de las páginas web, como títulos, párrafos, imágenes y enlaces.

Ejemplo de HTML:

HTMLAjustar líneasCopiar códigoVista previa

```
<h1>Mi página web</h1>
<p>Bienvenido a mi sitio.</p>
<a href="https://www.wikipedia.org">Visitar Wikipedia</a>
```

En este ejemplo:

- `<h1>` crea un título.
- `<p>` crea un párrafo.
- `<a>` crea un enlace que permite visitar otra página.

## 3. ¿Qué significa HTTP?

HTTP significa HyperText Transfer Protocol, que en español es Protocolo de Transferencia de Hipertexto.

Es un protocolo de comunicación que permite que un navegador, como Chrome, solicite páginas web a un servidor y que este le envíe una respuesta.

Por ejemplo, cuando escribís una dirección web en el navegador:

1. El navegador envía una solicitud HTTP al servidor.
2. El servidor responde enviando el contenido de la página, que normalmente incluye HTML.
3. El navegador interpreta el HTML y muestra la página en pantalla.

Actualmente también se utiliza HTTPS, una versión de HTTP que protege la comunicación mediante cifrado.

## 4. ¿Cuál es la diferencia entre HTML y HTTP?

| HTML | HTTP |
| --- | --- |
| Es un lenguaje de marcado. | Es un protocolo de comunicación. |
| Organiza el contenido de una página web. | Permite intercambiar información entre navegador y servidor. |
| Significa HyperText Markup Language. | Significa HyperText Transfer Protocol. |

Para recordarlo fácilmente:

- HTML = cómo se estructura una página web.
- HTTP = cómo se transmite esa página a través de la red.
- Hipertexto = texto que contiene enlaces para navegar entre documentos o páginas.

Por ejemplo, cuando abrís una página web, HTTP permite recibir el contenido y HTML indica cómo está organizado ese contenido.


---

# Protocolo TCP/IP
El protocolo TCP/IP es un conjunto de reglas que permite que los dispositivos, como computadoras, celulares y servidores, se comuniquen entre sí a través de una red, especialmente Internet.

TCP/IP significa Transmission Control Protocol / Internet Protocol (Protocolo de Control de Transmisión / Protocolo de Internet).

## ¿Cómo funciona TCP/IP?

Capa de Red y Capa de Transporte Modelo OSI LMV: TCP y UDP

[capasdesaia.blogspot.com](<https://capasdesaia.blogspot.com/2016/06/tcp-y-udp.html?utm_source=chatgpt.com>)

Funciona dividiendo la información en pequeños paquetes de datos, enviándolos por la red y reuniéndolos nuevamente en el dispositivo de destino.

Por ejemplo, cuando enviás un mensaje por Internet:

1. TCP divide los datos en partes y controla que lleguen correctamente y en orden cuando se utiliza una conexión TCP.
2. IP se encarga de identificar las direcciones de origen y destino y de dirigir los paquetes hacia el dispositivo correspondiente.
3. El dispositivo receptor recibe los datos y TCP los organiza para reconstruir la información original.

## ¿Qué función cumple cada protocolo?

TCP (Protocolo de Control de Transmisión)

Se ocupa de que los datos lleguen completos y ordenados, detecta pérdidas y retransmite los datos que sea necesario recuperar.

IP (Protocolo de Internet)

Se encarga del direccionamiento y del envío de paquetes desde el origen hasta el destino a través de las redes.

## ¿Cuáles son las capas del modelo TCP/IP?

El modelo TCP/IP suele dividirse en cuatro capas:

| Capa | Función | Ejemplo |
| --- | --- | --- |
| 4. Aplicación | Permite utilizar servicios de red. | HTTP, DNS, SMTP |
| 3. Transporte | Gestiona la comunicación entre aplicaciones. | TCP, UDP |
| 2. Internet | Direcciona y enruta los paquetes. | IP |
| 1. Acceso a la red | Transmite los datos por el medio físico o inalámbrico. | Ethernet, Wi-Fi |

## ¿Para qué sirve TCP/IP?

- Navegar por páginas web.
- Enviar y recibir correos electrónicos.
- Ver videos y escuchar música en línea.
- Compartir archivos entre dispositivos.
- Conectar computadoras y servidores de todo el mundo.

En resumen: TCP/IP es la base de la comunicación en Internet. IP indica adónde deben ir los datos y TCP ayuda a garantizar que lleguen correctamente y en orden. No obstante, no todas las comunicaciones usan TCP: algunas utilizan UDP, que prioriza la rapidez y no garantiza la entrega de cada paquete.
