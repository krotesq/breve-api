const express = require('express');
const router = express.Router();
// controller
const { get, post } = require('../controller/short.controller');
// middleware
const checkurl = require('../middleware/checkurl.middleware');
const checkbody = require('../middleware/checkbody.middleware');

router.get('/', get);
router.post('/', checkbody, checkurl, post);

module.exports = router;