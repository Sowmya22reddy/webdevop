var Admin = require("../model/admin");
var cryptr = require('cryptr');
cryptr = new cryptr('1559');
var jwt = require('jsonwebtoken');

exports.registerAdmin = function(req,res){

    console.log(req.body);
    var adminname = req.body.adminname;
    var emailId = req.body.emailId;
    var phoneno = req.body.phoneno;
    var password = req.body.password;

    var newAdmin = new Admin({
    
        adminname:adminname,
        emailId:emailId,
        phoneno:phoneno,
        password:password
    });
    Admin.findOne({emailId:emailId},function(err,event){
        if(err){
            res.send({status:false,message:"error occured while finding admin",err});
            console.error(err);
        }
        else{

            if(event==null){
                newAdmin.save(function(err1,result){
                    if(err1){
                        res.send({status:false,message:"Cannot add admin"});
                    }
                    else{
                        // res.send({status:false,message:"Registered succesfully"});
                        // console.log(result);

                        //encrypt the user password
                        var encryptPassword = cryptr.encrypt(newAdmin.password);
                        newAdmin.password = encryptPassword;
                        newAdmin.save(result);
                        res.send({status:true,message:"Registered succesfully"})

                        //generate token
                        // let payload = {subject:result._id};
                        // let token = jwt.sign(payload,'secretKey');
                        // res.status(200).send({token});
                    }
                });
            }
            else{
                res.send({status:false,message:"Admin exist"});
            }
        }
    });

}

exports.loginAdmin = function(req,res){

    var emailId = req.body.emailId;
    var password = req.body.password;

    Admin.findOne({emailId:emailId},function(err,obj){
        if(err){
            res.send({status:false,message:"error occured while processing login request"});
            console.log(err);
        }
        else{
            if(obj == null){
                res.send({status:false,message:"Admin not registered"});
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