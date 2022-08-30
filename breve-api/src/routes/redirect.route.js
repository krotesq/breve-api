const express = require('express');
const router = express.Router();

const redirect = require('../controller/redirect.controller');

router.get("/:id", redirect);

module.exports = router;