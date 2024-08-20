const Recipe = require("./../models/recipeModel");

exports.createRecipe = async (req, res, next) => {
  const recipe = await Recipe.create(req.body);

  try {
    res.status(200).json({
      status: "success",
      data: {
        recipe,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.getAllRecipes = async (req, res, next) => {
  const recipes = await Recipe.find({});

  try {
    res.status(200).json({
      status: "success",
      results: recipes.length,
      data: {
        recipes,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err.message,
    });
  }
};
