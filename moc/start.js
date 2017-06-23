var express = require('express');
var app = express();

app.use(express.static('./moc/files'))


var server = app.listen(3033, function () {
  var host = server.address().address;
  console.log(JSON.stringify(server.address()))
  var port = server.address().port;

  console.log('moc start ...');
  return true});