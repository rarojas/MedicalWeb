function EntidadesServices ($http,constants){
  this.getEntidadesAdministrador = function(){
    return $http({
        method: 'GET',
        url: constants.url + '/entidades/administrador' 
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
