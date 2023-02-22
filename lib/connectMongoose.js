const mongoose = require('mongoose');
//eliminamos warning
mongoose.set('strictQuery', false)

//como mongoose.connection emite eventos , me suscribo.... 
mongoose.connection.on('error', err => {
    console.log('Error de connexión', err);
})

mongoose.connection.once('open', () => {
    console.log ('Conectado a MongoDB en', mongoose.connection.name)
})

mongoose.connect('mongodb://127.0.0.1:27017/nodepop');

module.exports = mongoose.connection;