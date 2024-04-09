var express = require('express');

var app = express();
const ROUTE = "/contact";

// to get all contact
// http://localhost:5000/contact
// method :get
app.get(ROUTE , function(request , response) {
    response.send("Get api for contac is called");
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