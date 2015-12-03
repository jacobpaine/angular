app.factory("simple-songs", function() {
  var song_list = [
    { id: 1, name: "99 Problems", album: "Black", artist: "JayZ" },
    { id: 2, name: "Helter Skelter", album: "White", artist: "Beatles"  },
    { id: 3, name: "99 Problems", album: "Grey", artist: "DJ Danger Mouse"  }
  ];

  return {
    getSongs: function() {
      return song_list;
    },
    getSong: function(id) {
      return song_list.filter(function(song){
        return song.id === id;
      })[0];
    },
    addSong: function(song) {
      song_list.push(song);
      return song_list;
    }
  }
});