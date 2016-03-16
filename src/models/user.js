var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
});

userSchema.pre('save', function(next) {
  var account = this;
  if (!account.isModified('password')) return next();
  bcrypt.hash(account.password, null, null, function(err, hash) {
    if (err) return next(err);
    account.password = hash;
    next();
  }); 
});

userSchema.methods.comparePassword = function(password) {
  var account = this;
  return bcrypt.compareSync(password, account.password);
};

var User = mongoose.model('User', userSchema);

module.exports = User;

