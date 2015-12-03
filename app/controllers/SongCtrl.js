app.controller("SongCtrl", ["$scope", "simple-songs",
  function($scope, simple) {

    /*
      Add the following code
    */
    $scope.newSong = { artist: "", album: "", name: ""};
    $scope.something = simple.getSongs();

    simple.loadSongs().then(function(a){
      $scope.songs = a;
      console.log("scope songs", a);
    })


    $scope.addSong = function() {
      $scope.songs.$add({
        artist: $scope.newSong.artist,
        name: $scope.newSong.name,
        album: $scope.newSong.album
      });
    };
  } 
]);


