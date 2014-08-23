angular.module('DukeUniversityUnion.controllers.Sidebar', []).controller('SidebarCtrl', function($scope, getCurrentPosition, getWeather){
  var sidebar = this;
  sidebar.navigation = {
    links : [
      {label : 'Home', href : '#/'},
      {label : 'Events', href : '#/events'}
    ]
  };
});