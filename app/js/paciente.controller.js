function PacienteController($rootScope,constants, PacienteServices,$mdDialog,$routeParams) {
    var vm = this;
    vm.paciente = {
      idEntidad : $rootScope.userData.idEntidad
    };
    vm.tipoSanguinioEnum = constants.tipoSanguinioEnum
    vm.sexoEnum =  constants.sexoEnum
    vm.religionesEnum = constants.religionesEnum

    vm.crearPaciente = function(){
      PacienteServices.crearPaciente(vm.paciente).then(function(response){
        $mdDialog.show($mdDialog.alert()
          .title('Crear Paciente')
          .textContent('Accion Exitosa :)')
          .ok('Entendido'))
          .then(function() {
            window.history.back();
          });
        }).catch(function(){
          $mdDialog.show($mdDialog.alert()
            .title('Error :(')
            .textContent('ocurrio un error')
            .ok('Entendido'));
        });
    }
}


PacienteController.$inject = ["$scope","constants","PacienteServices","$mdDialog","$routeParams"];
angular.module("app.controllers").controller("PacienteController", PacienteController);
