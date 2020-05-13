const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  date_of_birth: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  interest_1: { type: String, required: true },
  interest_2: { type: String, required: true },
  interest_3: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const userProfile = mongoose.model("UserProfile", userProfileSchema);

module.exports = userProfile;

// how to incorporate login information?