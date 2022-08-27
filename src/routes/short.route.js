const express = require('express');
const router = express.Router();
// controller
const { get, post } = require('../controller/short.controller');
// middleware
const checkurl = require('../middleware/checkurl.middleware');

router.get('/', get);
router.post('/', checkurl, post);

module.exports = router;