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

// UserSchema.pre('save',async function(next){

//     try{
//         //generate a salt
//         const salt = await bcrypt.genSalt(10);
//         //Generate a password hash (salt + hash)
//         const passwordHash = await bcrypt.hash(this.password,salt);
//         //Re-assign hashed version over original, plain text password
//         this.password = passwordHash;
//         next();
//         }catch(error){
//             next(error);
//         }

// });

// UserSchema.methods.validPassword = function(newPassword){
//     return bcrypt.compareSync(newPassword,this.password);
// }

var User = module.exports = mongoose.model('User',UserSchema);