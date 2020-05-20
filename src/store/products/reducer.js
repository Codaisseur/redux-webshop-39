const initialState = { list: [] };

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    // case to set fetched products
    case "PRODUCTS_FETCHED": // it means i got a list of products to save (on action.payload)
      // expecting action.payload = [{}, {}, {}, {}]
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
  }
}
