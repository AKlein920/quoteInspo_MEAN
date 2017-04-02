function AuthController($http, $state) {
  this.loginData = {};
  this.signupData = {};
  this.currentUser = localStorage.username;

  this.login = function() {
    $http({
      method: 'POST',
      url: '/api/authenticate',
      data: {username: this.loginData.username, password: this.loginData.password}
    }).then(function(response) {
      console.log(response.data);
      localStorage.setItem('token', JSON.stringify(response.data.token));
      localStorage.setItem('username', JSON.stringify(response.data.username));
      localStorage.setItem('userId', JSON.stringify(response.data.userId));
      $state.go('index');
      location.reload();
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
      }).then(function(response) {
        // console.log(data);
        localStorage.setItem('token', JSON.stringify(response.data.token));
        localStorage.setItem('username', JSON.stringify(response.data.username));
        localStorage.setItem('userId', JSON.stringify(response.data.userId));
        $state.go('index');
      });
    });
  };

  this.logout = function() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    location.reload();
    $state.go('index');
  }

} ///// end AuthController
