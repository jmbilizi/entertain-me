const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/entertainme', {
  useNewUrlParser: true,
  useFindAndModify: false
});

const favoriteSeed = [
  {
    media_name: 'Lost',
    added_date: new Date(Date.now())
  }
];

db.Celebrity.remove({})
  .then(() => db.Favorite.collection.insertMany(favoriteSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
