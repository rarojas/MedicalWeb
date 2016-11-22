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
        ]
    })
