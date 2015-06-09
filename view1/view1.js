'use strict';
angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', View1Func);
/*With $scope*/
/* function View1Func($scope) {
$scope.something = 'hey there!';
 $scope.items = [{
    name: 'Scuba Diving Kit',
    id: 7297510
  },{
    name: 'Snorkel',
    id: 0278916
  },{
    name: 'Wet Suit',
    id: 2389017
  },{
    name: 'Beach Towel',
    id: 1000983
  }];
} */
/*With this keyword*/
function View1Func() {
	var vm = this;
  vm.removeFromStock = function(item, index){
	  vm.items.splice(index,1);
  };
  vm.showMessage = function(msg){
	  alert(msg);
	  console.log(msg);
  };
  
  vm.items = [{
    name: 'Scuba Diving Kit',
    id: 7297510
  },{
    name: 'Snorkel',
    id: 0278916
  },{
    name: 'Wet Suit',
    id: 2389017
  },{
    name: 'Beach Towel',
    id: 1000983
  }];
  }
/* 
function myFirstService() {
	this.sayHello = function(name){
		return 'Hello there' + name;
	};
	
}

function View1Ctrl (myFirstService){
	this.sayHello = function(name){
		myFirstService.sayHello(name);
	}
}

angular
.module('myApp')
.service('myFirstService', myFirstService); */