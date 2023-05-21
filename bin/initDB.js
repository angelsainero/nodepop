"use strict";
require('dotenv').config();

const Anuncio = require('../models/Anuncio')
const Usuario = require('../models/Usuario')

const connection = require("../lib/connectMongoose");

main().catch((err) => console.log("Hubo un error", err));

async function main() {
  await initAnuncios();
  await initUsuarios();
  connection.close();
}

async function initAnuncios() {
  const deleted = await Anuncio.deleteMany();  

  const inserted = await Anuncio.insertMany([
    {
      nombre: "Bicicleta",
      venta: true,
      precio: 230,
      foto: "http://localhost:3001/images/bici.jpg",
      tags: ["lifestyle", "motor"],
    },
    {
      nombre: "Iphone 3gs",
      venta: false,
      precio: 49,
      foto: "http://localhost:3001/images/iphone.jpg",
      tags: ["lifestyle", "mobile"],
    },
    {
      nombre: "Rolex",
      venta: true,
      precio: 299,
      foto: "http://localhost:3001/images/rolex.jpg",
      tags: ["lifestyle"],
    },
    {
      nombre: "Impresora",
      venta: false,
      precio: 99,
      foto: "http://localhost:3001/images/impresora.jpg",
      tags: ["computer"],
    },
  ]);

}

async function initUsuarios() {
  //borrar todos los docs usuarios
  const deleted = await Usuario.deleteMany();
  console.log(`Eliminados ${deleted.deletedCount} usuarios.`);
  //crear usuarios iniciales
  const inserted = await Usuario.insertMany([    
    { email: "user@example.com", password: await Usuario.hashPassword('1234') },
  ]);
  console.log(`Creados ${inserted.length} usuarios`);
}
