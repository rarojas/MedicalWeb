function SolicitudController($scope) {
    var vm = this;
    vm.solicitud = {
      descripcion : "paciente",
      impresion : "algo",
      tipo : 0
    }
    vm.tipoSolicitudEnum = [
      { value : 0, text :"Atención médica" },
      { value : 1, text :"Análisis" }
    ]
    $scope.vm = vm;
}

SolicitudController.$inject = ["$scope"];
angular.module("app.controllers").controller("solicitudController", SolicitudController);
