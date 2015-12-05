app.controller("SongFormCtrl", 
  [
    "$scope", 
    "simple-songs",
    "$firebaseArray", 
    function($scope, simple_songs, $firebaseArray) {
      
      var ref = new Firebase("https://yegodsandlittlefish.firebaseio.com/songs");
      //newMessageText = default message when the add songs button is pressed
      $scope.newMessageText = "";
      //Pass the firebase data (ref) into the $firebaseArray to make it play nice with NG, and scope it to songs 
      $scope.songs = $firebaseArray(ref);
      $scope.newSong = { artist: "", album: "", title: "", year: ""};
    

      $scope.addMessage = function() {
        console.log('here\'s a click!');
        $scope.songs.$add({
          artist: $scope.newSong.artist,
          title: $scope.newSong.title,
          album: $scope.newSong.album,
          year: $scope.newSong.year
        });
      };

    }
  ]
);