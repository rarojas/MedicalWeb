function DoctorController(RegistroServices,$scope,$mdDialog,$location,$routeParams) {
    var vm = this;
    vm.registro = {
      idEntidad : $routeParams.idEntidad
    }
    vm.submit = () => {
        RegistroServices.registroDoctor(vm.registro)
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

DoctorController.$inject = ["RegistroServices","$scope","$mdDialog","$location","$routeParams"];
angular.module("app.controllers").controller("DoctorController", DoctorController);
