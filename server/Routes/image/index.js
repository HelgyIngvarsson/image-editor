const express = require('express');
const router = express.Router();
const handlers = require('./handlers');

router.get('/image',handlers.uploadImage);

module.exports = router;