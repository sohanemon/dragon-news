require("dotenv").config();
const cors = require("cors");

const express = require("express");
const categories = require("./data/categories.json");
const news = require("./data/news.json");

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send(req.query);
});
/* ---------------------- first slash is important --------------------- */
app.get("/categories", (req, res) => {
  res.json(categories);
});
app.get("/category/:id", (req, res) => {
  if (req.params.id > 8) res.send({ data: "No such categories" });
  if (req.params.id === "08") res.send(news);
  const data = news.filter((el) => el.category_id === req.params.id);
  res.send(data);
});
app.get("/news", (req, res) => {
  res.send(news);
});
app.get("/news/:id", (req, res) => {
  res.send(news.find((el) => el._id === req.params.id));
});

app.listen(process.env.PORT || 400);
