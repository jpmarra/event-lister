'use strict';

angular.module('eventListApp', [])
.factory('dataFactory', function($http){
   var getEvents = function(){
    return $http.get('/events').then(function(results){
      return results;
    });
  }
  var insertEvent = function(event){
    $http.post('/create');
  }

  return {
    getEvents: getEvents,
    insertEvent: insertEvent
  }
})
.controller('mainCtrl', function($scope, dataFactory){
  dataFactory.getEvents().then(function(results){
    $scope.events = results.data
  });
})
