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
    socket_client.on("room", function(){
        console.log("oi cliente");
        //envia mensagem para o socket
        socket_client.emit('teste');
    });
	
    socket_client.on("res", function(){
        console.log("oi servidor");
        
    });

});
