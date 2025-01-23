const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.statusCode = 202;
    if (req.url == "/") {
        res.write("hello world home page")
    }
    if (req.url == "/about") {
        fs.readFile('about.txt', (err, data) => {
            res.end(data)
        });
    }
    if (req.url == "/contact") {
        fs.readFile('contact.txt', (err, data) => {
            res.end(data)
        });
        res.write("hello world contact page")
    }
    if (req.url == "/product") {
        const data = fs.readFileSync('product.txt', "utf-8");
        res.end(data);
    }
    if (req.url == "/resistration") {
        res.write("hello world contact page")
    }

});

server.listen(3000, () => {
    console.log("server start at 3000")
});
