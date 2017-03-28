// instantiates angular app
var app = angular.module("quoteInspo", []);

// establishes controller
app.controller('MainController', ['$http', function($http) {
  this.name = 'Abi';
  this.age = 27;
}]); // end MainController
