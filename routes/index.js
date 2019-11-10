const express = require('express');
const router = express.Router();
const controller = require('../controllers/shortener');

// create a short url
router.post('/', controller.saveUrl);

// get url
router.get('/:code', controller.getUrl);

module.exports = router;