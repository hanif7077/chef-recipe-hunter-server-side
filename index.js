const express = require("express");
const cors = require("cors");
const app = express();
const chefs = require("./data.json");

app.use(express.json());
app.use(cors());

app.get("/chefs", (req, res) => {
  res.json(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const chef = chefs.find((chef) => chef.id == req.params.id);

  if (!chef) res.json(`No chef found in this id ${req.params.id}`);
  res.json(chef);
});

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
