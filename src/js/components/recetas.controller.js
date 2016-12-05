function RecetasController($rootScope, SolicitudServices,$mdDialog) {
    var vm = this;
    vm.recetas = []

    SolicitudServices.obtenerRecetas($rootScope.userData.idEntidad)
      .then(function(response){
        vm.recetas = response.data;
    });
}

RecetasController.$inject = ["$rootScope","SolicitudServices","$mdDialog"];
angular.module("app.controllers").controller("RecetasController", RecetasController);
