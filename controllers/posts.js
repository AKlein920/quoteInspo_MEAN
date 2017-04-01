var express = require('express');
var router = express.Router();
var Post = require('../models/post.js');
var User = require('../models/user.js');
var moment = require('moment');


//create
router.post('/api/posts', function(req, res) {
  Post.create(req.body, function(err, createdPost) {
    res.redirect('/posts');
  });
});
