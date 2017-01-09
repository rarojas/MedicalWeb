function MiPerfilController($rootScope,$mdDialog,AuthServices,$routeParams) {
    var vm = this;

    AuthServices.obtenerMiPerfil()
      .then(function(response) {
        vm.miperfil =  response.data
        vm.miperfil.fechaNacimiento = new Date(vm.miperfil.fechaNacimiento)
    });
}

MiPerfilController.$inject = ["$rootScope","$mdDialog","AuthServices","$routeParams"];
angular.module("app.controllers").controller("MiPerfilController", MiPerfilController);
