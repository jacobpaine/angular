app.controller("SongFormCtrl", 
  [
    "$scope", 
    "simple-songs", 
    function($scope, simple_songs) {
      $scope.newSong = { artist: "", album: "", title: "", year: ""};
      
      $scope.addSong = function() {
        simple_songs.addSong({
          artist: $scope.newSong.artist,
          title: $scope.newSong.title,
          album: $scope.newSong.album,
          year: $scope.newSong.year
        });
      };
    }
  ]
);