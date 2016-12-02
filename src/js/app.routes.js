angular.module("app.routes",["ngRoute"])
.config(function($routeProvider){
  $routeProvider
  .when("/", { templateUrl: '/templates/home.html', title :"MedicalWeb", controller : "HomeController", controllerAs:"vm"})
  .when("/home", { templateUrl: '/templates/main.html', title :"MedicalWeb", })
  .when("/registro", { templateUrl: '/templates/registro.html', title :"Registro " })
  .when("/registroClinica", { templateUrl: '/templates/registroClinica.html', title :"Registro de Clinica" })
  .when("/receta/:idDiagnostico",
    { templateUrl: '/templates/shared/receta.html', title :"Generar Receta" ,
    controller : "RecetaController", controllerAs:"vm"
  })
  .when("/diagnostico/:idSolicitud", {
      templateUrl: '/templates/shared/diagnostico.html',
      title :"Diagnotico ", controller : "DiagnosticoController", controllerAs:"vm"
    })
  .when("/diagnosticos", {
        templateUrl: '/templates/shared/diagnosticos.html',
        title :"Diagnoticos", controller : "DiagnosticosController", controllerAs:"vm"
  })
  .when("/consultas", {
      templateUrl: '/templates/shared/consultas.html',
      title :"Consultas ", controller : "ConsultasController", controllerAs:"vm"
    })
  .when("/solicitud/:idPaciente", {
      templateUrl: '/templates/shared/solicitud.html',
      title :"Solicitud de Servicio", controller : "SolicitudController", controllerAs:"vm"
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
  .when("/registroEnfermero/:idEntidad", {
      templateUrl: '/templates/shared/enfermero.html', title :"Enfermero"
    , controller : "EnfermeroController", controllerAs:"vm"
  })
  .when("/registroFarmacologo/:idEntidad", {
      templateUrl: '/templates/shared/farmacologo.html', title :"Farmacologo"
    , controller : "FarmacologoController", controllerAs:"vm"
  })
  .otherwise("/");
});
