const Entry = require('../models/entry.model');

module.exports = async (req, res, next) => {
    const search = req.searchQuery;
    const entry = req.entry;

    await Entry.updateOne(search, {ccount: entry.ccount + 1});
    next();
}