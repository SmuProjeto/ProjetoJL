'use strict';
 
module.exports = function(app, socketIoServer) {
    app.get('/',function(req,res){
        res.render('home');
    });
    
    app.get('/locutor',function(req,res){
        res.render('login');
    });

    app.get('/ouvirRadioJL',function(req,res){
          var path = req.params.path;
        console.log(path);
        console.log("Requested room "+path);
        res.render('room');  
    });
    
    app.get('/Dnqu@&B0m',function(req,res){
        console.log('pagina locutor');
        res.render('locutor');
    });
    
}