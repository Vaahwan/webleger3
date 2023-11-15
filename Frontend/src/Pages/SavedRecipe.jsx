import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SavedRecipe.module.css";
import DOMPurify from "dompurify";
import { getSavedRecipe } from "../Redux/action";

export const SavedRecipe = () => {
  const { recipeItems } = useSelector((state) => {
    return state;
  });

  // console.log(recipeItems);
  const sanitizedHTML = DOMPurify.sanitize(recipeItems.summary);

  const dispatch = useDispatch();
  const { savedRecipeItems } = useSelector((store) => {
    return store;
  });

  useEffect(() => {
    dispatch(getSavedRecipe());
    console.log(savedRecipeItems);
  }, []);

  return (
    <>
      {savedRecipeItems?.map((e, i) => {
        return (
          <div className={styles.recipeSection}>
            <div>
              <div className={styles.imgSection}>
                <p>{e.title}</p>
                <img src={e.image} />
              </div>
              <div
                className={styles.summary}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(e.summary),
                }}
              />
            </div>

            <div>
              <p>Process</p>

              {e.analyzedInstructions?.map((e, i) => {
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
                    Health Score : {e.healthScore}
                  </p>
                  <p>
                    <span class="material-symbols-outlined">
                      currency_rupee
                    </span>
                    Price Pre Serving : {e.pricePerServing}
                  </p>
                  <p>
                    <span class="material-symbols-outlined">hourglass</span>
                    Ready in Minutes : {e.readyInMinutes}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
