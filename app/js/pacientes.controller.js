function PacientesController($scope,PacienteServices,$mdDialog,$routeParams){
    var vm = this;
    vm.pacientes = []
    PacienteServices.getPacientes()
      .then(function (response) {
        vm.pacientes = response.data;
    })
}

PacientesController.$inject = ["$scope","PacienteServices","$mdDialog","$routeParams"];
angular.module("app.controllers").controller("PacientesController", PacientesController);
