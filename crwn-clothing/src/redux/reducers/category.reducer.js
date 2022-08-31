import categoryActionTypes from "redux/types/category.type";

const INITIAL_STATE = {
  categories: null,
  error: null,
  isLoading: false,
};

const categoryReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case categoryActionTypes.SET_CATEGORIES_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case categoryActionTypes.SET_CATEGORIES_FULFILLED:
      return {
        ...state,
        categories: payload,
        isLoading: false,
      };
    case categoryActionTypes.SET_CATEGORIES_REJECTED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default categoryReducer;
