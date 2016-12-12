function DetalleEntidadControler($routeParams,$mdDialog ,EntidadesServices) {
    var vm = this;
    vm.modulos = [];

    EntidadesServices.getModulos($routeParams.idEntidad)
      .then(function(response) {
          vm.modulos = response.data;
      });

}

DetalleEntidadControler.$inject = ["$routeParams","$mdDialog","EntidadesServices"];
angular.module("app.controllers").controller("DetalleEntidadControler", DetalleEntidadControler);
