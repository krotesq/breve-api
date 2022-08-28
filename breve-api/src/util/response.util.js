const buildData = (id, timestamp, long_url, short_url, auth = null) => {
    return {
        id: id,
        timestamp: timestamp,
        long_url: long_url,
        short_url: short_url,
        auth: auth
    }
}
const response = (success, msg, data = {}) => {
    return {
        success: success,
        msg: msg,
        data: data
    }
}
module.exports = {
    response, 
    buildData
};