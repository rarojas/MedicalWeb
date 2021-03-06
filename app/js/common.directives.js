var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};

var uniqueEmail = function($http,constants) {
  var toId;
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attr, ctrl) {
      scope.$watch(attr.ngModel, function(value) {
        if(value) {
          if(toId) clearTimeout(toId);
          toId = setTimeout(function() {
            $http.get(constants.url + '/registro/valid/email?email=' + value , {  ignoreLoadingBar: true})
              .success(function(data) {
                ctrl.$setValidity('uniqueEmail', data);
            });
          }, 200);
        }
      })
    }
  }
};

var PHONE_REGEXP = /^([1-9]\d{9}|[1-9]\d{2}-\d{3}-\d{4})$/;
var phoneValid = function() {
    return {
        restrice: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            angular.element(element).bind('blur', function() {
                var value = this.value;
                ctrl.$setValidity('phone', PHONE_REGEXP.test(value));
            });
        }
    }
};

var RFC_REGEXP = /^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/;
var rfcValid = function() {
    return {
        restrice: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            angular.element(element).bind('blur', function() {
                var value = this.value;
                ctrl.$setValidity('rfc', RFC_REGEXP.test(value));
            });
        }
    }
};

var CP_REGEXP = /^(\d{5})$/;
var codigoPostal = function() {
    return {
        restrice: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            angular.element(element).bind('blur', function() {
                var value = this.value;
                ctrl.$setValidity('codigoPostal', CP_REGEXP.test(value));
            });
        }
    }
};
var fileModel =  function ($parse) {
        return {
           restrict: 'A',
           link: function(scope, element, attrs) {
              var model = $parse(attrs.fileModel);
              var modelSetter = model.assign;

              element.bind('change', function(){
                 scope.$apply(function(){
                    console.log(element[0].files[0])
                    modelSetter(scope, element[0].files[0]);
                 });
              });
           }
        };
}


var pacienteLabel = function () {
      return {
          template: '<h3>Paciente {{pacienteInfo.nombre | capitalize }} {{pacienteInfo.apellido_paterno  | capitalize }} {{pacienteInfo.apellido_materno | capitalize }} </h3>',
          restrict: 'E',
          scope: {
            pacienteInfo : '=paciente'
          }
    };
}

var capitalize = function() {
  return function(input, scope) {
    if (input != undefined)
      input = input.toLowerCase();
    else
      input = '';
    if(input.length > 2)
      return input.substring(0,1).toUpperCase() + input.substring(1);
    else
      return input;
  };
};

var passwordValidation = function() {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function(scope, elem, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          var pwdValidLength, pwdHasLetter, pwdHasNumber;
          pwdValidLength = (viewValue && viewValue.length >= 6 ? true : false);
          pwdHasLetter = (viewValue && /[A-z]/.test(viewValue)) ? true : false;
          pwdHasNumber = (viewValue && /\d/.test(viewValue)) ? true : false;
          if( pwdValidLength && pwdHasLetter && pwdHasNumber ) {
            ctrl.$setValidity('pwd', true);
          } else {
            ctrl.$setValidity('pwd', false);
          }
          return viewValue;
      });
    }
  }
}

var CURP_REGEX = /^[a-zA-Z]{4}\d{6}[a-zA-Z]{6}\d{2}$/;
var curpRegex = function() {
    return {
        restrice: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            angular.element(element).bind('blur', function() {
                var value = this.value;
                ctrl.$setValidity('curp', CURP_REGEX.test(value));
            });
        }
    }
};


var onlyLetters  = function() {
  return {
    require: 'ngModel',
    link: function (scope, element, attr, ngModelCtrl) {
      function fromUser(text) {
        var transformedInput = text.replace(/[^A-Za-z ]/g, '');
        if(transformedInput !== text) {
            ngModelCtrl.$setViewValue(transformedInput);
            ngModelCtrl.$render();
        }
        return transformedInput;
      }
      ngModelCtrl.$parsers.push(fromUser);
    }
  }
};

var onlyAlpha  = function() {
  return {
    require: 'ngModel',
    link: function (scope, element, attr, ngModelCtrl) {
      function fromUser(text) {
        var transformedInput = text.replace(/[^A-Za-z0-9 ]/g, '');
        if(transformedInput !== text) {
            ngModelCtrl.$setViewValue(transformedInput);
            ngModelCtrl.$render();
        }
        return transformedInput;
      }
      ngModelCtrl.$parsers.push(fromUser);
    }
  }
};

var onlyNumbers  = function() {
  return {
    require: 'ngModel',
    link: function (scope, element, attr, ngModelCtrl) {
      function fromUser(text) {
        var transformedInput = text.replace(/[^0-9 ]/g, '');
        if(transformedInput !== text) {
            ngModelCtrl.$setViewValue(transformedInput);
            ngModelCtrl.$render();
        }
        return transformedInput;
      }
      ngModelCtrl.$parsers.push(fromUser);
    }
  }
};


angular.module("app.directives")
.directive("onlyLetters",onlyLetters)
.directive("onlyAlpha",onlyAlpha)
.directive("onlyNumbers",onlyNumbers)
.directive("fileModel", fileModel)
.directive("curp",curpRegex)
.directive("uniqueEmail", uniqueEmail)
.directive("phone", phoneValid)
.directive("rfc", rfcValid)
.directive("codigoPostal", codigoPostal)
.directive("pacienteLabel",pacienteLabel)
.directive("passwordValidation", passwordValidation)
.filter("capitalize", capitalize)
.directive("compareTo", compareTo);
