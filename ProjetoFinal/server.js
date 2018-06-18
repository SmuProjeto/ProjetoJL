/* codigo index servidor*/

'use strict';

 //importacao dos modulos
var nodestatic = require('node-static');
var express = require('express');
var path = require('path');


var serverPort = process.env.OPENSHIFT_NODEJS_PORT || 8080
var serverIpAddress = process.env.OPENSHIFT_NODEJS_IP ||  '0.0.0.0'
var socketIoServer = '0.0.0.0';

var app = express();
var request = require('request');
require('./change_views')(app, socketIoServer);
// pasta onde contem os conteudos estaticos
app.use(express.static(__dirname + '/public'));

// diretorio com os views
app.set('views',__dirname + '/views');

//fazer o navegador interpretar os arquivos ejs
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(serverPort, serverIpAddress, function(){
    console.log("Servidor executando na porta:  "+serverPort);
});

//abrindo websocket de conexao no servidor
var socket_io = require('socket.io').listen(server);

//tratando eventos das requisicoes via socket 
socket_io.sockets.on('connection', function (socket_client){
    //escuta mensagem do socket
    socket_client.on("room", function(data){
        console.log("testando");
        var teste = data.my;
        console.log(teste);
        console.log(data);
        socket_client.emit('teste');
    });
	
    socket_client.on("res", function(){
        console.log("oi servidor");
        
    }); 

});


var socket_locutor = socket_io.of('/locutor');
socket_locutor.on('connection', function(socket_locutor_client) {
        console.log('locutor conectado');
        socket_locutor_client.on("isLocutor", function(data){
            var login = data.login;
            var senha = data.senha;
            //faz a logica para verificar login/senha com o banco de dados
            //retorna ao cliente
            console.log("chamando pagina locutor");
            socket_locutor_client.emit("callLocutor");
        
            

        });

});
