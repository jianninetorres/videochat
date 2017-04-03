var app = require('express')(); //Express initializes app
var http = require('http').Server(app); //app wiil be served to http
var io = require('socket.io')(http); //server-side component

app.get('/', function(req, res) { // '/' is for the home page
    res.sendFile('/Users/jianninetorres/Desktop/Workspace/videochat_ui/index.ios.js'); //locate this file and send as the response
});

//logs to console
io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

//sends message to server (console)
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    })
});

//and send message to client through server
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});