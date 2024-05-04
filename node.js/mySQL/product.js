
const { request, response } = require("express");
var connection = require("./connection");   

module.exports.fetchProduct = function (request, response) {
    let sql = `select * from product order by id desc`;
    connection.con.query(sql, function (error, result, fields) {
        if (error)
            response.json([{ 'error': 'error occured' }]);
        else
        {
            result.unshift({ 'total': result.length });
            result.unshift({ 'error': 'no' });
            var data = JSON.stringify(result);
            response.send(data);
        }
    });
}
module.exports.editProduct = function (request, response) {
    let id = request.params.id;
    let sql = `select * from product where id = ?`;
    var data = [id];
    connection.con.query(sql,data, function (error, result, fields) {
        if (error)
            response.json([{ 'error': 'error occured' }]);
        else
        {
            result.unshift({ 'total': result.length });
            result.unshift({ 'error': 'no' });
            var data = JSON.stringify(result);
            response.send(data);
        }
    });
}
module.exports.insertProduct = function (request, response) {
    let sql = `INSERT INTO product(categoryid, title, price, stock, weight, size, photo, detail, islive) VALUES (?,?,?,?,?,?,?,?,?)`;
    let { categoryid, name, price, stock, weight, size, detail, islive } = request.body;
    console.log(request.body);
    console.log(categoryid);
    if (categoryid === undefined || name === undefined || price === undefined || stock === undefined || weight === undefined || size === undefined || detail === undefined || islive === undefined)
        response.json([{ 'error': 'input is missing' }]);
    else {
        let photo = request.file.filename;
        let data = [categoryid, name, price, stock, weight, size, photo, detail, islive];
        connection.con.query(sql, data, function (error, result) {
            if (error)
            {console.log(error.code)
                response.json([{ 'error': 'error occured' }]);}
            else
                {response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'product inserted' }]);}
        });
    }

}
module.exports.updateProduct = function (request, response) {
    let { categoryid, title, price, stock, weight, size, detail, islive, id } = request.body;
    if (categoryid === undefined || title === undefined || price === undefined || stock === undefined || weight === undefined || size === undefined || detail === undefined || islive === undefined || id === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else 
    {
        let photo = request.file.filename;
        let sql = `Update product set categoryid = ? , title = ? , price = ? , stock = ? , weight = ? , size = ? , photo = ? , detail = ? , islive = ? where id = ?`;
        connection.con.query(sql, [categoryid, title, price, stock, weight, size, photo, detail, islive, id], function (error, result) {
            if (error) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'product Updated' }]);
            }
        });
    }
}
module.exports.deleteProduct = function (request, response) {
    let { id } = request.body;
    console.log(request.body);
    if (id === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        let sql = `delete from product where id = ? `;
        connection.con.query(sql, [id], function (error, result) {
            if (error) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'product deleted' }]);
            }
        });
    }
}
