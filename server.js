var express = require('express');
var index = require('/public.index.html');
var app = express();


app.use('/');

app.use(express.static('public'));

var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
})
