// require dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    session = require('express-session');

// instantiates express
var app = express();

// port - deployed & local
var port = process.env.PORT || 3000
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://localhost/quoteInspo';

// database
mongoose.connect(mongoDBURI);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to mongoDB');

  // //testing schema
  // console.log('testing our schema');
  //
  // var newUser = {username: "Tidus", password: "password"}
  // var newPost = {userId: 1, quote: "blah blah blahhhh"}
  //
  // User.create(newUser, function(err, createdUser) {
  //   if (err) {console.log('error is: ', err) }
  //   console.log(createdUser);
  // });
  //
  // Post.create(newPost, function(err, createdPost) {
  //   if (err) {console.log('error is: ', err) }
  //   console.log(createdPost);
  // });
  // //end test

}); //end db.once
//require our models
var User = require('./models/user');
var Post = require('./models/post');

// middleware
app.use(express.static('public'));
app.use(bodyParser.json());

// listener
app.listen(port, function() {
  console.log('quoteInspo app is listening on port: ' + port);
});
