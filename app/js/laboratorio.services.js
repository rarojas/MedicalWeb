function LaboratorioServices ($http,constants){

  this.obtenerAnalisis = function(){
    return $http({
        method: 'GET',
        url: constants.url +  '/laboratorio'
    });
  }

  this.resultadosPendiente = function(){
      return $http({
          method: 'GET',
          url: constants.url +  '/laboratorio/resultadosPendiente'
      });
  }

  this.crearAnalisis = function(analisis){
    return $http({
        method: 'POST',
        url: constants.url +  '/laboratorio',
        data: analisis
    });
  }
  this.crearResultado = function(resultado){
    return $http({
        method: 'POST',
        url: constants.url +  '/laboratorio/resultadosPendiente',
        headers: {'Content-Type': undefined },
        transformRequest: function (data) {
               var formData = new FormData();
               formData.append("model", angular.toJson(data));
               for (var i = 0; i < data.evidencias.length; i++) {
                   formData.append("files", data.evidencias[i].file);
               }
               return formData;
           },
        data:  resultado
    });
  }
}

LaboratorioServices.$inject =  ["$http","constants"]
angular.module("app.services").service('LaboratorioServices', LaboratorioServices);
