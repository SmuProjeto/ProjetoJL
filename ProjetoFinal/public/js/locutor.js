'use strict';
var meeting;
var hostLocutor = LOCUTOR; 
$(document).on('click', "#iniciar", function () { 
		init();
	});


function init() {
	var image = document.getElementById("icone_locutor");
	image.style.visibility="visible";
	meeting = new Meeting(hostLocutor,true);
	meeting.onLocalVideo(function(stream) {
	        
	        document.querySelector('#localVideo').src = window.URL.createObjectURL(stream);
	        
	        $("#micMenu").on("click",function callback(e) {
				toggleMic();
    		});
    		
    		$("#videoMenu").on("click",function callback(e) {
				toggleVideo();
    		});

			$("#localVideo").prop('muted', true);

	    }
	);
	
	
    var room = "ouvirRadioJL";
	meeting.joinRoom(room);
	
}

