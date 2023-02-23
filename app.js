var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./lib/connectMongoose');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('x-powered-by', false);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.locals.title = 'NodePop';

app.use('/api/anuncios', require('./routes/api/anuncios'))
app.use("/", require("./routes/home"));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
 if (err.array) {
  const errorInfo = err.errors[0];
    err.message = `Error en ${errorInfo.location}, parametro ${errorInfo.param}, ${errorInfo.msg}`
    err.status=422
 }


  // render the error page
  res.status(err.status || 500);

  if (req.originalUrl.startsWith('/api/')){
    res.json({error: err.message})
    return;
  }

  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.render("error");

});

module.exports = app;
