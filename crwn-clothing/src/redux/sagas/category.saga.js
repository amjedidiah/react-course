import { takeLatest, put, call, all } from "redux-saga/effects";
import { fetchCategoriesFulfilled, fetchCategoriesRejected } from "redux/actions/category.action";
import categoryActionTypes from "redux/types/category.type";
import { getCategoriesAndDocuments } from "utils/firebase.utils";

export function* fetchCategoriesAsync() {
    try {
        const categories = yield call(getCategoriesAndDocuments, "categories");
        yield put(fetchCategoriesFulfilled(categories))
    } catch(error) {
        yield put(fetchCategoriesRejected(error))
    }
}

export function* onFetchCategories() {
  yield takeLatest(
    categoryActionTypes.SET_CATEGORIES_PENDING,
    fetchCategoriesAsync
  );
}

export function* categorySaga() {
    yield all([call(onFetchCategories)])
}