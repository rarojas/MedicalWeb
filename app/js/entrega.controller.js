function EntregaController(SolicitudServices,$routeParams,InventarioServices,$mdDialog,constants,DoctorServices,$rootScope,$window) {
    var vm = this;
    vm.receta = {}
    vm.minDate = new Date();
    vm.tipoAdministracionMedicamentoEnum = constants.tipoAdministracionMedicamentoEnum;
    vm.farmacia = $rootScope.userData.modulos.indexOf("FARMACIA") != -1

    DoctorServices.obtenerMedicamentosDisponibles().then(function(response){
      vm.medicamentos =  response.data
    });

    SolicitudServices.obtenerReceta($routeParams.idReceta)
    .then(function(response){
      vm.receta = response.data
    })


    vm.getMedicamento = function (idMedicamento) {
        var medicamento = vm.medicamentos.filter(function(item){
            return item.idMedicamento ===  idMedicamento;
        }).shift();

        if(!medicamento){
          return "";
        }
        return medicamento.nombre + " ("+ medicamento.cantidad + ")";
    }

    vm.submit = function(){
      InventarioServices.entregaReceta(vm.receta)
      .then((response) => {
        vm.showAlert({
           title :"Entrega Recetta",
           text  : "Accion Exitosa :9"
        }).then(function(){
          $window.history.back();
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

EntregaController.$inject = ["SolicitudServices","$routeParams","InventarioServices","$mdDialog","constants","DoctorServices","$rootScope","$window"];
angular.module("app.controllers").controller("EntregaController", EntregaController);
