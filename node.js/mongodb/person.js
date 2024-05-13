//import mongodb
var mongodb = require("mongodb");
var client = mongodb.MongoClient;
var con = require("./my-connection");
const COLLECTION_NAME = 'myobjects';
const ERROR_MSG = [{ 'error': 'error occured' }];
let fetchDocuments = async function (request, response) {
    var database = await con.getDatabase();
    console.log('request received for get');
    var condition = {};
    var fieldsToSkip = { projection: { _id: 0 } };
    database.collection(COLLECTION_NAME).find(condition, fieldsToSkip).toArray(function (error, result) {
        if (error)
            response.json(ERROR_MSG);
        else {
            result.unshift({ 'total': result.length });
            result.unshift({ 'error': 'no' });
            response.json(result);
        }
    });
}
let insertDocuments = async function (request, response) {
    console.log('request received for post');
    var database = await con.getDatabase();
    let obj = request.body;
    database.collection(COLLECTION_NAME).insertOne(obj, function (error, result) {
        if (error)
            response.json(ERROR_MSG);
        else {
            var result = []; //create an empty array
            result.push({ 'error': 'no' });
            result.push({ 'success': 'yes' });
            result.push({ 'message': 'document inserted' });
            response.json(result);
        }
    });
}

let updateDocuments = async function (request, response) {
    console.log('request received for update');
    var database = await con.getDatabase();
    let obj = request.body;
    if (obj.country === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        let condition = { country: obj.country }
        var newObject = {
            $set: obj
        }
        database.collection(COLLECTION_NAME).updateMany(condition, newObject, function (error, result) {
            if (error)
                response.json(ERROR_MSG);
            else {
                var result = []; //create an empty array
                result.push({ 'error': 'no' });
                result.push({ 'success': 'yes' });
                result.push({ 'message': 'document updated' });
                response.json(result);
            }
        });
    }

}
let deleteDocuments = async function (request, response) {
    console.log('request received for delete');
    var database = await con.getDatabase();
    var obj = request.body;
    if(obj.country === undefined)
    {
        response.json([{ 'error': 'input is missing' }]);
    }    
    else 
    {
        database.collection(COLLECTION_NAME).deleteMany(obj, function (error, result) {
            if (error)
                response.json(ERROR_MSG);
            else {
                var result = []; //create an empty array
                result.push({ 'error': 'no' });
                result.push({ 'success': 'yes' });
                result.push({ 'message': 'document deleted' });
                response.json(result);
            }
        });
    }
   
}
module.exports.fetch = fetchDocuments;
module.exports.insert = insertDocuments;
module.exports.update = updateDocuments;
module.exports.delete = deleteDocuments;