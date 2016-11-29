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
          toId = setTimeout(function(){
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

angular.module("app.directives")
.directive("uniqueEmail", uniqueEmail)
.directive("compareTo", compareTo);
