const express = require('express');
const app = express();

require('dotenv').config();

app.get('/student', (req, res) => {
    res.send("Call the middleware for /student");
});

app.listen(process.env.PORT, () => {
    console.log("Server started on port:", process.env.PORT);
});

