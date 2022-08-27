const express = require('express');
const router = express.Router();
const {get, post} = require('../controller/short.controller');

router.get('/', get);
router.post('/', post);

module.exports = router;