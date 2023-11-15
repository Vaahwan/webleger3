const { Router } = require("express");
require("dotenv").config();
const axios = require("axios");

const findFoodRoute = Router();

findFoodRoute.get("/", async (req, res) => {
  const query = req.query.query;

  axios
    .get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&query=${query}`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => console.log(err));
});

findFoodRoute.get("/recipes/:id/information", async (req, res) => {
  const id = req.params.id;

  axios
    .get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => console.log(err));
});

findFoodRoute.get("/recipes/random", async (req, res) => {
  axios
    .get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => console.log(err));
});

module.exports = findFoodRoute;
