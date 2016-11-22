function NavBarController($scope,$location,$rootScope) {
    var vm = this;
    vm.logged = $rootScope.logged;
    vm.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    }
    $rootScope.$on("logged", function(){
        vm.logged = true;
    });
}

NavBarController.$inject = ["$scope","$location","$rootScope"];
angular.module("app.controllers").controller("navBarController", NavBarController);
