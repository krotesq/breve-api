const {response, buildData} = require('../util/response.util');
const uid = require('../util/uid.util');
const Entry = require('../models/entry.model');

const get = (req, res) => {
    res.status(418).json(response(false, "I'm a teapot!"));
}

const post = (req, res) => {
    const id = uid();
    const timestamp = Date.now();
    const long_url = req.body.url;
    const short_url = process.env.SHORTLINK_BASE + id;
    const auth = null;
    
    // create new short link func / add to db
    const entry_instance = new Entry({ id: id, timestamp: timestamp, long_url: long_url, short_url: short_url, auth: auth });
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