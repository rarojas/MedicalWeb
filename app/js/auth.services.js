function AuthServices ($http,constants){
  var baseUrl =  constants.url + ":"  + constants.port

  this.login = function(user){
    return $http({
        method: 'POST',
        url: baseUrl +  '/auth/login',
        data : user
      });
  }
}

AuthServices.$inject =  ["$http","constants"]
angular.module("app.services")
.service('AuthServices', AuthServices);
