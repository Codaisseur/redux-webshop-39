import axios from "axios";
// 2 actions
// 1 simple action creator PRODUCTS_FETCHED
// 1 thunk action that will make the API call

// this action is created after the API call
export const productsFetched = (products) => {
  return {
    type: "PRODUCTS_FETCHED",
    payload: products, // [{}, {}, {}]
  };
};

export const fetchProducts = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    );
    dispatch(productsFetched(response.data));
  } catch (error) {
    console.log(error);
  }
};

// const fetchProductsOld = async () => {
//   const response = await axios.get(
//     "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
//   );
//   console.log("products", response.data);
//   setProducts(response.data);
// };

// dispatch(fetchProducts())
