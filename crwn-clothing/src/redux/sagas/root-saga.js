import { all, call } from "redux-saga/effects";
import { categorySaga } from "redux/sagas/category.saga";
import { userSaga } from "redux/sagas/user.saga";

export function* rootSaga() {
  yield all([call(categorySaga), call(userSaga)]);
}