var express = require('express');
var userRoutes = require('./routes/userRoutes.js');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();

//Setup middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect('mongodb://192.168.1.220/reddb');

//Set the routes
app.use('/user', userRoutes);

app.listen(80, function () {
  console.log('Listening on port 80!');
});
