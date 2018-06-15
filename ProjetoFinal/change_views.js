'use strict';
 
module.exports = function(app, socketIoServer,socket_io) {
    app.get('/',function(req,res){
        res.render('home');
    });
    
    app.get('/locutor',function(req,res){
        res.render('locutor');
    });

    app.get('/ouvirRadioJL',function(req,res){
          var path = req.params.path;
        console.log(path);
        console.log("Requested room "+path);
        res.render('room');  
    });
    
}