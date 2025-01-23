const mongoose = require('mongoose');

// Database connection string with a database name
const dburl = "mongodb+srv://Afsana_Ghada:Afsana_Ghada@cluster0.j5hpx.mongodb.net/Class_Demo"; // Replace 'myDatabase' with your actual database name

mongoose.connect(dburl, {})
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });
