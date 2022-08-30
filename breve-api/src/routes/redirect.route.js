const express = require('express');
const router = express.Router({ mergeParams: true });

const redirect = require('../controller/redirect.controller');
const getRedirectInfos = require('../middleware/redirect.middleware');
const updateCounter = require('../middleware/ccount.middleware');

router.get("/", getRedirectInfos, updateCounter, redirect);

module.exports = router;