const express = require('express');
const router = express.Router();
const handler = require('../handlers');

router.get('/', handler.homepage.get);

module.exports = router;
