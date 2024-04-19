var express = require('express');
var connection = require('./connection');
var body_parser = require("body-parser")

var app = express();
var ROUTE = '/category';

app.use(body_parser.urlencoded({ extended: true }))

//used to get categories 
//http://localhost:5000/category
//input None
//[{"error":"no"},{"total":3},{"id":4,"title":"tv","islive":1},{"id":3,"title":"watch","islive":1},{"id":2,"title":"books","islive":1}]
app.get(ROUTE, function (request, response) {
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
});

app.post(ROUTE, function (request, response) {
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
})

app.put(ROUTE, function (request, response) {
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

})

app.delete(ROUTE, function (request, response) {
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
})


app.listen(5000);
console.log('Server is ready');