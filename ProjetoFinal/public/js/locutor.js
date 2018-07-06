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

	meeting.onLocalVideo(function(stream) {}); 
	
	meeting.onRemoteVideo(function(stream, participantID) {});
	
	meeting.onParticipantHangup(function(participantID) {});
    
    meeting.onChatReady(function() {});

	function addRemoteVideo(stream, participantID) {
	
    var $videoBox = $("<div class='videoWrap' id='"+participantID+"'></div>");
    var $video = $("<audio class='videoBox' autoplay></audio>");
    $video.attr({"src": window.URL.createObjectURL(stream), "autoplay": "autoplay"});
    $videoBox.append($video);
	$("#videosWrapper").append($videoBox);

	adjustVideoSize();

	
	
}

function removeRemoteVideo(participantID) {
	$("#"+participantID).remove();
	adjustVideoSize();
}

function adjustVideoSize() {
	var numOfVideos = $(".videoWrap").length; 
	if (numOfVideos>2) {
		var $container = $("#videosWrapper");
		var newWidth;
		for (var i=1; i<=numOfVideos; i++) {
			newWidth = $container.width()/i;
			
			// check if we can start a new row
			var scale = newWidth/$(".videoWrap").width();
			var newHeight = $(".videoWrap").height()*scale;
			var columns = Math.ceil($container.width()/newWidth);
			var rows = numOfVideos/columns;
			
			if ((newHeight*rows) <= $container.height()) {
				break;
			}
		}
		
		var percent = (newWidth/$container.width())*100;
		$(".videoWrap").css("width", percent-5+"%");
		$(".videoWrap").css("height", "auto"); 

		
		//var numOfColumns = Math.ceil(Math.sqrt(numOfVideos));
		var numOfColumns;
		for (var i=2; i<=numOfVideos; i++) {
			if (numOfVideos % i === 0) {
				numOfColumns = i;
				break;
			}
		}
	    $('#videosWrapper').find("br").remove();
		$('.videoWrap:nth-child('+numOfColumns+'n)').after("<br>");
	} else if (numOfVideos == 2) {
		$(".videoWrap").width('auto');
		$("#localVideoWrap").css("width", 20+"%");
		$('#videosWrapper').find("br").remove();
	} else {
		$("#localVideoWrap").width('auto');
		$('#videosWrapper').find("br").remove();
	}
	
}

	
}

