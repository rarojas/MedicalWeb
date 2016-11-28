function HomeController($scope,$location,$rootScope,constants, HomeServices,$mdDialog) {
    var vm = this;
    vm.login  = function() {
        HomeServices.login($scope.user)
          .then((response) => {
              let data = response.data;
              if(data.estatus == "SUCCESS"){
                $rootScope.logged = true;
                $rootScope.user = $scope.user;
                $rootScope.user.token = data.token;
                $rootScope.$broadcast("logged");
              }
              else{
                if(data.estatus == "INEXISTENTE"){
                  $scope.showAlert();
                }
              }
        }).catch((error) => {
            alert("fallo")
            console.log(error);
        });
    }
    vm.modulos = angular.copy(constants.modulos);

    $scope.showAlert = () => {
        $mdDialog.show(
         $mdDialog.alert()
           .parent(angular.element(document.querySelector('#popupContainer')))
           .clickOutsideToClose(true)
           .title('Error')
           .textContent('Los datos proporcionados no son validos')
           .ariaLabel('Alert Dialog Demo')
           .ok('Entendido')
       );
     }
}

HomeController.$inject = ["$scope","$location","$rootScope","constants","HomeServices","$mdDialog"];
angular.module("app.controllers").controller("homeController", HomeController);
