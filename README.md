# Caso Saturno

**Saturno Int.** la administración quiere mejorar sus medidas de seguridad para su edificio. Les gustaría impedir que personas ajenas a la empresa utilicen su aparcamiento.

Saturno Int. ha decidido expedir documentos de identidad a todos los empleados. Cada tarjeta registra el nombre, departamento y número de personal de una empresa, y les da acceso al aparcamiento de la empresa. Se les pide a los empleados que usen las tarjetas mientras están en el sitio.

Hay una barrera y un lector de tarjetas colocados en la entrada del aparcamiento. Cuando un conductor conduce su automóvil al estacionamiento, inserta su tarjeta de identidad en el lector de tarjetas. Luego, el lector de tarjetas verifica el número de tarjeta para ver si el sistema lo conoce. Si se reconoce el número, el lector envía una señal para activar la elevación de la barrera. A continuación, el conductor puede conducir su coche hasta el aparcamiento.

Hay otra barrera a la salida del parking, que se levanta automáticamente cuando un coche quiere salir del parking.

Un cartel en la entrada muestra "Lleno" cuando no hay plazas en el aparcamiento. Solo se apaga cuando sale un coche.

Existe otro tipo de tarjeta para invitados, que también permite el acceso al aparcamiento. La tarjeta registra un número y la fecha actual. Dichas tarjetas se pueden enviar por adelantado o recoger en recepción. Todas las tarjetas de invitados deben devolverse a la recepción cuando el visitante sale de Saturn Int.

## Entorno

Asegurarse de tener instalado `git` . Esto se puede revisar muy facilmente a trevez del comando `git --version` . En caso de no estar instalado, se puede hacer a travez de los siguientes paso

- En linux, a travez del comando `sudo apt install git`.
- En Windows, a travez de la pagina oficial https://git-scm.com/

Procurar tener actualizado `node.js` a la versión lts. Para saber si Node.js esta instalado en su sistema, abra una terminal y ejecute el siguiente comando `node --version`. El resultado debe ser la versión de node instalada. Si el comando no se encuentra o no se encuentra en la versión lts, se puede instalar Node.js mediante alguno de los siguientes pasos

- En windows, desde la [pagina oficial](https://nodejs.org/en/), descargando y ejecutando la versión `lts`.
- En Linux, a través de `nvm`.
    - Abrir una terminal y ejecutar alguno de los siguientes comando
      
        ```bash
        curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh) | bash
        ```
        
        ```bash
        wget -qO- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh) | bash
        ```
        
    - Cerrar la terminal y abrir otra para ejecutar el siguiente comando para verificar la correcta instalación`nvm --version` . Una vez observada la versión, ejecutar el siguiente comando para instalar Node.js
      
        ```bash
        nvm install --lts
        ```


## Instalación y ejecución

- 🛠Para instalar las dependencias ejecutar el siguiente comando `npm install`

- ⚒Para ejecutar el modo playground o repl, ejecutar el siguiente comando `npm run dev`

- 🔧Para traducir el código en `/src` a `JavaScript` , usar el comando `npm run build`

- 🔑Para ejecutar el código con `Node.js`, usar el comando `npm run start`

- 🧪Para ejecutar los test con jest, usar el comando `npm run test`

- 🧪Para ejecutar los test de covertura, usar el comando `npm run test:coverage`

## Características

- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [rpi-gpio](https://www.npmjs.com/package/rpi-gpio)
