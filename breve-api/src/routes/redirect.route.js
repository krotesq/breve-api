const express = require('express');
const router = express.Router({ mergeParams: true });

const redirect = require('../controller/redirect.controller');

router.get("/", redirect);

module.exports = router;