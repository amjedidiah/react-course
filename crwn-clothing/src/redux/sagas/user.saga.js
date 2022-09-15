import { put, call, all, takeLatest } from "redux-saga/effects";
import {
  authenticateUserRejected,
  authenticateUserFulfilled,
  logoutFulfilled,
  logoutRejected,
} from "redux/actions/user.action";
import userActionTypes from "redux/types/user.type";
import {
  createAuthUserWithEmailAndPassword,
  createUserFromAuth,
  getCurrentUser,
  signInAuthWithEmailAndPassword,
  signOutAuth,
} from "utils/firebase.utils";

export function* authenticateUser(user) {
  if (user) {
    yield call(createUserFromAuth, user);
  }
  yield put(authenticateUserFulfilled(user));
}

export function* authenticateUserAsync() {
  try {
    const user = yield call(getCurrentUser);
    yield call(authenticateUser, user);
  } catch (error) {
    yield put(authenticateUserRejected(error.code));
  }
}

export function* emailRegister({ payload: { email, password, displayName } }) {
  try {
    let { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    yield call(authenticateUser, { ...user, displayName });
  } catch (err) {
    yield put(authenticateUserRejected(err.code));
  }
}

export function* emailLogin({ payload: { email, password } }) {
  try {
    const user = yield call(signInAuthWithEmailAndPassword, email, password);
    yield call(authenticateUser, user);
  } catch (err) {
    yield put(authenticateUserRejected(err.code));
  }
}

export function* alertAuthenticateUserRejected({ payload }) {
  switch (payload) {
    case "auth/user-not-found": {
      yield alert("User not found");
      break;
    }
    case "auth/wrong-password": {
      yield alert("Wrong password");
      break;
    }
    case "auth/email-already-in-use": {
      yield alert("Email already in use");
      break;
    }
    default:
      yield alert("Something went wrong");
  }
}

export function* logout() {
  try {
    yield call(signOutAuth);
    yield put(logoutFulfilled());
  } catch (err) {
    yield put(logoutRejected(err.code));
  }
}

export function* onAuthenticateUserRejected() {
  yield takeLatest(
    userActionTypes.AUTHENTICATE_USER_REJECTED,
    alertAuthenticateUserRejected
  );
}

export function* onEmailLogin() {
  yield takeLatest(userActionTypes.EMAIL_LOGIN_PENDING, emailLogin);
}

export function* onAuthenticateUser() {
  yield takeLatest(
    userActionTypes.AUTHENTICATE_USER_PENDING,
    authenticateUserAsync
  );
}

export function* onEmailRegister() {
  yield takeLatest(userActionTypes.EMAIL_REGISTER_PENDING, emailRegister);
}

export function* onLogout() {
  yield takeLatest(userActionTypes.LOGOUT_PENDING, logout);
}

export function* userSaga() {
  yield all([
    call(onEmailLogin),
    call(onEmailRegister),
    call(onAuthenticateUser),
    call(onAuthenticateUserRejected),
    call(onLogout),
  ]);
}
