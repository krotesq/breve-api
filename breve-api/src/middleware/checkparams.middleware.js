const response = require('../util/response.util');
module.exports = (req, res, next) => {
    const {url, code} = req.query;
    let search = {};

    if (url) {
        search = {'longUrl': url};
    }
    else if (code) {
        search = {_id: code};
    }
    else {
        return res.status(400).json(response(false, 'Query params [code] || [url] expected. None found.'));
    }
    req.searchQuery = search;
    next();
}