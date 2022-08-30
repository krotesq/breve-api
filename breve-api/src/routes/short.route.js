const express = require('express');
const router = express.Router();
// controller
const { get, post } = require('../controller/short.controller');
// middleware
const checkUrl = require('../middleware/checkurl.middleware');
const checkBody = require('../middleware/checkbody.middleware');
const validateUrl = require('../middleware/validateurl.middleware');
const checkParams = require('../middleware/checkparams.middleware');
const entryExists = require('../middleware/entryexists.middleware');

router.get('/', checkParams, entryExists, get);
router.post('/', checkBody, validateUrl, checkUrl, post);

module.exports = router;