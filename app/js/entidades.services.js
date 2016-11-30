function EntidadesServices ($http,constants){
  this.getEntidades = function(user){
    return $http({
        method: 'GET',
        url: constants.url + '/entidades/' + user ,
      });
  }
}

EntidadesServices.$inject =  ["$http","constants"]
angular.module("app.services").service('EntidadesServices', EntidadesServices);
