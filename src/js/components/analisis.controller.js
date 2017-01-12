function AnalisisController($rootScope,constants, LaboratorioServices,$mdDialog,$routeParams) {
    var vm = this;
    vm.analisis = []

    LaboratorioServices.obtenerAnalisis()
      .then(function(response){
        vm.analisis = response.data;
    });
}

AnalisisController.$inject = ["$rootScope","constants","LaboratorioServices","$mdDialog","$routeParams"];
angular.module("app.controllers").controller("AnalisisController", AnalisisController);

function RealizarAnalisisController(LaboratorioServices,DoctorServices,$routeParams,ModalServices) {
    var vm = this;
    vm.analisis = {
      idAnalisis : $routeParams.idAnalisis,
      muestras : []
    }

    DoctorServices.obtenerConsulta(vm.analisis.idAnalisis)
      .then(function(response){
        vm.consulta =  response.data
        vm.analisis.idPaciente = vm.consulta.idPaciente
      })

    vm.addMuestra = function(){
      vm.analisis.muestras.push({
          numero : 1
      })
    }

    vm.removeMuestra = function(muestra){
      vm.analisis.muestras.pop(muestra)
    }

    vm.submit = function() {
      LaboratorioServices.crearAnalisis(vm.analisis)
      .then(function(response){
          ModalServices.showAlert({
              title : "Analisis Creado", text : "Acción exitosa"
          }).then(function() {
            window.history.back();
          })
      }).catch(function(error){
          ModalServices.showAlert({
              title : "Algo salio mal :(", text : error.data.mensaje
          })
      })
    }
}

RealizarAnalisisController.$inject = ["LaboratorioServices","DoctorServices","$routeParams","ModalServices"];
angular.module("app.controllers").controller("RealizarAnalisisController", RealizarAnalisisController);
