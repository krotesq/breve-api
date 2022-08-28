module.exports = (success, msg, data = {}) => {
    return {
        success: success,
        msg: msg,
        data: data
    }
}