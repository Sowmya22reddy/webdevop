var User = require("../model/user");
var cryptr = require('cryptr');
cryptr = new cryptr('1559');

exports.registerUser = function(req,res){

    console.log(req.body);
    var username = req.body.username;
    var emailId = req.body.emailId;
    var phoneno = req.body.phoneno;
    var password = req.body.password;

    var newUser = new User({
    
        username:username,
        emailId:emailId,
        phoneno:phoneno,
        password:password
    });
    User.findOne({emailId:emailId},function(err,event){
        if(err){
            res.send({status:false,message:"error occured while finding user",err});
            console.error(err);
        }
        else{

            if(event==null){
                newUser.save(function(err1,result){
                    if(err1){
                        res.send({status:false,message:"Cannot add user"});
                    }
                    else{
                        // res.send({status:false,message:"Registered succesfully"});
                        // console.log(result);

                        //encrypt the user password
                        var encryptPassword = cryptr.encrypt(newUser.password);
                        newUser.password = encryptPassword;
                        newUser.save(result);
                        res.send({status:false,message:"Registered succesfully"});
                    }
                });
            }
            else{
                res.send({status:false,message:"User exist"});
            }
        }
    });

}

exports.loginUser = function(req,res){

    var emailId = req.body.emailId;
    var password = req.body.password;

    User.findOne({emailId:emailId},function(err,obj){
        if(err){
            res.send({status:false,message:"error occured while processing login request"});
            console.log(err);
        }
        else{
            if(obj == null){
                res.send({status:false,message:"User not registered"});
            }
            else{
                // if(obj.password == password){
                //     res.send({status:true,message:"Login Successful",obj});
                //     console.log(obj);
                var decryptPassword = cryptr.decrypt(obj.password);
                if(decryptPassword == password){
                    res.send({status:true,message:"Login Successful",obj});
                    // res.redirect('/about-us');
                  
                }

                else{
                    res.send({status:false,message:"incorrect password"});
                    // alert("incorrect password");
                    console.log(obj);
                }

            }
        }
    });

}