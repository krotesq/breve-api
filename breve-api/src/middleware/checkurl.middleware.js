// Middleware to check if passed URL has already been shortened
const response = require('../util/response.util');
const Entry = require('../models/entry.model');

module.exports = (req, res, next) => {
    // check if entry already exists with url && cid

    Entry.findOne({'longUrl': req.url}, (err, entry) => {
        if(entry) {
            return res.status(200).json(response(true, 'Entry already exists', entry));
        }
        next();
    });
}