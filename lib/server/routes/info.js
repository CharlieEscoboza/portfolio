const express = require('express');
const router = express.Router();
const handler = require('../handlers');

router.get('/', handler.info.get);

module.exports = router;
