var http = require('http');

var fs = require('fs');
const { resolve } = require('path');

var server = http.createServer(function(request , response){

    var FileName = request.url;
    var FileName = FileName.substring(1);
    console.log(FileName)

    fs.rename(FileName , 'strawberry.txt' , function(error){
        if(error)
        {
            response.writeHead(404 , {'content-type':'text/html'});
            response.write("Error in Rename File");
            response.end();
        }
        else
        {
            response.writeHead(200 , {'content-type':'text/html'});
            response.write("File Renamed Successfully");
            response.end();
        }
    })

}).listen(5000 ,function(){
    console.log('Server is ready for rename file');
})