import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: null,
    error: null,
    isLoading: false,
  },
  reducers: {
    fetchCategoriesStart: (state) => {
      state.isLoading = true;
    },
    fetchCategoriesFulfilled: (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    },
    fetchCategoriesRejected: (state, action) => {
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

export const selectCategories = (state) => state.category.categories ?? [];

export const selectCategoryLoading = (state) => state.category.isLoading;

export const selectCategoryMap = (state) =>
  (state.category.categories ?? []).reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items.map((item) => ({
      ...item,
      category: title.toLowerCase(),
    }));
    return acc;
  }, {});

export default categorySlice.reducer;
