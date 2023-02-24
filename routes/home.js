var express = require("express");
var router = express.Router();
const Anuncio = require("../models/Anuncio");

/* GET home page. */
//http://localhost:3001/?sort=precio&nombre=Impresora
router.get("/", async function (req, res, next) {
  try {    
    const skip = req.query.skip;
    const limit = req.query.limit;
    const sort = req.query.sort
    const filtreByTag= req.query.tags;
    const filtreByType = req.query.venta;
    const filtreByPrice = req.query.precio;
    const filtreByName = req.query.nombre;

    const filtro = {}

    if (filtreByTag) {  
      filtro.tags = filtreByTag
    }
        
    if (filtreByType) {  
        filtro.venta = filtreByType
    }

    if (filtreByPrice) {  
        filtro.precio = filtreByPrice
      }
      
    if (filtreByName) {  
      filtro.nombre = filtreByName
    }
 
    
    const anuncios = await Anuncio.find(filtro)
    .skip(skip)
    .limit(limit)
    .sort(sort)
    
    res.locals.anuncios = anuncios;
    res.render("index");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
