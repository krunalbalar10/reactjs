var http = require('http');

var server = http.createServer(function(request , response) {
    
    var url = request.url;
    response.writeHead(200 , {'content-type':'application/json'}) 

    if(url === '/sunday')
    {
        output = JSON.stringify({
            day: ["Amrit", "Shubh", "Labh", "Char", "Kaal", "Rog", "Udveg", "Chal"],
            night: ["Kaal", "Rog", "Udveg", "Chal", "Labh", "Amrit", "Shubh", "Char"]
        });
    }
    else if(url === '/monday')
    {
        output = JSON.stringify({
            day: ["Shubh", "Labh", "Amrit", "Kaal", "Rog", "Udveg", "Chal", "Char"],
            night: ["Rog", "Udveg", "Chal", "Char", "Shubh", "Labh", "Amrit", "Kaal"]
        })
    }
    else if(url === '/tuesday')
    {
        output = JSON.stringify({
            day: ["Labh", "Amrit", "Shubh", "Rog", "Udveg", "Chal", "Char", "Kaal"],
            night: ["Udveg", "Chal", "Char", "Kaal", "Labh", "Amrit", "Shubh", "Rog"]
        })
    }
    else if(url === '/wednesday')
    {
        output = JSON.stringify({
            day: ["Amrit", "Shubh", "Labh", "Udveg", "Chal", "Char", "Kaal", "Rog"],
            night: ["Chal", "Char", "Kaal", "Rog", "Amrit", "Shubh", "Labh", "Udveg"]
        })
    }
    else if(url === '/thursday')
    {
        output = JSON.stringify({
            day: ["Shubh", "Labh", "Amrit", "Chal", "Char", "Kaal", "Rog", "Udveg"],
            night: ["Char", "Kaal", "Rog", "Udveg", "Shubh", "Labh", "Amrit", "Chal"]
        })
    }
    else if(url === '/friday')
    {
        output = JSON.stringify({
            day: ["Labh", "Amrit", "Shubh", "Char", "Kaal", "Rog", "Udveg", "Chal"],
            night: ["Kaal", "Rog", "Udveg", "Chal", "Labh", "Amrit", "Shubh", "Char"]
        })
    }
    else if(url === '/saturday')
    {
        output = JSON.stringify({
            day: ["Amrit", "Shubh", "Labh", "Rog", "Udveg", "Chal", "Char", "Kaal"],
            night: ["Rog", "Udveg", "Chal", "Char", "Shubh", "Labh", "Amrit", "Kaal"]
        })
    }
    response.write(output);
    response.end();
});

server.listen(5000);
console.log('server is ready............');