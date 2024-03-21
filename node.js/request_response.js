var http = require('http');

var server = http.createServer(function(request , response){
    // Extracts the requested URL from the request object.
    var url = request.url;

    // specifies the content type as HTML in the response headers using the writeHead method.
    response.writeHead(200 , {'content-type':'text/html'});
    //we will return html response
    var output;

    if(url === '/')
    {
        output = "<html><head></head><body>Home</body></html>"
    }
    else if(url === '/aboutus')
    {
        output = "<html><head></head><body>About Us</body></html>"
    }
    else if(url === '/contactus')
    {
        output = "<html><head></head><body>Contact Us</body></html>"
    }
    else
    {
        output = "<html><head></head><body>setting</body></html>"
    }
    response.write(output);
    response.end();
});

server.listen(5000);
console.log('server is ready.....................')