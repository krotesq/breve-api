// Middleware to check if passed URL has already been shortened

const {response} = require('../util/response.util');
const Entry = require('../models/entry.model');

module.exports = (req, res, next) => {
    Entry.findOne({'longUrl': req.body.url}, (err, entry) => {
        if (err) {
            console.log(err);
        }
        if (entry) {
            return res.status(200).json(response(false, 'Entry already exists', entry));
        }
        next();
    });
}