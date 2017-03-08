angular.module('eventListApp.events', [])
    .controller('eventsCtrl', function($scope, $location, editFactory, dataFactory) {
        $scope.retrieveEvents = function() {
            dataFactory.getEvents().then(function(results) {
                $scope.events = results.data
            });
        }
        $scope.retrieveEvents();

        $scope.updateForm = function(event) {
            editFactory.addToEdit(event);
            $location.path('/update')
        }
        if (editFactory.event) {
            $scope.event = editFactory.event
        }
        $scope.updateEvent = function(event) {
            dataFactory.updateEvent(event);
            $location.path('/events')
        }

        $scope.removeEvent = function(event) {
            dataFactory.deleteEvent(event).then($scope.retrieveEvents);
        }
    });