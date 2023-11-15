import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Recipe.module.css";
import DOMPurify from "dompurify";
import { saveRecipe } from "../Redux/action";
import Swal from "sweetalert2";
import { Stack, Skeleton } from "@chakra-ui/react";

export const RandomRecipe = () => {
  const { randomRecipeItem, isRecipeSaved, isLoading } = useSelector(
    (state) => {
      return state;
    }
  );

  // let randomRecipeItem.recipes[0] = randomRecipeItem.recipes[0];
  let sanitizedHTMLRandomRecipe = "";
  isLoading
    ? ""
    : (sanitizedHTMLRandomRecipe = DOMPurify.sanitize(
        randomRecipeItem.recipes[0].summary
      ));

  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(saveRecipe(randomRecipeItem.recipes[0]));
  };

  return (
    <>
      {randomRecipeItem ? (
        <div className={styles.recipeSection}>
          <div>
            <div className={styles.imgSection}>
              <p>{randomRecipeItem.recipes[0].title}</p>
              <img src={randomRecipeItem.recipes[0].image} />
            </div>
            <div
              className={styles.summary}
              dangerouslySetInnerHTML={{ __html: sanitizedHTMLRandomRecipe }}
            />
          </div>

          <div>
            <p>Process</p>

            {randomRecipeItem.recipes[0].analyzedInstructions?.map((e, i) => {
              return e.steps.map((e) => {
                return (
                  <div className={styles.li}>
                    <span class="material-symbols-outlined">
                      restaurant_menu
                    </span>
                    <p>{e.step}</p>
                  </div>
                );
              });
            })}
            <div>
              <div className={styles.healthSection}>
                <p>
                  <span class="material-symbols-outlined">
                    medication_liquid
                  </span>
                  Health Score : {randomRecipeItem.recipes[0].healthScore}
                </p>
                <p>
                  <span class="material-symbols-outlined">currency_rupee</span>
                  Price Pre Serving :{" "}
                  {randomRecipeItem.recipes[0].pricePerServing}
                </p>
                <p>
                  <span class="material-symbols-outlined">hourglass</span>Ready
                  in Minutes : {randomRecipeItem.recipes[0].readyInMinutes}
                </p>
              </div>

              <button className={styles.btn} onClick={handleSave}>
                Save Recipe
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Stack>
          <Skeleton height="20vh" />
          <Skeleton height="20pvh" />
          <Skeleton height="20pvh" />
        </Stack>
      )}
    </>
  );
};
