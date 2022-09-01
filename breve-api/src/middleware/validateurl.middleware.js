const response = require('../util/response.util')
const isURL = require('validator/lib/isURL')

module.exports = (req, res, next) => {
    // check if given url is legit url
    if (!isURL(req.url)) {
        return res.status(400).json(response(false, 'Wrong format'));
    }

    if(req.url.includes(process.env.DOMAIN)) {
        return res.status(400).json(response(false, 'Already shortened links cannot be shortened'));
    }

    // check for https:// or http://, if not add https://
    if (!(req.url.includes('https://') || req.url.includes('http://'))) {
        req.url = `https://${req.url}`;
    }
    
    // check if cid is valid
    if(req.cid) {
        if((req.cid).replace(" ", "") == "") {
            return res.status(400).json(response(false, 'Custom id cannot be empty'));
        }
        if(!/^[A-Za-z0-9]*$/.test(req.cid)) {
            return res.status(400).json(response(false, 'Custom id may only contain numbers and letters'));
        }
        if((req.cid).length > process.env.ID_MAX_CHARS) {
            return res.status(400).json(response(false, `Custom id may only be ${process.env.ID_MAX_CHARS} letters long`));
        }
    }
    console.log(`CID: ${req.cid}`);
    console.log(`URL: ${req.url}`);
    next();
}