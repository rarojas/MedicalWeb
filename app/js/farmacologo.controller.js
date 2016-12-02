function FarmacologoController(RegistroServices,$scope,$mdDialog,$location,$routeParams) {
    var vm = this;
    vm.registro = {
      idEntidad : $routeParams.idEntidad
    }
    vm.submit = () => {
        RegistroServices.registroFarmacologo(vm.registro)
        .then((response) => {
          vm.showAlert({
             title :"Registro Exitoso",
             text  :"Accion Exitosa :)"
          })
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

FarmacologoController.$inject = ["RegistroServices","$scope","$mdDialog","$location","$routeParams"];
angular.module("app.controllers").controller("FarmacologoController", FarmacologoController);
