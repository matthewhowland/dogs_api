var uuid = require('uuid');

function Dog(dogName,
              breed,
              size,
              color,
              age,
              gender,
              timesAtPark,
              notes,
              likesDogs,
              likesHumans,
              likesKids,
              wantsPlaymates,
              id){
  this.id = id || uuid.v4();
  this.dogName = dogName;
  this.breed = breed || 'unknown';
  this.size = size || 'unknown';
  this.color = color || 'unknown';
  this.age = age || 'unknown';
  this.gender = gender || 'unknown';
  this.timesAtPark = timesAtPark || 'unknown';
  this.notes = notes || 'unknown';
  this.likesDogs = likesDogs || true;
  this.likesHumans = likesHumans || true;
  this.likesKids = likesKids || true;
  this.wantsPlaymates = wantsPlaymates || true;

  console.log(notes);
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
