const mongoose = require("mongoose");


const anuncioSchema = mongoose.Schema(
  {
    nombre: String,
    venta: String,
    precio: Number,
    foto: String,
    tags: {type: String}
  },
  { collection: "anuncios" }
);

// crear el modelo de Agente
const Anuncio = mongoose.model("Anuncios", anuncioSchema);  //lleva pluralizacion

//exportar el modelo
module.exports = Anuncio;