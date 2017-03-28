//declare variables
var mongoose = require('mongoose');

//structure for the user when creating - this (password property at least) will change when we have hashed passwords and user auth.
var userSchema = mongoose.Schema({
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true}
})

//set schema variable to be exported
var User = mongoose.model('User', userSchema);

//export schema
module.exports = User;
