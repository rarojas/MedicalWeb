function EntidadesController($rootScope,$mdDialog,EntidadesServices){
    var vm = this;
    var entidad = 8

    EntidadesServices.getEntidades($rootScope.userData.userId)
      .then((response) => {
        vm.entidades = response.data
      })
      .catch((error) =>{
          $mdDialog.show($mdDialog.alert()
            .title('Error ')
            .textContent(error.data || 'ocurrio un error')
            .ok('Entendido'));
      });
    vm.entidades = [ ]

}

EntidadesController.$inject = ["$rootScope","$mdDialog","EntidadesServices"];
angular.module("app.controllers").controller("EntidadesController", EntidadesController);
