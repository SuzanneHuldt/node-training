'use strict';

const WebSocketServer = require('ws').Server;
const http = require('http');
const server = http.createServer(function(request, response){
});
const wsServerPort = 8080;

server.listen(wsServerPort, function(){
  console.log("server is listening on port " + wsServerPort);
});

const wsServer = new WebSocketServer({
port: 8080
});

wsServer.on('request', function(request){
  let connection = request.accept(null, request.origin);
  connection.on('message', function(message){
    if (message.type === 'utf8'){

    }
  });

  connection.on('close', function(connection){

  });
});
