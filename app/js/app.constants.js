'use strict';
angular
    .module('app.constants', [])
    .constant("constants", {
        "url": "/api",
        //"url": "http://localhost:8080/api",
        "ROLE_ADMINISTRADOR":[
          {path:"#home",text:"Inicio"},
          {path:"#registroClinica",text:"Registro Clinica"},
          {path:"#entidades",text:"Entidades"}
        ],
        "ROLE_DOCTOR":[
          {path:"#home",text:"Inicio"},
          {path:"#consultas",text:"Consulta",modulo:"CONSULTA"},
          {path:"#diagnosticos",text:"Diagnosticos",modulo:"CONSULTA"}
        ],
        "ROLE_ENFERMERO":[
          {path:"#home",text:"Inicio"},
          {path:"#pacientes",text:"Pacientes",modulo:"CONSULTA"},
          {path:"#paciente",text:"Nuevo Paciente",modulo:"CONSULTA"}
        ],
        "ROLE_ADMINISTRADOR_CE":[
          {path:"#home",text:"Inicio"},
          {path:"#registroDoctor",text:"Doctores",modulo:"CONSULTA"},
          {path:"#registroFarmacologo",text:"Farmacologo",modulo:"FARMACIA"},
          {path:"#registroEnfermero",text:"Enfermero",modulo:"CONSULTA"},
          {path:"#registroLaboratorista",text:"Laboratorista",modulo:"LABORATORIO"}
        ],
        "ROLE_FARMACIA":[
          {path:"#home",text:"Inicio"},
          {path:"#farmacia",text:"Farmacia",modulo:"FARMACIA"},
          {path:"#recetas",text:"Recetas",modulo:"FARMACIA"}
        ],
        "ROLE_LABORATORIO":[
          {path:"#home",text:"Inicio"},
          {path:"#analisis",text:"Análisis",modulo:"LABORATORIO"},
          {path:"#resultados",text:"Resultados",modulo:"LABORATORIO"}
        ],
        "ROLE_SUPERADMINISTRADOR":[
          {path:"#home",text:"Inicio"},
          {path:"#entidadesServicio",text:"Entidades"}
        ],
        "tipoAdministracionMedicamentoEnum": [
          { "value": 0, "text": "Oral"},
          { "value": 1, "text": "Cuteana"},
          { "value": 2, "text": "Sublingual"},
          { "value": 3, "text": "Intramuscular"}
        ],
        tipoSolicitudEnum : [
         { value : 0, text :"Atencion medica", modulo: "CONSULTA" },
         { value : 1, text :"Analisis" , modulo: "LABORATORIO" }
       ],
       modulos : [
         {"idModulo": 1,"title":"Consulta", "price": 2500.00  , "description":"12GB Espacio en disco "},
         {"idModulo": 2,"title":"Farmacia", "price": 2500.00  , "description":"12GB Espacio en disco "},
         {"idModulo": 3,"title":"Laboratorio", "price": 2500.00 , "description":"12GB Espacio en disco "}
       ],
       getCPS : 'https://api-codigos-postales.herokuapp.com/v2/buscar',
       tipoSanguinioEnum : [
         {"id":1, "text":"O+"},
         {"id":2, "text":"O-"},
         {"id":3, "text":"A+"},
         {"id":4, "text":"A-"},
         {"id":5, "text":"B+"},
         {"id":6, "text":"B-"},
         {"id":7, "text":"AB+"},
         {"id":8, "text":"AB-"}
       ],
       sexoEnum : [
         {"id":1, "text":"Femenino"},
         {"id":2, "text":"Masculino"},
       ],
       tipoEntidadEnum : [
        { value : 0, text :"Sanatorio" },
        { value : 1, text :"Clinica" },
        { value : 2, text :"Hospital" }
      ],
    })
