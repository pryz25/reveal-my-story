var express = require('express');
var bodyParser = require('body-parser');
var characters = require('../database-mongo/index.js');

var app = express();
let port = 3000

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser( { extended: true } ));

app.get('/generator', (req, res) => {
  characters.select(req.body.user, (err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/generator', (req, res) => {
  characters.add(req.body, (err, data) => {
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

