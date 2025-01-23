const Express = require('express')
const app = Express();

const data = ['Afsana', 'rajkot', 'gujarat', 'INDIA']

//get all data api
app.get('/data', (req, res) => {
    res.send(data);
});

//getby id api
app.get('/data/:id', (req, res) => {
    // console.log(req.params.id);
    // res.send(data[0]);
    // //or
    res.send(data[req.params.id])
});

//get by start adn end
app.get('/data/:start/:end', (req, res) => {

    const ans = [];
    for (i = req.params.start; i <= req.params.end; i++) {
        ans.push(data[i]);
    }
    res.send(ans)
});

//insert(create) api
app.post('/data/add/:temp', (req, res) => {
    data.push(req.params.temp);
    res.send(data);
});

//delete api
app.delete('/data/:id', (req, res) => {
    data.splice(req.params.id, 1);
});

//edit(update) api
app.patch('/data/edit/:id/:newdata', (req, res) => {
    data[req.params.id] = req.params.newdata
    res.send(data);
});


app.listen(3000, () => {
    console.log("Server started at 3000")
});





