const response = require('../util/response.util')
const isURL = require('validator/lib/isURL')

module.exports = (req, res, next) => {
    if (!isURL(req.body.url)) {
        return res.status(400).json(response(false, 'Wrong format'));
    }
    next();
}