const mongoose = require("mongoose");
const { Router } = require("express");
const { RecipeModel } = require("../Model/RecipeModel");

const saveRecipeRoute = Router();

saveRecipeRoute.post("/", async (req, res) => {
  try {
    const data = req.body;

    const existingRecipe = await RecipeModel.findOne({ id: data.id });
    if (existingRecipe) {
      return res.status(200).json({ msg: "Recipe already exists" });
    }

    const newRecipe = new RecipeModel(data);

    await newRecipe.save();

    res.status(200).json({ msg: "Data Saved Successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

saveRecipeRoute.get("/info", async (req, res) => {
  try {
    const recipeData = await RecipeModel.find({ userId: req.body.userId });
    res.status(200).json(recipeData);
  } catch (error) {
    res.send("Internal Error");
  }
});

module.exports = saveRecipeRoute;
