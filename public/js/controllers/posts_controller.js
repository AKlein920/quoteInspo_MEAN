function PostController($http, $state) {
  this.currentUser = localStorage.username;
  this.createPost = {};

  this.newPost = function() {
    $http({
      method: 'POST',
      url: 'api/posts',
      data: {userID: localStorage.userId, quote: this.createPost.quote, img: this.createPost.img}
    }).then(function(response) {
      console.log(response.config.data);
    }.bind(this));
  };




}
