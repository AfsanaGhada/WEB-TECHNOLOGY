const mongoose = require('mongoose');

const schema = mongoose.Schema({
    ProductName: String,
    ProductPrice: Number,
    ProductQuality: String,
    
});

module.exports = mongoose.model("product_details",schema);

