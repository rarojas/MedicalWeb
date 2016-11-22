'use strict';
angular
    .module('app.constants', [])
    .constant("constants", {
        "url": "http://localhost",
        "port": "8080",
        "tipoAdministracionMedicamentoEnum": [
          { "value": 0, "text": "Oral"},
          { "value": 1, "text": "Cuteana"},
          { "value": 2, "text": "Sublingual"},
          { "value": 3, "text": "Intramuscular"}
        ],
        tipoSolicitudEnum : [
         { value : 0, text :"Atención médica" },
         { value : 1, text :"Análisis" }
       ],
       modulos : [
         {"id": 1,"title":"Consulta", "price": 2500.00  , "description":"12GB Espacio en disco "},
         {"id": 2,"title":"Farmacia", "price": 2500.00  , "description":"12GB Espacio en disco "},
         {"id": 3,"title":"Laboratorio", "price": 2500.00 , "description":"12GB Espacio en disco "}
       ],
       getCPS : 'https://api-codigos-postales.herokuapp.com/v2/buscar'
    })
