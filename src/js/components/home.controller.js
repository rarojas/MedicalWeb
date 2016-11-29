function HomeController($scope,$location,$rootScope,constants, HomeServices,$mdDialog) {
    var vm = this;
    vm.login  = function() {
        HomeServices.login($scope.user)
          .then((response) => {
              let data = response.data;
              if(data.estatus == "ACTIVO"){
                $rootScope.logged = true;
                $rootScope.user = $scope.user;
                $rootScope.user.token = data.token;
                $rootScope.$broadcast("logged");
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

HomeController.$inject = ["$scope","$location","$rootScope","constants","HomeServices","$mdDialog"];
angular.module("app.controllers").controller("homeController", HomeController);
