const http = require('http');

const students = ["afsana", "ghada", "rajkot"];

const server = http.createServer((req, res) => {
    res.statusCode = 203;
    // res.setHeader('Content-Type','text/html');

    if (req.url == "/" && req.method == "GET") {
        res.write("Home page with get method");
    }
    else if (req.url == "/" && req.method == "POST") {
        res.write("Home page with post method");
    }
    else if (req.url == "/" && req.method == "PUT") {
        res.write("Home page with put method");
    }
    else if (req.url == "/" && req.method == "PATCH") {
        res.write("Home page with patch method");
    }
    else if (req.url == "/" && req.method == "DELETE") {
        res.write("Home page with delete method");
    }

    res.end();
});

server.listen(3001, () => {
    console.log("Server started at 3001")
});