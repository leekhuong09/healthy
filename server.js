var path = require("path");
var express = require("express");
var app = express();

app.use(express.static(path.join(__dirname, "/build")));
app.use(express.static(path.join(__dirname, "/public")));

app.get("*", function (req, res) {
  return res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(1004, function () {
  console.log("App is running at localhost:1004");
});
