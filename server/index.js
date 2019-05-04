var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');

var app = express();
let port = 3000

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/generator', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});

