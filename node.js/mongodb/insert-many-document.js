var mongodb = require('mongodb');
var mongoclient = mongodb.mongoclient;
var con = require("./my-connection");
var insertCollection = async function(obj)
{
    var database = await con.getDatabase();
    database.collection('myobjects').insertMany(obj,function(error,result){
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
let objects = [
    {
      name: "Alice",
      age: 30,
      city: "New York"
    },
    {
      country: "USA",
      population: 328,
      president: "Joe Biden"
    },
    {
      fruit: "Apple",
      color: "Red"
    }
  ];
insertCollection(objects);