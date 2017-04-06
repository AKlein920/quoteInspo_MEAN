function PostController($scope, $http, $state, $stateParams, $rootScope) {
  var self = this;
  this.createPost = {};
  var parent = $scope.$parent.$parent.main;

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
      $state.go('index');
    });
  };

//show me a specific post
function onePost(postid) {
  $http({
    method: 'GET',
    url: '/posts/:post_id'
  }).then(function(response) {
    console.log(response.data);
    $state.go('onePost', {post_id: postid});
  })
}

this.newPost = newPost;

}
