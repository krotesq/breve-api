const Entry = require('../models/entry.model');

module.exports = (req, res, next) => {
    const id = req.params.id;
    let search;
    if(id) {
        search = {_id: id};
        Entry.findOne(search, (err, entry) => {
            if (entry) {
                req.entry = entry;
                req.searchQuery = search;
                next();
            } else {
                return res.redirect(`https://${process.env.DOMAIN}`);
            }
        });
    }
    return 
}