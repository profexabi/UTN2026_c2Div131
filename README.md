# Progra III Div131 2026 c2


---

# Cronograma clases

## Prox clase
- Arrancar con JavaScript I y II
- Full practica de maquetacion, [continuar con pagina google
](https://onlinegdb.com/5Mhyci5KXO)

---

## Practicas sugeridas
- [Practica sugerida, crear un menu dropdown](https://www.w3schools.com/css/css_dropdowns.asp)
    - [Practicar `display:none`](https://www.w3schools.com/css/css_display.asp)

- [Crear `<header>` fijos posicionando con absolute, fixed o sticky](https://www.w3schools.com/css/css_position.asp)

---


## Clase 1
- HTML hasta X
- **Recordatorio: TODAS las etiquetas en linea iran siempre dentro de etiquetas en bloque. [Leccion W3 Schools](https://www.w3schools.com/html/html_formatting.asp)**
- Practica sugerida
    - Hacer una receta de su plato favorito usando las etiquetas HTML que vimos en clase
    - [Ej de receta](https://comedera.com/receta-de-chipa-pan-paraguayo/)

- Repasar Git

- Proxima clase, repasar dudas hasta elementos en bloque y en linea.
- Continuamos desde HTML tables, listas y contenedores

## Practicar con Git
- Instalar [Git Bash](https://git-scm.com/install/windows)
- Repasar para las próximas clases los [apuntes de Git](https://drive.google.com/drive/u/1/folders/1T1LEYs_H-NACabUJcdTXjodw8il6ZDsf)



---

## Refresh de la cache en el navegador
Muy util para cuando el navegador no este mostrando los ultimos cambios

Para **refrescar la caché** de un navegador web y cargar la versión más reciente de una página, utiliza los siguientes atajos de teclado según tu sistema operativo y navegador:

### En Windows y Linux
*   **Google Chrome, Microsoft Edge, Firefox, Internet Explorer:** Presiona **Ctrl + F5** o mantén presionada la tecla **Ctrl** y haz clic en el botón de recargar.
*   **Firefox (alternativa):** Presiona **Ctrl + Shift + R**.

### En Mac (macOS)
*   **Google Chrome, Firefox:** Presiona **Cmd + Shift + R** o mantén presionada la tecla **Shift** y haz clic en recargar.
*   **Safari:** Presiona **Cmd + Option + E** para vaciar los cachés, o **Cmd + R** para recargar.
*   **Edge:** Presiona **Cmd + Shift + R**.

### Métodos Adicionales
*   **Herramientas de Desarrollo:** Abre el menú contextual (clic derecho) sobre el botón de recargar con las herramientas de desarrollo abiertas (F12) para seleccionar **"Vaciar caché y recargar completamente"**.
*   **Borrado Completo:** Para eliminar todos los datos en caché del navegador, usa **Ctrl + Shift + Delete** (o **Cmd + Shift + Delete** en Mac) y selecciona "Imágenes y archivos en caché".


---

### Guia rapida Git
1. Abrimos la consola de VSCode `Ctrl + j`
2. Elegimos la terminal en el menu `Git Bash`
3. Practicamos con los comandos esenciales de Git
    - (Para la primera vez) Creamos un repo en github y le damos a clone
```sh
git clone https://github.com/profexabi/UTN2026_c2Div131.git
```

- (Siempre antes de trabajar)
```sh
# Traemos los ultimos cambios
git pull

# Comprobamos que no tenemos cambios sin guardar
git status
```

- Hacemos los cambios pertinentes en nuestro repo, y una vez que terminamos
```sh
# Comprobamos el estado
git status

# Para guardar todo
git add .

# Registramos los cambios guardados con un mensaje
git commit -m "Hecho cambio x, ble"

# Ya con los cambios registrados, enviamos este codigo a nuestro repo
git push origin main
```

