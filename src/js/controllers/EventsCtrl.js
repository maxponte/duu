angular.module('DukeUniversityUnion.controllers.Events', []).controller('EventsCtrl', function($scope, getCurrentPosition, getWeather){
  var eventInfo = this;
  eventInfo.events = [
  	{
  		title: 'Small Town Records Meetup',
  		description: 'Come sit in on a recording session at Small Town Records',
  		time: new Date(),
  		location: 'University Center'
  	},
  	{
  		title: 'Small Town Records Meetup',
  		description: 'Come sit in on a recording session at Small Town Records',
  		time: new Date(),
  		location: 'University Center'
  	},
  	{
  		title: 'Small Town Records Meetup',
  		description: 'Come sit in on a recording session at Small Town Records',
  		time: new Date(),
  		location: 'University Center'
  	}
  ];
});