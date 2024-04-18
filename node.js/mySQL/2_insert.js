var connection = require("./connection");
var sql = "insert into category(title , photo) values ('wafers' , 'wafres.jpg')";
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