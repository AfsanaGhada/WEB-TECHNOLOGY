const http = require("http");
const server = http.createServer((req, res) => {
    res.write("hello world");
    res.end();

});
server.listen(3000, () => {
    console.log("server start at 3000")
});
