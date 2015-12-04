app.controller("SongCtrl", 
  ["$scope", 
  "$firebaseArray",
  function($scope, $firebaseArray) {
    $scope.query = "";

    var ref = new Firebase("https://yegodsandlittlefish.firebaseio.com/songs");
    $scope.songs = $firebaseArray(ref);
    console.log("$scope.songs",$scope.songs);





  }
]);


