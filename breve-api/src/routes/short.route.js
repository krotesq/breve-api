const express = require('express');
const router = express.Router();
// controller
const { get, post } = require('../controller/short.controller');
// middleware
const checkUrl = require('../middleware/checkurl.middleware');
const checkBody = require('../middleware/checkbody.middleware');
const validateUrl = require('../middleware/validateurl.middleware');

router.get('/', get);
router.post('/', checkBody, validateUrl, checkUrl, post);

module.exports = router;