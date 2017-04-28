/**
 * Contact path handler
 */
const express = require('express');
const router = express.Router();
const handler = require('../handlers');

router.post('/', handler.contact.post);

module.exports = router;
