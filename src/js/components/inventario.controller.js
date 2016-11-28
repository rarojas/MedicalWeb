function InventarioController($scope,$mdDialog,InventarioServices){
    var vm = this;

    InventarioServices.getMedicamentos({idEntidad :1 })
      .then((response) => {
        vm.medicamentos = response.data
      })
      .catch((error) =>{
          $mdDialog.show($mdDialog.alert()
            .title('Error ')
            .textContent(error.data || 'ocurrio un error')
            .ok('Entendido'));
      });
    vm.medicamentos = [
      {nombre : "Paracetamol", cantidad : 100}
    ]

    vm.agregarMedicamento = () => {
      vm.medicamentos.push({nombre : "Paracetamol", cantidad : 100});
    }

    vm.guardarMedicamento = (medicamento) =>{
        InventarioServices.guardarMedicamento(medicamento).then(() => {
          $mdDialog.show($mdDialog.alert()
            .title('Guardar medicamento')
            .textContent('Accion Exitosa :)')
            .ok('Entendido'));
        }).catch(() =>{
          $mdDialog.show($mdDialog.alert()
            .title('Error :(')
            .textContent('ocurrio un error')
            .ok('Entendido'));
        });
    }
    vm.borrarMedicamento = (medicamento) => {
         var confirm = $mdDialog.confirm()
               .title('Deseas borrar el medicamento ')
               .textContent('Perderas definitivamente toda la informacion del medicamento')
               .ok('Aceptar')
               .cancel('Cancelar');

         $mdDialog.show(confirm).then(function() {
           InventarioServices.eliminarMedicamento(medicamento).then(() => {
             $mdDialog.show($mdDialog.alert()
               .title('Borrar medicamento')
               .textContent('Accion Exitosa :)')
               .ok('Entendido'));
           }).catch(() => {
             $mdDialog.show(
               $mdDialog.alert()
               .title("Error ")
               .textContent('ocurrio un error')
               .ok('Entendido'));
             });
           });
    }

}

InventarioController.$inject = ["$scope","$mdDialog","InventarioServices"];
angular.module("app.controllers").controller("InventarioController", InventarioController);
