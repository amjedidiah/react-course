import { all, call } from "typed-redux-saga/macro";
import { categorySaga } from "redux/sagas/category.saga";
import { userSaga } from "redux/sagas/user.saga";

export function* rootSaga() {
  yield* all([call(categorySaga), call(userSaga)]);
}
