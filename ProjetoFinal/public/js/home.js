//assim que a pagina é carregada 
$( document ).ready(function() {
    //socket cliente
	var server = "http://localhost:8080";
	socket_client = io.connect(server);
	//quando a imagem da pagina incial é clicada
	$(document).on('click', "#icone_radio", function () {  
		//envia para mensagem para o socket 
		socket_client.emit("room");
		//escuta mensagem do socket
		socket_client.on("teste", function(){
	        socket_client.emit("res");
	        
	    });

	});

}); 




