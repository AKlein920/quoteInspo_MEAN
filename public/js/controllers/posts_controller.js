function PostController($http, $state) {
  this.currentUser = localStorage.username;
  this.createPost = {};

//index of posts, show me all the posts
  this.allPosts = function() {
    $http({
      method: 'GET',
      url: 'api/posts'
    }).then(function(response) {
      // console.log(response.data);
      this.posts = response.data;
      console.log(this.posts);
    }.bind(this));
  };
  this.allPosts();

//create me a post
  this.newPost = function() {
    $http({
      method: 'POST',
      url: 'api/posts',
      data: {userId: JSON.parse(localStorage.userId), quote: this.createPost.quote, img: this.createPost.img},
      headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))}
    }).then(function(response) {
      // console.log(response.config.data);
      //setting var for angular
      this.post = response.config.data;
      console.log(this.post);
    }.bind(this));
  };




}
