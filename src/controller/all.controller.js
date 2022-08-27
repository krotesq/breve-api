const response = require('../util/response.util');

const all = (req, res) => {
    res.status(404).json(response(false, 'Not found!'));
}

module.exports = {all};