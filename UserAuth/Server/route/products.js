var Product = require("../model/product");
var ObjectId = require('mongoose').Types.ObjectId;


// add prod
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


//getProducts
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


//get Product by id
exports.getProductsByID = function(request,response){


    if(!ObjectId.isValid(request.params.id)){
            return response.status(400).send('no record with given id');
        }
    Product.findById(request.params.id,function(err,product){
        if(err){
            console.log(err);
        }
        response.send(product);
        console.log(product);
    })

   
}


//update for a particualar id
exports.updateProduct = function(req,res){
    Product.findById(req.params.id, function(err, prod){

        if (!prod)
        return next(err);

      else{
        prod.prodId = req.body.prodId;
        prod.prodName = req.body.prodName;
        prod.prodPrice = req.body.prodPrice;
        prod.prodDesc = req.body.prodDesc;
        prod.prodImage = req.body.prodImage;

        prod.save().then(prod => {
          res.json('Update complete');
      })
      .catch(err => {
        res.status(400).send("unable to update the product");
  });
    }
    }) 

}


//delete product
exports.deleteProduct = function(req,res){
    Product.findByIdAndRemove(req.params.id,function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    })
}
