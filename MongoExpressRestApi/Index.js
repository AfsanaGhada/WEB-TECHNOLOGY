const mongoose = require('mongoose');
const Student = require('./Model/Student');
const express = require('express');
const bodyParser = require('body-parser');

const atlasUrl = "mongodb+srv://testuser:TestUser123@cluster0.j5hpx.mongodb.net/Class_Demo";
mongoose.connect(atlasUrl).then(() => {
    console.log("Connected to DB Server");

    const app = express();

    app.use(bodyParser.json())

    //getAll
    app.get("/student", async (req, res) => {
        const data = await Student.find();
        res.send(data);
    });

    //getByID
    app.get("/student/:id", async (req, res) => {
        const data = await Student.findOne({ _id: req.params.id });
        res.send(data);
    });

    //delete
    app.delete("/student/:id", async (req, res) => {
        const data = await Student.deleteOne({ _id: req.params.id });
        res.send(data)
    });

    //insert (Create)
    app.post("/student", async (req, res) => {
        const obj = new Student({
            StudentName: req.body.StudentName,
            StudentMobile: req.body.StudentMobile,
            StudentEmail: req.body.StudentEmail
        });
        const data = await obj.save();
        res.send(data);

    });

    //update
    app.patch("/student/:id", async (req, res) => {
        let stu = await Student.findOne({ _id: req.params.id });
        stu.StudentName = req.body.StudentName;
        stu.StudentEmail = req.body.StudentEmail;
        stu.StudentMobile = req.body.StudentMobile;

        const data = await stu.save();
        res.send(data);
    });

    app.listen(3000, () => {
        console.log("Web server started @ 3000");
    });

}).catch((error) => {
    console.log(error)
});