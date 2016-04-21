var express = require('express');
var router = express.Router();
var User = require('../models/users.js')
var mongoose = require('mongoose');

// define the info page
router.get('/', function(req, res) {
  res.send('Users');
});

router.post('/register', function (req, res){
  console.log(req.body);
  var newUser = new User({
    name: req.body.name,
    password: req.body.password
  })
  newUser.save();
  res.sendStatus(200);
});

module.exports = router;
