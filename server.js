const express = require("express");
const app = express();
var date = new Date();

app.listen(3000, () => console.log("server running on port 3000"));

app.use((req, res, next) => {
  if (date.getHours() < 8 || date.getHours() > 2) {
    res.send("<h1>ARJAA GHODWA !</h1>");
  }
  next();
});
app.get(["/", "/Home"], (req, res) => {
  res.sendFile(__dirname + "/Pages/home.html");
});

app.get("/ourservices", (req, res) => {
  res.sendFile(__dirname + "/Pages/ourservices.html");
});

app.get("/contacts", (req, res) => {
  res.sendFile(__dirname + "/Pages/contacts.html");
});
