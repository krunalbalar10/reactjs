var http = require("http");

var now = require("./moduleExport");

function RequestHandler ( request , response) {
    console.log(now.getDate());
    console.log(now.getTime());
    console.log(now.getDateTime());
}
var server = http.createServer((request , response) => RequestHandler(request , response));

server.listen(5000 , function(){
    console.log("Server is started...........")
})