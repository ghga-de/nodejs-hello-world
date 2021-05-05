const http = require('http');
const os = require('os');
const message = "Hello Pavlo"

console.log("Server ist starting...");

var handler = function(request, response) {
    console.log("Received request from " + request.connection.remoteAddress);
    response.writeHead(200);
    response.end(message);
};

var www = http.createServer(handler);
www.listen(8080);
