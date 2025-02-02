const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
  code: String,  // e.g., "SAVE20"
  discount_percentage: Number,
  description: String
});

module.exports = mongoose.model("Promotion", promotionSchema);
