function ConsultasController($rootScope,constants, DoctorServices,$mdDialog,$routeParams) {
    var vm = this;
    vm.consultas = []

    DoctorServices.obtenerConsultas($rootScope.userData.idEntidad)
      .then(function(response){
        vm.consultas = response.data;
    });
}

ConsultasController.$inject = ["$rootScope","constants","DoctorServices","$mdDialog","$routeParams"];
angular.module("app.controllers").controller("ConsultasController", ConsultasController);


function DiagnosticoController($rootScope,constants, DoctorServices,$mdDialog,$routeParams,SolicitudServices) {
    var vm = this;
    vm.diagnostico = {
      idDiagnostico : $routeParams.idSolicitud,
      idDoctor : $rootScope.userData.userId
    }

    DoctorServices.obtenerConsulta(vm.diagnostico.idDiagnostico)
      .then(function(response){
        vm.consulta = response.data
        vm.diagnostico.idPaciente = vm.consulta.idPaciente
    });

    vm.submit = function(){
      SolicitudServices.crearDiagnostico(vm.diagnostico)
      .then((response) => {
        vm.showAlert({
           title :"Registro Exitoso",
           text  :"Diagnotico creado :)"
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
}

DiagnosticoController.$inject = ["$rootScope","constants","DoctorServices","$mdDialog","$routeParams","SolicitudServices"];
angular.module("app.controllers").controller("DiagnosticoController", DiagnosticoController);


function DiagnosticosController($rootScope,constants, DoctorServices,$mdDialog,$routeParams,SolicitudServices) {
    var vm = this;
    vm.diagnosticos = []

    DoctorServices.obtenerDiagnosticos()
      .then(function(response){
        vm.diagnosticos = response.data
    });
}

DiagnosticosController.$inject = ["$rootScope","constants","DoctorServices","$mdDialog","$routeParams","SolicitudServices"];
angular.module("app.controllers").controller("DiagnosticosController", DiagnosticosController);
