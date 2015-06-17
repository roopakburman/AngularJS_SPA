'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function ($scope) {
	var myDataRef = new Firebase('https://glowing-fire-7224.firebaseio.com/FilmFest/');
	
	$scope.save = function(){
		var usersRef = myDataRef.child("users");
/* 		if($('nameInput').value ==undefined || $('emailInput').value ==undefined || $('phoneInput').value ==undefined || $('schoolInput').value ==undefined){
				alert("Please do not leave any fields blank!");
			}else{ */
			usersRef.push({
					Name: $('#nameInput').val(),
					Email: $('#emailInput').val(),
					Phone: $('#phoneInput').val(),
					School: $('#schoolInput').val()
				});	
			$('#nameInput').val('');
			$('#emailInput').val('');
			$('#phoneInput').val('');
			$('#schoolInput').val('');
			/* } */
		
	};
	$scope.fetch = function(){
		var ref = new Firebase("https://glowing-fire-7224.firebaseio.com/FilmFest/");
		ref.orderByChild("Name").limitToLast(10).on("child_added", function(snapshot) {
			console.log(snapshot.val());
		});
	}
	
/* 	var ref = new Firebase('https://glowing-fire-7224.firebaseio.com/FilmFest/users/');
	// Attach an asynchronous callback to read the data at our posts reference
	ref.on("child_added", function(snapshot) {
	var newUser = snapshot.val();
	var uName = newUser.Name;
	var email = newUser.Email;
	var phn = newUser.Phone;
	var schl = newUser.School;

		alert("THis just in - /n" + newUser + "/n" + uName + "/n" + email + "/n" +schl);
	}); */
/* 		$('#schoolInput').keypress(function(e){
		var usersRef = myDataRef.child("users");
		if(e.keyCode==13){
			if($('nameInput').value ==null || $('emailInput').value ==null || $('phoneInput').value ==null || $('schoolInput').value ==null){
				alert("Please do not leave any fields blank!");
			}else{
					usersRef.push().set({
							Name: $('#nameInput').val(),
							Email: $('#emailInput').val(),
							Phone: $('#phoneInput').val(),
							School: $('#schoolInput').val()
				}, function(error) {
				if (error) {
					console.log("Data could not be saved." + error);
				} else {
					console.log("Data saved successfully.");
				}
				})	
			}
			
 		 $('#nameInput').val('');
	  $('#emailInput').val('');
	  $('#phoneInput').val('');
	  $('#schoolInput').val(''); 
	};
	}); */
/* 	$('#schoolInput').keypress(function (e) {
	if (e.keyCode == 13) {
	  var Name = $('#nameInput').val();
	  var Email = $('#emailInput').val();
	  var Phone = $('#phoneInput').val();
	  var School = $('#schoolInput').val();
	  myDataRef.push({Name: Name, Email: Email, Phone: Phone, School: School});
	  $('#nameInput').val('');
	  $('#emailInput').val('');
	  $('#phoneInput').val('');
	  $('#schoolInput').val('');
	}
	}); */
/* 	myDataRef.on("child_added", function(snapshot, prevChildKey) {
	var contact = snapshot.val();
	console.log("Name: " + contact.Name);
	console.log("Title: " + contact.Email);
	console.log("Phone: " + contact.Phone);
	console.log("School: " + contact.School);
	console.log("Previous Post ID: " + prevChildKey);
	});
 *//* 	myDataRef.on('child_added', function(snapshot) {
		var contact = snapshot.val();
        displayChatMessage(contact.Name, contact.Email, contact.Phone, contact.School);
      });
      function displayChatMessage(Name, Email, Phone, School) {
        $('<div/>').text(Email).prepend($('<em/>').text(Name+': ')).appendTo($('#messagesDiv'));
         $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight; 
      };
	 */
/* 	 function httpGet(theUrl) {
  var xmlHttp = null;

  xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false);
  xmlHttp.send(null);
  return xmlHttp.responseText;
}


var url = 'https://glowing-fire-7224.firebaseio.com/FilmFest/';
var teams = JSON.parse(httpGet(url));

$("#result").text(teams.CAVALRY.division); */
});