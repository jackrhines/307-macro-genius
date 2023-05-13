const express = require("express");
const cors = require("cors");
const userServices = require("./models/user-services");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.post("/register", async (req, res) => {
  const user = req.body;
  const savedUser = await userServices.addUser(user);
  if (savedUser) res.status(201).send(savedUser);
  else res.status(500).end();
});


app.get("/foods", async (req, res) => {
  const name = req.query["name"];
  try {
    const result = await foodServices.getFoods(name);
    res.send({ foods_list: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred in the server.");
  }
});

app.get("/foods/:id", async (req, res) => {
  const id = req.params["id"];
  const result = await foodServices.findFoodById(id);
  if (result === undefined || result === null)
    res.status(404).send("Resource not found.");
  else {
    res.send({ foods_list: result });
  }
});

app.post("/foods", async (req, res) => {
  const food = req.body;
  console.log(food);
  const savedFood = await foodServices.addFood(food);
  if (savedFood) res.status(201).send(savedFood);
  else res.status(500).end();
});

app.post("/foods", async (req, res) => {
  const food = req.body;
  const savedFood = await foodServices.addFood(food);
  if (savedFood) res.status(201).send(savedFood);
  else res.status(500).end();
});

app.delete("/foods/:id", async (req, res) => {
  const id = req.params["id"];
  console.log(id);
  const result = await foodServices.deleteFoodById(id);
  console.log(result);
  res.status(204).end();
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
