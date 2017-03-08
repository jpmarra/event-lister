angular.module('eventListApp.form', [])
    .controller('formCtrl', function($scope, $location, dataFactory) {
        $scope.insertEvent = function() {
            $scope.event.originalDate = $scope.event.date
            dataFactory.insertEvent($scope.event);
            $location.path('/events')
        }

    });