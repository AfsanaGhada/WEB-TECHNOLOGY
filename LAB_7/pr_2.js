
const Express = require("express")
const app = Express();

const students = ['Afsana', 'rajkot', 'gujarat', 'INDIA']

app.get('/about', (req, res) => {
    res.send("Hello home page");
});
app.get('/home', (req, res) => {
    res.send("hello Home page");
});
app.get('/contact us', (req, res) => {
    res.send("contact us for any query");
});
app.get('/data', (req, res) => {
    res.send("students");
});
app.get('/services', (req, res) => {
    res.send("Hello,user you need any Service??? ");
});


app.listen(3001, () => {
    console.log("Server started at 3001")
});