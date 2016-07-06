var express = require('express');
var bodyParser = require('body-parser');
var lowdb = require('lowdb');
var server = express();
var uuid = require('uuid');

var port = process.env.PORT || 8080;
var db = lowdb('db.json');

//Database initialization
db.defaults({dogs: []})
  .value(); //runs the previous set of commands

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));


server.get('/dogs', function(request, response){
  response.send('/dogs');
});

server.get('/dogs/:id', function(request, response){
  response.send('/dogs/:id');
});

server.post('/dogs', function(request, response){
  var dogs = {
    id: uuid.v4(),
    dogName: request.body.dogName,
    breed: request.body.breed,
    size: request.body.size,
    color: request.body.color,
    age: request.body.age,
    gender: request.body.gender,
    likesDogs: true,
    likesHumans: true,
    likesKids: true,
    wantsPlaymates: true,
    timesAtPark: request.body.timesAtPark,
    notes: request.body.notes,
  };

  var result = db.get('dogs')
                  .push(dogs)
                  .last()
                  .value();
response.send(result);
});

server.put('/dogs/:id', function(request, response){
  var updatedDogsInfo = {
    dogName: request.body.dogName,
    breed: request.body.breed,
    size: request.body.size,
    color: request.body.color,
    age: request.body.age,
    gender: request.body.gender,
    likesDogs: true,
    likesHumans: true,
    likesKids: true,
    wantsPlaymates: true,
    timesAtPark: request.body.timesAtPark,
    notes: request.body.notes,
  };

  var updatedDogs = db.get('dogs')
                    .find({id: request.params.id})
                    .assign(updatedDogsInfo)
                    .value();
  response.send(updatedDogs);
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
