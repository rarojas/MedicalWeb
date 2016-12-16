function RecetaController($rootScope,constants,$routeParams,DoctorServices,SolicitudServices,$mdDialog) {
    var vm = this;
    vm.receta = {
      medicamentos : []
    };

    vm.farmacia = $rootScope.userData.modulos.indexOf("FARMACIA") != -1

    DoctorServices.obtenerMedicamentosDisponibles().then(function(response){
      vm.medicamentos =  response.data
    });
    vm.addMedicamento = function() {
      vm.receta.medicamentos.push({
        idMedicamento: 11,
        inicio : new Date(),
        fin : new Date(),
      });
    };
    vm.removeMedicamento = function(medicamento) {
      vm.receta.medicamentos.pop(medicamento);
    };

    vm.submit = function(){
      SolicitudServices.crearReceta(vm.receta)
      .then((response) => {
        vm.showAlert({
           title :"Registro Exitoso",
           text  :"Receta creada :)"
        })
      }).catch((error) =>{
        vm.showAlert({
           title :"Ocurrio un error :(",
           text  : error.data.mensaje
        })
      });
    }
    vm.showAlert = (content) => {
      return $mdDialog.show(
          $mdDialog.confirm()
            .title(content.title)
            .textContent(content.text)
            .ok('Entendido'));
     }

    vm.minDate = new Date();
    vm.tipoAdministracionMedicamentoEnum = constants.tipoAdministracionMedicamentoEnum;

    DoctorServices.obtenerDiagnostico($routeParams.idDiagnostico)
      .then(function(response){
        vm.diagnostico = response.data
        vm.receta.idReceta = vm.diagnostico.idDiagnostico
    });
}

RecetaController.$inject = ["$rootScope","constants","$routeParams","DoctorServices","SolicitudServices","$mdDialog"];
angular.module("app.controllers").controller("RecetaController", RecetaController);
