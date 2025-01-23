const Express = require('express')
const app = Express();

const students = ['Afsana', 'rajkot', 'gujarat', 'INDIA']

app.get('/', (req, res) => {
    res.send(students); s
});

app.post('/demo', (req, res) => {
    res.send("Hello world home post")
});

app.listen(3000, () => {
    console.log("Server started at 3000")
});





