function RecetaController($rootScope,constants,$routeParams,DoctorServices,SolicitudServices,$mdDialog) {
    var vm = this;
    vm.receta = {
      medicamentos : []
    };

    vm.farmacia = $rootScope.userData.modulos.indexOf("FARMACIA") != -1

    DoctorServices.obtenerMedicamentosDisponibles().then(function(response){
      vm.medicamentos =  response.data
    });
    vm.minDate = new Date();
    vm.hasta = new Date();
    vm.hasta.setDate(vm.hasta.getDate() + 1);



    vm.addMedicamento = function() {
      vm.receta.medicamentos.push({
        idMedicamento: null,
        desde : vm.minDate,
        hasta : new Date(),
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
        }).then(function() {
          window.history.back();
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

    vm.tipoAdministracionMedicamentoEnum = constants.tipoAdministracionMedicamentoEnum;

    DoctorServices.obtenerDiagnostico($routeParams.idDiagnostico)
      .then(function(response){
        vm.diagnostico = response.data
        vm.receta.idReceta = vm.diagnostico.idDiagnostico
        vm.receta.idPaciente = vm.diagnostico.idPaciente
    });
}

RecetaController.$inject = ["$rootScope","constants","$routeParams","DoctorServices","SolicitudServices","$mdDialog"];
angular.module("app.controllers").controller("RecetaController", RecetaController);
