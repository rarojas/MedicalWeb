angular.module("app.routes",["ngRoute"])
.config(function($routeProvider){
  $routeProvider
  .when("/", { templateUrl: '/templates/home.html', title :"MedicalWeb", controller : "HomeController", controllerAs:"vm"})
  .when("/home", { templateUrl: '/templates/main.html', title :"MedicalWeb", })
  .when("/registro", { templateUrl: '/templates/registro.html', title :"Registro " })
  .when("/registroClinica", { templateUrl: '/templates/registroClinica.html', title :"Registro de Clinica" })
  .when("/receta", { templateUrl: '/templates/receta.html', title :"Generar Receta" })
  .when("/solicitud", { templateUrl: '/templates/solicitud.html', title :"Generar solicitud" })
  .when("/paciente", { templateUrl: '/templates/paciente.html', title :"Registro Paciente" })
  .when("/farmacia", { templateUrl: '/templates/farmacia/inventario.html', title :"Inventario"  }) 
  .when("/doctores", { templateUrl: '/templates/shared/doctores.html', title :"Doctores"  })
  .otherwise("/");
});
