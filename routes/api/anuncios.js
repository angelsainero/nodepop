const express = require("express");
const router = express.Router();
const Anuncio = require("../../models/Anuncio");




//  GET a /api/anuncios
router.get("/", async (req, res, next) => {
  try {
    //filtros
    const filtreByTag= req.query.tags;
    const filtreByType = req.query.venta;
    const filtreByPrice = req.query.precio;
    const filtreByName = req.query.nombre;
    //paginacion
    const skip = req.query.skip; 
    //ordenación
    const sort = req.query.sort
   

    // Ejemplos:
    // http://localhost:3001/api/anuncios?skip=2&sort=nombre
    // http://localhost:3001/api/anuncios?skip=2&sort=nombre&fields=nombre


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
    const anuncios = await Anuncio.lista(filtro, skip, sort);

    res.json({ results: anuncios });
  } catch (error) {
    next(error);
  }
});


module.exports = router;
