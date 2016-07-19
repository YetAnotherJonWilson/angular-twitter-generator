var express = require('express');
var index = require('./routes/index');
var app = express();
var pg = require('pg');
var bodyParser = require('body-parser');


var config = {
  database: 'twitter-generator',
  port: 5432
};

app.use(express.static('public'));

app.use('/', index);

app.get('/adj', function(request, response){
  var client = new pg.Client(config);


  client.connect(function(err){
    if(err){
      console.log('Connection error', err);

    }

    client.query('SELECT * FROM adjectives', [], function(err, result){
    if(err){
      console.log('Query error', err);
      response.sendStatus(500);
    } else {
      console.log('Great success');
      // console.log(result.rows);
      ourAdjectives = [];
      for(var i = 0; i < result.rows.length; i++) {
        ourAdjectives.push(result.rows[i].adjective);
    }

    console.log(ourAdjectives);

      // response.sendStatus(200);
      response.send(ourAdjectives);
      client.end()
    }

  })

})

});


app.get('/noun', function(request, response){
  var client = new pg.Client(config);


  client.connect(function(err){
    if(err){
      console.log('Connection error', err);

    }

    client.query('SELECT * FROM nouns', [], function(err, result){
    if(err){
      console.log('Query error', err);
      response.sendStatus(500);
    } else {
      ourNouns = [];
      for(var i = 0; i < result.rows.length; i++) {
        ourNouns.push(result.rows[i].noun);
    }

    console.log(ourNouns);

      console.log('Great success');
      // response.sendStatus(200);
      response.send(ourNouns);
      client.end()
    }

  })

})

});



var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
})
