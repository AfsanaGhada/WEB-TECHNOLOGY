const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const data = [
    { name: "arjun", rollNo: 101, spi: 1.2 },
    { name: "bala", rollNo: 102, spi: 9.2 },
    { name: "darshan", rollNo: 103, spi: 1.9 },
    { name: "rajkot", rollNo: 104, spi: 8.3 },
];

//getAll
app.get('/students', (req, res) => {
    res.send(data);
});

//getByRollNo
app.get('/student/:rollNo', (req, res) => {
    const ans = data.find(temp => temp.rollNo == req.params.rollNo);
    res.send(ans);
});

//getStudentWithLessMarks
app.get('/student/less/:marks', (req, res) => {
    const ans = data.filter((temp) => {
        if (temp.spi < req.params.marks) {
            return true;
        }
    });
    res.send(ans);
})

//delete
app.delete('/student/:rollNo', (req, res) => {
    const indexToDelete = data.findIndex(temp => temp.rollNo == req.params.rollNo);
    console.log("req.params.rollNo", req.params.rollNo);
    console.log("indexToDelete", indexToDelete);
    if (indexToDelete >= 0) {
        data.splice(indexToDelete, 1);
    }

    res.send(data);
});

//insert
app.post('/student', (req, res) => {
    data.push(req.body);
    res.send(data);
});

//update
app.patch('/student/:rollNo', (req, res) => {
    const indexToEdit = data.findIndex(temp => temp.rollNo == req.params.rollNo);
    data[indexToEdit] = req.body;
    res.send(data);
});


app.listen(3000, () => {
    console.log("Server started @ 3000");
})