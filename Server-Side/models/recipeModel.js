const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Recipe must need a title."],
    trim: true,
  },

  recipePhoto: {
    type: String,
  },

  cookingTimes: {
    type: Number,
  },

  servings: {
    type: Number,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
