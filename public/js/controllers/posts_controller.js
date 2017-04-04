function PostController($http, $state) {
  var self = this;
  this.createPost = {};

//index of posts, show me all the posts
  this.allPosts = function() {
    $http({
      method: 'GET',
      url: 'api/posts'
    }).then(function(response) {
      // console.log(response.data);
      //this line makes it so that my array is reversed and most recent post is at the top
      this.posts = response.data.reverse();
      console.log(this.posts);
    }.bind(this));
  };
  this.allPosts();

//create me a post
  this.newPost = function() {
    $http({
      method: 'POST',
      url: 'api/posts',
      data: {userId: JSON.parse(localStorage.userId), quote: this.createPost.quote, img: this.createPost.img, date: new Date()}
    }).then(function(response) {
      // console.log(response.config.data);
      //setting var for angular
      this.post = response.config.data;
      console.log(this.post);
      //this line refreshes the page so that my post shows up right when i create it.
      $state.go('index');
    }.bind(this));
  };




}
