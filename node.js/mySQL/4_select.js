var connection = require("./connection");
var sql = "select id,title,islive from category order by id desc";
//run query

connection.con.query(sql , function(error , result , fields){
    if(error)
    {
        console.log(error);
    }
    else
    {
        var data = JSON.stringify(result);
        console.log(data);
    }
});