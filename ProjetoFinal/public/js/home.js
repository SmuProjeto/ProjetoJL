'use strict';

var roomUrl;

$( document ).ready(function() {
    

   $(document).on('click', "#icone_radio", function () { 
		enterRoom();
		
   });

}); 

function enterRoom() {
    var room = "ouvirRadioJL";
	roomUrl =  'http://'+window.location.host+'/home/'+room;
	window.location.href = roomUrl;
}
