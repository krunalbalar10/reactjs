var http = require('http');

var mail = require('./moduleExport4');

var server = http.createServer(function(request , response) {
    //create object
    let mailSender = new mail.MyMail();
    mailSender.SendMail();
});

server.listen(5000);
console.log("Mail is ready to sent.......")