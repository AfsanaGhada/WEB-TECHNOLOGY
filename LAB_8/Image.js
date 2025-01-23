const express = require('express');

const app = express();

app.use(express.static("IMAGE"))
app.get('/Home', (req, res) => {
    res.send("Hello Word");
});
app.listen(3000, () => {
    console.log("server started @ 3000");
})