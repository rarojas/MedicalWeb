function PacienteController($scope,constants) {
    var vm = this;
    vm.paciente = { };
    vm.tipoSanguinioEnum = constants.tipoSanguinioEnum
    vm.sexoEnum =  constants.sexoEnum
}

PacienteController.$inject = ["$scope","constants"];
angular.module("app.controllers").controller("PacienteController", PacienteController);
