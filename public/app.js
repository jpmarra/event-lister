angular.module('eventListApp', [
        'eventListApp.events',
        'eventListApp.form',
        'ngRoute'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'events/events.html',
                controller: 'eventsCtrl'
            })
            .when('/events', {
                templateUrl: 'events/events.html',
                controller: 'eventsCtrl'
            })
            .when('/form', {
                templateUrl: 'form/form.html',
                controller: 'formCtrl'
            })
            .when('/update', {
                templateUrl: 'update/update.html',
                controller: 'eventsCtrl'
            })
    })
    .factory('dataFactory', function($http) {
        var getEvents = function() {
            return $http.get('/events').then(function(results) {
                return results;
            });
        }
        var insertEvent = function(event) {
            $http.post('/create', event);
        }

        var updateEvent = function(event) {
            $http.put('/update', event);
        }

        var deleteEvent = function(event) {
            return $http.delete('/remove/' + event._id);
        }

        return {
            getEvents: getEvents,
            insertEvent: insertEvent,
            deleteEvent: deleteEvent,
            updateEvent: updateEvent
        }
    })
    .factory('editFactory', function() {
        var current = {};
        current.addToEdit = function(value) {
            value.date = new Date(value.date)
            current.event = value;
        }
        return current
    })