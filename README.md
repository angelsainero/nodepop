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

## Instalación Express
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

Instalación nodemon:

```sh
npm i nodemon
npm install --save express-validator
```

Creamos entorno de desarrollo editando el package.json y agregando en Scripts entrada: 

```sh
"dev": "cross-env DEBUG=nodepop:* PORT=3001 nodemon ./bin/www"
```

## Instalación Mongoose
```sh
npm i mongoose --save
```
## Generación de Script inicial DB
```sh
nodepop> npm run initDB
```

# Uso de la web y API

## WEBSITE
Acceso a la web 

http://localhost:3001/

Acceso a la web usando parámetros

http://localhost:3001/?sort=precio&nombre=Impresora


## API
Ejemplos consumo de API

http://localhost:3001/api/anuncios?skip=2&sort=nombre

http://localhost:3001/api/anuncios?skip=2&sort=nombre&tags=lifestyle


Creación de anuncios

http://localhost:3001/api/anuncios?nombre=Rolex&venta=true&precio=300&foto=rolex.jpg&tags=watch
