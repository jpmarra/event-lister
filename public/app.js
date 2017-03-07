
angular.module('eventListApp', [
  'eventListApp.events',
  'eventListApp.form',
  'ngRoute'
])
.config(function($routeProvider){
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
})
.factory('dataFactory', function($http){
   var getEvents = function(){
    return $http.get('/events').then(function(results){
      return results;
    });
  }
  var insertEvent = function(event){
    console.log(event)
    $http.post('/create', event);
  }
  var deleteEvent = function(event){
    console.log('event', event)
    return $http.delete('/remove/' + event._id);
  }

  return {
    getEvents: getEvents,
    insertEvent: insertEvent,
    deleteEvent: deleteEvent
  }
})
