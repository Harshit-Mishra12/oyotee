import * as types from "./ActionTypes.js";

const getSelectedProduct = (payload) => {
  return {
    type: types.GET_SELECTED_PRODUCTS,
    payload,
  };
};

export const getSelectedProductDetail = (params) => async (dispatch) => {
  try {
    dispatch(getSelectedProduct(params));
  } catch (error) {}
};
