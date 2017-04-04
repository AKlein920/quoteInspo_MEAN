function AuthController($http, $state, $scope, $rootScope, AuthTokenFactory) {
  var self = this;
  this.loginData = {};
  this.signupData = {};

  this.login = function() {
    $http({
      method: 'POST',
      url: '/api/authenticate',
      data: {username: this.loginData.username, password: this.loginData.password}
    }).then(function(response) {
      console.log(response.data);
      AuthTokenFactory.setToken(response.data.token);
      // localStorage.setItem('userId', JSON.stringify(response.data.userId));
      //calls $on('userLoggedIn') from MainController
      $scope.$emit('userLoggedIn', {
        username: response.data.username,
        userId: response.data.userId
      });
      $rootScope.$emit('fetchData', { currentUser: {
        username: response.data.username,
        userId: response.data.userId
      }});
      $state.go('index');
    });
  };

  this.signup = function() {
    $http({
      method: 'POST',
      url: '/api/signup',
      data: {username: self.signupData.username, password: self.signupData.password}
    }).then(function(response) {
      console.log(response.data);
      $http({
        method: 'POST',
        url: '/api/authenticate',
        data: {username: self.signupData.username, password: self.signupData.password}
      }).then(function(response) {
        console.log(response.data);
        //deleted all of the localStorage functionality we had going on. using AuthTokenFactory to set the token and grab our data.
        AuthTokenFactory.setToken(response.data.token)
        //calls $on('userLoggedIn') from MainController
        // localStorage.setItem('userId', JSON.stringify(response.data.userId));
        $scope.$emit('userLoggedIn', response.data);
        $rootScope.$emit('fetchData', response.data);
        $state.go('index');
      });
    });
  };

  this.logout = function() {
    AuthTokenFactory.setToken();
    //calls on userLoggedOut from MainController
    $scope.$emit('userLoggedOut');
    $state.go('index');
  }

} ///// end AuthController
