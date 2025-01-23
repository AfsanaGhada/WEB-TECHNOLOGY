const express = require('express');

const app = express();

const routerStudent = require('./Middleware_controler/StudentRoutes');
app.use('/student', routerStudent)

app.listen(3000, () => {
    console.log("server started @ 3000");
})