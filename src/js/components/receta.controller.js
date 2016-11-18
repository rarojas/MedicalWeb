function RecetaController($scope) {
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

    $scope.vm = vm;
}

RecetaController.$inject = ["$scope"];
angular.module("app.controllers",[]).controller("recetaController", RecetaController);
