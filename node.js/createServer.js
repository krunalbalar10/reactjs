var http = require("http");
var server = http.createServer(function(request , response) {
    console.log("I have received request");
});

var portno = 5000;
server.listen(portno);
console.log("server is started")