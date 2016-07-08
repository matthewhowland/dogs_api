var uuid = require('uuid');

function Dog(dogName,
              breed,
              size,
              color,
              age,
              gender,
              timesAtPark,
              notes,
              id){
  this.id = id || uuid.v4();
  this.dogName = dogName;
  this.breed = breed;
  this.size = size;
  this.color = color;
  this.age = age;
  this.gender = gender;
  this.likesDogs = true;
  this.likesHumans = true;
  this.likesKids = true;
  this.wantsPlaymates = true;
  this.timesAtPark = timesAtPark;
  this.notes = notes;
}

Dog.prototype.updateAge = function(value){
}

Dog.prototype.likesDogs = function(value){
  if(value.toLowerCase() === 'true'){
  this.isComplete = true;
} else {
  this.isComplete = false;
}


};


module.exports = Dog;
