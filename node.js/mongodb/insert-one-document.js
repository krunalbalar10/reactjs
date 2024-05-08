var mongodb = require('mongodb');
var mongoclient = mongodb.mongoclient;
var con = require("./my-connection");
var insertCollection = async function(obj)
{
    var database = await con.getDatabase();
    database.collection('myobjects').insertOne(obj,function(error,result){
        if(error)
        {
            console.log('error in inserting document ');
            console.log(error);
        }
        else 
        {
            console.log('document inserted...');
        }
    });
}
var obj = {title:'Books',count:100};
insertCollection(obj);