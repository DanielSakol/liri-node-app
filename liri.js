require("dotenv").config();
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);

var bandsintown = require('bandsintown')(APP_ID);
 
bandsintown
  .getArtistEventList(userInput)
  .then(function(events) {
    // return array of events
  });


const userCommand = process.argv[2];
const userInput = process.argv[3];

// userCommand and userInput are the user's input in terminal
// userInput will be used as arguments in each of the functions

const spotifyFunction = function(songTitle) {
  //return info
};
const concertFunction = function(band) {
  //return info
  console.log(userInput)
};
const movieFunction = function(movie) {
  //return info
};

switch (userCommand) {
  case "concert-this":
    concertFunction(userInput);
  break;
  case "spotify-this-song":
    spotifyFunction(userInput);
  break;
  case "movie-this":
    movieFunction(userInput);
  break;
  default:
    console.log("Sorry, command not recognized");
  break;
};