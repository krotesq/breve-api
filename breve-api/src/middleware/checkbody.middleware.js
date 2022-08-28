// Middleware to check if a URL is passed with in the request body

const {response} = require('../util/response.util');

module.exports = (req, res, next) => {
    if(!req.body.url) {
        return res.status(400).json(response(false, 'Missing URL in request body'));
    }
    next();
}