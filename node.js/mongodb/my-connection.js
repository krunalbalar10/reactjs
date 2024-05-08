var mongodb = require("mongodb");
var client = mongodb.MongoClient;
var databaseURL = "mongodb://0.0.0.0:27017/frontend25";
var database = null; //global variable

module.exports.getDatabase = function () {
    return new Promise((resolve, reject) => {
        client.connect(databaseURL, function (error, mydb) {
            if (error) {
                console.log(error.errmsg + " " + error.code);
                reject(error); // Reject the promise if there's an error
            } else {
                database = mydb.db();
                console.log("database connected.....");
                resolve(database); // Resolve the promise with the database object
            }
        });
    });
};