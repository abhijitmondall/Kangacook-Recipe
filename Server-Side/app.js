const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const recipeRouter = require("./routes/recipeRoutes");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
console.log(process.env.NODE_ENV);
app.use(express.json());
app.use(cors());

app.use("/api/v1/recipes", recipeRouter);

app.use("*", (req, res, next) => {
  res.status(404).json({
    message: `Can't find ${req.originalUrl} on the server!`,
  });
});

module.exports = app;
