import router from './routes';

var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

// const env = process.env.NODE_ENV;
const publicPath = path.join('build/public');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

var hbs = exphbs.create({
  helpers: { fake: () => {} }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', publicPath);

app.use(express.static(publicPath));
app.use('/', router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('index', { initialData: encodeURIComponent(JSON.stringify({ok: 'yay'})), markup: 'error',
  info: encodeURIComponent(JSON.stringify(res.info)) })
});

export default app;
