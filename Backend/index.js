const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { connection } = require("./ConfigDataBase/db.js");
const userRoutes = require("./Routes/userRoutes.js");
const findFoodRoute = require("./Routes/findFoodRoute.js");
const saveRecipeRoute = require("./Routes/saveRecipeRoute.js");
const { authentication } = require("./Middleware/authentication.js");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/search", findFoodRoute);

app.use(authentication);
app.use("/save-recipe", saveRecipeRoute);

const PORT = 8000;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("db connected");
  } catch (error) {
    console.log("error connecting db " + error);
  }
  console.log("server running at port " + PORT);
});
