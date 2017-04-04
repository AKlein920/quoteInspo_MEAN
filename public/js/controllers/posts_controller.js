function PostController($scope, $http, $state, $stateParams, $rootScope) {
  var self = this;
  this.createPost = {};
  this.posts = [];
// on page load, grabs all posts from db to display even if user is not logged in
  $http({
    method: 'GET',
    url: 'api/posts'
  }).then(function(response) {
    //this line makes it so that my array is reversed and most recent post is at the top
    this.posts = response.data.reverse();
    // console.log(this.posts);
  }.bind(this));

  // $rootScope.$on('fetchData', function(event, data) {
  //   self.currentUser = data.currentUser;
  //   console.log(self.currentUser);
  // });

//create me a post
  function newPost(currentUser) {
    $http({
      method: 'POST',
      url: 'api/posts',
      data: {userId: currentUser.userId, quote: this.createPost.quote, img: this.createPost.img, date: new Date()}
    }).then(function(response) {
      console.log(response.config.data);
      //setting var for angular
      this.createdPost = response.config.data;
      this.posts.push(this.createdPost);
      console.log(this.posts);
      //this line refreshes the page so that my post shows up right when i create it.
      $state.go('index');
    }.bind(this));
  };

this.newPost = newPost;

}
