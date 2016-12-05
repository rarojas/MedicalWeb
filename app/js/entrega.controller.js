function EntregaController(SolicitudServices,$routeParams,InventarioServices) {
    var vm = this;
    vm.receta = []

    SolicitudServices.obtenerReceta($routeParams.idReceta)
    .then(function(response){
      vm.receta = response.data
    })

    vm.submit = function(){
      InventarioServices.entregaReceta(vm.receta)
    }
}

EntregaController.$inject = ["SolicitudServices","$routeParams","InventarioServices"];
angular.module("app.controllers").controller("EntregaController", EntregaController);
