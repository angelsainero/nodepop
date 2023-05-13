var express = require("express");
var router = express.Router();

//GET change Locale
router.get("/:locale", (req, res, next) => {
  const locale = req.params.locale;

  // poner una cookie en la respuesta que indique el nuevo locale al browser
  res.cookie("nodepop-locale", locale, {
    maxAge: 1000 * 60 * 60 * 24 * 30,
  });

  // responder con una redirección a la pagina de donde venia la petición
  res.redirect(req.get("referer"));
});

module.exports = router;
