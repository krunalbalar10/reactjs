var express = require('express');
var connection = require('./connection');
var app = express();
var pswd = require("./passwordhasher1");
var rd = require("./MyPasswordGenerator")
const MyMail = require('./mymail'); // Or import MyMail from './mymail';

var body_parser = require("body-parser");
var ROUTE = '/users';

//set middleware
app.use(body_parser.urlencoded({ extended: true }));

app.post(ROUTE, function (request, response) {
    var email = request.body.email;
    var password = request.body.password;
    var mobile = request.body.mobile;
    if (email === undefined || password === undefined || mobile === undefined) {
        response.json([{ 'error': 'input is missing' }])
    }
    else {
        pswd.PasswordHash(password).then(function (HashedPassword) {
            var sql = `insert into users(email , password , mobile) values ("${email}" , "${HashedPassword}" , "${mobile}")`;
            connection.con.query(sql, function (error, result) {
                if (error) {
                    console.log(error.code)
                    if (error === "ER_DUP_ENTRY") {
                        response.json([{ 'error': 'email and mobile already exist' }])
                    }
                    else {
                        response.json([{ 'error': 'error occured' }])
                    }
                }
                else {
                    response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'Registered Successfully' }]);
                }
            })
        })
    }

})

app.post("/login", function (request, response) {
    var password = request.body.password;
    var email = request.body.email;

    if (email === undefined || password === undefined) {
        response.json([{ 'error': 'input is missing' }])
    }
    else {
        var sql = `select id , password from users where email='${email}'`;
        connection.con.query(sql, function (error, result) {
            console.log(result)
            if (error) {
                response.json([{ 'error': 'error occured' }])
            }
            else {
                if (result.length === 0) {
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'invalid email' }]);
                }
                else {
                    console.log(result)
                    console.log(result[0]['password']);
                    let HashedPassword = result[0]['password'];
                    pswd.Matchpassword(password, HashedPassword).then(function (isPasswordMatched) {
                        if (isPasswordMatched === true) {
                            response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'login successfully' }, { 'id': result[0]['id'] }]);
                        }
                        else {
                            response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'login failed' }]);
                        }
                    })
                }
            }
        })
    }
});

app.put(ROUTE , function(request , response){

     // let id = request.body.id;
    // let oldpassword = request.body.oldpassword;
    // let newpassword = request.body.newpassword;
    // or 
    let { id, oldpassword, newpassword } = request.body;

    let sql = `select password from users where id=${id}`;
    connection.con.query(sql, async function (error, result) {
        if (error) {
            response.json([{ 'error': 'error occured' }]);
        }
        else {
            let password = result[0]['password'];
            let isPasswordMatched = await pwd.MatchPassword(oldpassword, password);
            if (isPasswordMatched === false) {
                response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'invalid password' }]);
            }
            else {
                let HashedPassword = await pwd.PasswordHash(newpassword)
                sql = `update users set password='${HashedPassword}' where id=${id}`;
                connection.con.query(sql, function (error, result) {
                    if (error) {
                        response.json([{ 'error': 'error occured' }]);
                    }
                    else {
                        response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'password changed successfully' }]);
                    }
                });
            }
        }
    })
})

app.post("/forgot-password", function (request, response) {

    let email = request.body.email;
    let sql = `select * from users where email='${email}'`;
    connection.con.query(sql, function (error, result) {
        if (error) {
            response.json([{ 'error': 'error occured' }]);
        }
        else {
            if (result.length == 0) {
                response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'invalid email' }]);
            }
            else {
                //generate random password
                let NewRandomPassword = rd.generatePassword()
                pwd.PasswordHash(NewRandomPassword).then(function (NewHashedPassword) {
                    let sql = `update users set password='${NewHashedPassword}' where email='${email}'`;
                    connection.con.query(sql, function (error, result) {
                        if (error) {
                            response.json([{ 'error': 'error occured' }]);
                        }
                        else {
                            let sender = new MyMail();
                            sender.SendMail(email, "Password Changed", `Your new password is ${NewRandomPassword}`);
                            response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'password changed successfully' }]);                          
                        }
                    })
                })

            }
        }
    })
})
app.listen(5000);
console.log("server is ready");