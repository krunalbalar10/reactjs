var connection = require("./connection");
var sql = "CREATE TABLE category (id INT AUTO_INCREMENT PRIMARY KEY ,title varchar(128), photo VARCHAR(255), islive BOOLEAN DEFAULT 1, isdeleted BOOLEAN DEFAULT 0)";
//run query

connection.con.query(sql , function(error , result){
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log('new category added with id' + result.insertId);
    }
});