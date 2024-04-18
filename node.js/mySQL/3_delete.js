var connection = require("./connection");
var sql = "delete from category where id=2";
//run query

connection.con.query(sql , function(error , result){
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log('Delete category');
    }
});