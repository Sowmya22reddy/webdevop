var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var User = require("./server/route/users");

mongoose.connect("mongodb://localhost/NEWUSER");

var db = mongoose.connection;
var app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/api/register',User.registerUser);
app.post('/api/login',User.loginUser);

app.listen(3209,function(){
    console.log("server started");
});
