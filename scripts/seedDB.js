const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/entertainme", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const userSeed = [
  {
    fname: "Jack",
    lname: "Shephard",
    username: "jshephard",
    password: "mypassword123",
    favorites: [{
      id: 4607,
      media_type: "tv",
      name: "Lost",
      addedDate: new Date(Date.now())
    }]
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
