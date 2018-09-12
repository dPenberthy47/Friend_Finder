let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
require("./app/data/friends");
require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
