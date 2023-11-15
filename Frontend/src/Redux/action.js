import axios from "axios";

import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
  GET_RECIPE_ITEMS_ERROR,
  GET_RECIPE_ITEMS_REQUEST,
  GET_RECIPE_ITEMS_SUCCESS,
  GET_RANDOM_RECIPE_ITEMS_ERROR,
  GET_RANDOM_RECIPE_ITEMS_REQUEST,
  GET_RANDOM_RECIPE_ITEMS_SUCCESS,
  GET_SAVED_RECIPE_ITEMS_REQUEST,
  GET_SAVED_RECIPE_ITEMS_SUCCESS,
  GET_SAVED_RECIPE_ITEMS_ERROR,
  ADD_SAVED_RECIPE_ITEMS_REQUEST,
  ADD_SAVED_RECIPE_ITEMS_SUCCESS,
  ADD_SAVED_RECIPE_ITEMS_ERROR,
  ADD_USER_DATA_LOGIN,
  ADD_USER_DATA_LOGIN_FAIL,
  ADD_USER_DATA_SIGNUP,
  ADD_USER_DATA_SIGNUP_FAIL,
  ADD_LOGIN_STATUS,
} from "./actionType";

export const getSearchData = (inputValue) => {
  return function (dispatch, getState) {
    let url = `https://bebledger-backend.onrender.com/search?query=${inputValue}`;

    dispatch({
      type: GET_ITEMS_REQUEST,
    });

    axios
      .get(url)
      .then((res) => {
        dispatch({
          type: GET_ITEMS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ITEMS_ERROR,
        });
      });
  };
};

export const getFoodRecipe = (id) => {
  return function (dispatch, getState) {
    let url = `https://bebledger-backend.onrender.com/search/recipes/${id}/information`;

    dispatch({
      type: GET_RECIPE_ITEMS_REQUEST,
    });

    axios
      .get(url)
      .then((res) => {
        dispatch({
          type: GET_RECIPE_ITEMS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_RECIPE_ITEMS_ERROR,
        });
      });
  };
};

export const getRandom = () => {
  return function (dispatch, getState) {
    let url = `https://bebledger-backend.onrender.com/search/recipes/random`;

    dispatch({
      type: GET_RANDOM_RECIPE_ITEMS_REQUEST,
    });

    axios
      .get(url)
      .then((res) => {
        dispatch({
          type: GET_RANDOM_RECIPE_ITEMS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_RANDOM_RECIPE_ITEMS_ERROR,
        });
      });
  };
};

export const saveRecipe = (items) => {
  return function (dispatch, getState) {
    dispatch({
      type: ADD_SAVED_RECIPE_ITEMS_REQUEST,
    });
    let token = localStorage.getItem("token");
    let url = `https://bebledger-backend.onrender.com/save-recipe`;
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    axios
      .post(url, items, axiosConfig)
      .then((res) => {
        // console.log("res from action", res.data);
        dispatch({
          type: ADD_SAVED_RECIPE_ITEMS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ADD_SAVED_RECIPE_ITEMS_ERROR,
        });
      });
  };
};

export const getSavedRecipe = () => {
  return function (dispatch, getState) {
    dispatch({
      type: GET_SAVED_RECIPE_ITEMS_REQUEST,
    });

    let token = localStorage.getItem("token");

    let url = `https://bebledger-backend.onrender.com/save-recipe/info`;
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    axios
      .get(url, axiosConfig)
      .then((res) => {
        dispatch({
          type: GET_SAVED_RECIPE_ITEMS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_SAVED_RECIPE_ITEMS_ERROR,
        });
      });
  };
};

export const getUser = (inputValues) => {
  return function (dispatch, getState) {
    axios
      .post("https://bebledger-backend.onrender.com/user/login", inputValues)
      .then((res) => {
        dispatch({
          type: ADD_USER_DATA_LOGIN,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ADD_USER_DATA_LOGIN_FAIL,
        });
      });
  };
};

export const addUser = (inputValues) => {
  return function (dispatch, getState) {
    axios
      .post("https://bebledger-backend.onrender.com/user/signup", inputValues)
      .then((res) => {
        dispatch({
          type: ADD_USER_DATA_SIGNUP,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ADD_USER_DATA_SIGNUP_FAIL,
        });
      });
  };
};

export const logOut = () => {
  return function (dispatch, getState) {
    dispatch({
      type: ADD_LOGIN_STATUS,
    });
  };
};
