const generateResponse = (success, message, data = {}) => {
    return {
        success: success,
        msg: message,
        data: data
    }
}
module.exports = generateResponse;