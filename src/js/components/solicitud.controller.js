function SolicitudController($scope,constants) {
    var vm = this;
    vm.solicitud = {
      descripcion : "paciente",
      impresion : "algo",
      tipo : 0
    }
    vm.tipoSolicitudEnum = constants.tipoSolicitudEnum
}

SolicitudController.$inject = ["$scope","constants"];
angular.module("app.controllers").controller("solicitudController", SolicitudController);
