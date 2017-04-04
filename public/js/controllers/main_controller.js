function MainController($scope, $http) {
  var self = this;
  var server = 'http://localhost:3000'

  //set current user
  $scope.$on('userLoggedIn', function(event, data){
    self.currentUser = data;
  });

  //clear current user
  $scope.$on('userLoggedOut', function(event, data) {
    self.currentUser = null;
  });
}
