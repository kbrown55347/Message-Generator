const express = require('express');
const router = express.Router();
const messageTemplates = require('../modules/messageTemplates.data.js');

// GET Route
router.get('/', (req, res) => {
  res.send(messageTemplates);
}); // END GET Route

module.exports = router;