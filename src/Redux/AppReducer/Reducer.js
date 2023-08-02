import * as types from "./ActionTypes";

const initialState = {
  SelectedProduct: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_SELECTED_PRODUCTS:
      return {
        ...state,
        SelectedProduct: { ...state, ...payload },
      };

    default:
      return state;
  }

  // ................................
};

export { reducer };
