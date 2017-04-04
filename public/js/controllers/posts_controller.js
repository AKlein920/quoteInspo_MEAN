function PostController($scope, $http, $state, $stateParams, $rootScope) {
  var self = this;
  this.createPost = {};
  this.posts = [];

  // $rootScope.$on('fetchData', function(event, data) {
  //   self.currentUser = data.currentUser;
  //   console.log(self.currentUser);
  // });




//index of posts, show me all the posts
  // function allPosts() {
  //   console.log(self.currentUser);
  //   $http({
  //     method: 'GET',
  //     url: 'api/posts'
  //   }).then(function(response) {
  //     // console.log(response.data);
  //     //this line makes it so that my array is reversed and most recent post is at the top
  //     this.posts = response.data.reverse();
  //     console.log(this.posts);
  //   });
  // };
  // allPosts();

//create me a post
  function newPost(currentUser) {
    console.log(currentUser);
    // console.log(self.currentUser);
    // console.log(self.currentUser);
    $http({
      method: 'POST',
      url: 'api/posts',
      data: {userId: currentUser.userId, quote: this.createPost.quote, img: this.createPost.img, date: new Date()}
    }).then(function(response) {
      // console.log(response.config.data);
      //setting var for angular
      this.createdPost = response.config.data;
      console.log(this.createdPost);
      //this line refreshes the page so that my post shows up right when i create it.
      $state.go('index');
    }.bind(this));
  };

this.newPost = newPost;

}
