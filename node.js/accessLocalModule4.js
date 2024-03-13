var http = require('http');

var export1 = require('./moduleExport1');
//create server
var server = http.createServer(function(request , response){
    //received request
    console.log(export1.portno);
    console.log(export1.name);
    console.log(export1.number);
    console.log(export1.getAddress());
})

server.listen(5000);
console.log(`Server is ready to accept request on localhost ${export1.portno}...........`);