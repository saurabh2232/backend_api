const express = require("express");
const cors = require("cors");
require("./db/config");
require("./db/User");
const app = express();
app.use(cors());

app.post("/registers", (req, res) => {
  res.json("Connected1");
});

app.listen(4500, () => {
  console.log("DataBase connected");
});
