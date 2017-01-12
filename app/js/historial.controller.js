function HistorialController($routeParams, PacienteServices) {
    var vm = this;
    vm.idPaciente =  $routeParams.idPaciente

    PacienteServices.getPaciente(vm.idPaciente)
      .then(function (response) {
          vm.paciente = response.data
      });

    PacienteServices.getHistorialPaciente(vm.idPaciente)
      .then(function(response) {
        vm.historial = response.data;
      });
}


HistorialController.$inject = ["$routeParams","PacienteServices"];

angular.module("app.controllers").controller("HistorialController", HistorialController);
