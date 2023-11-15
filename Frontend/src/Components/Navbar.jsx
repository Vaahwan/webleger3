import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getRandom } from "../Redux/action";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

export const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin } = useSelector((store) => {
    return store;
  });

  const handleOpenMenu = () => {
    setmenuOpen(!menuOpen);
  };

  const handleRandomRecipe = () => {
    dispatch(getRandom());
  };
  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("user_name");
    localStorage.removeItem("token");
  };

  const handleLogin = () => {
    navigate("/user");
  };

  let userName = localStorage.getItem("user_name");
  useEffect(() => {
    dispatch(getRandom());
    isLogin ? navigate("/") : "";
  }, [isLogin]);

  return (
    <div className={styles.header}>
      <NavLink to="/" id={styles.logo}>
        Webledger's Foodies
      </NavLink>
      <div className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        <NavLink className={styles.navLink} to="/">
          Home
        </NavLink>
        <NavLink
          className={styles.navLink}
          to="/randomRecipe"
          onClick={handleRandomRecipe}
        >
          Random Recipe
        </NavLink>
        <NavLink className={styles.navLink} to="/savedRecipe">
          Saved Recipe
        </NavLink>
        <p>Hi! {userName ? userName : "Guest"}</p>

        {userName ? (
          <button className={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className={styles.logoutBtn} onClick={handleLogin}>
            Login
          </button>
        )}
      </div>

      <label className={styles.menuIcons}>
        {menuOpen ? (
          <span
            onClick={handleOpenMenu}
            id={styles.closeIcon}
            className="material-symbols-outlined"
          >
            close
          </span>
        ) : (
          <span
            onClick={handleOpenMenu}
            id={styles.menuIcon}
            className="material-symbols-outlined"
          >
            menu
          </span>
        )}
      </label>
    </div>
  );
};
