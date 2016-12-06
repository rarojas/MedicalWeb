function EntidadesController($rootScope,$mdDialog,EntidadesServices){
    var vm = this;

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


function EntidadesAllController($rootScope,$mdDialog,EntidadesServices){
    var vm = this;
    EntidadesServices.getEntidades()
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

EntidadesAllController.$inject = ["$rootScope","$mdDialog","EntidadesServices"];
angular.module("app.controllers").controller("EntidadesAllController", EntidadesAllController);
