function SolicitudController($scope,constants,$routeParams) {
    var vm = this;
    vm.solicitud = {
      descripcion : "paciente",
      impresion : "algo",
      tipo : 0
    }
    vm.tipoSolicitudEnum = constants.tipoSolicitudEnum
}

SolicitudController.$inject = ["$scope","constants","$routeParams"];
angular.module("app.controllers").controller("SolicitudController", SolicitudController);
