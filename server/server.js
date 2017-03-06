'use strict';
//==============================================================================
var express = require('express');
var mongoose = require('mongoose');
var Event = require('./event.js');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Database Connection===========================================================
var mongodbUri = 'mongodb://jpmarra:event@ds119250.mlab.com:19250/event-lister';

mongoose.connect(mongodbUri, function(err){
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
  console.log(req.body);
  Event.insertEvent(req.body);
  res.send("succesfully added event");
})

//Start Server==================================================================
var port = process.env.PORT || 3000;

app.listen(port);

console.log('The server is now listening on port: ' + port);
