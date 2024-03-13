var http = require("http");

var now = require("./moduleExport");
var server = http.createServer(function(request , response) {
    console.log(now.getDate());
    console.log(now.getTime());
    console.log(now.getDateTime());
});

server.listen(5000 , function(){
    console.log("Server is started..............")
});