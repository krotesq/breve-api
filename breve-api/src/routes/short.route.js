const express = require('express');
const router = express.Router();
// controller
const { get, post } = require('../controller/short.controller');
// middleware
const checkUrl = require('../middleware/checkurl.middleware');
const checkCID = require('../middleware/checkcid.middleware');
const checkBody = require('../middleware/checkbody.middleware');
const validateUrl = require('../middleware/validateurl.middleware');
const checkParams = require('../middleware/checkparams.middleware');
const entryExists = require('../middleware/entryexists.middleware');
const updateCount = require('../middleware/ccount.middleware');

router.get('/', checkParams, entryExists, updateCount, get);
router.post('/', checkBody, validateUrl, checkUrl, checkCID, post);

module.exports = router;