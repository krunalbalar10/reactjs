var express = require('express');
var app = express();
var fs = require('fs');
var dt = require('./mydatetime');

const ROUTE = "/contact";
//cerate middleware

let Logger = function(request , response , next){
    var currentDateTime = dt.getDateTime();
    var fileContent = `\n request method ${request.method}|| request URL ${request.url}|| Date and Time = ${currentDateTime}`;

    fs.appendFile('access.log' , fileContent , function(error){
        if(error)
            console.log(error);
    })
    next();
}

app.use((request , response , next) => Logger(request , response , next));

app.use(function(request , response , next){
    let hour = dt.getHour();
    if(hour >= 10 && hour <= 13)
    {
        next();
    }
    else
    {
        response.send("Could not complete your request");
    }
})
// to get all contact
// http://localhost:5000/contact
// method :get
app.get(ROUTE , function(request , response) {
    response.send("Get api for contact is called");
})

// http://localhost:5000/contact
// method :put
app.put(ROUTE , function(request , response) {
    response.send("Put api for contact is calle");
})

// http://localhost:5000/contact
// method :post
app.post(ROUTE , function(request , response) {
    response.send("Post api for contact is called");
})

// http://localhost:5000/contact
// method :delete
app.delete(ROUTE , function(request , response){
    response.send("Delete api for conatct is called");
})

app.all("*",function(request,response){
    response.send("No such route exists....");
});

app.listen(5000);
console.log("server is ready");