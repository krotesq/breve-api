const Entry = require('../models/entry.model');
module.exports = (req, res) => {
    const id = req.params.id;
    if(id) {
        Entry.findOne({_id: id}, (err, entry) => {
            if (entry) {
                return res.redirect(entry.longUrl);
            } else {
                if(err) console.log(err);
                return res.redirect("/");
            }
        })
    }
}