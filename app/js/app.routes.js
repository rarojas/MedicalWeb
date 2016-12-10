angular.module("app.routes",["ngRoute"])
.config(function($routeProvider){
  $routeProvider
  .when("/", { templateUrl: '/templates/home.html', title :"MedicalWeb", controller : "HomeController", controllerAs:"vm"})
  .when("/home", { templateUrl: '/templates/main.html', title :"MedicalWeb", })
  .when("/registro", {
    templateUrl: '/templates/registro.html', title :"Registro "
  })
  .when("/registroClinica", {
    templateUrl: '/templates/registroClinica.html', title :"Registro de Clinica"
  })
  .when("/entregaReceta/:idReceta",
    { templateUrl: '/templates/farmacia/entrega.html', title :"Entregar Receta" ,
    controller : "EntregaController", controllerAs:"vm"
  })
  .when("/recetas",
    { templateUrl: '/templates/farmacia/recetas.html', title :"Recetas" ,
    controller : "RecetasController", controllerAs:"vm"
  })
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
  .when("/entidadesServicio", {
        templateUrl: '/templates/shared/entidadesall.html', title :"Entidades"
       ,controller : "EntidadesAllController", controllerAs:"vm"
  })
  .when("/paciente", {
    templateUrl: '/templates/shared/paciente.html',
    title :"Paciente", controller : "PacienteController", controllerAs:"vm"
  })
  .when("/pacientes", {
    templateUrl: '/templates/pacientes.html',
    title :"Pacientes", controller : "PacientesController", controllerAs:"vm"
  })
  .when("/farmacia", {
      templateUrl: '/templates/farmacia/inventario.html',
      title :"Inventario", controller : "InventarioController", controllerAs:"vm"
  })
  .when("/registroDoctor", {
      templateUrl: '/templates/shared/doctor.html', title :"Doctores"
    , controller : "DoctorController", controllerAs:"vm"
  })
  .when("/doctores/:idEntidad", {
      templateUrl: '/templates/doctores.html', title :"Doctores"
    , controller : "DoctoresController", controllerAs:"vm"
  })
  .when("/registroEnfermero", {
      templateUrl: '/templates/shared/enfermero.html', title :"Enfermero"
    , controller : "EnfermeroController", controllerAs:"vm"
  })
  .when("/registroAdministradorCE/:idEntidad", {
      templateUrl: '/templates/shared/administradorce.html', title :"Administrador CE"
    , controller : "AdministradorCEController", controllerAs:"vm"
  })
  .when("/registroFarmacologo", {
      templateUrl: '/templates/shared/farmacologo.html', title :"Farmacologo"
    , controller : "FarmacologoController", controllerAs:"vm"
  })
  .when("/registroLaboratorista", {
      templateUrl: '/templates/shared/laboraResultadoPendienteControllertorista.html', title :"Laboratorista"
    , controller : "LaboratoristaController", controllerAs:"vm"
  })
  .when("/miPerfil", {
      templateUrl: '/templates/shared/miperfil.html', title :"Mi Perfil"
    , controller : "MiPerfilController", controllerAs:"vm"
  })
  .when("/analisis", {
      templateUrl: '/templates/laboratorio/analisis.html',
      title :"Analisis ", controller : "AnalisisController", controllerAs:"vm"
    })
  .when("/realizarAnalisis/:idAnalisis", {
        templateUrl: '/templates/laboratorio/realizarAnalisis.html',
        title :"Analisis ", controller : "RealizarAnalisisController", controllerAs:"vm"
  })
  .when("/resultados", {
        templateUrl: '/templates/laboratorio/resultadosPendientes.html',
        title :"Registro Resultados ", controller : "ResultadosPendienteController", controllerAs:"vm"
  })
  .when("/resultadoPendiente/:idAnalisis", {
        templateUrl: '/templates/laboratorio/registroResultados.html',
        title :"Resultado Pendiente ", controller : "ResultadoPendienteController", controllerAs:"vm"
  })
  .otherwise("/");
});
