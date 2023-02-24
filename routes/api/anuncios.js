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

//  GET a /api/anuncios/tags
router.get("/tags", async (req, res, next) => {
  try {
    
    const tags = await Anuncio.distinct('tags');

    res.json(tags);
  } catch (error) {
    next(error);
  }
});

// Ejemplos:
// http://localhost:3001/api/anuncios/tags


// POST /api/anuncios (body)
// Crea un anuncio
router.post("/", async (req, res, next) => {
  try {
    const anuncioData = req.body;
    
    const anuncio = new Anuncio(anuncioData);
      
    const anuncioGuardado = await anuncio.save();
    
    res.json({ result: anuncioGuardado });

  } catch (error) {
    next(error);
  }
});

// http://localhost:3001/api/anuncios?nombre=Rolex&venta=true&precio=300&foto=rolex.jpg&tags=watch

module.exports = router;
