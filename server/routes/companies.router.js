const express = require('express');
const router = express.Router();
const companies = require('../modules/companies.data');

// GET Route
router.get('/', (req, res) => {
  res.send(companies);
}); // END GET Route

module.exports = router;