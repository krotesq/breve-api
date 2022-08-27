const express = require('express');
const {all} = require('../controller/all.controller');

const router = express.Router();

router.all('/', all)

module.exports = router;