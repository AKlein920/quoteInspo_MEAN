function AuthController($http, $state) {
  this.loginData = {};

  this.login = function() {
    $http({
      method: 'POST',
      url: '/api/authenticate',
      data: {user: {username: this.loginData.username, password: this.loginData.password}}
    }).then(function(response) {
      console.log(response.data);
    })
  }
}
