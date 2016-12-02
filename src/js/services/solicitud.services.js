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
}

SolicitudServices.$inject =  ["$http","constants"]
angular.module("app.services").service('SolicitudServices', SolicitudServices)
