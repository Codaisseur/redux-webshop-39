// src/store/reducer.js
import { combineReducers } from "redux";
import productReducer from "./products/reducer";
import cartReducer from "./cart/reducer";

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default reducer;
