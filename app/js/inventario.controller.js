function InventarioController($rootScope,$mdDialog,InventarioServices,ModalServices){
    var vm = this;
    var entidad = $rootScope.userData.idEntidad

    InventarioServices.getMedicamentos()
      .then(function(response) {
        vm.medicamentos = response.data
      })
      .catch(function(error)  {
        ModalServices.showAlert({
            title : "Error",
            text  : error.data
        });
      });
    vm.medicamentos = []

    vm.agregarMedicamento = function() {
      vm.medicamentos.push({nombre : "Paracetamol", cantidad : 20 , idEntidad : entidad});
    }

    vm.guardarMedicamento = function(medicamento) {
        var accion = !medicamento.idMedicamento ?
        InventarioServices.guardarMedicamento : InventarioServices.actualizarMedicamento;
        accion(medicamento).then(function(response) {
          medicamento.idMedicamento = response.data.idMedicamento
          ModalServices.showAlert({
              title : "Guardar medicamento",
              text  : "Accion Exitosa"
          });
        }).catch(function(){
            ModalServices.showAlert({
                title : "Error",
                text  : error.data
            });
        });
    }
    vm.borrarMedicamento = function(medicamento) {
         var confirm = $mdDialog.confirm()
               .title('Deseas borrar el medicamento ')
               .textContent('Perderas definitivamente toda la informacion del medicamento')
               .ok('Aceptar')
               .cancel('Cancelar');

         $mdDialog.show(confirm).then(function() {
           InventarioServices.eliminarMedicamento(medicamento).then(function(){
             ModalServices.showAlert({
                 title : "Borrar medicamento",
                 text  : "Accion Exitosa"
             });
           }).catch(() => {
             ModalServices.showAlert({
                 title : "Error",
                 text  : error.data
             });
           });
       });
    }

}

InventarioController.$inject = ["$rootScope","$mdDialog","InventarioServices","ModalServices"];
angular.module("app.controllers").controller("InventarioController", InventarioController);
