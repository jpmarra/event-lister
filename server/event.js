'use strict';

var mongoose = require('mongoose');
//Schema for Model
var eventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  address: String,
  description: String
})

//Create Model==================================================================
var EventModel = mongoose.model('Event', eventSchema);


//Functions to be used on Model=================================================
var insertEvent = function(event){
  var newEvent = new EventModel(event);
  newEvent.save(function(err){
    if(err){
      console.log("Could not save new event");
      console.error(err);
    }
    console.log("Event has been added!")
  });
};

var getAllEvents = function(cb){
  EventModel.find(function(err, results){
    if(err){
      console.log("Could not retrieve events");
      console.error(err);
    }
    cb(results);
  });
};

//Export all functions to handle Model==========================================
var EventManager = {
  insertEvent: insertEvent,
  getAllEvents: getAllEvents
}

module.exports = EventManager;
