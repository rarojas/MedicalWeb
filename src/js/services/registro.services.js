function RegistroServices ($http,constants) {
  this.registroAdministrador = function(administrador) {
    return $http({
        method: 'POST',
        url: constants.url + '/registro/registroAdministrador',
        data : administrador
      });
  }
  this.registroClinica = function(clinica) {
    return $http({
        method: 'POST',
        url: constants.url + '/registro/registroClinica',
        data : clinica
      });
  }

  this.registroDoctor = function(doctor) {
    return $http({
        method: 'POST',
        url: constants.url + '/registro/registroDoctor',
        data : doctor
      });
  }
}

RegistroServices.$inject =  ["$http","constants"]
angular.module("app.services").service('RegistroServices', RegistroServices)
