var controller = require('./controllers/controller');
var users = require('./controllers/user');
var router = require('koa-middlewares').router();

router
  /****** general boilerplate  *********/
  .get('/', controller.index)
  /****** users routes *********/
  .get('/users', users.index)
  .post('/users', users.create);

module.exports = router;
