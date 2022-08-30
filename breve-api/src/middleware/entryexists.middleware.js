const response = require('../util/response.util');
const Entry = require('../models/entry.model');
module.exports = async (req, res, next) => {
    let search = req.searchQuery;

    const entry = await Entry.findOne(search, null);
    
    if (!entry) {
        return res.status(404).json(response(false, 'No entry found'));
    }
    req.entry = entry;
    next();
}