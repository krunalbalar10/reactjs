var express =require('express');
var app = express();
var person = require("./person")
//define route 
const ROUTE = '/PERSON';
var body_paraser = require("body-parser");

//set middleware
app.use(body_paraser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true })); // Move this line after initializing app
app.use(express.json())

app.get(ROUTE,(request,response) => person.fetch(request,response));
app.post(ROUTE,(request,response) => person.insert(request,response));
app.put(ROUTE,(request,response) => person.update(request,response));
app.delete(ROUTE,(request,response) => person.delete(request,response));

//create route for 404 (when request is received for non existing route)
app.all("*",function(request,response)
    {
        response.send('no such route exists...');
    });
app.listen(5000);
console.log('ready to accept request....');