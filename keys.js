console.log('this is loaded');

const axios = require("axios");
const fs = require("fs");

class Spotify {
    constructor() {}
    findSong(song) {
      var URL = "" + song;
      axios.get(URL).then(function(response){
          console.log("\nShow: " + response.data.name + "\nGenres(s): " + response.data.genres.join(", ") 
          + "\nRating: " + response.data.rating.average + "\nNetwork: " + response.data.network.name +
          "\nSummary: " + response.data.summary);
      })
    }
  }
 
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });




  exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  };
  
