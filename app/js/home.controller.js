function HomeController($scope,$location,$rootScope,constants, HomeServices,$mdDialog,$window) {
    var vm = this;
    vm.login  = function() {
        HomeServices.login(vm.usuario)
          .then((response) => {
              let data = response.data;
              if(data.estatus == "ACTIVO"){
                $rootScope.logged = true;
                $rootScope.user = data.token;
                $rootScope.$broadcast("logged");
                if(vm.usuario.remember)
                  $rootScope.saveToken(data.token);
                $location.path("/home");
              }
              else{
                if(data.estatus == "INEXISTENTE"){
                  $scope.showAlert("Los datos proporcionados nu son validos");
                }else{
                  if(data.estatus == "BAD_CREDENTIAL") {
                    $scope.showAlert("Los datos proporcionados nu son validos");
                  }
                }
              }
        }).catch((error) => {
            $scope.showAlert("Ocurrio un error consulte a su medico ");
            console.log(error);
        });
    }
    vm.modulos = angular.copy(constants.modulos);

    $scope.showAlert = (text) => {
        $mdDialog.show(
         $mdDialog.alert()
           .parent(angular.element(document.querySelector('#popupContainer')))
           .clickOutsideToClose(true)
           .title('Error')
           .textContent(text)
           .ariaLabel('Aler')
           .ok('Entendido')
       );
     }
}

HomeController.$inject = ["$scope","$location","$rootScope","constants","HomeServices","$mdDialog","$window"];
angular.module("app.controllers").controller("HomeController", HomeController);
