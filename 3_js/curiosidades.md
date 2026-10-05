# [Play!.js](https://playjs.purei.org/)
**Play!.js** es el principal emulador de PlayStation 2 que funciona en navegadores web, siendo una versión de **Play!** (creado por Jean-Philippe Desjardins) compilada a JavaScript y WebAssembly. Este emulador web permite ejecutar archivos de juegos directamente en **Chrome** o **Firefox** sin necesidad de instalar software adicional ni configurar archivos BIOS, ya que incluye una BIOS integrada.

Aunque es una herramienta técnica notable que funciona en PC, Android e iOS (usando Safari para soporte JIT), presenta limitaciones importantes:
*   **Compatibilidad:** Solo alrededor de 400 títulos son jugables, con otros 1,200 en diversos estados de compatibilidad.
*   **Rendimiento:** Los juegos suelen ejecutarse a velocidades lentas o inestables debido a la sobrecarga de la emulación en JavaScript.
*   **Controles:** Actualmente carece de soporte nativo para mandos, requiriendo el uso del teclado.

Además de la emulación, existe **AthenaEnv**, un entorno de ejecución de JavaScript para el desarrollo de juegos nativos en la PS2, que permite crear aplicaciones usando un motor basado en **QuickJS** para ejecutar código JS en la consola o emuladores como PCSX2.