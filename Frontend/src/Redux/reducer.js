import {
  ADD_LOGIN_STATUS,
  ADD_USER_DATA_LOGIN,
  ADD_USER_DATA_LOGIN_FAIL,
  ADD_USER_DATA_SIGNUP,
  ADD_USER_DATA_SIGNUP_FAIL,
  GET_ITEMS_ERROR,
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_RECIPE_ITEMS_ERROR,
  GET_RECIPE_ITEMS_SUCCESS,
  GET_RECIPE_ITEMS_REQUEST,
  GET_RANDOM_RECIPE_ITEMS_ERROR,
  GET_RANDOM_RECIPE_ITEMS_REQUEST,
  GET_RANDOM_RECIPE_ITEMS_SUCCESS,
  GET_SAVED_RECIPE_ITEMS_ERROR,
  GET_SAVED_RECIPE_ITEMS_SUCCESS,
  GET_SAVED_RECIPE_ITEMS_REQUEST,
  ADD_SAVED_RECIPE_ITEMS_REQUEST,
  ADD_SAVED_RECIPE_ITEMS_SUCCESS,
  ADD_SAVED_RECIPE_ITEMS_ERROR,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  foods: [],
  recipeItems: {},
  randomRecipeItem: {},
  savedRecipeItems: [],
  isRecipeSaved: {},
  userData: [],
  isLogin: false,
  isSignup: false,
  signUp_res: {},
  login_res: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_ITEMS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        foods: action.payload,
      };
    }
    case GET_ITEMS_ERROR: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case GET_RECIPE_ITEMS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_RECIPE_ITEMS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        recipeItems: action.payload,
      };
    }
    case GET_RECIPE_ITEMS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_RANDOM_RECIPE_ITEMS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_RANDOM_RECIPE_ITEMS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        randomRecipeItem: action.payload,
      };
    }
    case ADD_SAVED_RECIPE_ITEMS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case ADD_SAVED_RECIPE_ITEMS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isRecipeSaved: action.payload,
      };
    }
    case ADD_SAVED_RECIPE_ITEMS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_RANDOM_RECIPE_ITEMS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_SAVED_RECIPE_ITEMS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_SAVED_RECIPE_ITEMS_SUCCESS: {
      return {
        ...state,
        isError: false,
        savedRecipeItems: action.payload,
      };
    }
    case GET_SAVED_RECIPE_ITEMS_ERROR: {
      return {
        ...state,
        isError: true,
      };
    }
    case ADD_USER_DATA_LOGIN: {
      return {
        ...state,
        isLogin: true,
        login_res: action.payload,
      };
    }
    case ADD_USER_DATA_LOGIN_FAIL: {
      return {
        ...state,
        isLogin: false,
      };
    }
    case ADD_USER_DATA_SIGNUP: {
      return {
        ...state,
        isLogin: false,
        isSignup: true,
        signUp_res: action.payload,
      };
    }
    case ADD_USER_DATA_SIGNUP_FAIL: {
      return {
        ...state,
        isLogin: false,
        isSignup: false,
      };
    }
    case ADD_LOGIN_STATUS: {
      return {
        ...state,
        isLogin: false,
      };
    }
  }

  return state;
};
