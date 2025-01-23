const Express = require('express')
const app = Express();
const http = require("http");
const fs = require('fs');


app.get('/contact', (req, res) => {
    fs.readFile('contact.txt', "utf-8", (err, data) => {
        res.send(data)
    });
});

app.get('/about', (req, res) => {
    fs.readFile('about.txt', "utf-8", (err, data) => {
        res.send(data)
    });
});

app.listen(3000, () => {
    console.log("Server started at 3000")
});
