import React, { useState } from "react";
import img from "../assets/wallpaper.jpg";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getSearchData } from "../Redux/action";
import { useNavigate } from "react-router-dom";
import { ResultPage } from "./ResultPage";
// import { useNavigate } from "react-router-dom";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const { foods } = useSelector((store) => {
    return store;
  });
  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(getSearchData(inputValue));
      setInputValue("");
    }
  };

  return (
    <div
      className={styles.homeSection}
      style={{ backgroundImage: `url(${img})` }}
    >
      <br />
      <div id={styles.inputDiv}>
        <span class="material-symbols-outlined">search</span>
        <input
          type="text"
          value={inputValue}
          placeholder="Enter Food.."
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>

      <div className={styles.foodContainer}>
        {foods ? (
          <ResultPage foods={foods.results} />
        ) : (
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
          >
            <Skeleton height="80px" />
            <Skeleton height="80px" />
            <Skeleton height="80px" />
          </div>
        )}
      </div>
    </div>
  );
};
