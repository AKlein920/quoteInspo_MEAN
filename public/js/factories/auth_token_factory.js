function AuthTokenFactory($window){
  var store = $window.localStorage;
  var key = 'token';

  return {
    getToken: getToken,
    setToken: setToken
  }

  function getToken() {
    return store.getItem(key)
  }
  //so we're only using the token for localStorage, im handling currentUser in MainController
  function setToken(token) {
    if (token) {
      store.setItem(key, token)
    } else {
      store.removeItem(key)
    }
  }
}
