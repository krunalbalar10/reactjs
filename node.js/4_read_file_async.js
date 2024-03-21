var http = require('http');

var fs = require('fs');

var server = http.createServer(function(request , response){
    response.writeHead(200 , {'content-type':'text/html'})

    var fileName = 'hanuman_chalisa.txt';
    fs.readFile(fileName , function(error , FileContent){
        response.write(FileContent);
        response.end();
    });
});

server.listen(5000);
console.log('server is ready')