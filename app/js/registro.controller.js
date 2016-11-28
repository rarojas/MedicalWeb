function RegistroController(RegistroServices,$scope) {
    var vm = this;
    vm.submit = () => {
        RegistroServices.registroAdministrador(vm.registro)
        .then((response) => {

        }).catch((error) =>{

        });

    }
}

RegistroController.$inject = ["RegistroServices","$scope"];
angular.module("app.controllers")
.controller("registroController", RegistroController);
