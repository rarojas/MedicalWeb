function RegistroController(RegistroServices,$scope,$mdDialog,$location) {
    var vm = this;
    vm.submit = () => {
        RegistroServices.registroAdministrador(vm.registro)
        .then((response) => {
          vm.showAlert({
             title :"Registro Exitoso",
             text  :"Ingresa al sistema para comenzar"
          }).then(function() {
              $location.path("/")
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

RegistroController.$inject = ["RegistroServices","$scope","$mdDialog","$location"];
angular.module("app.controllers")
.controller("registroController", RegistroController);
