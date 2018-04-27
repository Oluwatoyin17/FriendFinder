// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends-data.
// ===============================================================================
console.log("Hello");
var path = require("path");
var friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friendsArray array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
  var userData = req.body;
  // var userAnswers = userData.scores;
  var userAnswers = userData.scores;
var friendMatch = {

    name: "",

    photo: "",

    friendDiff: 1000,

  };

  for (var i = 0; i<friends.length; i++){
    console.log(friends[i].name);
    // difference between the user's score and the data user's score
      var totalDiff = 0;

      // loop through the scores of the friend's score
      for (var j = 0; j < userAnswers.length; j++){
        // calculate the difference and store in totaldiff
          totalDiff += Math.abs(friends[i].scores[j]-userAnswers[j]);
      }
  // if totalDiff is less than friendDiff 
  if (totalDiff < friendMatch.friendDiff){
        console.log('friendMatch.name = ' + friends[i].name);
        console.log('friendMatch.photo = ' + friends[i].photo);
      // reset the friendMatch with the new match
      friendMatch.friendDiff = totalDiff;
      friendMatch.name = friends[i].name;
      friendMatch.photo = friends[i].photo;
  }
}

// push the new user to the data
friends.push(userData);
res.json(friendMatch);
  });
};
