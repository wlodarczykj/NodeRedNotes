var mongoose = require('mongoose');
var schema = mongoose.Schema;

var usersSchema = new schema({
  name: String,
  password: String
});

var User = mongoose.model('user', usersSchema)
module.exports = User
