const mongoose = require("mongoose");


const anuncioSchema = mongoose.Schema(
  {
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]    
  },
  { collection: "anuncios" }
);

anuncioSchema.statics.lista = function(filtro, skip, limit, sort, fields){
  const query = Anuncio.find(filtro);
  query.skip(skip)
  query.limit(limit)
  query.sort(sort)
  query.select(fields) 

 
  return query.exec()
}




const Anuncio = mongoose.model("Anuncio", anuncioSchema);  

module.exports = Anuncio;