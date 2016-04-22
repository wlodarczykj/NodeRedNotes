var express = require('express');
var router = express.Router();
var User = require('../models/users.js')
var mongoose = require('mongoose');

// Placeholder for Info page
//#TODO Need to add a view here.
router.get('/', function(req, res) {
  res.send('Users API');
});

//#TODO Add error handling.
router.post('/', function (req, res){
  var newUser = new User({
    name: req.body.name,
    password: req.body.password
  })
  newUser.save();
  res.sendStatus(200);
});

router.param('id', function(req, res, next, id){
  var query = User.findOne({"_id" : id});
  query.exec(function(err, user){
    if(err){
      res.sendStatus(500);
    }
    req.user = user;
    next();
  });
});

router.delete('/:id', function (req, res, next){
  req.user.delete();
  res.send(req.user);
});

router.put('/', function(req, res, next){
  var updatedUser = req.body;
  if(updatedUser.id){
    var query = { "_id" : updatedUser.id};
    User.update(query, updatedUser, {multi: true}, function(err, numAffected){
        if(err){
          res.sendStatus(500);
        }
        else{
          res.send("Number of rows updated: " + numAffected);
        }
    });
  }
  else{
    res.sendStatus(500);
  }
});

router.get('/:id', function(req, res, next){
  console.log(req.user);
  res.send(req.user);
});

module.exports = router;
