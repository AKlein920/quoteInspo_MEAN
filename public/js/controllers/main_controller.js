function MainController($scope, $http) {
  var self = this;
  var server = 'http://localhost:3000';

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
