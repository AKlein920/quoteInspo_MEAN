// require dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    passport = require('passport'),
    jwt = require('jwt-simple'),
    User = require('./models/user'),
    Post = require('./models/post'),
    config = require('./config/database'),
    port = process.env.PORT || 3000,
    mongoDBURI = process.env.MONGODB_URI || 'mongodb://localhost/quoteInspo';


// instantiates express
var app = express();

// middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(passport.initialize());

// route for testing
app.get('/', function(req, res) {
  res.send('hi!');
});


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




// listener
app.listen(port, function() {
  console.log('quoteInspo app is listening on port: ' + port);
});
