function SolicitudController($scope) {
    var vm = this;
    vm.pacientes = [{
      name: "paciente"
    }]
    $scope.vm = vm;
}

SolicitudController.$inject = ["$scope"];
angular.module("app.controllers").controller("solicitudController", SolicitudController);
