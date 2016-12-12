function SolicitudController(constants,$routeParams,SolicitudServices,$mdDialog,PacienteServices,$rootScope) {
    var vm = this;

    PacienteServices.getPaciente($routeParams.idPaciente)
      .then(function(response){
        vm.paciente = response.data
      });

    vm.solicitud = {
      tipo_solicitud : 0,
      idPaciente : $routeParams.idPaciente
    }
    var modulos = $rootScope.userData.modulos;
    var tipoSolicitud = constants.tipoSolicitudEnum;
    vm.tipoSolicitudEnum  = tipoSolicitud.filter(function(item){
      return modulos.indexOf(item.modulo) != -1;
    });

    vm.submit = function(){
      SolicitudServices.crearSolicitud(vm.solicitud)
      .then((response) => {
        vm.showAlert({
           title :"Registro Exitoso",
           text  :"Solicitud creada"
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


SolicitudController.$inject = ["constants","$routeParams","SolicitudServices","$mdDialog","PacienteServices","$rootScope"];
angular.module("app.controllers").controller("SolicitudController", SolicitudController);
