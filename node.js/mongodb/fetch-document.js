var mongodb = require('mongodb');
var mongoclient = mongodb.mongoclient;
var con = require("./my-connection");
var fetchCollection = async function(condition)
{
    var database = await con.getDatabase();
    var condition = {};
    var fieldsToSkip = {projection:{_id:0}};
    database.collection('myobjects').find(condition,fieldsToSkip).toArray(function(error,result){
        if(error)
        {
            console.log('error in fetch document ');
            console.log(error);
        }
        else 
        {
            console.log(result);
        }
    });
}
fetchCollection();