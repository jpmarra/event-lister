angular.module('eventListApp.form', [])
.controller('formCtrl', function($scope, dataFactory){
  $scope.insertEvent = function(){
    dataFactory.insertEvent($scope.event).then(function(err){
      if(err){
        console.log("Could not add event")
      }
      console.log("Added The Event!")
      $location.path('/events');
    });
  }

});
