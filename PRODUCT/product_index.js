const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const product_schema = require('./product_schema');


const alturl = "mongodb+srv://24010100704:jinal123@cluster0.6fihy.mongodb.net/Products"

mongoose.connect(alturl).then(
    () => {console.log('connected to DB server');

    const app = express();
    app.use(bodyparser.json());

    //get all
    app.get("/product",async (req,res)=>{
        const data = await product_schema.find();
        res.send(data);
    });

    //insert document
        app.post("/product", async (req,res)=>{
            const obj = new product_schema({
                ProductName:req.body.ProductName,
                ProductPrice:req.body.ProductPrice,
                ProductQuality: req.body.ProductQuality,
            });
            const data = await obj.save();
            res.send(data);
    
        });
    
        //update Document
        app.patch("/product/:id", async (req,res)=>{
            let pdct = await product_schema.findOne({_id:req.params.id});
            pdct.ProductName = req.body.ProductName;
            pdct.ProductPrice = req.body.ProductPrice;
            pdct.ProductQuality = req.body.ProductQuality;
            const data = await pdct.save();
            res.send(data);
        });
    
    
        //delete document
        app.delete("/product/:id", async (req,res)=>{
            const data = await product_schema.deleteOne({_id:req.params.id});
            res.send(data)
        });
    

    app.listen(3000,() => {
        console.log('server is running mode at 3000 port');
    })

});