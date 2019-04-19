var User = require("../model/user");
var cryptr = require('cryptr');
cryptr = new cryptr('1559');
var jwt = require('jsonwebtoken');

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
                        res.send({status:true,message:"Registered succesfully"})

                        //generate token
                        // let payload = {subject:result._id};
                        // let token = jwt.sign(payload,'secretKey');
                        // res.status(200).send({token});
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

                    //generate token
                    let payload = {subject:obj._id};
                    let token = jwt.sign(payload,'secretKey');
                    res.send({status:true,message:"Login Successful",token});
                   
                  
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

function verifyToken(req,res,next){

    if(!res.headers.authrization){
        return res.status(401).send('unauthorized request')
    }

    let token = req.headers.authrization.split('')[1]

    if(token === null){
        return res.status(401).send('unauthorized request')
    }

    let payload = jwt.verify('token',secretKey)

    if(payload){

        return res.status(401).send('unauthorized request')
    }

    req.userId = payload.subject
    next()

}