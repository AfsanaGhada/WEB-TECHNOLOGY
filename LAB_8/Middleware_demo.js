const express = require('express');
require('dotenv').config();

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

authFun = (req, res, next) => {
    if (req.url == "/login") {
        next();
    }
    else if (req.body.un == "afsana" && req.body.pw == 2006) {
        next();
    }
    else {
        res.send("Unauthorized")
    }
}

app.use(authFun);

app.get("/login", (req, res) => {
    res.send("Enter Username and password");
});

app.get("/student", (req, res) => {
    res.send("Student Called");
});

app.get("/student/:id", (req, res) => {
    res.send("Detail Student Called");
});

app.get("/student/search/:id", (req, res) => {
    res.send("Detail Student Called");
});

app.get("/faculty", authFun, (req, res) => {
    res.send("Faculty Called");
})

app.get("/laptop", authFun, (req, res) => {
    res.send("Laptop Called");
})


app.listen(process.env.PORT, () => {
    console.log("Server started @ ", process.env.PORT)
});