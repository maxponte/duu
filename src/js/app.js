angular.module('DukeUniversityUnion', [
  'ngRoute',
  'ngTouch',
  'mobile-angular-ui',
  'DukeUniversityUnion.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'home.html'});
});