'use strict';
angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
  });
}])

.controller('loginCtrl', loginFunc);
/*With $scope*/
/* function loginFunc($scope) {
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

function loginFunc($scope, $window) {
	$('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

$scope.login = function(){		
		var ref = new Firebase("https://glowing-fire-7224.firebaseio.com/");
		
		ref.authWithPassword({
		email : $scope.user.userName,
		password : $scope.user.password
		}, function(error, authData) {
		if (error) {
		console.log("Login Failed!", error);
		} else {
		console.log("Authenticated successfully with payload:", authData);
			 if(authData.password.email =='r@test.com'){
			 window.location.href = '/app/angularjs_spa/#/view1/';}
			 else{window.location.href = '/app/angularjs_spa/#/view2/';}
		}
		},{
			remember: "sessiononly"
		});

		}


$scope.register = function(){
	    var ref = new Firebase("https://glowing-fire-7224.firebaseio.com/");
		ref.createUser({
		email : $scope.user.usrName,
		password : $scope.user.passwrd
		}, function(error, userData) {
		if (error) {
		console.log("Error creating user:", error);
		} else {
		console.log("Successfully created user account with uid:", userData.uid);
		}

		});
}
};

/* function loginFunc() {
	var vm = this;
  vm.removeFromStock = function(item, index){
	  vm.items.splice(index,1);
  };
  vm.showMessage = function(msg){
	  alert(msg);
	  console.log(msg);
  }; */
  
 