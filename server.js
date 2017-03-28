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
});

// middleware
app.use(express.static('public'));
app.use(bodyParser.json());

// listener
app.listen(port, function() {
  console.log('quoteInspo app is listening on port: ' + port);
});
