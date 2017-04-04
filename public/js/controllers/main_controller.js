function MainController($scope, $http) {
  var self = this;
  var server = 'http://localhost:3000';
  this.posts = [];
  // on page load, grabs all posts from db to display even if user is not logged in
    $http({
      method: 'GET',
      url: 'api/posts'
    }).then(function(response) {
      //this line makes it so that my array is reversed and most recent post is at the top
      self.posts = response.data.reverse();
  });

  //set current user
  $scope.$on('userLoggedIn', function(event, data){
    self.currentUser = data;
    // console.log(self.currentUser);
  });

  //clear current user
  $scope.$on('userLoggedOut', function(event, data) {
    self.currentUser = null;
  });
}
