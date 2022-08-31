const response = require('../util/response.util')
const isURL = require('validator/lib/isURL')

module.exports = (req, res, next) => {
    // check if given url is legit url
    if (!isURL(req.url)) {
        return res.status(400).json(response(false, 'Wrong format'));
    }

    // check for https:// or http://, if not add https://
    if (!(req.url.includes('https://') || req.url.includes('http://'))) {
        req.url = `https://${req.url}`;
    }
    console.log(req.url);
    next();
}