var app = angular.module("SongApp", []);
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs/list', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongCtrl'
      }).
      when('/songs/list', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongFormCtrl'
      }).
     otherwise('/songs/list');


  }]);

