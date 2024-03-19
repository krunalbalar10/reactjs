var http = require('http');

var exphasher = require('./passwordhasher1');

var server = http.createServer(function(request , response) {
    console.log("New request received")
    
    exphasher.PasswordHash('India@123').then((hashedPassword) => {
        console.log(hashedPassword)
    })

    let hash = '$argon2id$v=19$m=65536,t=3,p=4$jcr21UhkOnPllXkuH03Cew$RwMCEJ6VBpSagrtvpPE6kfQEzi9CRDGtRzJi6XpG8oU';
    let upswd = 'India@123';

    exphasher.Matchpassword(upswd,hash).then((isPasswordMatched) => {
        console.log(isPasswordMatched);
    });
});

server.listen(5000);
console.log("Server is ready...........");