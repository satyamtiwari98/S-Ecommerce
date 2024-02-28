// actions/productActions.js

import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "./types";

export const fetchProducts = () => (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error });
    });
};
