const Entry = require('../models/entry.model');
module.exports = (req, res) => {
    return res.redirect(req.entry.longUrl);
}