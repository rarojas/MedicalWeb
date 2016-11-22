function HomeController($scope,$location) {
    var vm = this;
    vm.login  = function(){
      $location.path("templates/shared/solicitud.html");
    }
    $scope.vm = vm;
}

HomeController.$inject = ["$scope","$location"];
angular.module("app.controllers").controller("homeController", HomeController);
