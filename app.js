var express = require('express');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./middlewares/cors"));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(require("./middlewares/handleError"));
app.use(require("./middlewares/handleNotFoundError"));

module.exports = app;
