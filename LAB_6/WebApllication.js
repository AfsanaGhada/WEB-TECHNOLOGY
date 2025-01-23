const http = require("http");
const server = http.createServer((req, res) => {
    res.statusCode = 202;
    if (req.url == "/") {
        res.write("hello world home page")
    }
    if (req.url == "/about") {

        res.write("hello world about page")
    }
    if (req.url == "/contact") {
        res.write("hello world contact page")
    }
    if (req.url == "/product") {
        res.write("hello world contact page")
    }
    if (req.url == "/resistration") {
        res.write("hello world contact page")
    }
    res.end();

});

server.listen(3000, () => {
    console.log("server start at 3000")
});
