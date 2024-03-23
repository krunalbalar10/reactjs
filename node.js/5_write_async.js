var http = require('http');

var fs = require('fs');
var datetime = require('./moduleExport');
var server = http.createServer(function(request , response){
    var currentDateTime = datetime.getDateTime();

    var ip = request.socket.remoteAddress;

    var FileContent = `IP = ${ip} | Date = ${currentDateTime}`;
    // var fileName = 'access.log';
    response.writeHead(200 , {'content-type':'text/html'});
    fs.writeFile(fileName , FileContent , function(error){
        if(error)
        {
            console.log(error.code , error.message)
        }
        else
        {
            response.write('file has been created/overwriten successfully');
            response.end();
        }
    })
})

server.listen(5000);
console.log('server is ready.............');