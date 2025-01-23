const express = require('express');
const app = express();

app.all('/student/:id', (req, res, next) => {
    console.log("Middleware called");
    next();
});

app.get('/student', (req, res) => {
    res.send("Call the middleware for /student");
});

app.get('/student/project', (req, res) => {
    res.send("Call the middleware for /student/project");
});

app.get('/student/:id/Project/:Projectid', (req, res) => {
    res.send(req.params);
});

app.get('/student/:id', (req, res) => {
    res.send(req.params);
});

app.listen(3000, () => {
    console.log("Server started at 3000");
});
