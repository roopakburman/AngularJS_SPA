'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', fireBaseFunc);

function fireBaseFunc(){
	
	var myDataRef = new Firebase('https://glowing-fire-7224.firebaseio.com/FilmFest/');
	$('#schoolInput').keypress(function (e) {
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
	});
	
	myDataRef.on("child_added", function(snapshot, prevChildKey) {

	var newPost = snapshot.val();
	console.log("Name: " + newPost.Name);
	console.log("Title: " + newPost.Email);
	console.log("Phone: " + newPost.Phone);
	console.log("School: " + newPost.School);
	console.log("Previous Post ID: " + prevChildKey);

	});
/* 	myDataRef.on('child_added', function(snapshot) {
		var contact = snapshot.val();
        displayChatMessage(contact.Name, contact.Email, contact.Phone, contact.School);
      });
      function displayChatMessage(Name, Email, Phone, School) {
        $('<div/>').text(Email).prepend($('<em/>').text(Name+': ')).appendTo($('#messagesDiv'));
         $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight; 
      };
	 */
}
