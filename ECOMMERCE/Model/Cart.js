const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to users
  items: [
    {
      product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, // Reference to products
      quantity: Number,
      price: Number
    }
  ],
  total: Number
});

module.exports = mongoose.model("Cart", cartSchema);
