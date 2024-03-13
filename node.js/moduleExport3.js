
class Database {

    insert(sql){
        console.log("Insert sql command executed");
    }

    update(sql){
        console.log("Update sql command executed");
    }

    delete(sql) {
        console.log("Delete sql command executed");

    }

    select (sql){
        console.log("Select sql command executed");
    }
};

module.exports.db = Database;