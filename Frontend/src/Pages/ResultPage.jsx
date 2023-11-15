import React from "react";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFoodRecipe } from "../Redux/action";
import { useNavigate } from "react-router-dom";

export const ResultPage = ({ foods }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const findRecipe = (id) => {
    console.log(id);
    dispatch(getFoodRecipe(id));
    navigate("/foodRecipe");
  };

  return (
    <>
      {foods?.map((e, i) => {
        return (
          <div className={styles.foodCard} key={e.id}>
            <div>
              <img src={e.image} alt={e.title} />
              <p className={styles.title}>{e.title}</p>
            </div>

            <button id={styles.menuBtn} onClick={() => findRecipe(e.id)}>
              Find its menu
            </button>
          </div>
        );
      })}
    </>
  );
};
