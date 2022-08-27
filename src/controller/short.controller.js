const {response, buildData} = require('../util/response.util');
const uid = require('../util/uid.util');

const get = (req, res) => {
    res.status(418).json(response(false, "I'm a teapot!"));
}

const post = (req, res) => {
    const id = uid();
    const timestamp = Date.now();
    const long_url = req.body.url;
    const short_url = process.env.SHORTLINK_BASE + id;

    if(!long_url) {
        return res.status(400).json(response(false, 'no url to shorten found'))
    } 
    
    // create new short link func / add to db

    // send response
    const data = buildData(id, timestamp, long_url, short_url);
    res.status(201).json(response(true, "Link created", data));
}

module.exports = {
    get,
    post
}