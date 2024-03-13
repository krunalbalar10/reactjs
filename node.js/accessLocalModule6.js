var http = require('http');

var export3 = require('./moduleExport3');

var server = http.createServer(function(request , response) {
    console.log("new request received");
    //create object
    var db1 = new export3.db();
    db1.insert();
    db1.delete();
    db1.update();
    db1.select();
});

server.listen(5000);
console.log(`ready to accept request on 5000`);