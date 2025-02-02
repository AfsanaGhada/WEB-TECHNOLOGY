const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }], // Reference to categories
  stock: Number,
  images: [String], // Array of image filenames
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Product", productSchema);
