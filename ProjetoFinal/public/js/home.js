//assim que a pagina é carregada 
$( document ).ready(function() {
    //socket cliente
	//var server = "http://localhost:8080/teste";
	//socket_client = io.connect(server);
	//trocar para o ip quando quer ser acessado por outro dispositivo
	var socket = io.connect("http://localhost:8080/");
	socket.emit("room",{ my: 'socket_client' });
	//envia para mensagem para o socket 
		//escuta mensagem do socket
		//socket.on("teste", function(){
	      //  console.log('oooo');
	        
	    //});
	//socket.emit("room",{ my: 'socket_client' });
	//quando a imagem da pagina incial é clicada
	$(document).on('click', "#icone_radio", function () { 
		alert('aqui');
	/*
      socket_client.on('hi',function(data) {
         document.body.innerHTML = '';
         document.write(data);
      });
	*/
		
	
	});


}); 




