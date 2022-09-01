import categoryActionTypes from "redux/types/category.type";
// import { getCategoriesAndDocuments } from "utils/firebase.utils";

/*
To be used together with redux-thunk && redux-promise-middleware
export const setCategories = () => ({
  type: categoryActionTypes.SET_CATEGORIES,
  payload: getCategoriesAndDocuments("categories"),
});
*/
export const fetchCategoriesStart = () => ({
  type: categoryActionTypes.SET_CATEGORIES_PENDING
})

export const fetchCategoriesFulfilled = (categories) => ({
  type: categoryActionTypes.SET_CATEGORIES_FULFILLED,
  payload: categories,
});

export const fetchCategoriesRejected = error => ({
  type: categoryActionTypes.SET_CATEGORIES_REJECTED,
  payload: error,
});
