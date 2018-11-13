
module.exports = function (app) {
  var fs = require('fs');
  var path = require('path');
  var friends = require("../data/friends.json");

  app.get("/api/friends", function (req, res) {
      res.json(friends);
  });

  app.post("/api/survey", function (req, res) {
      var rawBody = req.body;
      var newUser = {
          name: rawBody.name,
          photo: rawBody.photo,
          scores: 
              [rawBody.answer1,rawBody.answer2,rawBody.answer3,rawBody.answer4,
                  rawBody.answer5,rawBody.answer6,rawBody.answer7,rawBody.answer8,
                  rawBody.answer9,rawBody.answer10
              ]
      }; 
      var originalLength=friends.length;
      var differencesArray = [];
      for (var j = 0; j < originalLength; j++) { console.log("j" + j);
          var thisDifference = 0;
          var userDifference = 0;
          for (var k = 0; k < 9; k++) { console.log("k" + k);
              thisDifference = parseInt(newUser.scores[k]) - parseInt(friends[j].scores[k]);
              if (thisDifference < 0) {
                  thisDifference = thisDifference * -1;
              }
              userDifference += thisDifference;
          }
      differencesArray.push(userDifference);
      }
      
      var smallestIndex = 0;
      var smallestValue = differencesArray[0];

      for (var m = 1; m < differencesArray.length; m++) { console.log("m " + m);
          if (differencesArray[m] < smallestValue) {
              smallestIndex = m;
              smallestValue = differencesArray[m];
          }
      }

      friends.push(newUser); 
      console.log(differencesArray); console.log("differencesArray");
      console.log(smallestIndex + " smallestIndex");
      console.log(smallestValue + " smallestValue");
  });

}