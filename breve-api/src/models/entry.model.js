const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    _id: String,
    timestamp: String,
    longUrl: String,
    shortUrl: String,
    auth: {
        type: String,
        default: null   
    },
    ccount: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Entry', entrySchema);