const {response, buildData} = require('../util/response.util');
const uid = require('../util/uid.util');
const Entry = require('../models/entry.model');

const get = async (req, res) => {
    let entries = await Entry.find({}, 'id timestamp long_url short_url auth', null);
    if(entries.length > 0) {
        return res.status(200).json(response(true, "no entries found", {entries: entries}));
    }
    return res.status(200).json(response(true, "ok", {entries: entries}));
}

const post = (req, res) => {
    const id = uid();
    const timestamp = Date.now();
    const long_url = req.body.url;
    const short_url = process.env.SHORTLINK_BASE + id;
    const auth = null;
    
    // create new short link func / add to db
    const entry_instance = new Entry({ _id: id, timestamp: timestamp, long_url: long_url, short_url: short_url, auth: auth });
    entry_instance.save((err) => {
        if(err) {
            return res.status(500).json(response(false, "internal server error", err));
        }
        console.log(`[+] entry was successfully added to database`);
    });

    // send response
    const data = buildData(id, timestamp, long_url, short_url);
    return res.status(201).json(response(true, "Link created", data));
}

module.exports = {
    get,
    post
}