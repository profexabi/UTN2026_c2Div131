# CSS

## Recursos
- [Gradient CSS](https://cssgradient.io/)
- [Ejemplos Box shadow](https://getcssscan.com/css-box-shadow-examples)

## Jueguitos para practicar
- [Flex froggy](https://flexboxfroggy.com/#es)
- [Grid garden](https://cssgridgarden.com/#es)

### [Guia de buenas practicas CSS](https://www.w3schools.com/css/css_performance.asp)
### [Guia de accesibilidad CSS](https://www.w3schools.com/css/css_accessibility.asp)

---


## [Guia de flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- Hay 2 direcciones, horizontal o vertical
```css
main {
    display: flex;
    /* Definimos la direccion principal `row` horizontal o `column` vertical */
    flex-direction: column; /* row es la que viene por defecto (no hace falta indicarla) */

    
    /* Eje principal que atiende a la direccion (horizontal o vertical) */
    justify-content: center; /* alinea horizontalmetne en el centro en row o verticalmente en column*/

    /* Alineamiento eje secundario */
    align-items: center;
}

/* Recordemos jugar con los tamaños de los contenedores padre y los subcontenedores y juguemos con eso */
```

---

## Combinadores
Los combinadores son caracteres que permiten seleccionar elementos en funcion de su relacion con otros elementos en el [DOM](https://www.w3schools.com/whatis/whatis_htmldom.asp)

1. **Combinador descendiente (` `)**: Selecciona todos los elementos que son descendientes de un elemento padre, sin importar que tan profundo esten.

```css
div p {
    color: blue;
}
```

---


2. **Combinador de hijo directo (`>`)**: Selecciona solo los elementos que son hijos inmediatos de un elemento padre

```css
div > p {
    color: red;
}
```


---

## Pseudoclases
Las psedoclases son palabras clave que se añaden a los selectores para especificar un estado especial de un elemento. Permiten aplicar estilos bajo ciertas condicioes o estados, por ejemplo, interactuando con un enlace, cuando un formulario esta siendo validado o para seleccionar el primer o ultimo elemento de un contenedor

### Pseudoclase de interaccion de usuario
- **`:hover`: Se activa cuando el usuario pasa el cursor sobre un elemento**. Este es el más importante y el que más usamos cotidianamente

```css
button:hover {
    background-color: blue;
}
```

---

- `:active`: Se aplica cuando el usuario esta haciendo click en un elemento, como un boton o enlace

```css
a:active {
    background-color: yellow;
    color: black;
}
```

---

- `:focus`: Se activa cuando un elemento input esta en foco y se puede interactuar con el

```css
input:focus {
    border-color: red;
}
```

---


- `:visited`: Se aplica a enlaces `<a>` que hayan sido previamente visitados

```css
a:visited {
    color: yellow;
}
```

---

### Pseudoclases de estado estructural
Nos permiten seleccionar elementos en funcion de su ubicacion dentro de su contenedor padre

- `:nth-child`: Se aplica para elementos pares o impares. Principalmente en tablas HTML
```css
/* Estilo para todas las filas pares */
tr:nth-child(even){
    background-color: #f2f2f2;
}

/* Estilo para todas las filas impares */
tr:nth-child(odd){
    background-color: #2f2f2f;
}
```

---

### Combinacion de pseudoclases
```css
a:visited:hover {
    color: orange;
}
```


---


## Unidades absolutas y relativas en CSS
Las unidades de medida las usamos para definir el tamaño, espacio, márgenes, bordes, fuentes y otros aspectos visuales de los elementos. Pueden ser absolutas o relativas dependiendo de si el tamaño es fijo o se ajusta al tamaño de la ventana o del elemento padre

---


### Unidades absolutas
1. `px (pixel)`: La unidad más común en el diseño web. Es una medida fija que representa un sólo punto en la pantalla. Se usa principalmente para tamaños de fuente, márgenes, bordes, etc.

```css
p {
    font-size: 18px;
}
```

---


### Unidades relativas
1. `em`: Es una unidad relativa al tamaño de la fuente del elemento padre. Si un elemento tiene una fuente de 16px, 1em sera 16px. Comun para fuentes y espacios.


```css
p {
    font-size: 1.5em; /* 1.5 veces el tamaño de la fuente del elemento padre */
}
```

---


2. `rem`: Similar al `em` pero siempre se refiere al tamaño de fuente del elemento raiz `<html>`, en lugar del tamaño de fuente del elemento padre. Favorecido en diseños responsivos porque se mantiene consistente.


```css
p {
    font-size: 2rem; /* 2 veces el tamaño de la fuente raiz */
}
```

---

3. `%` (porcentajes): Se calculan en relacion con el tamaño del contenedor padre. Muy usado para ajustar el ancho de elementos en diseños flexibles

```css
div {
    width: 50%; /* 50% del ancho del contenedor padre */
}
```

---

4. `vw` (viewport width): Representa el 1% del ancho de la ventana grafica (viewport). Por ejemplo, si el viewport tiene 1000px de ancho, 1vw sera igual a 10px. Se usa para hacer que los elementos escalen en funcion del ancho de la ventana.

```css
div {
    width: 50vw; /* 50% del ancho de la ventana */
}
```

---

5. `vh` (viewport height): Similar a `vw` pero basado en el alto de la ventana grafica. 1vh es igual al 1% de la altura de la ventana

```css
div {
    height: 100vh; /* Ocupa el 100% de la altura de la ventana */
}
```




---

## Iconos
- [Freeicons](https://www.freeicons.org/)

---

## Fuentes
- [Fuentes web safe](https://www.w3schools.com/cssref/css_websafe_fonts.php)

### Sobre la fuente Montserrat
- [Articulo La Gaceta](https://www.lagaceta.com.ar/nota/1053986/sociedad/disenadora-argentina-detras-tipografia-mas-famosa-habla-sobre-frustracion.html)
- [Articulo La Nacion](https://www.lanacion.com.ar/tecnologia/montserrat-es-argentina-y-es-la-tipografia-del-ano-creada-por-julieta-ulanovsky-nid17012024/)

### Que fuente usar?
- **Montserrat-VariableFont_wght.ttf** → es la opción que elegiría en general. Es una fuente variable, así que un solo archivo contiene múltiples pesos (Light, Regular, Medium, Bold, etc.). Es especialmente conveniente para diseño web y programas que soporten fuentes variables.

- **Las de la carpeta static** → son archivos individuales, por ejemplo Montserrat-Regular.ttf, Montserrat-Bold.ttf, etc. Convienen si el programa donde la vas a instalar no maneja bien fuentes variables.

---

### Que es un archivo `ttf`?
Un archivo .ttf es un archivo de fuente tipográfica. TTF significa TrueType Font.

En términos simples, el archivo contiene toda la información necesaria para que tu computadora sepa cómo dibujar las letras de una tipografía.

Por ejemplo, Montserrat-VariableFont_wght.ttf contiene:

🔤 Las formas de las letras: A, B, C, á, ñ, etc.
🔢 Números y símbolos.
📐 Información sobre el tamaño, espaciado y posición de los caracteres.
⚖️ En el caso de una fuente variable, información que permite modificar características como el peso (Light → Regular → Bold, etc.) sin necesitar un archivo separado para cada peso.
🌍 Diferentes caracteres y alfabetos que la fuente soporte.
¿Qué pasa cuando instalás un TTF?

Cuando hacés doble clic en:

Montserrat-VariableFont_wght.ttf

y elegís Instalar, Windows/macOS incorpora esa fuente a su sistema. Después programas como Word, Photoshop, Illustrator, etc. pueden utilizarla.

Es parecido a instalar un programa, pero mucho más sencillo: el TTF es básicamente el "paquete" que contiene la tipografía.

¿Y por qué hay tantos archivos?

Por ejemplo, en static podrías encontrar:

Montserrat-Light.ttf
Montserrat-Regular.ttf
Montserrat-Medium.ttf
Montserrat-SemiBold.ttf
Montserrat-Bold.ttf
Montserrat-ExtraBold.ttf


Cada archivo contiene una versión diferente de Montserrat.

En cambio:

Montserrat-VariableFont_wght.ttf


puede contener todos esos pesos dentro de un único archivo variable.

Por eso, si tu programa es compatible con fuentes variables, ese archivo es muy práctico.