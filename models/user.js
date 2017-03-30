//declare variables
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

//structure for the user when creating - this (password property at least) will change when we have hashed passwords and user auth.
var userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// use the pre hook to ensure user's password is salted/hashed before save
userSchema.pre('save', function (next) {
  var user = this;

  if (this.isModified('password') || this.isNew) {

    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

// define the comparePassword method to
userSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

//set schema variable to be exported
var User = mongoose.model('User', userSchema);

//export schema
module.exports = User;
