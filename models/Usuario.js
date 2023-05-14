const mongoose = require("mongoose");

//crear esquema
const usuarioSchema = mongoose.Schema({
  email: String,
  password: String,
});

//crear modelo
const Usuario = mongoose.model("Usuario", usuarioSchema);

//exportar modelo
module.exports = Usuario;
