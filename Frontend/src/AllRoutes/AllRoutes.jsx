import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";

import { PrivateRoute } from "./PrivateRoute";
import { ResultPage } from "../Pages/ResultPage";
import { Recipe } from "../Components/Recipe";
import { RandomRecipe } from "../Components/RandomRecipe";
import { Login_signupPage } from "../Pages/Login_signupPage";
import { SavedRecipe } from "../Pages/SavedRecipe";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<Login_signupPage />} />
      <Route path="/foods" element={<ResultPage />} />
      <Route path="/foodRecipe" element={<Recipe />} />
      <Route path="/randomRecipe" element={<RandomRecipe />} />
      <Route
        path="/savedRecipe"
        element={
          <PrivateRoute>
            <SavedRecipe />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
