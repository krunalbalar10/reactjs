var http = require('http');

var exphasher = require('./passwordhasher1');

var server = http.createServer(function(request , response) {
    console.log("New request received")
    
    var hpassword = exphasher.PasswordHash('India@123');
    console.log(hpassword);

    var pswdmatched = exphasher.Matchpassword('hdhakdhk','abcdsskj');
    console.log(pswdmatched);
});

server.listen(5000);
console.log("Server is ready...........");