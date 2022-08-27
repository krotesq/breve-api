const generateResponse = require('../util/response.util');

const all = (req, res) => {
    let response = generateResponse(true, "success", { id: "asd",date: "2022-09-12",short_link: "http://breve.com/asd",long_link: "https://youtube.com/com",auth: "-" });
    res.status(404).json(response);
}

module.exports = {all};