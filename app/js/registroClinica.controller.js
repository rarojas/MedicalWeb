function RegistroClinicaController($scope,constants,$filter,RegistroServices,$rootScope,$mdDialog,$location) {
    var vm = this;
    var idUser = $rootScope.userData.userId;
    vm.tipoEntidadEnum = constants.tipoEntidadEnum;

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
      //vm.registro.modulos = vm.selectedModules();
      vm.registro.administrador = { idUser : idUser };
      RegistroServices.registroClinica(vm.registro)
      .then((response) => {
        vm.showAlert({
           title :"Registro Exitoso",
           text  :"Ingresa el menu entidades para comenzar"
        }).then(function() {
            $location.path("/entidades")
        });
      }).catch((error) =>{
        vm.showAlert({
           title :"Ocurrio un error :(",
           text  : error.data.mensaje | 'Ocurrio un error :('
        })
      });

    }

    vm.showAlert = (content) => {
      return $mdDialog.show(
          $mdDialog.confirm()
            .title(content.title)
            .textContent(content.text )
            .ok('Entendido'));
     }
}

RegistroClinicaController.$inject = ["$scope","constants","$filter","RegistroServices","$rootScope","$mdDialog","$location"];
angular.module("app.controllers").controller("registroClinicaController", RegistroClinicaController);
