// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends-data.
// ===============================================================================
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
  var userName = req.body;
  var userAnswers = userInput.scores;
  var matchFriend = "";
  var matchPhoto = "";
  var totalDiff = 10000;

  for (var i = 0; i<friends.length; i++){
      var diff = 0;
      for (var j = 0; j < userAnswers.length; j++){
          diff += Math.abs(friends[i].score[j]-userAnswers[j]);
      }
  
  if (diff < totalDiff){
      totalDiff = diff;
      matchFriend = friends[i].name;
      matchPhoto = friends[i].photo;
  }
}
friends.push(userName);
res.json({status: "OK", matchFriend: matchFriend, matchPhoto:matchPhoto});
  });
};
