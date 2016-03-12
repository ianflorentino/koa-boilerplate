// koa framework
var koa = require('koa');
// koa-middlewares packages all the middleware libraries into one
var middlewares = require('koa-middlewares');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dd');

var app = koa();

var router = require('./routes');
var errors = require('./responses/errors');
var pageNotFound = require('./responses/pageNotFound');

// Need to use logger above all middleware to wrap requests
app.use(middlewares.logger());

// Call bodyparser to parse incoming data and set request.body
app.use(middlewares.bodyparser());

// Ignore favicon request (prevent double requests
app.use(middlewares.favicon());

// Error Handling
app.use(pageNotFound);
app.use(errors);

// Routes
app.use(router.routes());
app.use(router.allowedMethods());

if (!module.parent) app.listen(3000);

