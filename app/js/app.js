'use strict'
angular.module("app.controllers",["ngMessages"]);
angular.module("app.services",[]);
angular.module("app.directives",[]);

angular.module("medicalWeb",[
,"app.controllers",'app.constants',"app.routes","app.services","app.directives","ngMaterial"
,"angular-loading-bar",'ui.bootstrap'
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
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + $rootScope.user;
            $rootScope.logged = true;
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
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + $rootScope.user;

        if(token) {
            $rootScope.user = token;
            $rootScope.logged = true;
            $rootScope.$broadcast("logged");
            if($location.path() === '/')
              $location.path("/home")
        }else{
            $location.path("/")
        }

        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
          $rootScope.title = current.$$route.title;
        });

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
          var restrictedPage = $.inArray($location.path(), ['/', '/registro']) === -1;
          var loggedIn = $rootScope.user;
          if (restrictedPage && !loggedIn) {
            $location.path('/');
          }
        });
      }
