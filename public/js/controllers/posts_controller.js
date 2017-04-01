function PostController($http, $state) {
  this.currentUser = localStorage.username;
  this.createPost = {};

  this.newPost = function() {
    $http({
      method: 'POST',
      url: 'api/posts',
      data: {userID: localStorage.userId, quote: this.createPost.quote, img: this.createPost.img},
      headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))}
    }).then(function(response) {
      // console.log(response.config.data);
      //setting var for angular
      this.post = response.config.data;
      console.log(this.post);
    }.bind(this));
  };




}
