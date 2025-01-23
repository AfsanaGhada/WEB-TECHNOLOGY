const http = require("http");
const { json } = require("stream/consumers");
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    if (req.url == "/") {
        res.write(json.Stringify("hello <h1>world</h1>"))
    }
    res.end();
})
server.listen(3000, () => {
    console.log("server start at 3000")
});
