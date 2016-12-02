function RecetaController($scope,constants,$routeParams,DoctorServices) {
    var vm = this;
    vm.receta = {
      medicamentos : [],
      paciente : {'name':'Paciente'}

    };
    vm.addMedicamento = function() {
      vm.receta.medicamentos.push({
        inicio : new Date(),
        fin : new Date(),
      });
    };
    vm.removeMedicamento = function(medicamento) {
      vm.receta.medicamentos.pop(medicamento);
    };

    vm.minDate = new Date();
    vm.tipoAdministracionMedicamentoEnum = constants.tipoAdministracionMedicamentoEnum;


    DoctorServices.obtenerDiagnostico($routeParams.idDiagnostico)
      .then(function(response){
        vm.diagnostico = response.data
    });
}

RecetaController.$inject = ["$scope","constants","$routeParams","DoctorServices"];
angular.module("app.controllers").controller("RecetaController", RecetaController);
