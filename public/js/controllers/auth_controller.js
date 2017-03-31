function AuthController($http, $state) {
  this.loginData = {};
  this.signupData = {};

  this.login = function() {
    $http({
      method: 'POST',
      url: '/api/authenticate',
      data: {username: this.loginData.username, password: this.loginData.password}
    }).then(function(response) {
      console.log(response.data);
      localStorage.setItem('token', JSON.stringify(response.data.token));
      localStorage.setItem('username', JSON.stringify(response.data.username));
      $state.go('index');
    });
  };

  this.signup = function() {
    var self = this;
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
      }).then(function(data) {
        console.log(data);
        $state.go('index');
      });
    });
  };

  this.logout = function() {

  }

} ///// end AuthController
