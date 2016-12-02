function SolicitudController($scope,constants,$routeParams,SolicitudServices,$mdDialog) {
    var vm = this;
    vm.solicitud = {
      descripcion : "paciente",
      impresion : "algo",
      tipo_solicitud : 0,
      idPaciente : $routeParams.idPaciente
    }
    vm.tipoSolicitudEnum = constants.tipoSolicitudEnum

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

SolicitudController.$inject = ["$scope","constants","$routeParams","SolicitudServices","$mdDialog"];
angular.module("app.controllers").controller("SolicitudController", SolicitudController);
