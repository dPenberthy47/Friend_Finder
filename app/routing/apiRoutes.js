
module.exports = function (app) {
    var fs = require('fs');
    var path = require('path');
    var friends = require("../data/friends.json");

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/survey", function (req, res) { 
        var rawBody = req.body; console.log("HELLO FROM INSIDE");
        
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
        for (var j = 0; j < originalLength; j++) {//unknown number of 'friends' to loop through
            var thisDifference = 0;
            var userDifference = 0;
            for (var k = 0; k < 9; k++) {//only 10 questions to compare
                thisDifference = parseInt(newUser.scores[k]) - parseInt(friends[j].scores[k]);
                if (thisDifference < 0) {
                    thisDifference = thisDifference * -1;
                }
                userDifference += thisDifference;
            }
        differencesArray.push(userDifference);
        }
        
        var smallestDifference = differencesArray[0]; //value of the difference, not index
        var smallestIndex = 0;

        for (var m = 1; m < differencesArray.length; m++) {
            if (differencesArray[m] < smallestDifference) {//if new value smaller than smallest
                // console.log("<br>m = " + m + "<br>");
                // console.log(smallestDifference + "smallestDiff");
                // console.log(differencesArray[m] + " array @ m<br>");
                
                smallestDifference = differencesArray[m];
                smallestIndex = m;
            }
        }
        // console.log(differencesArray); console.log("differences");
        // console.log(smallestDifference + " smallestDiff");
        // console.log(smallestIndex + " smallestIndex");
        var bestMatch = {
            name: friends[smallestIndex].name,
            photo: friends[smallestIndex].photo
        }
        
        friends.push(newUser);
        res.json(bestMatch);
    });

}