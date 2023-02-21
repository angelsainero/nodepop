# NODEPOP
## _Práctica Web venta de artículos Node.js_ 

API desarrollada que se ejecutará en el servidor de un servicio de venta de artículos de segunda mano llamado Nodepop.


# Instalación
Inicialización Node PAckage manager

```sh
npm init
```

creamos .gitignore
```sh
node_modules
```

# Instalación Express
```sh
npx express-generator nodepop --ejs
```

Instalación de dependencias:
```sh
cd nodepop
nodepop> npm install
```

Instalación de módulo cross-env:

```sh
npm i cross-env
```

Creamos entorno de desarrollo editando el package.json y agregando en Scripts entrada: 

```sh
"dev": "cross-env DEBUG=nodepop:* npm start"
```

