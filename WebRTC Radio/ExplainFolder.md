##Understand this folder

```
:\public
  :\css
    home.css
    room.css
  :\js
    :\lib
      adapter.js
    home.js
    meeting.js
    room.js
:\views
  home.ejs
  room.ejs
package.json
router.js
server.js
```
1. **:\public** : This folder contains the web files, that is the files that enable the use of a web page.

1.1 **:\css** : Here we have the beauty of the page.

1.2 **:\js** : Here we have the function of the page.

1.2.1 **:\lib**: This folder have the file *adapter.js* that enable all the operations with media stream, example:
* *function trace(text){}* - Logging with WebRTC.
* *createIceServer = function(url, username, password) {* - Creates iceServer from the url for FF.
* *getUserMedia = navigator.mozGetUserMedia.bind(navigator);* - Get UserMedia (only difference is the prefix).
* *attachMediaStream = function(element, stream)* - Attach a media stream to an element.
* *reattachMediaStream = function(to, from)* - Reattach a media stream to an element.
* Creates iceServer from the url for Chrome.

1.2.2 **home.js**: This file read the document, create a new randomic string for the room URL and set the href of the URL for establish the connection.

1.2.3 **meeting.js**: This file create a new socketio to join a new room, with a private communication and the functions:
* *function sendChatMessage(message)* - Send a new message.
* *function toggleMic()* - Make de microphone available.
* *function toggleVideo()* - Make de video available.
* *function onRemoteVideo(callback)* - Called when the remote video is available.
* *function onLocalVideo(callback)* - Called when the local video is available.
* *function onChatReady(callback) or function onChatNotReady(callback)* - Called when the chat video is or isn't available.
* *function onChatMessage(callback)* - Called when the message is available.
* *function onParticipantHangup(callback)* - Called when a a participant left the conference.
* *function initDefaultChannel()* - Init the chanel.
* *function initPrivateChannel()* - Open a private channel.
* *function requestTurn(turn_url)*- Request a turn channel.
* *function addRemoteVideo(stream, from)* - Called the callback.
* *function generateID()* - Generate a random id.
* *function openSignalingChannel(channel)* - Connect to the server and open a signal channel using channel as the channel's name.
* *function createOffer(participantId)* - Send an offer to peer with id participantId.
* *function createAnswer(sdp, cnl, to)* - Create an answer.
* *function hangup(from)* - Finish a connection.
* Functions for operates on the handle.
* Functions for the CODEC for *Set Opus*,*extractSdp*,*setDefaultCodec*,*remove codec*.
* Export some public libraries.

1.2.4 **room.js**: This file set the room configurations like video properties.

2. **:\views**: This folder contains the web pages. The *home.ejs* file it's tre principal and the *room.ejs* contains the socket and video configurations, use the files */js/meeting.js* and */js/room.js* to do this.

3. **server.js** : Is the server, open the communication with a user.

4. **route.js**: the router to the different views.
