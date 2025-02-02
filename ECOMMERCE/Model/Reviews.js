const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to users
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, // Reference to products
  rating: Number, // Scale of 1-5
  comment: String,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Review", reviewSchema);
