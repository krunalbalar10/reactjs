var express = require('express');
var body_parser = require("body-parser")
var app = express();
var multer = require("multer");
var path = require("path");
var cors = require("cors"); 

var cat = require("./category");
var user = require("./users");
var product = require("./product");

app.use('/mysql/images/product', express.static(path.join(__dirname, 'images/product/')));
//middleware to required request from local reactjs application
app.use(cors({
     origin: 'http://localhost:3000',
     // Update with your React.js app's origin
     optionsSuccessStatus: 200,
}));

app.use(body_parser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true })); // Move this line after initializing app

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

var CATEGORY_ROUTE = "/category";
app.get(CATEGORY_ROUTE  , (request , response) => cat.getCategory(request , response));
app.post(CATEGORY_ROUTE  ,(request , response) => cat.insertCategory(request , response));
app.put(CATEGORY_ROUTE  , (request , response) => cat.updateCategory(request , response));
app.delete(CATEGORY_ROUTE  , (request , response) => cat.deleteCategory(request , response));

var USERS_ROUTE = '/users'; 
app.post(USERS_ROUTE, (request , response) => user.insertUsers(request , response));
app.post("/login", (request , response) => user.loginUsers(request , response));
app.put(USERS_ROUTE ,(request , response) => user.ChangePasswordUsers(request , response));
app.post("/forgot-password", (request , response) => user.ForgotPasswordUsers(request , response));

const PRODUCT_ROUTE = "/product";
app.get(PRODUCT_ROUTE, (request , response) => product.fetchProduct(request , response));
app.get(PRODUCT_ROUTE + "/:id", (request , response) => product.editProduct(request , response))
app.post(PRODUCT_ROUTE, upload.single("filename"), (request , response) => product.insertProduct(request , response));
app.put(PRODUCT_ROUTE, upload.single("photo"), (request , response) => product.updateProduct(request , response));
app.delete(PRODUCT_ROUTE, (request , response) => product.deleteProduct(request , response));

app.listen(5000);
console.log('ready to accept request...');