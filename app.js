var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const i18n = require("./lib/i18nConfigure.js");
const LoginController = require("./controllers/loginController.js");
const jwtAuthMiddleware = require('./lib/jwtAuthMiddleware.js')

require('dotenv').config()

require("./lib/connectMongoose");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("x-powered-by", false);

app.locals.title = "NodePop";

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const loginController = new LoginController();

//rutas del api
app.use("/api/anuncios", jwtAuthMiddleware, require("./routes/api/anuncios"));
app.post("/api/authenticate", loginController.postAPI);

app.use(i18n.init);
app.use("/", require("./routes/home"));
app.use("/change-locale", require("./routes/change-locale"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  if (err.array) {
    const errorInfo = err.errors[0];
    err.message = `Error en ${errorInfo.location}, parametro ${errorInfo.param}, ${errorInfo.msg}`;
    err.status = 422;
  }

  // render the error page
  res.status(err.status || 500);

  if (req.originalUrl.startsWith("/api/")) {
    res.json({ error: err.message });
    return;
  }

  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.render("error");
});

module.exports = app;
