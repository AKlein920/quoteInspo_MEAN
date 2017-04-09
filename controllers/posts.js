var express = require('express');
var router = express.Router();
var Post = require('../models/post.js');
var User = require('../models/user.js');
var moment = require('moment');

//index
router.get('/', function(req, res) {
  Post.find({}, function(err, foundPosts) {
    if (err) {
      console.log(err);
    } else {
      res.send(foundPosts);
    }
  });
});

//create
router.post('/', function(req, res) {
  Post.create(req.body, function(err, createdPost) {
    res.redirect('/');
  });
});

//show
router.get('/:id', function(req, res) {
  Post.findById(req.params.id, function(err, foundPost) {
    res.json(foundPost);
  });
});













module.exports = router;
