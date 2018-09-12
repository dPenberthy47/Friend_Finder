// 1.)
//A GET route with the url `/api/friends`.
//This will be used to display a JSON of all possible friends.
app.get("api/friends", (req, res) => {
  return res.json(friends);
});
// 2.)
// A POST routes `/api/friends`. This will
//be used to handle incoming survey results.
//This route will also be used to handle the
//compatibility logic.
app.post("api.friends", (req, res) => {
  var newFriend = req.body;
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);
  Friends.push(newFriend);
  res.json(newFriend);
});
