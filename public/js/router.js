angular.module('quoteInspo', ['ui.router'], function config($httpProvider) {
  //added this line to get our token from auth_interceptor
  $httpProvider.interceptors.push('AuthInterceptor');
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
  .state('/signup', {
    url: '/signup',
    templateUrl: '/partials/signup.html'
  })
  .state('/post', {
    url: '/post',
    templateUrl: '/partials/post.html'
  })
  .state('onePost', {
    url: '/post/:post_id',
    templateUrl: '/partials/onePost.html'
  })
}
