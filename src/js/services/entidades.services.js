function EntidadesServices ($http,constants){
  this.getEntidades = function(user){
    return $http({
        method: 'GET',
        url: constants.url + '/entidades/' + user
      });
  }

  this.getEntidades = function(){
    return $http({
        method: 'GET',
        url: constants.url + '/entidades'
      });
  }

  this.getModulos = function(idEntidad){
    return $http({
        method: 'GET',
        url: constants.url + '/entidades/modulosContratados/' +  idEntidad
      });
  }
}

EntidadesServices.$inject =  ["$http","constants"]
angular.module("app.services").service('EntidadesServices', EntidadesServices);
