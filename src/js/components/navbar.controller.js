function NavBarController($scope,$location,$rootScope) {
    var vm = this;
    vm.logged = $rootScope.logged;
    vm.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    }
    $rootScope.$on("logged", function(){
        vm.logged = $rootScope.logged;
    });

    vm.logout = function() {
      $rootScope.logged = false;
      $rootScope.delToken();
      delete $rootScope.user;
      $rootScope.$broadcast("logged");
      $location.path("/")
    }
}

NavBarController.$inject = ["$scope","$location","$rootScope"];
angular.module("app.controllers").controller("navBarController", NavBarController);
