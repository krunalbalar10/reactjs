var myconnection = require("./my-connection");
var createCollection = async function() {
    var database = await myconnection.getDatabase();
    console.log(database);
    database.createCollection('myobjects', function (error, response) {
        if (error) {
            console.log(error.errmsg + " " + error.code);
        } else {
            console.log("collection created ");
        }
    });
}
createCollection(); // Call the async function