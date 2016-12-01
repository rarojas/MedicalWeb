angular.module("app.routes",["ngRoute"])
.config(function($routeProvider){
  $routeProvider
  .when("/", { templateUrl: '/templates/home.html', title :"MedicalWeb", controller : "HomeController", controllerAs:"vm"})
  .when("/home", { templateUrl: '/templates/main.html', title :"MedicalWeb", })
  .when("/registro", { templateUrl: '/templates/registro.html', title :"Registro " })
  .when("/registroClinica", { templateUrl: '/templates/registroClinica.html', title :"Registro de Clinica" })
  .when("/receta", { templateUrl: '/templates/receta.html', title :"Generar Receta" })
  .when("/solicitud/:idPaciente", {
      templateUrl: '/templates/shared/solicitud.html',
      title :"Solicitd de Servicio", controller : "SolicitudController", controllerAs:"vm"
    })
  .when("/entidades", { templateUrl: '/templates/shared/entidades.html', title :"Entidades" })
  .when("/paciente/:idEntidad", {
    templateUrl: '/templates/shared/paciente.html',
    title :"Paciente", controller : "PacienteController", controllerAs:"vm"
  })
  .when("/pacientes/:idEntidad", {
    templateUrl: '/templates/pacientes.html',
    title :"Pacientes", controller : "PacientesController", controllerAs:"vm"
  })
  .when("/farmacia/:idEntidad", {
      templateUrl: '/templates/farmacia/inventario.html',
      title :"Inventario", controller : "InventarioController", controllerAs:"vm"
  })
  .when("/registroDoctor/:idEntidad", {
      templateUrl: '/templates/shared/doctor.html', title :"Doctores"
    , controller : "DoctorController", controllerAs:"vm"
  })
  .when("/doctores/:idEntidad", {
      templateUrl: '/templates/doctores.html', title :"Doctores"
    , controller : "DoctoresController", controllerAs:"vm"
  })
  .otherwise("/");
});
