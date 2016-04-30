var express = require('express');
var router = express.Router();
var User = require('../models/users.js')
var mongoose = require('mongoose');

router.get('/', function(req, res) {
  res.sendFile('views/main.html', {root: "./"});
});

module.exports = router;
