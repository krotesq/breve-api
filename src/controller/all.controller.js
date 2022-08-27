const uid = require('../util/uid.util');

const all = (req, res) => {
    res.status(404).json({
        status: false,
        msg: uid(),
        data: {}
    })
}

module.exports = {all};