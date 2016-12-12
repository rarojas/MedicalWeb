function NavBarController($scope,$location,$rootScope,constants) {
    var vm = this;
    vm.logged = $rootScope.logged;
    vm.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    }

    $rootScope.$on("logged", function(){
        vm.logged = $rootScope.logged;
        if($rootScope.logged){
            var modulos = constants[$rootScope.userData.role];
            var modulosContratados = $rootScope.userData.modulos;
            var filtered = modulos.filter(function(item) {
                if(!item.modulo)
                  return true;
                return modulosContratados.indexOf(item.modulo) != -1
            });
            console.log("filtrado");
            vm.modulos = filtered;
          }
       });

    vm.modulos = []
    if($rootScope.logged){
      var modulos = constants[$rootScope.userData.role];
      var modulosContratados = $rootScope.userData.modulos;
      var filtered = modulos.filter(function(item) {
          if(!item.modulo)
            return true;
          return modulosContratados.indexOf(item.modulo) != -1
      });
      console.log("filtrado");
      vm.modulos = filtered;
    }





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
