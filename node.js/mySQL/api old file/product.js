var express = require("express");
var connection = require("./connection");
var body_paraser = require("body-parser");
var multer = require("multer");
var path = require("path");
var cors = require("cors"); // Add this line
var app = express();
//middleware
app.use('/mysql/images/product', express.static(path.join(__dirname, 'images/product/')));
//middleware to required request from local reactjs application
app.use(cors({
     origin: 'http://localhost:3000',
     // Update with your React.js app's origin
     optionsSuccessStatus: 200,
}));


app.use(body_paraser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true })); // Move this line after initializing app
const ROUTE = "/product";

app.use(express.json())
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
         cb(null, "images/product");
    },
    filename: function (req, file, cb) {
         cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
});
//maximum file size 
const maxSize = 2 * 1000 * 1000;
var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {
         var filetypes = /jpeg|jpg|png/;
         var mimetype = filetypes.test(file.mimetype);
         var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

         if (mimetype && extname) {
              return cb(null, true);
         }

         cb("Error: File upload only supports the " + "following filetypes - " + filetypes);
    },
});


//create routes 
//fetch product
app.get(ROUTE, function (request, response) {
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
   });

   //edit product   
   app.get(ROUTE + "/:id", function (request, response) {
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
})

//insert product
app.post(ROUTE, upload.single("filename"), function (request, response) {
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

});

//update product
app.put(ROUTE, upload.single("photo"), function (request, response) {
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
});

//delete product
app.delete(ROUTE, function (request, response) {
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
});

app.listen(5000);
console.log('ready to accept request on server...')