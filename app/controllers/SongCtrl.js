app.controller("SongCtrl", ["$scope", "simple-songs",
  function($scope, simple) {

    /*
      Add the following code
    */
    $scope.newSong = { artist: "", album: "", title: "", year:""};


    simple.loadSongs().then(function(a){
      $scope.songs = a;
      console.log("scope songs", a);
    })

    $scope.addSong = function() {
      $scope.songs.$add({
        artist: $scope.newSong.artist,
        title: $scope.newSong.title,
        album: $scope.newSong.album,
        year: $scope.newSong.year
      }); 
    };
  } 
]);


