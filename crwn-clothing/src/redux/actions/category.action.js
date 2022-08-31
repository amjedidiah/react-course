import categoryActionTypes from "redux/types/category.type";

export const setCategories = (categories) => ({
  type: categoryActionTypes.SET_CATEGORIES,
  payload: categories,
});
