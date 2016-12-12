function ResultadosPendienteController($rootScope,constants, LaboratorioServices,$mdDialog,$routeParams) {
    var vm = this;
    vm.resultados = []

    LaboratorioServices.resultadosPendiente()
      .then(function(response){
        vm.resultados = response.data;
    });
}

ResultadosPendienteController.$inject = ["$rootScope","constants","LaboratorioServices","$mdDialog","$routeParams"];
angular.module("app.controllers").controller("ResultadosPendienteController", ResultadosPendienteController);

function ResultadoPendienteController(DoctorServices,constants, LaboratorioServices,$mdDialog,$routeParams) {
    var vm = this;
    vm.resultado = {
        idResultado : $routeParams.idAnalisis, evidencias : []
    }

    DoctorServices.obtenerConsulta(vm.resultado.idResultado)
      .then(function(response){
        vm.consulta =  response.data
      })

    vm.addEvidencia = function(){
      vm.resultado.evidencias.push({  });
    }

    vm.removeEvidencia = function(muestra){
      vm.resultado.evidencias.pop(muestra)
    }

    vm.submit = function() {
      LaboratorioServices.crearResultado(vm.resultado)
        .then(function(response) {
            ModalServices.showAlert({
                title : "Analisis Creado", text : "Acción exitosa"
            });
        })
        .catch(function(error){
            ModalServices.showAlert({
                title : "Algo salio mal :(", text : ""
            });
        });
    }

}

ResultadoPendienteController.$inject = ["DoctorServices","constants","LaboratorioServices","$mdDialog","$routeParams"];
angular.module("app.controllers").controller("ResultadoPendienteController", ResultadoPendienteController);
