function PostController($scope, $http, $state, $stateParams, $rootScope) {
  var self = this;
  this.createPost = {};
  this.posts = [];
  var parent = $scope.$parent.$parent.main;



  // $rootScope.$on('fetchData', function(event, data) {
  //   self.currentUser = data.currentUser;
  //   console.log(self.currentUser);
  // });

//create me a post
  function newPost(currentUser) {
    // console.log($scope.$parent.$parent.main.posts);
    $http({
      method: 'POST',
      url: 'api/posts',
      data: {userId: currentUser.userId, quote: this.createPost.quote, img: this.createPost.img, date: new Date()}
    }).then(function(response) {
      // console.log(response.config.data);
      //setting var for angular
      this.createdPost = response.config.data;
      parent.posts.push(this.createdPost);
      console.log(parent.posts.reverse());
      //this line refreshes the page so that my post shows up right when i create it.
      $state.go('index');
    });
  };

this.newPost = newPost;

}
