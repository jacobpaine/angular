app.controller("SongFormCtrl", 
  [
    "$scope", 
    "simple-songs",
    "$firebaseArray", 
    function($scope, simple_songs, $firebaseArray) {
      
      var ref = new Firebase("https://yegodsandlittlefish.firebaseio.com/songs");
      $scope.newMessageText = ""
      $scope.songs = $firebaseArray(ref);
      $scope.newSong = { artist: "", album: "", title: "", year: ""};
      
      // $scope.addSong = function() {
      //   simple_songs.addSong({
      //     artist: $scope.newSong.artist,
      //     title: $scope.newSong.title,
      //     album: $scope.newSong.album,
      //     year: $scope.newSong.year
      //   });
      // };

      $scope.addMessage = function() {
        console.log('here\'s a click!');
        $scope.songs.$add({
          text: $scope.newMessageText,
          artist: $scope.newSong.artist,
          title: $scope.newSong.title,
          album: $scope.newSong.album,
          year: $scope.newSong.year
        });
      };

    }
  ]
);