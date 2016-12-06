function InventarioServices ($http,constants) {
  this.getMedicamentos = function() {
    return $http({
        method: 'GET',
        url: constants.url + '/farmacia/medicamentos'
      });
  }

  this.guardarMedicamento = function(medicamento) {
    return $http({
        method: 'POST',
        url: constants.url + '/farmacia',
        data : medicamento
      });
  }

  this.actualizarMedicamento = function(medicamento) {
    return $http({
        method: 'PUT',
        url: constants.url + '/farmacia',
        data : medicamento
      });
  }

  this.eliminarMedicamento = function(medicamento) {
    return $http({
        method: 'DELETE',
        url: constants.url + '/farmacia',
        data : medicamento
      });
  }

<<<<<<< HEAD
  this.entregaReceta = function(recetas) {
    return $http({
        method: 'POST',
        url: constants.url + '/solicitudes/recetas/entrega',
        data : recetas
      });
  }


=======
>>>>>>> 7ce8f924b666a661cdedd1755f39490bb3ead3dd

}

InventarioServices.$inject =  ["$http","constants"]
angular.module("app.services").service('InventarioServices', InventarioServices)
