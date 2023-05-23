const express = require("express");
const cors = require("cors");
const userServices = require("./models/user-services");
const foodServices = require("./models/food-services");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("./auth");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      const hashedUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      hashedUser
        .save()
        .then((result) => {
          res.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    .catch((e) => {
      res.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});

app.post("/login", (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then((passwordCheck) => {
          if (!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }
          const token = jwt.sign(
            {
              userId: user._id,
              userUsername: user.username,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );
          res.status(200).send({
            message: "Login Successful",
            username: user.username,
            token,
          });
        })
        .catch((error) => {
          res.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    .catch((e) => {
      res.status(404).send({
        message: "username not found",
        e,
      });
    });
});

// free endpoint
app.get("/free-endpoint", (req, res) => {
  res.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth-endpoint", auth, (req, res) => {
  res.json({ message: "You are authorized to access me" });
});

app.get("/foods", async (req, res) => {
  const name = req.query["name"];
  const user = req.query["user"];

  try {
    const result = await foodServices.getFoods(name, user);
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
