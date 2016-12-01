function NavBarController($scope,$location,$rootScope,constants) {
    var vm = this;
    vm.logged = $rootScope.logged;
    vm.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    }

    $rootScope.$on("logged", function(){
        vm.logged = $rootScope.logged;
        if($rootScope.logged)
        vm.modulos = constants[$rootScope.userData.role];
    });

    vm.modulos = []
    if($rootScope.logged)
      vm.modulos = constants[$rootScope.userData.role];



    vm.logout = function() {
      $rootScope.logged = false;
      $rootScope.delToken();
      delete $rootScope.user;
      $rootScope.$broadcast("logged");
      $location.path("/")
    }
}

NavBarController.$inject = ["$scope","$location","$rootScope","constants"];
angular.module("app.controllers").controller("NavBarController", NavBarController);
