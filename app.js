var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mustacheExpress = require('mustache-express');
var matchedData = require('express-validator').matchedData;
var rules = require('./config/rules');
var colors = require('./config/colors');

var app = express();
var router = express.Router();

router.get('/', rules, function(req, res, next) {
  const data = matchedData(req, {
      locations:     ['query']
  });

  // if we have arguments, make an overlay
  if (Object.keys(data).length > 0) {
    res.render('overlay', {
      shouldFs:      data.fullscreen ? data.fullscreen : false,
      title:         'Cloak // livestream overlays on a whim',
      text:          data.text,
      textSize:      data.scale > 0 ? data.scale : 8,
      textColor:     data.color ? data.color : 'black',
      textAlignment: data.align ? data.align : 'right',
      textWeight:    data.weight ? data.weight : 'normal',
      bg:            data.bg ? colors[data.bg] : null,
      margin:        data.margin ? data.margin : 4,
    });
  }
  else {
    // no args, welcome to the app dude!
    res.render('index', {
      title:         'Cloak',
    });
  }
});

// view engine setup
app.engine('mst', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mst');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
