function EntregaController(SolicitudServices,$routeParams,InventarioServices,$mdDialog) {
    var vm = this;
    vm.receta = []

    SolicitudServices.obtenerReceta($routeParams.idReceta)
    .then(function(response){
      vm.receta = response.data
    })

    vm.submit = function(){
      InventarioServices.entregaReceta(vm.receta)
      .then((response) => {
        vm.showAlert({
           title :"Entrega Recetta",
           text  : "Accion Exitosa :9"
        });
      }).catch((error) =>{
        vm.showAlert({
           title :"Ocurrio un error :(",
           text  : error.data.mensaje
        })
      });
    }


    vm.showAlert = (content) => {
      return $mdDialog.show(
          $mdDialog.confirm()
            .title(content.title)
            .textContent(content.text)
            .ok('Entendido'));
     }
}

EntregaController.$inject = ["SolicitudServices","$routeParams","InventarioServices","$mdDialog"];
angular.module("app.controllers").controller("EntregaController", EntregaController);
