function RegistroClinicaController($scope,constants,$filter,RegistroServices) {
    var vm = this;
    vm.registro = {
      fechaInicio : new Date(),
      fechaFin : new Date(),
    }
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

    vm.getTotal = function getTotal(){
      return vm.selectedModules().reduce(sumPrices,0);
    }

    vm.minDate = new Date()
    vm.maxDate = new Date()
    vm.maxDate.setMonth(vm.minDate.getMonth() + 1)

    vm.sendRegistro =  function() {
      vm.registro.modulos = vm.selectedModules();
      RegistroServices.registroClinica(vm.registro)
        .then((response) => {

        }).catch(() => {

        });

    }
}

RegistroClinicaController.$inject = ["$scope","constants","$filter","RegistroServices"];
angular.module("app.controllers").controller("registroClinicaController", RegistroClinicaController);
