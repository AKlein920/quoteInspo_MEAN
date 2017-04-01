var express = require('express');
var router = express.Router();
var Post = require('../models/post.js');
var User = require('../models/user.js');
var moment = require('moment');

//index
router.get('/', function(req, res) {
  Post.find({}, function(err, foundPosts) {
    res.redirect('/');
  });
});


//create
router.post('/', function(req, res) {
  Post.create(req.body, function(err, createdPost) {
    res.redirect('/');
  });
});















module.exports = router;
