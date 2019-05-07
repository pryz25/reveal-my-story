const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/characters');

let db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

let characterSchema = mongoose.Schema({
  user: String,
  genStory: String,
  userStory: String,
});

let Character = mongoose.model('Character', characterSchema);

let select = (callback) => {
  Character.find({user}, (err, items) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

let add = (data, callback) => {
  Character.create({data}, (err, success) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, success);
    }
  });
};

module.exports.select = select;
module.exports.add = add;
