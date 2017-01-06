function HistorialController($routeParams, PacienteServices) {
    var vm = this;
    vm.idPaciente =  $routeParams.idPaciente
    PacienteServices.getHistorialPaciente(vm.idPaciente)
      .then(function(response) {
        vm.historial = reponse.data;
      });
}


HistorialController.$inject = ["$routeParams","PacienteServices"];
angular.module("app.controllers").controller("HistorialController", HistorialController);
