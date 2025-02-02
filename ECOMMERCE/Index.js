const mongoose = require('mongoose');
const userRoutes = require('./Routes/userRoutes');
const categoryRoutes = require('./Routes/categoryRoutes')
const productRoutes = require('./Routes/productRoutes') 
const cartRoutes = require('./Routes/cartRoutes')
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()



const atlasUrl = "mongodb+srv://testuser:TestUser123@cluster0.j5hpx.mongodb.net/ecommerce_db";
mongoose.connect(atlasUrl).then(() => {
    console.log("Connected to DB Server");

    const app = express();

    app.use(bodyParser.json())
    //use routes
    app.use('/api/users', userRoutes);
    app.use('/api/Categories',categoryRoutes)
    app.use('/api/Product',productRoutes)
    app.use('/api/cart',cartRoutes)


    app.listen(3000, () => {
        console.log("Web server started @ 3000");
    });

}).catch((error) => {
    console.log(error)
});