'use strict';

const WebSocketServer = require('websocket').server;
const http = require('http');
const server = http.createServer(function(request, response){
});
const wsServerPort = 8080;

server.listen(wsServerPort, function(){
  console.log("server is listening on port " + wsServerPort);
});

wsServer = new WebSocketServer({
  httpServer: server
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
