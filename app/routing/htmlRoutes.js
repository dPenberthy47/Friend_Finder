// 1.)
// A GET Route to `/survey` which should display
//the survey page.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

// 2.)
//A default, catch-all route that leads to
//`home.html` which displays the home page.
app.get("/survey", (req, res) => {
  res.sendFile(path.join(__dirname, "survey.html"));
});
