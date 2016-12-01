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



angular.module("app.directives")
.directive("uniqueEmail", uniqueEmail)
.directive("phone", phoneValid)
.directive("rfc", rfcValid)
.directive("codigoPostal", codigoPostal)
.directive("compareTo", compareTo);
