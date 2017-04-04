// instantiates angular app & controllers
angular.module('quoteInspo')
  //added a MainController so that i can get create and my account to pop up upon login with main.currentUser
  .controller('MainController', MainController)
  .controller('AuthController', AuthController)
  .controller('PostController', PostController)
  //Added these factories from Colin's notes - essentially they will handle the tokens and no more pushing unnessary data into localStorage
  .factory('AuthTokenFactory', AuthTokenFactory)
  .factory('AuthInterceptor', AuthInterceptor)
