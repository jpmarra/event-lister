'use strict';

var mongoose = require('mongoose');
//Schema for Model
var eventSchema = new mongoose.Schema({
    headliner: String,
    support: String,
    originalDate: Date,
    date: String,
    venue: String,
    address: String,
    imageUrl: String,
    description: String
})

//Create Model==================================================================
var EventModel = mongoose.model('Event', eventSchema);


//Functions to be used on Model=================================================
var insertEvent = function(event) {
    var newEvent = new EventModel(event);
    newEvent.save(function(err) {
        if (err) {
            console.log("Could not save new event");
            console.error(err);
        }
        console.log("Event has been added!")
    });
};

var updateEvent = function(event) {
    EventModel.findOneAndUpdate({
        _id: event._id
    }, event, function(err, docs) {
        if (err) {
            console.log("Could not update!")
        }
        console.log('Event Updated!')
    })
}
var deleteEvent = function(id) {
    EventModel.findOne({
        _id: id
    }, function(err, docs) {
        if (err) {
            console.error(err)
        }
    }).remove(function(err) {
        if (err) {
            console.log("Could not remove event");
        }
        console.log("Event has been deleted!");
    })
}

var getAllEvents = function(cb) {
    EventModel.find(function(err, results) {
        if (err) {
            console.log("Could not retrieve events");
            console.error(err);
        }
        cb(results);
    });
};

//Export all functions to handle Model==========================================
var EventManager = {
    insertEvent: insertEvent,
    deleteEvent: deleteEvent,
    getAllEvents: getAllEvents,
    updateEvent: updateEvent
}

module.exports = EventManager;