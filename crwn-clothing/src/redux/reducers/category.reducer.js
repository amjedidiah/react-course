import categoryActionTypes from "redux/types/category.type";

const INITIAL_STATE = {
  categories: null,
};

const categoryReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case categoryActionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;