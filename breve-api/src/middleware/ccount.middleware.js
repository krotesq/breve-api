const Entry = require('../models/entry.model');
const response = require('../util/response.util');

module.exports = (req, res, next) => {
    Entry.findById(id, async (error, item) => {
        if(item) {
            await Entry.updateOne(search, {ccount: item.ccount + 1});
            next();
        }
        return res.status(400).json(response(false, "test", ));
    });
}