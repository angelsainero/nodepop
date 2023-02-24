const mongoose = require("mongoose");


const anuncioSchema = mongoose.Schema(
  {
    nombre: String,
    venta: String,
    precio: Number,
    foto: String,
    tags: [String]    
  },
  { collection: "anuncios" }
);

anuncioSchema.statics.lista = function(filtro, skip, sort){
  const query = Anuncio.find(filtro);
  query.skip(skip)  
  query.sort(sort)
  
 
  return query.exec()
}




const Anuncio = mongoose.model("Anuncios", anuncioSchema);  

module.exports = Anuncio;