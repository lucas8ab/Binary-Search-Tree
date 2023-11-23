/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("../routes/bst-route");

const app = express();
const port = process.env.PORT || 3000;

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use("/", routes);

app.get("/", function (req, res) {
  res.status(200).send({
    message: "GET: Home route working!",
  });
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log(`Server running in http://localhost:${port}`);
  return console.log("	[GET] http://localhost:3000/");
});
