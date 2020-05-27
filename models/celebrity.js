var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CelebritySchema = new Schema({

    celeb_name: { type: String, required: true },
    date: { type: Date, default: Date.now }

});


module.exports = mongoose.model('Celebrity', CelebritySchema);