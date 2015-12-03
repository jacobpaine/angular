var app = angular.module("SongApp", ["ngRoute"]);
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs/list', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongCtrl'
      }).
      when('/songs/form', {
        templateUrl: 'partials/songForm.html',
        controller: 'SongFormCtrl'
      }).
     otherwise('/songs/list');


  }]);
