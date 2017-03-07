angular.module('eventListApp.form', [])
.controller('formCtrl', function($scope, $location, dataFactory){
  $scope.insertEvent = function(){
    $scope.event.originalDate = $scope.event.date
    console.log($scope.event)
    dataFactory.insertEvent($scope.event);
    $location.path('/events')
  }

});
