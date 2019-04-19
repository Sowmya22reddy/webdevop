var Product = require("../model/product");

exports.addProduct = function(req,res){

    console.log(req.body);
    var prodId = req.body.prodId;
    var prodName = req.body.prodName;
    var prodPrice = req.body.prodPrice;
    var prodDesc = req.body.prodDesc;
    var prodImage = req.body.prodImage;

    var newProd = new Product({
    
        prodId:prodId,
        prodName:prodName,
        prodPrice:prodPrice,
        prodDesc:prodDesc,
        prodImage:prodImage
    });
    Product.findOne({prodId:prodId},function(err,event){
        if(err){
            res.send({status:false,message:"error occured while finding product",err});
            console.error(err);
        }
        else{

            if(event==null){
                newProd.save(function(err1,result){
                    if(err1){
                        res.send({status:false,message:"Cannot add product"});
                    }
                    else{
                        res.send({status:true,message:"Product Added Succesfully"});
                        console.log(result);

                    }
                });
            }
            else{
                res.send({status:false,message:"Product already exist"});
            }
        }
    });

}

exports.getProducts = function(request,response){

    Product.find(function(err,res){
        if(err){
            console.log(err);
            // res.send({status:false,message:"error in loading products"});
        }
        else{
            console.log(res);
            // res.send({status:true,message:"Success",res});
            response.json(res);
        }
    });

}

