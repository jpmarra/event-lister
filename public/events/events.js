angular.module('eventListApp.events', [])
.controller('eventsCtrl', function($scope, $location, dataFactory){
  $scope.retrieveEvents = function(){
    dataFactory.getEvents().then(function(results){
      $scope.events = results.data
    });
  }
  $scope.retrieveEvents();
  $scope.removeEvent = function(event){
    console.log("You're removing the event")
    dataFactory.deleteEvent(event).then($scope.retrieveEvents);
  }
});
