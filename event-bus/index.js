const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const events = req.body;

  axios.post("http://localhost:4000/events", events);
  axios.post("http://localhost:4001/events", events);

  res.send({ status: "Ok" });
});

app.listen(4005, () => {
  console.log("Listening port 4005");
});
