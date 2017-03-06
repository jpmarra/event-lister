'use strict';

angular.module('eventListApp', [])
.service('dataService', function($http){
  this.getEvents = function(cb){
    $http.get('/events').then(cb);
  }
  this.insertEvent = function(event){
    $http.post('/create');
  }
})
.controller('mainCtrl', function($scope, dataService){
  dataService.getEvents(function(response){
    var events = response.data;
    $scope.events = events;
  });
})
