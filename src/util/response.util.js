module.exports = (success, message, data = {}) => {
    return {
        success: success,
        msg: message,
        data: data
    }
}