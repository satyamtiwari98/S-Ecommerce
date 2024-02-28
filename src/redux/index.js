import { combineReducers } from "redux";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "./actions/types";

const initialState = {
  name: "Satyam Tiwari",
  email: "satyam@gmail.com",
  mobile: "99999999",
  products: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return { ...state };
    default:
      return state;
  }
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: null,
      };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "":
      return "";
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
});

// export default userReducer;
export default rootReducer;
