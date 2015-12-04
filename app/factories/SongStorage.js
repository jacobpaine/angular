app.factory("simple-songs", 
["$q", "$http",
function($q, $http) {

  var song_list;

  function loadSongs () {
    return $q(function(resolve, reject) {
      //Ajax get the songs
        $http.get('./data/songs.json')
        .success(
          function(objectFromJSONFile) {
            /* 
            Convert Firebase's object of objects into an array of objects, and store it in the private variable
            */
            song_list = Object.keys(objectFromJSONFile.songs).map(song => objectFromJSONFile.songs[song]);
            resolve(song_list);
          }, function(error) {
            reject(error);
          }
        );
      }); 
  }




  function loadSongs2 () {
    return $q(function(resolve, reject) {
      //Ajax get the songs
        $http.get('./data/songs2.json')
        .success(
          function(objectFromJSONFile) {
            /* 
            Convert Firebase's object of objects into an array of objects, and store it in the private variable
            */
            console.log("objectFromJSONFile.songs2", objectFromJSONFile.songs2);
            var varcat = objectFromJSONFile.songs2;
            song_list = song_list.concat(varcat);
            resolve(song_list);
          }, function(error) {
            reject(error);
          }
        );
      }); 
  }




  // Store the promise as a private variable
  var songPromise = loadSongs();

  return {
    loadSongs: function () {
      /* 
      Return the promise for controllers to listen to. This requires the following
      code inside the controllers
      
      simpleSongs.loadSongs().then(
        function () {
          $scope.songs = simpleSongs.getSongs();
        },
        function (error) {
          console.log(error);
        }
      );
      */
      return songPromise;
    },

    loadSongs2: function(){
      return loadSongs2();
    },

    getSongs: function() {
      console.log("Factory returning all songs");
      return song_list;
    },
    getSong: function(name) {
      console.log("Factory returning single song");
      return song_list.filter(function(song){
        return song.name === name;
      })[0];
    },
    addSong: function(song) {
      console.log("Added single song to factory");
      song_list.push(song);
      return song_list;
    }
  }
}]);