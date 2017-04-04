function AuthInterceptor(AuthTokenFactory) {
  return {
    request: addToken
  }

  function addToken(config){
    var token = AuthTokenFactory.getToken();

    if (token) {
      //puts bearer token into auth.
      config.headers = config.headers || {}
      config.headers.Authorization = `Bearer ${token}`;
      // console.log('this is if token in auth_interceptor and it\'s working');
    }
    return config
  }
}
