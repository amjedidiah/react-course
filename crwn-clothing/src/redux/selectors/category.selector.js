import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.category;

const selectCategories = createSelector(
  [selectCategoryReducer],
  (category) => category.categories ?? []
);

export const selectCategoryMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items.map((item) => ({
        ...item,
        category: title.toLowerCase(),
      }));
      return acc;
    }, {})
);

export const selectCategoryLoading = createSelector(
  [selectCategoryReducer],
  (category) => category.isLoading
);
