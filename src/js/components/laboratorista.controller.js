function LaboratoristaController(RegistroServices,$rootScope,$mdDialog,$location,$routeParams) {
    var vm = this;
    vm.registro = {
      idEntidad : $rootScope.userData.idEntidad
    }
    vm.submit = () => {
        RegistroServices.registroLaboratorista(vm.registro)
        .then((response) => {
          vm.showAlert({
             title :"Registro Exitoso",
             text  :"Accion Exitosa :)"
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
}

LaboratoristaController.$inject = ["RegistroServices","$rootScope","$mdDialog","$location","$routeParams"];
angular.module("app.controllers").controller("LaboratoristaController", LaboratoristaController);


function LaboratoristasController(LaboratorioServices,$routeParams) {
    var vm = this;
    vm.laboratoristas = []

    LaboratorioServices.getLaboratoristasByEntidad()
    .then(function(response){
      vm.laboratoristas = response.data
    })
}

LaboratoristasController.$inject = ["LaboratorioServices","$routeParams"];
angular.module("app.controllers").controller("LaboratoristasController", LaboratoristasController);
