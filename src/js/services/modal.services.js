function ModalServices ($http,constants,$mdDialog){
    var factory = {};

    factory.showAlert = (content) => {
        return $mdDialog.show(
        $mdDialog.confirm()
          .title(content.title)
          .textContent(content.text)
          .ok('Entendido'))
    }

    factory.showAlertError = (content) => {
        return $mdDialog.show(
        $mdDialog.confirm()
          .title(content.title)
          .textContent(content.text)
          .ok('Entendido'))
    }
    return factory;
}

ModalServices.$inject =  ["$http","constants","$mdDialog"]
angular.module("app.services").factory('ModalServices', ModalServices);
