var mongoose = require('mongoose');
// var bcrypt =  require('bcrypt');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

    username:{
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


var User = module.exports = mongoose.model('User',UserSchema);