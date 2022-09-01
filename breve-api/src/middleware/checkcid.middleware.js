// Middleware to check if passed URL has already been shortened
const response = require('../util/response.util');
const Entry = require('../models/entry.model');

module.exports = (req, res, next) => {
    // check if entry already exists with url && cid

    if(req.cid) {
        Entry.findOne({'_id': req.cid}, (err, entry) => {
            if(entry) {
                return res.status(200).json(response(false, 'Custom id already exists', entry));
            }
            next();
        });
    } else {
        next();
    }
}