const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,  // Hashed password
  role: String,  // e.g., "customer", "admin"
  addresses: [
    {
      line1: String,
      city: String,
      state: String,
      parseInt: String,
      country: String
    }
  ],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
