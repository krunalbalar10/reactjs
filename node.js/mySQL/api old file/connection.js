var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    port: '3306',
    database: "data2"
})
con.connect(function(error){
    if(error)
        console.log(error)
    else
        console.log("connection established....");
})
module.exports.con = con;
