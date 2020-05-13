const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newInterestSchema = new Schema({
  interest: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const newInterest = mongoose.model("newInterest", newInterestSchema);

module.exports = newInterest;


// how to incorporate login information id? or push to user profile