var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({

    prodName:{
        type:String
    },
    prodPrice:{
        type:Number
    },
    prodDesc:{
        type:String
    },
    prodImage:{ 
        data: Buffer, 
        type: String 
    }

});

var Product = module.exports = mongoose.model('Product',ProductSchema);