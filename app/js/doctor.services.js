function DoctorServices ($http,constants){
  this.getDoctoresByEntidad = function(idEntidad){
    return $http({
        method: 'GET',
        url: constants.url + '/doctores/'+ idEntidad,
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
}

DoctorServices.$inject =  ["$http","constants"]
angular.module("app.services").service('DoctorServices', DoctorServices);
