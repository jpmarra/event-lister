angular.module('eventListApp.events', [])
.controller('eventsCtrl', function($scope, dataFactory){
  dataFactory.getEvents().then(function(results){
    $scope.events = results.data
  });
});
