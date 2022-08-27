const Entry = require('../models/entry.model');

module.exports = (req, res, next) => {
    // check if entry for long url already exists
    // if yes -> error-> already exist and return entry
    
    // check if long url is passed
    if(!req.body.url) {
        return res.status(400).json(response(false, 'no url to shorten found'));
    }


    Entry.find({'id': 'as'},)
    console.log("[+] middleware link check:")
    next();
}