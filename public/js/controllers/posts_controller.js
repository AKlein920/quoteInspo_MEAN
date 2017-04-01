function PostController($http, $state) {
  this.currentUser = localStorage.username;
  this.createPost = {};

  this.newPost = function() {
    $http({
      method: 'POST',
      url: '/api',
      data: {quote:this.createPost.quote, img: this.createPost.img}
    }).then(function(response) {
      console.log(response.data);
      state.go('index');
    });
  };




}
