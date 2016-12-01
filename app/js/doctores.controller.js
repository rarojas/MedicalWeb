function DoctoresController(DoctorServices,$routeParams) {
    var vm = this;
    vm.doctores = []

    DoctorServices.getDoctoresByEntidad($routeParams.idEntidad)
    .then(function(response){
      vm.doctores = response.data
    })
}

DoctoresController.$inject = ["DoctorServices","$routeParams"];
angular.module("app.controllers").controller("DoctoresController", DoctoresController);
