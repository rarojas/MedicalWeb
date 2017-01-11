function PacienteServices ($http,constants){
  this.crearPaciente = function(paciente){
    return $http({
        method: 'POST',
        url: constants.url + '/registro/registroPaciente',
        data : paciente
      });
  }
  this.getPacientes = function(){
    return $http({
        method: 'GET',
        url: constants.url + '/pacientes',
      });
  }

  this.getPaciente = function(idPaciente){
    return $http({
        method: 'GET',
        url: constants.url + '/pacientes/' + idPaciente,
      });
  }

  this.getHistorialPaciente = function(idPaciente) {
    return $http({
        method: 'GET',
        url: constants.url + '/pacientes/historial/' + idPaciente
    });
  }
}

PacienteServices.$inject =  ["$http","constants"]
angular.module("app.services").service('PacienteServices', PacienteServices);
