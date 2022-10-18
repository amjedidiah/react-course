import { takeLatest, put, call, all } from "typed-redux-saga";
import {
  fetchCategoriesFulfilled,
  fetchCategoriesRejected,
} from "redux/slices/category.slice";
import { getCategoriesAndDocuments } from "utils/firebase.utils";
import { StateError } from "redux/redux.types";

export function* fetchCategoriesAsync() {
  try {
    const categories = yield* call(getCategoriesAndDocuments, "categories");
    yield* put(fetchCategoriesFulfilled(categories));
  } catch (error) {
    yield* put(fetchCategoriesRejected(error as StateError));
  }
}

export function* onFetchCategories() {
  yield* takeLatest("category/fetchCategoriesStart", fetchCategoriesAsync);
}

export function* categorySaga() {
  yield* all([call(onFetchCategories)]);
}
