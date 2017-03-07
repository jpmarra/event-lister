'use strict';
//==============================================================================
var express = require('express');
var mongoose = require('mongoose');
var Event = require('./event.js');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var moment = require('moment');
var mongoURL = require('./server-config');

var app = express();

app.use(morgan('common'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Database Connection===========================================================


mongoose.connect(mongoURL.mongodbUri, function(err){
  if(err){
    console.log('Could not connect to Mongo!');
  }
  console.log('succesfully connected to MONGO!')
});

app.use('/', express.static('public'));

//ROUTES========================================================================

app.get('/events', function(req, res){
  Event.getAllEvents(function(results){
    res.send(results)
  })
});

app.post('/create', function(req, res){
  req.body.date = moment(req.body.date).format('LLL')
  console.log(req.body);

  Event.insertEvent(req.body);
  res.send("successfully added event");
});

app.delete('/remove/:id', function(req, res){
  console.log('+++++++++++', req.params.id)
  Event.deleteEvent(req.params.id);
  res.send("Event was successfully deleted")
})

//Start Server==================================================================
var port = process.env.PORT || 3000;

app.listen(port);

console.log('The server is now listening on port: ' + port);
