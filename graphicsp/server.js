var express= require('express');
var crypto = require('crypto');
var app = require('express')();
var http= require('http').Server(app);
var io= require('socket.io')(http);
var port= process.env.PORT || 5000;
app.use(express.static('public'));
var listener = app.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});