angular.module('DukeUniversityUnion', [
  'ngRoute',
  'ngTouch',
  'mobile-angular-ui',
  'DukeUniversityUnion.controllers.Main',
  'DukeUniversityUnion.controllers.Sidebar',
  'DukeUniversityUnion.controllers.Events'
])

.config(function($routeProvider) {
  $routeProvider
  	.when('/', {templateUrl: 'home.html'})
  	.when('/events', {templateUrl: 'events.html'});
});