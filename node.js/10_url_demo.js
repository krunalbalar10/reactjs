var url = require('url');

var http = require('http');
//http://localhost:5000/add?num1=100&num2=30;
//http://localhost:5000/sub?num2=100&num2=50;
//http://localhost:5000/mul?num2=100&num2=50;
//http://localhost:5000/div?num2=100&num2=50;
var server = http.createServer(function(request , response){
    //create object that has information about url
    var route = url.parse(request.url , true);
    var routename = route.pathname.substring(1);
    console.log(routename);
    var data = route.query;
    var result = null;
    var num1 = parseInt(data.num1);
    var num2 = parseInt(data.num2);

    if(routename === 'add')
    {
        result = num1 + num2;
    }
    else if(routename === 'sub')
    {
        result = num1 - num2;
    }
    else if(routename === 'mul')
    {
        result = num1 * num2;
    }
    else if(routename === 'div')
    {
        result = num1 / num2;
    }

    if(result !== null)
    {
        response.writeHead(200 , {'content-type':'text/html'});
        response.write("" + result);
    }
    else
    {
        response.writeHead(404 , {'content-type':'text/html'});
        response.write('Invalid Operation(add/sub/mul/div)');
    }
    response.end();
})

server.listen(5000 , () => {
    console.log("Server is ready.......")
})