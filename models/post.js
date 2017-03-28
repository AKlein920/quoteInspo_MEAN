//declare variables
var mongoose = require('mongoose');

//post schema
var postSchema = mongoose.Schema({
  userId: String,
  quote: {type: String, required: true},
  img: String,
  date: Date
})

//create model
var Post = mongoose.model('Post', postSchema);

//export model
module.exports = Post;
