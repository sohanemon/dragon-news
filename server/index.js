require("dotenv").config();

const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.json("ok done");
});
app.listen(process.env.PORT || 400);
