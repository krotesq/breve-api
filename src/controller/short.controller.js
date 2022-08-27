const {response, buildData} = require('../util/response.util');
const uid = require('../util/uid.util');

const get = (req, res) => {
    res.status(418).json(response(false, "I'm a teapot!"));
}

const post = (req, res) => {
    const id = uid();
    const timestamp = Date.now();
    const long_url = req.body.url;

    if(!long_url) {
        return res.status(400).json(response(false, 'no url to shorten found'))
    } 
    
    // create new short link func / add to db


    // res.status(201).json(response(true, "Link created", {
    //     uid: id,
    //     timestamp: timestamp,
    //     long_url: long_url,
    //     short_url: `breve.app/${id}`,
    //     auth: null
    // }));
    
    const data = buildData(id, timestamp, long_url, `breve.app/${id}`);
    res.status(201).json(response(true, "test message", data));
}

module.exports = {
    get,
    post
}