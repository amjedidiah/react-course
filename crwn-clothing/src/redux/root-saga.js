import { all, call } from "redux-saga/effects";
import { categorySaga } from "redux/sagas/category.saga";

export function* rootSaga() {
  yield all([call(categorySaga)]);
}