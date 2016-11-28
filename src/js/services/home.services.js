function HomeServices ($http,constants){
  this.login = function(user){
    return $http({
        method: 'POST',
        url: constants.url + '/auth/login',
        data : user
      });
  }
}

HomeServices.$inject =  ["$http","constants"]
angular.module("app.services").service('HomeServices', HomeServices);
