app.controller("SongCtrl", 
  ["$scope", 
  "$firebaseArray",
  function($scope, $firebaseArray) {
    $scope.query = "";

    var ref = new Firebase("https://yegodsandlittlefish.firebaseio.com/songs");
    $scope.songs = $firebaseArray(ref);
    console.log("$scope.songs",$scope.songs);

      //newMessageText = default message when the add songs button is pressed
      $scope.newMessageText = "";
      //Pass the firebase data (ref) into the $firebaseArray to make it play nice with NG, and scope it to songs 
      $scope.songs = $firebaseArray(ref);

		$scope.removeMessage = function(song) {
					console.log("DELETE!");
					console.log("song", song);
		  // Do you see the PFM here of full object comparison?
		  var songIndex = $scope.songs.indexOf(song); 

		  if (songIndex >= 0) {
		    $scope.songs.$remove(songIndex, 1);
		  }
		};

     }]
);

