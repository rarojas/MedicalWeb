function SolicitudServices ($http,constants) {
  this.crearSolicitud = function(solicitud) {
    return $http({
        method: 'POST',
        url: constants.url + '/solicitudes/crearSolicitud',
        data : solicitud
      });
  }
  this.crearDiagnostico = function(diagnostico) {
    return $http({
        method: 'POST',
        url: constants.url + '/solicitudes/diagnostico',
        data : diagnostico
      });
  }

  this.crearReceta = function(receta) {
    return $http({
        method: 'POST',
        url: constants.url + '/solicitudes/receta',
        data : receta
      });
  }

  this.obtenerRecetas = function() {
    return $http({
        method: 'GET',
        url: constants.url + '/solicitudes/recetas'
    });
  }
  this.obtenerReceta = function(idReceta) {
    return $http({
        method: 'GET',
        url: constants.url + '/solicitudes/recetas/' + idReceta
    });
  }

}

SolicitudServices.$inject =  ["$http","constants"]
angular.module("app.services").service('SolicitudServices', SolicitudServices)
