function PacienteServices ($http,constants){
  this.crearPaciente = function(paciente){
    return $http({
        method: 'POST',
        url: constants.url + '/registro/registroPaciente',
        data : paciente
      });
  }
  this.getPacientes = function(idEntidad){
    return $http({
        method: 'GET',
        url: constants.url + '/pacientes/'+ idEntidad,
      });
  }
}

PacienteServices.$inject =  ["$http","constants"]
angular.module("app.services").service('PacienteServices', PacienteServices);
