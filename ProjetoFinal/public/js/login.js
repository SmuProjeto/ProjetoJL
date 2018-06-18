
$( document ).ready(function() {
	//pegar login e senha
	var login = "";
	var senha = "";
    var server = "http://localhost:8080/locutor";
	client_login = io.connect(server);
	//envia para mensagem para o socket 
	client_login.emit("isLocutor",{login:login,senha:senha});
	client_login.on("callLocutor",function(){
			window.location.href = "http://localhost:8080/Dnqu@&B0m";

	})
}); 