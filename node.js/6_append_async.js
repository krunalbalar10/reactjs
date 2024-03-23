var http = require('http');
var fs = require('fs');
var datetime = require('./moduleExport');

var server = http.createServer(function (request, response) {

    var currentDateTime = datetime.getDateTime();
    var ip = request.socket.remoteAddress;
    var FileContent = `IP = ${ip} | Date = ${currentDateTime}\n`;
    var fileName = 'access.log';

    response.writeHead(200, { 'content-type': 'text/html' });

    fs.appendFile(fileName, FileContent, function (error) {
        if (error) {
            console.log(error.code, error.message);
            response.end();
        }
        else {
            response.write('file updated successfully');
            response.end();
            process.exit();
        }
    });
});
server.listen(5000);
console.log('server is ready');