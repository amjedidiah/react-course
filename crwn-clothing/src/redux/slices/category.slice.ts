import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Category,
  CategoryMap,
  CategoryState,
  StateError,
  RootState,
} from "redux/redux.types";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: null,
    error: null,
    isLoading: false,
  } as CategoryState,
  reducers: {
    fetchCategoriesStart: (state) => {
      state.isLoading = true;
    },
    fetchCategoriesFulfilled: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
      state.isLoading = false;
    },
    fetchCategoriesRejected: (state, action: PayloadAction<StateError>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  fetchCategoriesStart,
  fetchCategoriesFulfilled,
  fetchCategoriesRejected,
} = categorySlice.actions;

export const selectCategories = (state: RootState) =>
  state.category.categories ?? [];

export const selectCategoryLoading = (state: RootState) =>
  state.category.isLoading;

export const selectCategoryMap = (state: RootState) =>
  (state.category.categories ?? []).reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items.map((item) => ({
      ...item,
      category: title.toLowerCase(),
    }));
    return acc;
  }, {} as CategoryMap);

export default categorySlice.reducer;
