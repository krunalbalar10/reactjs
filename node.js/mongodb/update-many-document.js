var mongodb = require('mongodb');
var mongoclient = mongodb.mongoclient;
var con = require("./my-connection");
var updateCollection = async function(condition,newObject)
{
    var database = await con.getDatabase();
    database.collection('myobjects').updateMany(condition,newObject,function(error,result){
        if(error)
        {
            console.log('error in update document ');
            console.log(error);
        }
        else 
        {
            console.log('document updated...');
        }
    });
}
var condition = {country:"USA"}
var newObject =  {$set : {
    country: "INDIA",
    population: 1125,
    president: "Drupadi Mumu"
  }}
updateCollection(condition,newObject);