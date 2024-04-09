var express = require('express');

var app = new express();
var mymath = require("./mymath")
// must have to add this line called middleware
app.use(express.urlencoded({extended:true}));

app.get("/add/:num1/:num2" , (request , response) => mymath.add(request , response))

app.get("/sub/:num1/:num2" , (request , response) => mymath.sub(request , response))

app.get("/mul/:num1/:num2" , (request , response) => mymath.mul(request , response))

app.get("/div/:num1/:num2" , (request , response) => mymath.div(request , response))

app.post("/simple_interest" , (request , response) => mymath.si(request , response))

app.listen(5000);
console.log("server is ready........");