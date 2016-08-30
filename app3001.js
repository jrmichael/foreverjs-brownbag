var express = require('express');
var app = express();

var port = 3001;

app.get('/', function (req, res) {
  res.send(`I am listening at port ${port}`);
});

app.listen(port, function () {
  console.log(`started on port ${port}`);
});