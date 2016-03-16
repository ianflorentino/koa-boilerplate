var User = require('../models/user');

module.exports = {
  index: function *() {
    var users = yield User.find({}, null); 
    this.body = users;
  },
  create: function *() {
    try {
      var user  = yield User.create({
        name: this.request.body.name,
        email: this.request.body.email,
        password: this.request.body.password
      });

      this.body = user;
    } catch (err) {
      console.log(err.message);
      this.throw(err, 400);
    }
        
  }
}
