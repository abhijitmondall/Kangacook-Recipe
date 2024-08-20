const express = require("express");
const router = express.Router();

const recipeController = require("./../controllers/recipeController");

router
  .route("/")
  .get(recipeController.getAllRecipes)
  .post(recipeController.createRecipe);

module.exports = router;
