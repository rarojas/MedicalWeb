function AuthServices ($http, constants){
  var baseUrl =  constants.url

  this.login = function(user){
    return $http({
        method: 'POST',
        url: baseUrl +  '/auth/login',
        data : user
      });
  }

  this.obtenerMiPerfil = function() {
    return $http({
        method: 'GET',
        url: baseUrl + '/miperfil',
        ignoreLoadingBar: true
      });
  }

}

AuthServices.$inject =  ["$http","constants"]
angular.module("app.services")
.service('AuthServices', AuthServices);
