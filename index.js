var express = require("express");
var socket = require("socket.io");
//appsetup
var app =express();

//server creation
var server = app.listen(4000,function(){
    console.log("server is listing at  port 4000");
});

//file setting
app.use(express.static('public'));

//socket programming
var io=socket(server);

io.on("connection",function(socket){
    console.log("made new socket connection",socket.id);

    socket.on("chat",function(data){
          io.sockets.emit("chat",data);
    });
});