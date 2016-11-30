'use strict'
angular.module("app.controllers",["ngMessages"]);
angular.module("app.services",[]);
angular.module("app.directives",[]);

angular.module("medicalWeb",[
,"app.controllers",'app.constants',"app.routes","app.services","app.directives","ngMaterial"
,"angular-loading-bar"
]).config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
  }
])
.run(run);


config.$inject = ["$locationProvider"]
function config($locationProvider){
  $locationProvider.html5Mode({ enabled: true,requireBase: false});
}


run.$inject = ['$rootScope', '$location', '$http',"$window"];
function run($rootScope, $location, $http, $window) {
        $rootScope.logged = false;

        $rootScope.saveToken = function(token) {
          $window.localStorage['user'] = token;
        }

        $rootScope.$on("logged", function(){
          if($rootScope.logged){
            $rootScope.userData = $rootScope.parseJwt($rootScope.user);
          }
        })

        $rootScope.parseJwt = function(token) {
          var base64Url = token.split('.')[1];
          var base64 = base64Url.replace('-', '+').replace('_', '/');
          return JSON.parse($window.atob(base64));
        }

        $rootScope.getToken = function() {
          return $window.localStorage['user'];
        }

        $rootScope.delToken = function() {
          delete $window.localStorage['user']
        }

        var token = $rootScope.getToken();
        if(token) {
            $rootScope.logged = true;
            $rootScope.user  = token;
            $rootScope.$broadcast("logged");
            $location.path("/home")
            $rootScope.userData = $rootScope.parseJwt(token);
        }else{
            $location.path("/")
        }
        if ($rootScope.user) {
          $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.user;
        }
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
          var restrictedPage = $.inArray($location.path(), ['/', '/registro']) === -1;
          var loggedIn = $rootScope.user;
          if (restrictedPage && !loggedIn) {
            $location.path('/');
          }
        });
      }
