var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var characterSchema = mongoose.Schema({
  user: Number,
  genStory: String,
  userStory: String,
});

var Character = mongoose.model('Item', characterSchema);

var select = function(callback) {
  Character.find({user}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.select = select;