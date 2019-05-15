var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
// const jwt = require('jsonwebtoken');
var User = require("./server/route/users");
var Product = require("./server/route/products")
var Admin = require("./server/route/admins")

mongoose.connect("mongodb://localhost/NEWUSER");

var db = mongoose.connection;
var app = express();

app.use(cors());
 app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
 

app.post('/api/register',User.registerUser);
app.post('/api/login',User.loginUser);
app.post('/api/addProduct',Product.addProduct);
app.get('/api/getProduct',Product.getProducts);
app.get('/api/getProdById/:id',Product.getProductsByID);
app.put('/api/updateProduct/:id',Product.updateProduct);
app.delete('/api/deleteProduct/:id',Product.deleteProduct);
app.post('/api/admin_reg',Admin.registerAdmin);
app.post('/api/admin_login',Admin.loginAdmin);
    

app.listen(3209,function(){
    console.log("server started");
});
