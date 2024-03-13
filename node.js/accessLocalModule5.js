var http = require('http');

var export2 = require('./moduleExport2');

var server = http.createServer(function(request , response) {
    console.log("request received............");
    console.log(export2.name);
    console.log(export2.password);
    console.log(export2.number);
    console.log(export2.database);
    console.log(export2.server);
});

server.listen(5000);
console.log("Server is started")