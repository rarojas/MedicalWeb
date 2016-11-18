function RecetaController($scope) {
    var vm = this;
    vm.paciente =  {'name':'Paciente'};
    vm.receta = {
      inicio : new Date()
    };
    $scope.vm = vm;
}

RecetaController.$inject = ["$scope"];
angular.module("app.controllers",[]).controller("recetaController", RecetaController);
