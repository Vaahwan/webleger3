import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Recipe.module.css";
import DOMPurify from "dompurify";
import { saveRecipe } from "../Redux/action";
import Swal from "sweetalert2";

export const Recipe = () => {
  const [isInitialRender, setIsInitialRender] = useState(true);
  const { recipeItems, isRecipeSaved } = useSelector((state) => {
    return state;
  });
  console.log(recipeItems);
  const sanitizedHTML = DOMPurify.sanitize(recipeItems.summary);

  let token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(saveRecipe(recipeItems));
  };

  useEffect(() => {
    if (isRecipeSaved === "Recipe already exists") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Recipe Already Saved!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (isRecipeSaved === "Data Saved Successfully") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data Saved Successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (isRecipeSaved === "please login") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please Login!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [isRecipeSaved, recipeItems]);
  console.log(isRecipeSaved);
  return (
    <>
      <div className={styles.recipeSection}>
        <div>
          <div className={styles.imgSection}>
            <p>{recipeItems.title}</p>
            <img src={recipeItems.image} />
          </div>
          <div
            className={styles.summary}
            dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
          />
        </div>

        <div>
          <p>Process</p>

          {recipeItems.analyzedInstructions?.map((e, i) => {
            return e.steps.map((e) => {
              return (
                <div className={styles.li}>
                  <span class="material-symbols-outlined">restaurant_menu</span>
                  <p>{e.step}</p>
                </div>
              );
            });
          })}
          <div>
            <div className={styles.healthSection}>
              <p>
                <span class="material-symbols-outlined">medication_liquid</span>
                Health Score : {recipeItems.healthScore}
              </p>
              <p>
                <span class="material-symbols-outlined">currency_rupee</span>
                Price Pre Serving : {recipeItems.pricePerServing}
              </p>
              <p>
                <span class="material-symbols-outlined">hourglass</span>Ready in
                Minutes : {recipeItems.readyInMinutes}
              </p>
            </div>

            <button className={styles.btn} onClick={handleSave}>
              Save Recipe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
