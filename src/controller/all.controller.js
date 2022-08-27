
const all = (req, res) => {
    res.status(404).json({
        status: false,
        msg: 'Not found',
        data: {}
    })
}

module.exports = {all};