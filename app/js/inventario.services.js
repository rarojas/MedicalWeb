function InventarioServices ($http,constants) {
  this.getMedicamentos = function(entidad) {
    return $http({
        method: 'GET',
        url: constants.url + '/medicamentos',
        data : { idEntidad : entidad.idEntidad }
      });
  }

  this.guardarMedicamento = function(medicamento) {
    return $http({
        method: 'PUT',
        url: constants.url + '/medicamentos',
        data : medicamento
      });
  }

  this.eliminarMedicamento = function(medicamento) {
    return $http({
        method: 'DELETE',
        url: constants.url + '/medicamentos',
        data : medicamento
      });
  }
}

InventarioServices.$inject =  ["$http","constants"]
angular.module("app.services").service('InventarioServices', InventarioServices)
