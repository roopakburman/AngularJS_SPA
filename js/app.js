'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute', 'myApp.view1', 'myApp.view2', 'myApp.login', 'myApp.version'])

.config(['$routeProvider', function($routeProvider) {
  
  $routeProvider.when('login/login', {
    templateUrl: 'login.html',
    controller: 'loginCtrl'
  });

  $routeProvider.when('/myApp', {
    templateUrl: 'view1.html',
    controller: 'View1Ctrl'
  });
$routeProvider.otherwise({redirectTo: '/login'});
  
}]);
  

