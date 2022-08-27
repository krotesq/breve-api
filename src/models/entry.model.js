const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    id: String,
    timestamp: String,
    long_url: String,
    short_url: String,
    auth: String
});

module.exports = mongoose.model('Entry', entrySchema);