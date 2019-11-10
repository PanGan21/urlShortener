const express = require('express');
const router = express.Router;
const shortenerController = require('../controllers/shortener');

router.post('/', shortenerController.saveUrl);

module.exports = router;