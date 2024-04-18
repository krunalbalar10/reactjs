var connection = require("./connection");
var sql = "update category set title='mickey' , photo='mickey.jpg' where id=1";
//run query

connection.con.query(sql , function(error , result){
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log('update category' + result.affectedRows);
    }
});