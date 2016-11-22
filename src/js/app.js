'use strict'
angular.module("app.controllers",["ngMessages"]);
angular.module("app.services",[]);
angular.module("app.directives",[]);

angular.module("medicalWeb",[
,"app.controllers",'app.constants',"app.routes","app.services","app.directives"
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


run.$inject = ['$rootScope', '$location', '$http'];
function run($rootScope, $location, $http) {
        // keep user logged in after page refresh
       // $rootScope.globals = $cookieStore.get('globals') || {};
        $rootScope.logged = false;
        $rootScope.$on("logged", function(){
          if(!$rootScope.logged)
            $location.path('/');
        });
//         if ($rootScope.globals.currentUser) {
//             $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
//         }
//         $rootScope.$on('$locationChangeStart', function (event, next, current) {
//             // redirect to login page if not logged in and trying to access a restricted page
//             var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
//             var loggedIn = $rootScope.globals.currentUser;
//             if (restrictedPage && !loggedIn) {
//                  $location.path('/login');
//             }
//         });
    }
