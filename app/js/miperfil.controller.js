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


function CambiarPasswordController(AuthServices,ModalServices){
  var vm = this;

  this.submit = function() {
    AuthServices.cambiarPassword(vm.changePassword)
      .then(function(response){
          ModalServices.showAlert({
              title : "Password Cambiado!!!", text : "Acción exitosa!!!"
          }).then(function() {
            window.history.back();
          });
        }).catch(function (response) {
          ModalServices.showAlert({
              title : "Error!!!", text : "El password anterior no es el correcto!"
          })
      });
  }
}

MiPerfilController.$inject = ["AuthServices","ModalServices"];
angular.module("app.controllers").controller("CambiarPasswordController", CambiarPasswordController);
