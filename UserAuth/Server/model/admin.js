var mongoose = require('mongoose');
// var bcrypt =  require('bcrypt');
var Schema = mongoose.Schema;

var AdminSchema = new Schema({

    adminname:{
        type:String
    },
    emailId:{
        type:String
    },
    phoneno:{
        type:Number
    },
    password:{
        type:String
    }

});


var Admin = module.exports = mongoose.model('Admin',AdminSchema);