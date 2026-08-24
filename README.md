# Progra III Div131 2026 c2

## Practicar con Git
- Instalar [Git Bash](https://git-scm.com/install/windows)
- Repasar para las próximas clases los [apuntes de Git](https://drive.google.com/drive/u/1/folders/1T1LEYs_H-NACabUJcdTXjodw8il6ZDsf)

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

---

# Cronograma clases

## Clase 2
- Continuar desde HTML Forms y saltar a CSS
- Practica sugerida, armar todo el HTML de la pagina de [Google](https://about.google/intl/es_ALL/)

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