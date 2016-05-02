var express = require('express');
var userRoutes = require('./routes/userRoutes.js');
var mainRoutes = require('./routes/mainRoutes.js');
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
app.use('/main', mainRoutes);

app.get('/', function(req, res) {
  res.sendFile('views/login.html', {root: "./"});
});

app.get('/favicon.ico', function(req, res){
  res.sendFile('/favicon.ico', {root: "./"});
})

app.get('/scripts/login.js', function(req, res) {
  res.sendFile('views/scripts/login.js', {root: "./"});
});

app.listen(80, function () {
  console.log('Listening on port 80!');
});
