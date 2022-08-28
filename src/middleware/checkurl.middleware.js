const {response, buildData} = require('../util/response.util');
const Entry = require('../models/entry.model');

module.exports = (req, res, next) => {
    // check if long url is passed
    if(!req.body.url) {
        return res.status(400).json(response(false, 'no url to shorten found'));
    }
    const long_url = req.body.url;

    // check if entry for long url already exists
    const test = Entry.find({'long_url': long_url}, '_id timestamp long_url short_url auth', (err, entries) => {
        if(err) { /* db error */ }
        if(entries.length > 0) {
            // entry already exists
            const entry = entries[0];
            const data = buildData(entry.id, entry.timestamp, entry.long_url, entry.short_url, entry.auth);
            return res.status(200).json(response(false, 'entry already exists', data));
        } else {
            // create new one
            next();
        }
    });
}