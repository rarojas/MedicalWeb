function RecetaController($scope,constants) {
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
    $scope.vm = vm;
}

RecetaController.$inject = ["$scope","constants"];
angular.module("app.controllers").controller("recetaController", RecetaController);
