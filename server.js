let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let friends = require("./app/data/friends");

let app = express();
let PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
console.log(friends);
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
