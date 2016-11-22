function CodigoPostalServices ($http,constants){
  this.findCP = function(codigo_postal){
    return $http({
        method: 'GET',
        headers: {
            'Content-Type': 'text/plain'
        },
        url: constants.getCPS,
        data : {"codigo_postal" : codigo_postal}
      });
  }
}

CodigoPostalServices.$inject =  ["$http","constants"]
angular.module("app.services")
.service('codigoPostalServices', CodigoPostalServices);
