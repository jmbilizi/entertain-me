var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FavoriteSchema = new Schema({

    media_name: { type: String, required: true },
    date: { type: Date, default: Date.now }

});


module.exports = mongoose.model('Favorite', FavoriteSchema);