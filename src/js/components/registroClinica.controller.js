function RegistroClinicaController($scope,constants,$filter,codigoPostalServices) {
    var vm = this;
    vm.registro = {  }
    vm.tipoEntidadEnum = constants.tipoEntidadEnum;
    vm.modulos = angular.copy(constants.modulos);
    vm.toogle = function select(modulo){
        modulo.selecteds = !modulo.selected;
    };
    vm.selectedModules = function selectedModules() {
      return $filter('filter')(vm.modulos, { selected: true });
    }

    function sumPrices(total, num){
        return total + num.price;
    }
    vm.codigos = []
    vm.updateCPS = function(typed) {
      console.log(typed)
      codigoPostalServices.findCP(typed).success(function(data){
        vm.codigos =  data.codigos;
      });
    }
    vm.getTotal = function getTotal(){
      return vm.selectedModules().reduce(sumPrices,0);
    }

}

RegistroClinicaController.$inject = ["$scope","constants","$filter","codigoPostalServices"];
angular.module("app.controllers").controller("registroClinicaController", RegistroClinicaController);
