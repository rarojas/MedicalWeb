function HomeController($scope,$location,$rootScope,constants) {
    var vm = this;
    vm.login  = function(){
      $rootScope.logged = true;
      $rootScope.$broadcast("logged");
      $location.path("/registro")
    }
    vm.modulos = angular.copy(constants.modulos);

}

HomeController.$inject = ["$scope","$location","$rootScope","constants"];
angular.module("app.controllers").controller("homeController", HomeController);
