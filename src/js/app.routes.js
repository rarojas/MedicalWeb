angular.module("app.routes",["ngRoute"])
.config(function($routeProvider){
  $routeProvider.when("/", {
    temlateUrl: '/templates/home.html'
  })
  .otherwise("/");
});
