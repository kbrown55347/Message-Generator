const express = require('express');
const router = express.Router();
const guests = require('../modules/guests.data.js');

// GET Route
router.get('/', (req, res) => {
  res.send(guests);
}); // END GET Route

module.exports = router;