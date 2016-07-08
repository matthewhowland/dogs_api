var express = require('express');
var bodyParser = require('body-parser');
var lowdb = require('lowdb');
var server = express();
var uuid = require('uuid');

var Dog = require('./models/dogs.js')

var port = process.env.PORT || 8080;
var db = lowdb('db.json');

//Database initialization
db.defaults({dogs: []})
  .value(); //runs the previous set of commands

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));


server.get('/dogs', function(request, response){
  var result = db.get('dogs')
  .value();
response.send(result);
});

server.get('/dogs/:id', function(request, response){
  var dogs = db.get('dogs')
              .find({id: request.params.id})
              .value();
response.send(dogs);
});

server.post('/dogs', function(request, response){
  var dogs = new Dog(request.body.dogName,
                     request.body.breed,
                     request.body.size,
                     request.body.color,
                     request.body.age,
                     request.body.gender,
                     request.body.timesAtPark,
                     request.body.notes,
                     request.body.likesDogs,
                     request.body.likesHumans,
                     request.body.likesKids,
                     request.body.wantsPlaymates);

  var result = db.get('dogs')
                  .push(dogs)
                  .last()
                  .value();
response.send(result);
});

server.put('/dogs/:id', function(request, response){
  var dogs = new Dog(request.body.dogName,
                    request.body.breed,
                    request.body.size,
                    request.body.color,
                    request.body.age,
                    request.body.gender,
                    request.body.timesAtPark,
                    request.body.notes,
                    request.body.likesDogs,
                    request.body.likesHumans,
                    request.body.likesKids,
                    request.body.wantsPlaymates);
  dogs.updateAge(request.body.age);
  var updatedAge = db.get('dogs')
                    .find({id: request.params.id})
                    .assign(dogs)
                    .value();
  response.send(updatedAge);
});

server.delete('/dogs/:id', function (request, response){
  var dogs = db.get('dogs')
              .remove({id: request.params.id})
              .value();
  response.send(dogs);
});

server.listen(port, function(){
  console.log('Now listening on port ...', port);
});
