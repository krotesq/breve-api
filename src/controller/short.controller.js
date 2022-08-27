const response = require('../util/response.util');
const uid = require('../util/uid.util');

const get = (req, res) => {
    res.status(418).json(response(false, "I'm a teapot!"));
}

const post = (req, res) => {
    const id = uid();
    res.status(201).json(response(true, "Link created", {
        long_url: 'test.com',
        short_url: `breve.app/${id}`,
        uid: id
    }));
}

module.exports = {
    get,
    post
}