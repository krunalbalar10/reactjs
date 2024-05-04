var connection = require('./connection');
const { request, response } = require("express");

module.exports.getCategory = function (request, response) {
    var sql = "select id , title , photo , islive, isdeleted from category where isdeleted=0 order by id desc";
    connection.con.query(sql, function (error, result, fields) {
        if (error) {
            response.json([{ 'error': 'error occured' }]);
        }
        else {
            result.unshift({ 'total': result.length })
            result.unshift({ 'error': 'no' })
            var data = JSON.stringify(result);
            response.send(data);
        }
    })
}
module.exports.insertCategory = function (request, response) {
    var title = request.body.title;
    var photo = request.body.photo;

    if (title === undefined || photo === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        var sql = `insert into category(title , photo) values ('${title}' , '${photo}')`;
        connection.con.query(sql, function (error, result) {
            if (error) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'category inserted' }]);
            }
        })
    }
}
module.exports.updateCategory = function (request, response) {
    var title = request.body.title;
    var photo = request.body.photo;
    var islive = request.body.islive;
    var id = request.body.id;

    if (title === undefined || photo === undefined || islive === undefined || id === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }

    else {
        var sql = `update category set title='${title}' , photo='${photo}' , islive='${islive}' where id=${id}`;
        connection.con.query(sql, function (error, result) {
            if (error) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'category updated' }]);
            }
        })
    }

}
module.exports.deleteCategory = function (request, response) {
    var id = request.body.id;
    if (id === undefined) {
        response.json([{ 'error': 'input missing' }])
    }
    else {
        var sql = `update category set isdeleted = 1 where id='${id}' `;
        connection.con.query(sql, function (error, result) {
            if (error) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'category deleted' }]);
            }
        })
    }
}