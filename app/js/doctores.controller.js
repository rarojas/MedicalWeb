function DoctoresController($scope) {
    var vm = this;
    vm.doctores = [{
      name: "doctor 1"
    }]
    $scope.vm = vm;
}

DoctoresController.$inject = ["$scope"];
angular.module("app.controllers").controller("doctoresController", DoctoresController);
