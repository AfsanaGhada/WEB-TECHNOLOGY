const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to users
  amount: Number,
  status: String,  // e.g., "Success", "Pending", "Failed"
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Payment", paymentSchema);
