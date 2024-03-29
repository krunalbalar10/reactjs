var http = require('http');

var event = require('events');
var count = 0;

var NewSession = function(){
    console.log("New session/login occured...");
    count = count + 1;
}
var SendEmail = function()
{
    console.log("we have send email");
}
var SendOTP = function()
{
    console.log("we have send OTP");
}

var em = new event.EventEmitter();

em.addListener("login" , NewSession);
em.addListener("login" , SendEmail);
em.addListener("login" , SendOTP);

var server = http.createServer(function(request , response) {

    if(count === 5)
    {
        response.writeHead(429 , {'content-type':'text/html'});
        response.write("sorry maximum no of connection exceed");
    }
    else
    {
        response.writeHead(200 , {'content-type':'text/html'});
        response.write("count = " + count);
        em.emit("login")
    }

    response.end();
}).listen(5000 , ()=> {
    console.log('server is ready.........')
});