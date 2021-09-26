1. Archivos SCSS se compilan a: `public/css`

2. Archivos Pug se compilan únicamente los de la carpeta `pug/pages` a `public`

Para poder apreciar la página en un entorno de desarrollo:

- Instalar *@web/dev-server* (tener NPM instalado): `npm install -g @web/dev-server`

- Abrir la consola en la carpeta raíz

- Ejecutar: `web-dev-server -w -r public`