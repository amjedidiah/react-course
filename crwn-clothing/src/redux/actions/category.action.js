import categoryActionTypes from "redux/types/category.type";
import { getCategoriesAndDocuments } from "utils/firebase.utils";

export const setCategories = () => ({
  type: categoryActionTypes.SET_CATEGORIES,
  payload: getCategoriesAndDocuments("categories"),
});