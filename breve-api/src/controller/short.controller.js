const {response, buildData} = require('../util/response.util');
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
    const id = uid();
    const timestamp = Date.now();
    const longUrl = req.body.url;
    const shortUrl = process.env.SHORTLINK_BASE + id;
    const auth = null;
    
    // create new short link func / add to db
    const entry = new Entry({ _id: id, timestamp, longUrl, shortUrl, auth });
    console.log(entry);
    entry.save((err) => {
        if (err) {
            return res.status(500).json(response(false, "Internal server error", err));
        }
        console.log(`[+] Entry was successfully added to database`);
        // send response
        const data = buildData(id, timestamp, longUrl, shortUrl);
        return res.status(201).json(response(true, "Link created", data));
    });
}

module.exports = {
    get,
    post
}