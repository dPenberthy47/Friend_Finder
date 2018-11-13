module.exports = function(app) {
  var path = require("path");

  app.get("/", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/images/fb.png", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/images/fb.png"));
  });

  app.get("/images/btn.png", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/images/btn.png"));
  });

  app.get("/images/submit.png", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/images/submit.png"));
  });

  app.get("/images/headshot.png", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/images/headshot.png"));
  });

};
