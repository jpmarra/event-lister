angular.module('eventListApp.form', [])
.controller('formCtrl', function($scope, $location, dataFactory){
  $scope.insertEvent = function(){
    dataFactory.insertEvent($scope.event);
    $location.path('/events')
  }

});
