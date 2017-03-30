angular.module('quoteInspo', ['ui.router'], function config($httpProvider) {
  console.log('this is where that interceptor thing is');
}).config(QuoteRouter);

function QuoteRouter($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('index', {
    url: '/'
  })
  .state('/login', {
    url: '/login',
    templateUrl: '/partials/login.html'
  })
}
