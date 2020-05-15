const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newInterestSchema = new Schema({
  interest: { type: String },
  date: { type: Date, default: Date.now }
});

const Interest = mongoose.model("Interest", newInterestSchema);

module.exports = Interest;


// how to incorporate login information id? or push to user profile