function MiPerfilController(AuthServices) {
    var vm = this;

    AuthServices.obtenerMiPerfil()
      .then(function(response) {
        vm.miperfil =  response.data
        vm.miperfil.fechaNacimiento = new Date(vm.miperfil.fechaNacimiento)
    });
}

MiPerfilController.$inject = ["AuthServices"];
angular.module("app.controllers").controller("MiPerfilController", MiPerfilController);


function CambiarPasswordController(AuthServices){
  var vm = this;

  this.submit = function() {
    AuthServices.cambiarPassword(vm.changePassword)
      .then(function(response){

      }).catch(function (response) {

      });
  }
}

MiPerfilController.$inject = ["AuthServices"];
angular.module("app.controllers").controller("CambiarPasswordController", CambiarPasswordController);
