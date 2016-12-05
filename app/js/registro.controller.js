function RegistroController(RegistroServices,$scope,$mdDialog,$location,ModalServices) {
    var vm = this;
    vm.submit = () => {
        RegistroServices.registroAdministrador(vm.registro)
        .then((response) => {
          ModalServices.showAlert({
             title :"Registro Exitoso",
             text  :"Ingresa al sistema para comenzar"
          }).then(function() {
              $location.path("/")
          });
        }).catch((error) =>{
          ModalServices.showAlert({
             title :"Ocurrio un error :(",
             text  : error.data.mensaje
          })
        });
    }
}

RegistroController.$inject = ["RegistroServices","$scope","$mdDialog","$location","ModalServices"];
angular.module("app.controllers")
.controller("registroController", RegistroController);

function AdministradorCEController(RegistroServices,$routeParams,$mdDialog,$location,ModalServices) {
    var vm = this;
    vm.registro = {
      idEntidad : $routeParams.idEntidad
    }

    vm.submit = () => {
        RegistroServices.registroAdministradorCE(vm.registro)
        .then((response) => {
          ModalServices.showAlert({
             title :"Registro Exitoso",
             text  :"Ingresa al sistema para comenzar"
          }).then(function() {
              $location.path("/")
          });
        }).catch((error) =>{
          ModalServices.showAlert({
             title :"Ocurrio un error :(",
             text  : error.data.mensaje
          })
        });
    }


}

AdministradorCEController.$inject = ["RegistroServices","$routeParams","$mdDialog","$location","ModalServices"];
angular.module("app.controllers").controller("AdministradorCEController", AdministradorCEController);
