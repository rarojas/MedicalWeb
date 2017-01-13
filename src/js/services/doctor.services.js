function DoctorServices ($http,constants) {

  this.getDoctoresByEntidad = function() {
    return $http({
        method: 'GET',
        url: constants.url + '/doctores'
      });
  }

  this.obtenerConsultas = function(idEntidad){
    return $http({
        method: 'GET',
        url: constants.url + '/doctores/obtenerConsultas/'+ idEntidad,
      });
  }

  this.obtenerConsulta = function(idSolicitud){
    return $http({
        method: 'GET',
        url: constants.url + '/doctores/consulta/'+ idSolicitud,
      });
  }

  this.obtenerDiagnosticos = function(){
    return $http({
        method: 'GET',
        url: constants.url + '/doctores/diagnosticos'
      });
  }

  this.obtenerDiagnostico = function(idDiagnostico) {
    return $http({
        method: 'GET',
        url: constants.url + '/doctores/diagnosticos/' + idDiagnostico
      });
  }

  this.obtenerMedicamentosDisponibles = function() {
    return $http({
        method: 'GET',
        url: constants.url + '/farmacia/medicamentos/disponibles'
      });
  }

  this.getEnfermeros = function() {
    return $http({
        method: 'GET',
        url: constants.url + '/doctores/enfermeros'
      });
  }
}
DoctorServices.$inject =  ["$http","constants"]
angular.module("app.services").service('DoctorServices', DoctorServices);
