function LaboratorioServices ($http,constants){

  this.obtenerAnalisis = function(){
    return $http({
        method: 'GET',
        url: constants.url +  '/laboratorio'
    });
  }

  this.crearAnalisis = function(analisis){
    return $http({
        method: 'POST',
        url: constants.url +  '/laboratorio',
        data: analisis
    });
  }
}

LaboratorioServices.$inject =  ["$http","constants"]
angular.module("app.services").service('LaboratorioServices', LaboratorioServices);
