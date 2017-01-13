function DoctoresController(DoctorServices) {
    var vm = this;
    vm.doctores = []
    console.log(DoctorServices);
    DoctorServices.getDoctoresByEntidad()
      .then(function(response) {
        vm.doctores = response.data
      });
}

DoctoresController.$inject = ["DoctorServices"];
angular.module("app.controllers").controller("DoctoresController", DoctoresController);

function EnfermerosController(DoctorServices) {
    var vm = this;
    vm.enfermeros = []

    DoctorServices.getEnfermeros()
      .then(function(response){
        vm.enfermeros = response.data
      })
}

EnfermerosController.$inject = ["DoctorServices","$routeParams"];
angular.module("app.controllers").controller("EnfermerosController", EnfermerosController);

function FarmacologosController(InventarioServices) {
    var vm = this;
    vm.farmacologos = []

    InventarioServices.getFarmacologos()
      .then(function(response){
        vm.farmacologos = response.data
      })
}

FarmacologosController.$inject = ["InventarioServices"];
angular.module("app.controllers").controller("FarmacologosController", FarmacologosController);
