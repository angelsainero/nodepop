const jwt = require("jsonwebtoken");
const createError = require("http-errors");

// modulo que exporta un middleware
module.exports = (req, res, next) => {
  try {
    //recoge el jwtToken de cabecera, o del body o de la querystring

    const jwtToken = req.get("Authorization") || req.body.jwt || req.query.jwt;

    //comprobar que me han mandado un jwtToken
    if (!jwtToken) {
      const error = createError(401, "No token provided");
      next(error);
      return;
    }
    //si me lo han mandado, comprobar que es válido
    const payload = jwt.verify(jwtToken, process.env.JWT_SECRET);
    req.usuaurioLogado = payload._id;
    next();
  } catch (err) {
    if (err.message === "invalid signature") {
      next(createError(401, "Invalid Token"));
      return;
    }
    next(err);
  }
};
