let path = require("path");
let friends = require("../data/friends");

module.exports = app => {
  app.get("/api/friends", (req, res) => {
    return res.json(friends);
  });

  app.post("/api/friends", (req, res) => {
    let newFriend = req.body;
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);
    friends.push(newFriend);
    res.json(newFriend);
  });
};
