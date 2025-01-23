
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const faculty_schema = require('./faculty_schema');


const alturl = "mongodb+srv://24010100704:jinal123@cluster0.6fihy.mongodb.net/Faculties"

mongoose.connect(alturl).then(
    () => {console.log('connected to DB server');

    const app = express();
    app.use(bodyparser.json());

    //get all
    app.get("/faculty",async (req,res)=>{
        const data = await faculty_schema.find();
        res.send(data);
    });

    //insert document
    app.post("/faculty", async (req,res)=>{
        const obj = new faculty_schema({
            FacultyName:req.body.FacultyName,
            FacultyMobile:req.body.FacultyMobile,
            FacultyEmail: req.body.FacultyEmail,
        });
        const data = await obj.save();
        res.send(data);

    });

    //update Document
    app.patch("/faculty/:id", async (req,res)=>{
        let fac = await faculty_schema.findOne({_id:req.params.id});
        fac.FacultyName = req.body.FacultyName;
        fac.FacultyMobile = req.body.FacultyMobile;
        fac.FacultyEmail = req.body.FacultyEmail;
        const data = await fac.save();
        res.send(data);
    });


    //delete document
    app.delete("/faculty/:id", async (req,res)=>{
        const data = await faculty_schema.deleteOne({_id:req.params.id});
        res.send(data)
    });



    app.listen(3000,() => {
        console.log('server is running mode at 3000 port');
    })

});