const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({}, { strict: false, id: false });

const RecipeModel = mongoose.model("recipe", recipeSchema);

module.exports = { RecipeModel };
