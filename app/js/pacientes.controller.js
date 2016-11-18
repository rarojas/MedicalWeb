function PacientesController($scope) {
    var vm = this;
    vm.pacientes = [{
      name: "paciente"
    }]
    $scope.vm = vm;
}

PacientesController.$inject = ["$scope"];
angular.module("app.controllers").controller("pacientesController", PacientesController);
