function DoctorServices ($http,constants){
  this.getDoctoresByEntidad = function(idEntidad){
    return $http({
        method: 'GET',
        url: constants.url + '/doctores/'+ idEntidad,
      });
  }
}

DoctorServices.$inject =  ["$http","constants"]
angular.module("app.services").service('DoctorServices', DoctorServices);
