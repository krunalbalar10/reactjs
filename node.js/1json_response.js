const { json } = require('express');
var http = require('http');

var server = http.createServer(function(request , response) {
    var url = request.url;

    response.writeHead(200 , {'content-type':'application/json'});
 //we will return html response
    var data = {}; //create empty object

    if(url === '/india'){
        data = JSON.stringify({
            name: "India",
            capital: "New Delhi",
            population: "1.366 billion",
            area: "3.287 million sq km",
            currency: "Indian Rupee (INR)",
            officialLanguage: "Hindi, English",
            nationalAnimal: "Bengal Tiger",
            nationalBird: "Indian Peacock",
            nationalFlower: "Lotus",
            largestCity: "Mumbai",
            independenceDay: "August 15, 1947"
        });
    }
    response.write(data);
    response.end();

});

server.listen(5000);
console.log("server is ready............")