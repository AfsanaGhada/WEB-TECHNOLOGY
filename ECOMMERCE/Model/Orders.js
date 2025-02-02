const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to users
  items: [
    {
      product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, // Reference to products
      quantity: Number,
      price: Number
    }
  ],
  total: Number,
  status: String,  // e.g., "Pending", "Shipped", "Delivered"
  shipping_address: {
    line1: String,
    city: String,
    state: String,
    zip: String,
    country: String
  },
  payment_status: String,  // e.g., "Paid", "Pending"
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);
