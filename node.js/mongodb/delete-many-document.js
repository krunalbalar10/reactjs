var mongodb = require('mongodb');
var mongoclient = mongodb.mongoclient;
var con = require("./my-connection");
var deleteCollection = async function(condition)
{
    var database = await con.getDatabase();
    database.collection('myobjects').deleteMany(condition,function(error,result){
        if(error)
        {
            console.log('error in delete document ');
            console.log(error);
        }
        else 
        {
            console.log('document deleted...');
        }
    });
}
var condition = {fruit:"Apple"}
deleteCollection(condition);