const response = require('../util/response.util');
const uid = require('../util/uid.util');
const Entry = require('../models/entry.model');

const get = async (req, res) => {
    const { url, code } = req.query;
    let search = {};

    if (url) {
        search = {'longUrl': url};
    }
    else if (code) {
        search = {_id: code};
    }
    else {
        return res.status(404).json(response(false, 'No entry found'));
    }

    const entry = await Entry.findOne(search, null);
    
    if (entry) {
        return res.status(200).json(response(true, 'Entry found', entry));
    }

    return res.status(404).json(response(false, 'No entry found'));
}

const post = (req, res) => {
    const _id = uid();
    const timestamp = Date.now();
    const longUrl = req.body.url;
    const shortUrl = `${process.env.DOMAIN}/${_id}`;
    const auth = null;
    
    // create new short link func / add to db
    const entry = new Entry({ _id, timestamp, longUrl, shortUrl, auth });
    entry.save((err) => {
        if (err) {
            return res.status(500).json(response(false, "Internal server error", err));
        }
        console.log(`[+] Entry was successfully added to database`);
        return res.status(201).json(response(true, "Link created", entry));
    });
}

module.exports = {
    get,
    post
}