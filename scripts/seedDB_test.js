const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const userSeed = [
  {
    first_name: "John",
    last_name: "Smith",
    date_of_birth: "December 1, 1989",
    city: "Chicago",
    state: "IL",
    country: "USA",
    interest_1: "Top Gun",
    interest_2: "Lost",
    interest_3: "Tom Cruise",
    date: new Date(Date.now())
  }
];

db.Post.remove({})
  .then(() => db.userProfile.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
